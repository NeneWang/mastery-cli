
const StorableReport = require('./StorableReport');
const Functions = require('./functions');

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

        if(DEBUG) console.log(weekdayTemplate, commonTemplate);

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

    runReport(reportPrompt) {

        const getFieldFromType = (reportPromptGroup, type) => {
            // Returns the field from the type.
            return Object.values(reportPromptGroup).filter(field => field?.TYPE??"" === type);
        }

        // Displays reports, also populates the report from it's previous answers.

        // Go for each group. Then filter by CHECKBOX, then BLOCK then NUMBER then TEXT
        // Also check if the field had been asnwered before (stored in the report and complete accordingly)
        for(const group_key in reportPrompt) {
            // Go for each field in the group.
            console.log("running using group: ", group_key);

            // RUN for CHEBOXES first.
            const checkboxFields = getFieldFromType(reportPrompt[group_key], "CHECKBOX")
            console.log("checkboxFields", checkboxFields);

            // RUN for BLOCKS second.
            const blockFields = getFieldFromType(reportPrompt[group_key], "BLOCK");
            console.log("blockFields", blockFields);

            // RUN for NUMBER third.
            const numberFields = getFieldFromType(reportPrompt[group_key], "NUMBER");
            console.log("numberFields", numberFields);


        }

        // based on the answers populate the reportAnswers.

        // Once iterated, store the report answers
        this.reportAnswers

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
