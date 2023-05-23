import numpy as np

class Perceptron:
    def __init__(self, input_size, learning_rate=0.1):
        self.weights = np.zeros(input_size)
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
training_inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
labels = np.array([-1, -1, -1, 1])  # Labels for AND gate
epochs = 10

perceptron = Perceptron(input_size=2)
perceptron.train(training_inputs, labels, epochs)

# Test the trained perceptron
test_inputs = np.array([[0, 0], [0, 1], [1, 0], [1, 1]])
for inputs in test_inputs:
    prediction = perceptron.predict(inputs)
    print(f"Input: {inputs}  Prediction: {prediction}")
