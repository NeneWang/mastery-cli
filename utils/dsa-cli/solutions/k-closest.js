class KClosest {

    squaredDistance = ([x, y]) => x ** 2 + y ** 2;

    kClosest = function (points, k) {
        // Sort the array with a custom lambda comparator function
        points.sort((a, b) => squaredDistance(a) - squaredDistance(b));

        // Return the first k elements of the sorted array
        return points.slice(0, k);
    };

    solve() {
        console.log("Hello World!");
    }
}


module.exports = { Problem: KClosest };