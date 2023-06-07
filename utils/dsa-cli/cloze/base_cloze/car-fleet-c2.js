class CarFleet {


    /**
     * https://leetcode.com/problems/car-fleet
     * Time O(N * log(N)) | Space O(N)
     * @param {number} target
     * @param {number[]} position
     * @param {number[]} speed
     * @return {number}
     */
    solve(target, position, speed) {


        var getCoordinates = (target, position, speed) => position
            .map((_position, index) => [_position, speed[index]])         /* Time O(N)          | Space O(N) */
            .sort(([aPosition], [bPosition]) => aPosition - bPosition)  /* Time O(N * log(N)) | HeapSort Space 0(1) | QuickSort Space O(log(N)) */
            .map(([_position, _speed]) => (target - _position) / _speed); /* Time O(N)          | Space O(N) */

        var searchAscending = (coordinates, stack = []) => {
            for (const coordinate of coordinates) {                         /* Time O(N + N) */
                shrink(coordinate, stack);                                  /* Time O(N + N) */
                stack.push(coordinate);                                     /* Space O(N) */
            }

            return stack.length;
        }

        const shrink = (coordinate, stack) => {
            // TODO Complete Search Ascending and add the coordinate and shrink while the previous coordinate is less than the current coordinate
        }


        const coordinates = getCoordinates(target, position, speed);    /* Time O(N * log(N)) | Space O(N) */

        return searchAscending(coordinates);
    }




}


module.exports = { Problem: CarFleet };