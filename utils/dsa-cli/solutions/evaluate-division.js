class CalcEquation {
    solve(equations, values, queries) {
      const gidWeight = new Map();
  
      // Step 1: Build the union groups
      for (let i = 0; i < equations.length; i++) {
        const [dividend, divisor] = equations[i];
        const quotient = values[i];
  
        this.union(gidWeight, dividend, divisor, quotient);
      }
  
      // Step 2: Run the evaluation
      const results = [];
      for (let i = 0; i < queries.length; i++) {
        const [dividend, divisor] = queries[i];
  
        if (!gidWeight.has(dividend) || !gidWeight.has(divisor)) {
          // Case 1: At least one variable did not appear before
          results[i] = -1.0;
        } else {
          const dividendEntry = this.find(gidWeight, dividend);
          const divisorEntry = this.find(gidWeight, divisor);
  
          const dividendGid = dividendEntry[0];
          const divisorGid = divisorEntry[0];
          const dividendWeight = dividendEntry[1];
          const divisorWeight = divisorEntry[1];
  
          if (dividendGid !== divisorGid) {
            // Case 2: The variables do not belong to the same chain/group
            results[i] = -1.0;
          } else {
            // Case 3: There is a chain/path between the variables
            results[i] = dividendWeight / divisorWeight;
          }
        }
      }
  
      return results;
    }
  
    find(gidWeight, nodeId) {
      if (!gidWeight.has(nodeId)) {
        gidWeight.set(nodeId, [nodeId, 1.0]);
      }
  
      const entry = gidWeight.get(nodeId);
      // Found inconsistency, trigger chain update
      if (entry[0] !== nodeId) {
        const newEntry = this.find(gidWeight, entry[0]);
        gidWeight.set(nodeId, [newEntry[0], entry[1] * newEntry[1]]);
      }
  
      return gidWeight.get(nodeId);
    }
  
    union(gidWeight, dividend, divisor, value) {
      const dividendEntry = this.find(gidWeight, dividend);
      const divisorEntry = this.find(gidWeight, divisor);
  
      const dividendGid = dividendEntry[0];
      const divisorGid = divisorEntry[0];
      const dividendWeight = dividendEntry[1];
      const divisorWeight = divisorEntry[1];
  
      // Merge the two groups together
      // by attaching the dividend group to the one of divisor
      if (dividendGid !== divisorGid) {
        gidWeight.set(dividendGid, [divisorGid, divisorWeight * value / dividendWeight]);
      }
    }
  }
  
  module.exports = { Problem: CalcEquation };
  