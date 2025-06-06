class FeatureExtraction {
    constructor(feature_name, feature_key = 'feat', style = require('terminal-charter').bg('white')) {
        this.feature_name = feature_name;
        this.feature_key = feature_key;
        this.style = style;
    }
}

module.exports = { FeatureExtraction };
