# Three layer simulation

# ./../../img/2023-05-23-16-43-04.png


import numpy as np
import matplotlib.pyplot as plt
import neurolab as nl

# Create feedforward multilayer perceptron
layer1 = 2  # 2 units in the input layer
layer2 = 2  # 2 units in the hidden layer
layer3 = 1  # 1 unit in the output layer
out = 1  # 1 output

# Create the network using training with gradient descent
net = nl.net.newff([[0, 1]] * layer1, [layer2, layer3])
net.trainf = nl.train.train_gd

# Set up input and target data
input_data = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
target_data = np.array([[0], [0], [1], [1]])

# Train the network
error_progress = net.train(input_data, target_data, epochs=100, show=10, lr=0.1)

# Plot the training progress
plt.figure(1)
plt.plot(error_progress)
plt.xlabel('Epochs')
plt.ylabel('Training Error')
plt.title('Training Error Progress')
plt.grid(True)

# Simulate the network response
output_data = net.sim(input_data)
print("Output data ordered", output_data)
# Plot the network response
plt.figure(2)
plt.plot(input_data[:, 0], input_data[:, 1], 'b+', label='Input')
plt.plot(output_data[:, 0], 'ro', label='Output')
plt.xlabel('Input')
plt.ylabel('Output')
plt.title('Network Response')
plt.legend()
plt.grid(True)

# Plot the decision boundary
plt.figure(3)
h = 0.01  # Step size in the mesh
x_min, x_max = input_data[:, 0].min() - 0.1, input_data[:, 0].max() + 0.1
y_min, y_max = input_data[:, 1].min() - 0.1, input_data[:, 1].max() + 0.1
xx, yy = np.meshgrid(np.arange(x_min, x_max, h), np.arange(y_min, y_max, h))
Z = net.sim(np.c_[xx.ravel(), yy.ravel()]).reshape(xx.shape)
plt.contourf(xx, yy, Z, cmap=plt.cm.Spectral)
plt.scatter(input_data[:, 0], input_data[:, 1], c=target_data[:, 0], cmap=plt.cm.Spectral)
plt.xlabel('Input 1')
plt.ylabel('Input 2')
plt.title('Decision Boundary')

plt.show()





