
/**
 * DP - Bottom Up
 * Matrix - Tabulation
 * Time O(N * M) | Space O(M)
 * https://leetcode.com/problems/edit-distance/
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
var minDistance = (word1, word2) => {
    const tabu = initTabu(word2);/* Time O(M) | Space O(M) */

    search(word1, word2, tabu);  /* Time O(N * M) | Space O(M) */

    return tabu[word2.length];
}

var initTabu = (word2) => {
    const tabu = new Array((word2.length + 1)).fill(0);/* Time O(M) | Space O(M) */

    for (let j = 1; (j <= word2.length); j++) {        /* Time O(M) */
        tabu[j] = j;                                   /*           | Space O(M) */
    }

    return tabu;
}

var search = (word1, word2, tabu) => {
    for (let i = 1; (i <= word1.length); i++) {/* Time O(N) */
        tabu[word2.length] = update(word1, word2, i, tabu);/* Time O(M) | Space (M) */
    }
}

const update = (word1, word2, i, tabu) => {
    let temp = i;

    for (let j = 1; (j <= word2.length); ++j) {/* Time O(M  */
        const isEqual = (word1[(i - 1)] === word2[(j - 1)])
        const cur = isEqual
            ? tabu[(j - 1)]
            : (Math.min(tabu[(j - 1)], tabu[j], temp) + 1);

        tabu[(j - 1)] = temp;                      /* Space (M) */
        temp = cur;
    }

    return temp;
}


class MinDistance {
    solve(word1, word2) {
        return minDistance(word1, word2);
    }
}

module.exports = { Problem: MinDistance };