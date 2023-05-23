import numpy as np
import matplotlib.pyplot as plt

# Define the input (x) and output (y) scatter_data
x = [1,2,3,4,5,6,7,8,9,10,12,13,14,15,16,18,19,21,22]
y = [100,90,80,60,60,55,60,65,66, 67, 70,75,76,78,79,90,99,99,100]

# Scatter plot
plt.scatter(x, y, color='black', label='scatter_data')

# Then perform a 1d polynom
deg = 15
coeffs = np.polyfit(x, y, deg)
polynom_1d = np.poly1d(coeffs)

# Plot the polynomial

# Range of the polynomial
myline= np.linspace (1,22,100)
plt.plot(myline, polynom_1d(myline), color='red', label='1d_polynom')
plt.legend()
plt.xlabel('x')
plt.ylabel('y')
plt.show()



