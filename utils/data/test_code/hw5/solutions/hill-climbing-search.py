from functions import reconstructPath, getNodesNamesAsList, build_test_tree


def hill_climbing_search(tree, start, goal):
    queue = [start]
    count_searches = 0
    exploration_path = []
    queue_snapshot = []
    visited = set()
    cameFrom = {start: None}
    current = start
    did_find_goal = False
    usable_neighbors_count = 1
    

    while current != goal and usable_neighbors_count > 0:
        count_searches += 1

        if current in visited:
            continue

        visited.add(current)
        exploration_path.append(current.name)
        queue_snapshot.append(getNodesNamesAsList(queue))
        print("Current: " + str(current), "len(queue): " + str(len(queue)))

        if current.name == goal.name:
            print("Found goal!", goal.name)
            did_find_goal = True
            break
        
        bestNext = None
        bestHeuristic = 1000000
        usable_neighbors_count = 0

        for neighbor in current.neighbors:
            if neighbor not in visited:
                usable_neighbors_count += 1
                heuristic = current.neighbors[neighbor]
                if heuristic < bestHeuristic:
                    print("+ Found better neighbor: " + str(neighbor) + " with heuristic " + str(heuristic) + " from " + str(current))
                    bestHeuristic = heuristic
                    bestNext = neighbor

        if bestNext is not None:
            print("Choosing to travel to " + str(bestNext) + " with heuristic " + str(bestHeuristic) + " from " + str(current))
            queue.append(bestNext)
            cameFrom[bestNext] = current
        else:
            print("No usable neighbors @" + str(current) + ", neighbors are: " )
            print(tree)

        current = bestNext

    return {
        "count_searches": count_searches,
        "exploration_path": exploration_path,
        "queue_snapshot": queue_snapshot,
        "goal_found": did_find_goal,
    }




tree_data = build_test_tree()
print(hill_climbing_search(tree_data["tree"], tree_data["start"], tree_data["goal"]))



