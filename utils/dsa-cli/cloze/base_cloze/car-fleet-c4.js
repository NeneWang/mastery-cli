class CarFleet {


    /**
     * https://leetcode.com/problems/car-fleet
     * Time O(N * log(N)) | Space O(N)
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    solve2(target, position, speed) {

        var getCoordinates = (target, position, speed) => position
            .map((_position, index) => [_position, speed[index]])        /* Time O(N)          | Space O(N) */
            .sort(([aPosition], [bPosition]) => bPosition - aPosition) /* Time O(N * log(N)) | HeapSort Space 0(1) | QuickSort Space O(log(N)) */
            .map(([_position, _speed]) => (target - _position) / _speed);/* Time O(N)          | Space O(N) */

        var searchDescending = (coordinates, previous = 0, fleets = 0) => {
            for (const coordinate of coordinates) {                        /* Time O(N) */
                const isPreviousLess = previous < coordinate
                if (!isPreviousLess) continue

                previous = coordinate
                fleets++
            }

            return fleets;
        }
        const coordinates = getCoordinates(target, position, speed);   /* Time O(N * log(N)) | Space O(N) */

        return searchDescending(coordinates);                          /* Time O(N) */
    };


}


module.exports = { Problem: CarFleet };