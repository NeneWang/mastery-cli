const { JsonDB, Config } = require("node-json-db");
const Functions = require("./functions");

const DEBUG = false;


class StorableReport {
    constructor() {
        this.db = new JsonDB(new Config("report", true, false, "/"));
        this.getReport().then(reportData => {
            this.report = reportData;
        });
    }

    getDate() {
        // console.log("this.report", this.report);
        return this.report?.date;
    }

    fixCheckAnswers(listOfChekBoxesKeys) {
        // Change the answer of those keys that are in listOfChekBoxesKeys wheres are otehr than 1 or 0 to 0
        for (const key of listOfChekBoxesKeys) {
            const answer = this.getAnswerFor(key);
            if (answer !== 1 && answer !== 0) {
                this.report[key] = 0;
            }
        }
        this.saveReport();
    }

    addAnswers(answers) {
        // A dict will be passsed in you want to merge this with the input.
        const thisanswers = this.report ?? {};
        this.report = { ...thisanswers, ...answers, };
        this.saveReport();
    }

    getAnswerFor(key) {
        console.log("this.report", key, this.report[key]);
        return this.report[key];
    }

    cleanReport() {
        this.report = {};
        this.report.date = new Functions().getCurrentDate();
    }

    async getReport() {
        try {
            const data = await this.db.getData("/");
            if (DEBUG) console.log("data", data);
            this.report = data;
            return data;
        } catch (error) {
            console.error(error);
            return {};
        }
    }

    saveReport() {
        try {
            this.db.push("/", this.report);
        } catch (error) {
            console.error(error);
        }
    }

    setReport(report) {
        this.report = report;
        this.saveReport();
    }
}


module.exports = StorableReport;