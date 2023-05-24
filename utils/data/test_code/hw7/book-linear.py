import numpy as np

class Perceptron:
    def __init__(self, input_size, learning_rate=0.1, rndWeights=True):
        if rndWeights:
            self.weights = np.random.uniform(-1, 1, input_size)
        else:
            self.weights = np.zeros(input_size)
        self.learning_rate = learning_rate
        print("Perceptron initialized with weights:", self.weights, "and learning rate:", self.learning_rate)

    def predict(self, inputs):
        activation = np.dot(inputs[:-1], self.weights[:-1])
        results = activation + self.weights[-1] 
        print("\n\Activation:", activation, "Results:", results)
        return np.where(results, 1, -1) 

    def train(self, training_inputs, labels, epochs):
        weight_iteration = 1
        for epoch in range(epochs):
            print("\n\n_______________________________\nEpoch:", epoch + 1)
            for i, (inputs, label) in enumerate(zip(training_inputs, labels), start=1):
                print("\n")
                prediction = self.predict(inputs)
                print("Inputs:", inputs[:-1], "  Prediction:", prediction, "Label:", label)
                if prediction != label:
                    self.weights[:-1] += self.learning_rate * label * inputs[:-1]
                    self.weights[-1] += self.learning_rate * label
                    print(" => Weight iteration:", weight_iteration, "Weights:", self.weights)
                    weight_iteration += 1
                else:
                    print("___ No update ___")



# Example usage
# training_inputs = np.array([[0, 1, 1], [0, 0, 0], [1, 1, 0], [1, 0, 0]])
# Sorted
training_inputs = np.array([[0, 0, 1], [0, 1, 1], [1, 0, 0], [1, 1, 0]])

labels = training_inputs[:, -1]
epochs = 5

perceptron = Perceptron(input_size=3, rndWeights=False, learning_rate=1)
perceptron.train(training_inputs, labels, epochs)
