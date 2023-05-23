import numpy as np

# Step 1: Initialize parameters
m = 0  # slope
b = 0  # y-intercept

# Let's say our data is in numpy arrays X and Y
X = np.random.rand(100)
Y = 3 * X + 2 + np.random.randn(100)  # a little noise

# We'll do gradient descent for a certain number of iterations
num_iterations = 1000
learning_rate = 0.01  # This is our step size

for i in range(num_iterations):
    # Step 2: Compute cost
    Y_pred = m*X + b
    cost = np.mean((Y - Y_pred)**2)  # Mean squared error

    # Step 3: Compute gradients
    m_grad = -2 * np.mean((Y - Y_pred) * X)  # Derivative with respect to m
    b_grad = -2 * np.mean(Y - Y_pred)  # Derivative with respect to b

    # Step 4: Update parameters
    m = m - learning_rate * m_grad
    b = b - learning_rate * b_grad

    if i % 100 == 0:  # Print the cost every 100 iterations
        print(f"Iteration {i}: Cost = {cost}")

print(f"Final parameters: m = {m}, b = {b}")
