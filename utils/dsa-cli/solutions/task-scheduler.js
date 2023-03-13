
class MaxPriorityQueue {

    constructor() {
        this.heap = []
    }

    enqueue(element) {
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

}

class MinPriorityQueue {

    constructor() {
        this.heap = []
    }

    enqueue(element) {
        this.heap.push(element)
        this.bubbleUp()
    }

    bubbleUp() {
        let index = this.heap.length - 1
        while (index > 0) {
            const parentIndex = Math.floor((index - 1) / 2)
            if (this.heap[parentIndex] <= this.heap[index]) break
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
        const min = this.heap[0]
        const end = this.heap.pop()
        if (this.heap.length > 0) {
            this.heap[0] = end
            this.sinkDown()
        }
        return min
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
                if (leftChild < element) {
                    swap = leftChildIndex
                }
            }

            if (rightChildIndex < length) {
                rightChild = this.heap[rightChildIndex]
                if (
                    (swap === null && rightChild < element) ||
                    (swap !== null && rightChild < leftChild)
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

class Queue{
    
        constructor(){
            this.queue = []
        }
    
        enqueue(element){
            this.queue.push(element)
        }
    
        dequeue(){
            return this.queue.shift()
        }
    
        front(){
            return this.queue[0]
        }
    
        size(){
            return this.queue.length
        }
    
        isEmpty(){
            return this.size() === 0
        }
    
}


class TaskScheduler {

    /**
     * https://leetcode.com/problems/task-scheduler/
     * Time O(N * log(N)) | Space O(N)
     * @param {character[]} tasks
     * @param {number} n
     * @return {number}
     */
    leastInterval = function (tasks, n) {

        var getFrequencyMap = (tasks, frequencyMap = new Array(26).fill(0)) => {
            for (const task of tasks) {
                const index = task.charCodeAt(0) - 'A'.charCodeAt(0);

                frequencyMap[index]++;
            }

            return frequencyMap;
        }

        const getMaxHeap = (frequencyMap, maxHeap = new MaxPriorityQueue()) => {
            for (const frequency of frequencyMap) {
                const hasFrequency = 0 < frequency;
                if (hasFrequency) maxHeap.enqueue(frequency)
            }

            return maxHeap
        }

        const getMinimumCpuIntervals = (maxHeap, n, cpuIntervals = [0]) => {
            while (!maxHeap.isEmpty()) {
                const { iterations, coolingPeriodQueue } = execute(n, maxHeap, cpuIntervals)

                reQueueCoolingPeriod(coolingPeriodQueue, maxHeap)

                if (!maxHeap.isEmpty()) cpuIntervals[0] += iterations
            }

            return cpuIntervals[0]
        }

        const execute = (n, maxHeap, cpuIntervals, iterations = (n + 1), coolingPeriodQueue = new Queue()) => {
            while ((0 < iterations) && !maxHeap.isEmpty()) {
                const frequency = maxHeap.dequeue().element;

                const hasFrequency = 0 < (frequency - 1);
                if (hasFrequency) coolingPeriodQueue.enqueue(frequency - 1);

                cpuIntervals[0]++;
                iterations--;
            }

            return { iterations, coolingPeriodQueue };
        }

        const reQueueCoolingPeriod = (coolingPeriodQueue, maxHeap) => {
            while (!coolingPeriodQueue.isEmpty()) {
                maxHeap.enqueue(coolingPeriodQueue.dequeue())
            }
        }


        const frequencyMap = getFrequencyMap(tasks)
        const maxHeap = getMaxHeap(frequencyMap)

        return getMinimumCpuIntervals(maxHeap, n)
    }

    solve(tasks, n) {
        return this.leastInterval(tasks, n);
    }


}


module.exports = { Problem: TaskScheduler };