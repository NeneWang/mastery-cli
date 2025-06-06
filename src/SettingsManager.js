const fs = require('fs');
const { getDirAbsoluteUri } = require('./utils_functions');
const axios = require('axios');
const { APIDICT } = require('./constants');


class SettingsManager {
    constructor({
    } = {}) {
        this.settings_path = getDirAbsoluteUri(`./settings.json`);
        this._settings = require(this.settings_path);
    }

    saveSettings(newSettings, { overwrite = true } = {}) {
        this._settings = newSettings;
        fs.writeFileSync(this.settings_path, JSON.stringify(newSettings, null, 2));

        if (overwrite) {
            this.overwriteRemoteSettings();
        }
    }

    getSettings() {
        return this._settings;
    }

    overwriteRemoteSettings() {
        /**
         * 
            axios({
                method: 'post',
                url: this.uploadCodeFileUrl,
                data: formData,
                headers: {
                    ...formData.getHeaders(), // Include necessary headers for form data
                    'accept': 'application/json',
                },
            })
         */
        const user_account_id = this._settings.user_account_id;
        // If no account id then tha
        const url = `${APIDICT.DEPLOYED_MAIDAPI}/src/${user_account_id}/settings`;
        axios({
            method: 'post',
            url: url,
            data: this._settings,
            headers: {
                'accept': 'application/json',
            },
        }).then((response) => {
            console.log("Settings overwritten");
        })

    }

}


module.exports = SettingsManager;





