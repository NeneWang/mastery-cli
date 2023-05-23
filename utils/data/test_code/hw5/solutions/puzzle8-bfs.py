import copy
from p2_utils import Queue, node, printResults, is_position_valid

movements = [(1, 0), (0, -1), (-1, 0), (0, 1)] # Movements for the empty tile



def solve(start, goal, max_depth=100):
    queue = Queue()

    current_level = 0
    searches = 0
    root = node(None, start, current_level, goal)
    queue.push(root)

    while not queue.empty():
        min = queue.pop()
        searches += 1
        current_level = min.level

        if min.state == goal:
            printResults(min, max_depth, searches)
            return min
        
        if current_level > max_depth:
            printResults(min, max_depth, searches=searches)
            return min

        x, y = min.get_empty_tile_pos
        for i in range(4):
            new_x = x + movements[i][0]
            new_y = y + movements[i][1]
            if is_position_valid((new_x, new_y)):
                new_state = copy.deepcopy(min.state)

                # Swap the empty tile with the new position
                new_state[x][y], new_state[new_x][new_y] = new_state[new_x][new_y], new_state[x][y]
                new_node = node(min, new_state, current_level+1, goal)
                queue.push(new_node)
    
    printResults(None, max_depth, searches)

start = [ [ 1, 2, 3 ],
			[ 5, 6, 0 ],
			[ 7, 8, 4 ] ]


goal = [ [ 1, 2, 3 ],
		[ 5, 8, 6 ],
		[ 0, 7, 4 ] ]

solve(start, goal)

