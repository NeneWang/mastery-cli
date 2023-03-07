const { JsonDB, Config } = require("node-json-db");


const DEBUG = false;


class StorableReport {
    constructor() {
        this.db = new JsonDB(new Config("report", true, false, "/"));
        // this.report = this.getReport();
    }

    getDate() {
        // console.log("this.report", this.report);
        return this.report?.date;
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