/**
 * Testing the Quizzler such as adding different 
 */

const utils = require('../utils/utils');
const { TermStorage } = require('../utils/structures');


describe("Quizzler Terminology Tests", () => {

    function setupQuizer() {

        const terms = [
            {
                term: "Sample Term", prompt: "Do X",
                description: "some Descirpiton", attachment: "./img/2023-02-07-10-29-38.png"
            }
        ]

        let decks = new TermStorage(terms, "Academic Terms");
        const mQuizer = new utils.MathQuizer([], [], decks.listTerms);;
        return mQuizer

    }

    it("Check that images are added properly", () => {
        /**
         * There is no actual way other than running a test with an image example
         */
        const mQuizer = setupQuizer();
        mQuizer.ask_term_question();

    });
});



