import numpy as np

class Perceptron:
    def __init__(self, input_size, learning_rate=0.1):
        self.weights = np.random.uniform(-1, 1, input_size)
        self.learning_rate = learning_rate

    def predict(self, inputs):
        # Compute the dot product of inputs and weights
        activation = np.dot(inputs, self.weights)
        return np.where(activation >= 0, 1, -1)

    def train(self, training_inputs, labels, epochs):
        for _ in range(epochs):
            for inputs, label in zip(training_inputs, labels):
                prediction = self.predict(inputs)
                if prediction != label:
                    # Adjust the weights if prediction is incorrect
                    self.weights += self.learning_rate * label * inputs
                else:
                    # Do nothing if prediction is correct
                    pass

# Example usage
omega1_inputs = np.array([[2, 3], [4, 5], [6, 7]])
omega2_inputs = np.array([[1, 1], [-1, -2], [-3, -4]])

training_inputs = np.concatenate((omega1_inputs, omega2_inputs), axis=0)
labels = np.array([1, 1, 1, -1, -1, -1])  # Labels for Omega1 and Omega2
epochs = 10

perceptron = Perceptron(input_size=2)
perceptron.train(training_inputs, labels, epochs)

# Test the trained perceptron
test_inputs = np.array([[3, 4], [-2, -3]])
for inputs in test_inputs:
    prediction = perceptron.predict(inputs)
    print(f"Input: {inputs}  Prediction: {prediction}")
