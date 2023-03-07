
const StorableReport = require('./StorableReport');

class ScheduleAssistant {
    // Creates the mock prompts and stores that.

    constructor() {

        // Loads the schedule-settings.json
        this.scheduleSettings = required('./data/schedule-settings.json');
        this.report = StorableReport();
        this.report = this.checkIfNewReportRequired();
    }

    createReport() {
        // Creates a report based on the schedule-settings.json and the current weekday
        const weekdayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = new Date();
        const weekday = today.getDay();
        const WEEKDAYNAME = weekdayNames[weekday].toUpperCase();
        const weekdayTemplate = this.scheduleSettings?.WEEKDAYNAME??{};
        const commonTemplate = this.scheduleSettings?.COMMON??{};

        // Adds the current common fields and aggregates them in the same group of the weekday. 
        const aggregatedJson = this.aggregateJsons(commonTemplate, weekdayTemplate);

        return aggregatedJson;


    }

    aggregateJsons(commonTemplate, weekdayTemplate) {
        // Aggregates the common and the weekday jsons into one json.
        const aggregatedJson = {};
        for (const key in commonTemplate) {
           aggregatedJson[key] = {...commonTemplate?.[key], ...weekdayTemplate?.[key]};
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
        return this.createReport()

    }

    async uploadReport() {
        // Uploads the report to the server
        console.log("Uploading report...", this.report);
    }


}