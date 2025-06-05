
// Extension Model with basic structure and methods

class ExtensionModel {
    constructor(name, version, description, author, license="MIT", {masteryManager} = {}) {
        this.name = name;
        this.version = version;
        this.description = description;
        this.author = author;
        this.license = license;
        this.masteryManager = masteryManager || null; // Optional mastery manager for handling mastery-related tasks
    }
    
    getDetails() {
        return `Name: ${this.name}, Version: ${this.version}, Description: ${this.description}, Author: ${this.author}, License: ${this.license}`;
    }

    getCommands(){
		return {
			default: new Command("No commands", 'default'),
		}
    }


    getHandles(){
        return {
            default: () => {
                console.log("No handles defined for this extension.");
            }
        };
    }
}

module.exports = {
    ExtensionModel,
};

