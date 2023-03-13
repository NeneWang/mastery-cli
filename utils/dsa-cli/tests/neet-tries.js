
const assert = require('assert');
const ProblemTests = require('./problem-test');


class DesignAddAndSearchWordsDataStructure extends ProblemTests{

    constructor(Problem){
        super(Problem);
        this.tests.push(() => this.test1());
        this.tests.push(() => this.test2());

    }


    test1(){
        const wordDictionary = new this.Problem();
        this.current_test_name = '[bad, dad, mad] | [pad, bad, .ad, b..]';


        wordDictionary.addWord("bad");
        wordDictionary.addWord("dad");
        wordDictionary.addWord("mad");
        assert(wordDictionary.search("pad") == false);
        assert(wordDictionary.search("bad") == true);
        assert(wordDictionary.search(".ad") == true);
        assert(wordDictionary.search("b..") == true);
    }

    test2(){
        const wordDictionary = new this.Problem();
        this.current_test_name = '[a, a] | [., a, aa, a, .a, a.]';

        wordDictionary.addWord("a");
        wordDictionary.addWord("a");
        assert(wordDictionary.search(".") == true);
        assert(wordDictionary.search("a") == true);
        assert(wordDictionary.search("aa") == false);
        assert(wordDictionary.search("a") == true);
        assert(wordDictionary.search(".a") == false);
        assert(wordDictionary.search("a.") == false);
    }

    
}

const TEST_DICTIONARY = {
    'design-add-and-search-words-data-structure': DesignAddAndSearchWordsDataStructure,

}

module.exports = TEST_DICTIONARY;




