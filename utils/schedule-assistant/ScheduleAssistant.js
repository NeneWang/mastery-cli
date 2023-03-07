
const StorableReport = require('./StorableReport');
const Functions = require('./functions');

const DEBUG = false;
class ScheduleAssistant {
    // Creates the mock prompts and stores that.

    constructor() {

        // Loads the schedule-settings.json
        this.scheduleSettings = require('./data/schedule-settings.json');
        this.report = new StorableReport();
        this.report = this.checkIfNewReportRequired();
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

    promptGenerator(report) {
        // Generates the prompts for the report based on the report object.


    }

    checkIfNewReportRequired() {
        // Checks if the report is from yesterday, if so, uploads it and creates a new one.
        if (this.report.getDate() !== new Date().getDay()) {
            this.uploadReport();
            
        }
        return this.createReportPrompt()

    }

    async uploadReport() {
        // Uploads the report to the server
        console.log("Uploading report...", this.report);
    }


}



module.exports = ScheduleAssistant;
