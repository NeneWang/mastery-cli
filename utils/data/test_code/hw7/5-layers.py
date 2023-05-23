import numpy as np
import neurolab as nl

# Define the input data and target output
input_data = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
target_output = np.array([[0], [0], [1], [1]])

# Create the neural network
net = nl.net.newff([[0, 1], [0, 1]], [10, 8, 6, 4, 1])  # 2-D input, multiple hidden layers, 1-D output


# 2 Layers example/
# net = nl.net.newff([[0, 1], [0, 1]], [5, 1])  # 2-D input, 5 neurons in hidden layer, 1-D output


# Set the training algorithm
net.trainf = nl.train.train_gd  # Gradient Descent

# Train the network
error = net.train(input_data, target_output, epochs=1000, show=100, goal=0.01)

# Test the trained network
test_input = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
predicted_output = net.sim(test_input)

print("Predicted Output:")
print(predicted_output)
