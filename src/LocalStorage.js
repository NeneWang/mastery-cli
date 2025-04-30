/**
 * Used for storing user data in a local storage.
 */

class LocalStorage {
    constructor(name="local_storage", base_dir="user_data/temp/") {
        /**
         * Structure of date based stats:
         * 
         * {
         *   "2023-10-01": { algo: {value: 1}, math: {value: 2} },
         *   "2023-10-04": { algo: {value: 3}, math: {value: 1} },
         * }
         */


        this.name = name;
        this.absolute_uri = getDirAbsoluteUri(`${base_dir}${this.name}`);
        this.date_based_stats = {};
    }


    async load(){
        try {
            const { JsonDB, Config } = await import('node-json-db');
            const db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
            this.date_based_stats = await db.getData('/date_based_stats');
            console.log(`Loaded ${this.name} | ${this.absolute_uri}`);
            return true;
        } catch {
            return false;
        }
    }

    async save(){
        const { JsonDB, Config } = await import('node-json-db');
        const db = new JsonDB(new Config(this.absolute_uri, true, false, '/'));
        db.push('/date_based_stats', this.date_based_stats);
    }

    cleanStorage() {
        this.date_based_stats = {};
    }

    addScore(term, score) {
        const date = new Date().toISOString().split('T')[0]; // YYYY-MM-DD format
        if (!this.date_based_stats[date]) {
            this.date_based_stats[date] = {};
        }
        if (!this.date_based_stats[date][term]) {
            this.date_based_stats[date][term] = { value: 0 };
        }
        this.date_based_stats[date][term].value += score;
    }


    getTodayScores(){
        /**
         * Returns as sum of each stat by their agregate score:
         * {
        *      algo: {value: 1},
         *     math: {value: 2},
         * }
         */
        const today = new Date().toISOString().split('T')[0];
        const todayScores = this.date_based_stats[today] || {};
        return todayScores;
    }

    getThisWeekScores() {
        /**
         * Returns as sum of each stat by their agregate score:
         * {
        *      algo: {value: 1},
         *     math: {value: 2},
         * }
         */
        const today = new Date();
        const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
        const weekStartString = weekStart.toISOString().split('T')[0];
        const weekEnd = new Date(today.setDate(today.getDate() - today.getDay() + 6));
        const weekEndString = weekEnd.toISOString().split('T')[0];

        const weekScores = {};
        for (const date in this.date_based_stats) {
            if (date >= weekStartString && date <= weekEndString) {
                for (const term in this.date_based_stats[date]) {
                    if (!weekScores[term]) {
                        weekScores[term] = { value: 0 };
                    }
                    weekScores[term].value += this.date_based_stats[date][term].value;
                }
            }
        }
    }



    



}



