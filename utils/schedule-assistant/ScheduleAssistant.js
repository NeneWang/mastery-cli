
const StorableReport = require('./StorableReport');
const Functions = require('./functions');
const { Scale } = require('enquirer');


const DEBUG = false;
class ScheduleAssistant {
    // Creates the mock prompts and stores that.

    constructor() {

        // Loads the schedule-settings.json
        this.scheduleSettings = require('./data/schedule-settings.json');
        this.reportAnswers = new StorableReport();
        this.updateReportAnswer();
        this.reportPrompt = this.createReportPrompt();

    }

    /**
     * Creates the report prompt for that day if weekday not specified
     * @param {string} weekday e.g. Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday
     * @returns Json with the structure of the dates.
     */
    createReportPrompt({ weekday = "" } = {}) {
        // Creates a report based on the schedule-settings.json and the current weekday
        let WEEKDAYNAME = "";
        if (weekday === "") {
            const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
            const today = new Date();
            const weekday = today.getDay();
            WEEKDAYNAME = weekdayNames[weekday].toUpperCase();
        } {
            WEEKDAYNAME = weekday.toUpperCase();
        }

        // Gets the weekday json and the common json.
        const weekdayTemplate = this.scheduleSettings?.[WEEKDAYNAME] ?? {};
        const commonTemplate = this.scheduleSettings?.COMMON ?? {};

        if (DEBUG) console.log(weekdayTemplate, commonTemplate);

        // Adds the current common fields and aggregates them in the same group of the weekday. 
        const aggregatedJson = this.aggregateJsons(commonTemplate, weekdayTemplate);

        // Add the current date.
        aggregatedJson.date = new Functions().getCurrentDate();
        return aggregatedJson;
    }

    aggregateJsons(commonTemplate, weekdayTemplate) {
        // Aggregates the common and the weekday jsons into one json.
        const aggregatedJson = {};
        for (const key in commonTemplate?.fields) {

            aggregatedJson[key] = { ...commonTemplate?.fields?.[key], ...weekdayTemplate?.fields?.[key] };
        }
        return aggregatedJson;
    }

    async createRunablePrompts(reportPrompt) {

        const getFieldFromType = (reportPromptGroup, type) => {
            // Add the key into the properties of themselves.
            const modReportPromptGroup = Object.keys(reportPromptGroup).map(key => {

                const fields = reportPromptGroup[key];
                // Skip if fields is a string (Like on descriptions)
                if (typeof fields === "string") {
                    // console.log("skipping", key, fields, "because it's a string");
                    return fields
                };

                fields.key = key;

                return fields;
            });

            // Returns the field from the type.
            const filtered = modReportPromptGroup.filter(field => field?.TYPE ?? "" === type);
            return filtered;
        }

        // Displays reports, also populates the report from it's previous answers.

        // Go for each group. Then filter by CHECKBOX, then BLOCK then NUMBER then TEXT
        // Also check if the field had been asnwered before (stored in the report and complete accordingly)
        const prompts = [];
        await this.reportAnswers.getReport()
        for (const group_key in reportPrompt) {
            // Go for each field in the group.
            // console.log("running using group: ", group_key);

            // RUN for CHEBOXES first.
            const checkboxFields = getFieldFromType(reportPrompt[group_key], "CHECKBOX")
            // console.log("checkboxFields", checkboxFields);
            // console.log("checkbox values", Object.values(checkboxFields));
            if (checkboxFields?.length ?? 0 > 0) {
                const checkBoxes = new Scale({
                    name: 'checkboxes',
                    message: `${group_key}`,
                    scale: [
                        { name: 0, message: 'False', value: false },
                        { name: 1, message: 'True', value: true },
                    ],
                    choices: Object.values(checkboxFields).map(field => {
                        return {
                            name: field?.key,
                            message: field?.key,
                            initial: this.reportAnswers.getAnswerFor(field?.key) ?? 0,
                            hint: field?.DESCRIPTION ?? ""
                        }
                    })
                });
                prompts.push(checkBoxes);


            }


            // RUN for BLOCKS second.
            const blockFields = getFieldFromType(reportPrompt[group_key], "BLOCK");
            // console.log("blockFields", blockFields);

            // RUN for NUMBER third.
            const numberFields = getFieldFromType(reportPrompt[group_key], "NUMBER");
            // console.log("numberFields", numberFields);


        }

        // based on the answers populate the reportAnswers.



        // Once iterated, store the report answers
        return prompts;

    }

    async runReports(reportPrompt) {

        const prompts = await this.createRunablePrompts(reportPrompt);
        // console.log(prompts);
        for (const prompt of prompts) {
            const answers = await prompt.run();
            // console.log("answers", answers);
            // Save the answers 
            this.reportAnswers.addAnswers(answers);
            // console.log("Report answers", this.reportAnswers.report);
        }
        console.log("reportAnswers", this.reportAnswers);
    }

    updateReportAnswer() {
        // Checks if the report is from yesterday, if so, uploads it and creates a new one.
        if (this.reportAnswers.getDate() !== new Date().getDay()) {
            this.uploadReport();
            // Creates new reportPrompt
            // Creates new report answers
            this.reportAnswers.cleanReport();

        }

    }

    async uploadReport() {
        // Uploads the report to the server
        console.log("Uploading report...", this.reportAnswers);

    }


}



module.exports = ScheduleAssistant;
