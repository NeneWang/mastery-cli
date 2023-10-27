class HandshakesThatDontCross {
    constructor() {
        this.m = 1000000007;
    }
    mul(a, b) {
        return ((a % this.m) * (b % this.m)) % this.m;
    }
    
    

    solve(numPeople) {
        const n = Math.floor(numPeople / 2);
        const inv = new Array(n + 2);
        inv[1] = 1;
    
        for (let i = 2; i < n + 2; i++) {
            const k = Math.floor(this.m / i);
            const r = this.m % i;
            inv[i] = ((this.m - this.mul(k, inv[r])) % this.m + this.m) % this.m;
        }
    
        let C = 1;
        for (let i = 0; i < n; i++) {
            C = this.mul(this.mul(2 * (2 * i + 1), inv[i + 2]), C);
            C = C % this.m;
        }
    
        console.log("C => ", C);
    
        return C;
    }
    
}


module.exports = { Problem: HandshakesThatDontCross };