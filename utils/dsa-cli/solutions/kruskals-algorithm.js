class KruskalsAlgorithms {
    solve() {
        console.log("Hello World!");
    }
}

function kruskalsAlgorithm(edges) {
    const edgeList = [];
    for(let sourceIndex = 0; sourceIndex < edges.length; sourceIndex++){
        const source = edges[sourceIndex];
        for(let destIndex = 0; destIndex < source.length; destIndex++){
            const dest = source[destIndex];
            if(dest !== 0){
                edgeList.push([sourceIndex, destIndex, dest]);
            }
        }
    }
}


module.exports = { Problem: KruskalsAlgorithms };