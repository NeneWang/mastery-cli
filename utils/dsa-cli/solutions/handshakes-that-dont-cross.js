class HandshaksesThatDontCross {
    solve(numPeople) {
        const m = 1000000007;
        const n = Math.floor(numPeople / 2);
        const inv = new Array(n + 2);
        inv[1] = 1;
        
        for (let i = 2; i < n + 2; i++) {
            const k = Math.floor(m / i);
            const r = m % i;
            inv[i] = m - (k * inv[r]) % m;
        }
        
        let C = 1;
        for (let i = 0; i < n; i++) {
            C = (2 * (2 * i + 1) * inv[i + 2] * C) % m;
        }
        
        return C;
    }
}

module.exports = { Problem: HandshaksesThatDontCross };