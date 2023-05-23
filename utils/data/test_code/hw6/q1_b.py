import numpy as np
import matplotlib.pyplot as plt

# Define the input (x) and output (y) data
x = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,21,22]
y = [100,90,80,60,60,55,60,65,66, 67, 70,75,76,78,79,90,99,99,100]


# Plot the original data and the third-degree polynomial fit
plt.scatter(x, y, color='blue', label='data')

# Calculate the means of x and y
x_mean = sum(x) / len(x)
y_mean = sum(y) / len(y)

# Calculate the sums of squares and products
sx2 = sum((xi - x_mean)**2 for xi in x)
sxy = sum((xi - x_mean)*(yi - y_mean) for xi, yi in zip(x, y))
sx3 = sum((xi - x_mean)**3 for xi in x)
sx4 = sum((xi - x_mean)**4 for xi in x)
sy2 = sum((yi - y_mean)**2 for yi in y)

# Solve the linear system of equations for the coefficients
A = [[len(x), x_mean, x_mean**2, x_mean**3],
     [sum(xi*yi for xi, yi in zip(x, y)), sx2, sx3, sx4],
     [sum(xi**2*yi for xi, yi in zip(x, y)), sx3, sx4, x_mean*sx4],
     [sum(xi**3*yi for xi, yi in zip(x, y)), sx4, x_mean*sx4, x_mean**2*sx4]]
B = [sum(y), sxy, sum(xi*yi**2 for xi, yi in zip(x, y)), sum(xi**2*yi**2 for xi, yi in zip(x, y))]
a0, a1, a2, a3 = np.linalg.solve(A, B)

# Create a line of 100 points between x=1 and x=22
myline = np.linspace(1, 22, 100)

# Limit the range of the line to the range of the input data


# Evaluate the third-degree polynomial at each point of the line
mymodel = a0 + a1*myline + a2*myline**2 + a3*myline**3


plt.plot(myline, mymodel, color='red', label='fit (deg=3)')

plt.ylim(0, 100)

# Add a legend and labels to the plot
plt.legend()
plt.xlabel('x')
plt.ylabel('y')

# Show the plot
plt.show()
