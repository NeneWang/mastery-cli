class SuperEggDrop {
	solve(K, N) {
	// Your code here

	}
}


module.exports = { Problem: SuperEggDrop };orts = { Problem: MaximumNUmberOfEventsTHatCanBeAttentedII };s };osition };vels };nimumDifference };orts = { Problem: ConnectTree };ur code here

	}
}


module.exports = { Problem: IsSymmetric };) {
        return this.size() === 0
    }

}


class RottingOranges {


    /**
     * https://leetcode.com/problems/rotting-oranges/
     * Time O(ROWS * COLS) | Space O(ROWS * COLS)
     * @param {number[][]} grid
     * @return {number}
     */
    orangesRotting = function (grid) {
		
    };


    solve(grid) {
        return this.orangesRotting(grid);
    }
}


module.exports = { Problem: RottingOranges };
d, wordList) {
        return this.ladderLength(beingWord, endWord, wordList);
    }
}


module.exports = { Problem: WordLadder }; index + 2
			let leftChild, rightChild
			let swap = null

			if (leftChildIndex < length) {
				leftChild = this.heap[leftChildIndex]
				if (leftChild > element) {
					swap = leftChildIndex
				}
			}

			if (rightChildIndex < length) {
				rightChild = this.heap[rightChildIndex]
				if (
					(swap === null && rightChild > element) ||
					(swap !== null && rightChild > leftChild)
				) {
					swap = rightChildIndex
				}
			}

			if (swap === null) break
			this.swap(index, swap)
			index = swap
		}
	}

	front() {
		return this.heap[0]
	}

	size() {
		return this.heap.length
	}

	isEmpty() {
		return this.size() === 0
	}

}


class LastStoneWeight {
	/**
	 * https://leetcode.com/problems/last-stone-weight/
	 * Time O(N * log(N)) | Space O(N)
	 * @param {number[]} stones
	 * @return {number}
	 */
	lastStoneWeight = (stones) => {

	};



	solve(stones) {
		return this.lastStoneWeight(stones);
	}
}


module.exports = { Problem: LastStoneWeight };
   front() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() === 0
    }

}

class KthLargestElementInAnArray {
	solve(nums, k) {
	// Your code here

	}
}


module.exports = { Problem: KthLargestElementInAnArray };ment) {
        this.heap.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] >= this.heap[index]) break
            this.swap(parentIndex, index)
            index = parentIndex
        }
    }

    swap(index1, index2) {
        const temp = this.heap[index1]
        this.heap[index1] = this.heap[index2]
        this.heap[index2] = temp
    }

    dequeue() {
        const max = this.heap[0]
        const end = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = end
            this.sinkDown()
        }
        return max
    }

    sinkDown() {
        let index = 0
        const length = this.heap.length
        const element = this.heap[0]
        while (true) {
            const leftChildIndex = 2 * index + 1
            const rightChildIndex = 2 * index + 2
            let leftChild, rightChild
            let swap = null

            if (leftChildIndex < length) {
                leftChild = this.heap[leftChildIndex]
                if (leftChild > element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if (
                    (swap === null && rightChild > element) ||
                    (swap !== null && rightChild > leftChild)
                ) {
                    swap = rightChildIndex
                }
            }

            if (swap === null) break
            this.swap(index, swap)
            index = swap
        }
    }

    front() {
        return this.heap[0]
    }

    size() {
        return this.heap.length
    }

    isEmpty() {
        return this.size() === 0
    }

    top(){
        return this.heap[0]
    }


}


/** 
 * https://leetcode.com/problems/find-median-from-data-stream/
 * Your MedianFinder object will be instantiated and called as such:
 * var obj = new MedianFinder()
 * obj.addNum(num)
 * var param_2 = obj.findMedian()
 */
class MedianFinder {
    constructor() {
        this.maxHeap = new MaxPriorityQueue()
        this.minHeap = new MinPriorityQueue()
    }

    /* Time O(log(N)) | Space (N) */
    insertNum(num) {
    
	}

    addNum(num, heap = this.getHeap(num)) {
     
	}

    getHeap(num, { maxHeap, minHeap } = this) {
        
    }

    rebalance({ maxHeap, minHeap } = this) {
    }

    /* Time O(1) | Space (1) */
    findMedian({ maxHeap, minHeap } = this) {
    }

}


module.exports = { Problem: MedianFinder };