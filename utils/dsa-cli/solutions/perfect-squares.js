class PerfectSquares {
    isSquare(n) {
        const sq = Math.sqrt(n);
        return n === sq * sq;
    }

    solve(n) {
        while (n % 4 === 0)
            n /= 4;
        if (n % 8 === 7)
            return 4;

        if (this.isSquare(n))
            return 1;

        for (let i = 1; i * i <= n; ++i) {
            if (this.isSquare(n - i * i))
                return 2;
        }

        return 3;
    }
}

module.exports = { Problem: PerfectSquares };
