import numpy as np
import neurolab as nl

input_data = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
target_output = np.array([[0], [0], [1], [1]])

net = nl.net.newff([[0, 1], [0, 1]], [10, 8, 6, 4, 1]) 
net.trainf = nl.train.train_gd 
error = net.train(input_data, target_output, epochs=1000, show=100, goal=0.01)
test_input = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
predicted_output = net.sim(test_input)

print("Predicted Output:")
print(predicted_output)
