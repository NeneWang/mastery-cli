class StoneGameII {
	solve(piles) {
	// Your code here

	}
}


module.exports = { Problem: StoneGameII };Winner };: SmallestSufficientTeams };ferentHatsToEachOther };ts };p };(val) {
        
	}

    /**
     * @return {void}
     */
    pop () {
        
	}

    /**
     * @param {Array}
     * @return {number}
     */
    top () {
       
	}

    /**
     * @return {number}
     */
    getMin () {
       
	}
}


module.exports = { Problem: MinStack };
 node;
        }
        this.size++;
        return this.size;
    };
    this.popRight = function () {
        if (this.size == 0) return null;
        const removedNode = this.right;
        this.right = this.right.prev;
        if (this.right) this.right.next = null;
        this.size--;
        return removedNode;
    };
    this.pushLeft = function (value) {
        const node = new Node(value);
        if (this.size == 0) {
            this.left = node;
            this.right = node;
        } else {
            this.left.prev = node;
            node.next = this.left;
            this.left = node;
        }
        this.size++;
        return this.size;
    };
    this.popLeft = function () {
        if (this.size == 0) return null;
        const removedNode = this.left;
        this.left = this.left.next;
        if (this.left) this.left.prev = null;
        this.size--;
        return removedNode;
    };
}

class MaxSlidingWindow {
	solve(nums, k) {
	// Your code here

	}
}


module.exports = { Problem: MaxSlidingWindow };
