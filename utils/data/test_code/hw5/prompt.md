
```bash
s - 3 - a
s - 4 _ d
a - 5 - d
a - 4 - b
d - 2 - e
b - 5 - e
b - 4 - c
e - 4 - f
f - 3 - h
```

```python

class Node:
    def __init__(self, name):
        self.name = name
        self.neighbors = {}

    def add_neighbor(self, node, cost):
        self.neighbors[node] = cost

    def get_travel_cost(self, another_node):
        return self.neighbors[another_node]

    def create_tree(self):
        # create a set to keep track of visited nodes
        visited = set()

        # create a dictionary to keep track of the parent node of each visited node
        parent = {self: None}

        # create a stack for DFS traversal
        stack = [self]

        # perform DFS traversal until all nodes are visited
        while stack:
            node = stack.pop()
            visited.add(node)

            for neighbor, cost in node.neighbors.items():
                if neighbor not in visited:
                    parent[neighbor] = node
                    stack.append(neighbor)

        # construct the tree by traversing back from each node to the start node
        tree = {}
        for node, parent_node in parent.items():
            if parent_node is not None:
                tree[node] = parent_node

        return tree


s = Node('s')
a = Node('a')
b = Node('b')
c = Node('c')
d = Node('d')
e = Node('e')
f = Node('f')
h = Node('h')

# add neighbors and costs
s.add_neighbor(a, 3)
s.add_neighbor(d, 4)

a.add_neighbor(s, 3)
a.add_neighbor(d, 5)
a.add_neighbor(b, 4)

b.add_neighbor(a, 4)
b.add_neighbor(c, 4)
b.add_neighbor(e, 5)

c.add_neighbor(b, 4)

d.add_neighbor(s, 4)
d.add_neighbor(a, 5)
d.add_neighbor(e, 2)

e.add_neighbor(d, 2)
e.add_neighbor(b, 5)
e.add_neighbor(f, 4)

f.add_neighbor(e, 4)
f.add_neighbor(h, 3)

h.add_neighbor(f, 3)

s.create_tree(s)
```

```py

```

Test 1
```py
def depth_first_search(goal_node):
    pass


depth_first_search(e)
```

```python
assert(depth_first_search(e) == e)

assert(depth_first_search(f) == f)
```