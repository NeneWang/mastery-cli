import numpy as np
import matplotlib.pyplot as plt
import neurolab as nl

# Setting up input and target arrays
input_data = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
target_data = np.array([[0], [0], [1], [1]])

# Create a net with two inputs and 1 output neuron
input_num = input_data.shape[1]
output_num = target_data.shape[1]
print("Input num should be 2:", input_num) # Input num should be 2 2
net = nl.net.newp([[0, 1]] * input_num, output_num)



# #number of network weight
net.layers[-1].np['b'][:]=np.array([[0]])
print ("initial bias:", net.layers[-1].np['b'])

# Weights initially
print("Initial weights", net.layers[0].np['w'])

# Train the network
error_progress = net.train(input_data, target_data, epochs=100, show=10, lr=0.1)

# Accessing weight and bias parameters
print("Number of network inputs", net.ci)

# #number of network outputs can be accessed by net.co
print("Number of network outputs", net.co)

# #number of network layers
print("Number of network layers", net.layers)

# #number of network weight
net.layers[-1].np['b'][:]=np.array([[0]])
print ("end bias:", net.layers[-1].np['b'])

# Weights endly
print("end weights", net.layers[0].np['w'])

print ("initial simulation with initialized weights")
simulate=net.sim ([[0,0]])
print("response to (0,0)",simulate)
simulate=net.sim ([[0,1]])
print("response to (0,1)",simulate)
simulate=net.sim ([[1,0]])
print("response to (1,0)",simulate)
simulate=net.sim ([[1,1]])
print("response to (1,1)",simulate)


# Plot the training progress
plt.plot(error_progress)
plt.xlabel('Epochs')
plt.ylabel('Training Error')
plt.title('Training Error Progress')
plt.grid(True)
plt.show()

