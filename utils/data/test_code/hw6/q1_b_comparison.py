import numpy as np
import matplotlib.pyplot as plt


# Define the input (x) and output (y) data
x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 13, 14, 15, 16, 18, 19, 21, 22]
y = [100, 90, 80, 60, 60, 55, 60, 65, 66, 67, 70, 75, 76, 78, 79, 90, 99, 99, 100]

# Calculate the means of x and y
x_mean = sum(x) / len(x)
y_mean = sum(y) / len(y)

# Calculate the slope and y-intercept of the line
numerator = sum((xi - x_mean)*(yi - y_mean) for xi, yi in zip(x, y))
denominator = sum((xi - x_mean)**2 for xi in x)
m = numerator / denominator
b = y_mean - m*x_mean


# Then perform a 1d polynom
deg = 3
coeffs = np.polyfit(x, y, deg)
polynom_1d = np.poly1d(coeffs)

# Range of the polynomial
myline = np.linspace(1, 22, 100)

# Computing the plots for my algorithm
mymodel = m*myline + b

plt.scatter(x, y, color='blue', label='data')
plt.plot(myline, mymodel, color='red', label='Linear fit')
plt.plot(myline, polynom_1d(myline), color='green', label='1d_polynom')

# Add a legend and labels to the plot
plt.legend()
plt.xlabel('x')
plt.ylabel('y')

# Show the plot
plt.show()
