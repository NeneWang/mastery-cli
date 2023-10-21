class AddBinary {
    solve(a, b) {
        let x = BigInt("0b" + a);
        let y = BigInt("0b" + b);
        let zero = BigInt(0);
        let carry, answer;

        while (y !== zero) {
            answer = x ^ y;
            carry = (x & y) << BigInt(1);
            x = answer;
            y = carry;
        }

        return x.toString(2);
    }
}

module.exports = { Problem: AddBinary };
