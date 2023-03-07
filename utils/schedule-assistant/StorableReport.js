const { JsonDB, Config } = require("node-json-db");

class StorableReport {
  constructor() {
    this.db = new JsonDB(new Config("report", true, false, "/"));
    this.report = this.getReport();
  }

  getDate(){
    return this.report.date;
  }

  getReport() {
    try {
      return this.db.getData("/");
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
  }
}


module.exports = StorableReport;