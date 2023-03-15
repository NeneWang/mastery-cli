class Problem {

    /**
     * BFS
     * https://leetcode.com/problems/alien-dictionary/
     * @param {string[]} words
     * @return {string}
     */
    alienOrder = function (words) {



        var initGraph = () => ({
            graph: new Map(),
            frequencyMap: new Map(),
            queue: new Queue(),
            buffer: [],
        })

        var buildGraph = (words) => {
            const { graph, frequencyMap, queue, buffer } = initGraph();

            for (const word of words) {
                for (const char of word) {
                    frequencyMap.set(char, 0);
                    graph.set(char, []);
                }
            }

            return { graph, frequencyMap, queue, buffer };
        };

        var canBuildGraph = (words, graph, frequencyMap) => {
            for (let index = 0; (index < words.length - 1); index++) {
                const [word1, word2] = [words[index], words[(index + 1)]];
                const minLength = Math.min(word1.length, word2.length)

                const isWord1Longer = (word2.length < word1.length);
                const isPrefix = isWord1Longer && word1.startsWith(word2);

                if (isPrefix) return false;

                for (let j = 0; (j < minLength); j++) {
                    const [char1, char2] = [word1[j], word2[j]];

                    const isEqual = (char1 === char2);
                    if (isEqual) continue;

                    graph.get(char1).push(char2);
                    frequencyMap.set(char2, frequencyMap.get(char2) + 1);

                    break;
                }
            }

            return true;
        };

        const bfs = (queue, frequencyMap, graph, buffer) => {
            while (!queue.isEmpty()) {
                for (let level = (queue.size() - 1); (0 <= level); level--) {
                    checkNeighbors(queue, frequencyMap, graph, buffer)
                }
            }
        };

        var checkNeighbors = (queue, frequencyMap, graph, buffer) => {
            const char = queue.dequeue();

            buffer.push(char);

            for (const next of graph.get(char)) {
                const value = (frequencyMap.get(next) - 1);

                frequencyMap.set(next, value);

                const isEmpty = (frequencyMap.get(next) === 0);
                if (!isEmpty) continue;

                queue.enqueue(next);
            }
        }

        const queueSources = (queue, frequencyMap) => {
            for (const [key, value] of frequencyMap) {
                const isEmpty = (frequencyMap.get(key) === 0);
                if (!isEmpty) continue;

                queue.enqueue(key);
            }
        }

        const { graph, frequencyMap, queue, buffer } = buildGraph(words);

        if (!canBuildGraph(words, graph, frequencyMap)) return '';

        queueSources(queue, frequencyMap);
        bfs(queue, frequencyMap, graph, buffer);

        return (frequencyMap.size <= buffer.length)
            ? buffer.join('')
            : '';
    }

    solve(words) {
        return this.alienOrder(words);
    }
}


module.exports = { Problem };