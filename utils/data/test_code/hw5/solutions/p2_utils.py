

from heapq import heappush, heappop
ROWS = 3
COLS = 3

class priorityQueue:
    def __init__(self):
        self.heap = []

    def push(self, k):
        heappush(self.heap, k)

    def pop(self):
        return heappop(self.heap)

    def empty(self):
        if not self.heap:
            return True
        else:
            return False
        
    def trim(self, beam_width):
        # Trims the top beam_width elements from the heap

        # If the heap is smaller than the beam_width, return
        if len(self.heap) <= beam_width:
            return
        
        # Otherwise, trim the heap
        self.heap = self.heap[:beam_width]

    
    def size(self):
        return len(self.heap)

class Queue:
    def __init__(self):
        self.queue = []

    def push(self, k):
        self.queue.append(k)

    def pop(self):
        return self.queue.pop(0)

    def empty(self):
        if not self.queue:
            return True
        else:
            return False

class node:
    def __init__(self, parent, state, level, goal):
        self.parent = parent
        self.state = state
        self.level = level
        self.get_empty_tile_pos = self.get_empty_tile_pos()
        # self.final = final # No need to save this

        # self.cost = cost # Heuristic cost
        self.cost = self.level + self.get_cost(goal)

    def __lt__(self, other):
        return self.cost < other.cost
    
    def get_empty_tile_pos(self):
        for i in range(3):
            for j in range(3):
                if self.state[i][j] == 0:
                    return (i, j)
                
    def get_cost(self, final):
        cost = 0
        for i in range(3):
            for j in range(3):
                if self.state[i][j] != final[i][j] and self.state[i][j] != 0:
                    cost += 1
        return cost

def is_position_valid(pos):
    if pos[0] < 0 or pos[0] >= ROWS or pos[1] < 0 or pos[1] >= COLS:
        return False
    return True

def print_path(node):
    def printMatrix(mat):
        for i in range(3):
            for j in range(3):
                print(mat[i][j], end=" ")
            print()
        print()

    if node is None:
        return
    print_path(node.parent)
    printMatrix(node.state)


def printResults(node, max_depth=100, searches=0):
    def printStats():
        print("Searches: ", searches)
        print("Solution Path:")
        print_path(node)

    if node is None:
        print("No solution found")
    elif node.level > max_depth:
        print("Max depth reached")
        printStats()
        
    else:
        print("Solution found")
        printStats()