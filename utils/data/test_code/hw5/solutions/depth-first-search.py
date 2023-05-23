from functions import reconstructPath, getNodesNamesAsList, build_test_tree

def depth_first_search(tree, start, goal):
    queue = []
    queue.append(start)
    count_searches = 0
    exploration_path = []
    queue_snapshot = []

    visited = set()
    cameFrom = {}
    cameFrom[start] = None

    while len(queue) > 0:
        current = queue.pop()

        if(current in visited):
            continue

        visited.add(current)

        count_searches += 1
        exploration_path.append(current.name)
        queue_snapshot.append(getNodesNamesAsList(queue))
        print("Current: " + str(current), "len(queue): " + str(len(queue)))
        if current.name == goal.name:
            print("Found goal!", goal.name)
            break
        
        try:
            for neighbor in current.neighbors:
                if neighbor not in visited:
                    
                    queue.append(neighbor)
                    cameFrom[neighbor] = current
        except:
            print("No neighbors @" + str(current)+ "Whereas neighbors are:" )
            print(tree)
            pass

    return {
        "count_searches": count_searches,
            "exploration_path": exploration_path,
             "queue_snapshot": queue_snapshot,
            "cost": len(reconstructPath(cameFrom, start, goal)),
            "path_found": getNodesNamesAsList(reconstructPath(cameFrom, start, goal)),
             "count_searches": count_searches }




tree_data = build_test_tree()
print(depth_first_search(tree_data["tree"], tree_data["start"], tree_data["goal"]))



