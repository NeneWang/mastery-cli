import numpy as np
import neurolab as nl

input_data = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
target_output = np.array([[0], [0], [1], [1]])


perceptron = nl.net.newp([[0, 1], [0, 1]], 1)
epochs = 100  # Number of training iterations
learning_rate = 0.1
perceptron.train(input_data, target_output, epochs=epochs, show=10, lr=learning_rate)
test_input = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
predicted_output = perceptron.sim(test_input)
print(predicted_output)
