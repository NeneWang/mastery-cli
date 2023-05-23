import numpy as np

class Perceptron:
    def __init__(self, input_size, learning_rate=1):
        self.weights = np.zeros(input_size)
        self.learning_rate = learning_rate

    def predict(self, inputs):
        # Compute the dot product of inputs and weights
        activation = np.dot(inputs, self.weights)
        return np.where(activation > 0, 1, -1)

    def train(self, training_inputs, labels, epochs):
        weight_iteration = 1
        for _ in range(epochs):
            print("_______________________________\nEpoch:", _ + 1)
            for i, (inputs, label) in enumerate(zip(training_inputs, labels), start=1):
                prediction = self.predict(inputs)
                print("\nInputs x(", i , ") :", inputs, f"W({weight_iteration}): {self.weights}","  Prediction:", prediction, "Label:", label)
                weight_iteration += 1
                if prediction != label:
                    # Adjust the weights if prediction is incorrect
                    self.weights += self.learning_rate * label * inputs
                    print("Weight iteration:", i, "Weights:", self.weights)
                else:
                    print("___ No update ___")

    @staticmethod
    def renumber_patterns(training_inputs, labels, iteration):
        new_training_inputs = np.concatenate((training_inputs[iteration:], training_inputs[:iteration]))
        new_labels = np.concatenate((labels[iteration:], labels[:iteration]))
        return new_training_inputs, new_labels


# Example usage
omega1_inputs = np.array([[1, 0, 0], [1, 0, 1]])
omega2_inputs = np.array([[1, 1, 0], [1, 1, 1]])

training_inputs = np.concatenate((omega1_inputs, omega2_inputs), axis=0)
labels = np.array([1, 1, -1, -1])  # Labels for Omega1 and Omega2
epochs = 5

perceptron = Perceptron(input_size=3)
perceptron.train(training_inputs, labels, epochs)
