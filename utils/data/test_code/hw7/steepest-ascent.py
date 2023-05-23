import numpy as np

# Step 1: Initialize weight
weight = np.random.randn()

# Our target function is Y = 2X + 3
X = np.random.rand(100)
Y = 2 * X + 3 + np.random.randn(100)  # with some noise

# The performance (or "fitness") function is mean squared error
def fitness(weight):
    Y_pred = weight * X  # no bias for simplicity
    return -np.mean((Y - Y_pred)**2)  # we want to maximize fitness, hence the negative sign

# Initialize fitness
current_fitness = fitness(weight)

# Hill climbing parameters
num_iterations = 1000
step_size = 0.01  # how much we perturb the weight

for i in range(num_iterations):
    # Step 3: Perturb the weight
    new_weight = weight + np.random.randn() * step_size

    # Step 4: Evaluate the new performance
    new_fitness = fitness(new_weight)

    # If it's better, keep the new weight
    if new_fitness > current_fitness:
        weight = new_weight
        current_fitness = new_fitness

print(f"Final weight: {weight}")
