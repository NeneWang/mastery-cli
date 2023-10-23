const designing_good_charts = [
    {
        term: "choosing chart",
        prompt: "What chart to se when you see different location based data with frequenccies?",
        example: "Heatmap, choropleth map"
    },
    {
        term: "bar charts",
        prompt: "What to consider when having a bar chart?",
        example: "If it has long names, consider having that on the y axis, sort the numeric values, make sure they have enough space",
        attachment: "./img/2023-03-22-19-54-00.png"
    },
    {
        term: "line charts",
        prompt: "What to consider when having a line chart?",
        example: "They are good for showing trends, but not good for showing the exact values. If you want to show the exact values, consider using a scatter plot, using it implies a varying relationship between the x values",
    }
    ,
    {
        term: "colors",
        prompt: "What to consider when using colors?",
        example: "You can use ColorBrewer to choose the colors, let the intensity make a change.\n\
        You can highlight the story you want to tell.",
    },
    {
        term: "scatter plot",
        prompt: "When can You use Scatter Plots?",
        example: "You can use them when you want to see clustering."
    }
]

const sql = [
    {}
]


const statistics = [
    {
        term: "Difference descriptive and inferential statistics",
        prompt: "What is the difference between descriptive and inferential statistics?",
        example: "Descriptive statistics is about describing the data, inferential statistics is about making conclusions (generalization) about the data.",
        descriptive: "Techniques used in descriptive statistics include: measures of central tendency (mean, median, and mode), measures of dispersion (standard deviation, variance, percentiles, and quartiles), and measures of association (correlation, regression, and covariance).\n\
        Techniques used in inferential statistics include: hypothesis testing (t-test, chi-square, and ANOVA), and regression analysis.",
    },
    {
        term: "accuracy",
        prompt: "Use accuracy correctly in a setence, or what is it useful for?",
        description: "Accuracy is the relationship between the measurement and the actual truth (Inversely related to bias)",
        example: "The more accurate your model is. The closest it is with providing the truth without any bias"
    },
    {
        term: "Precision",
        prompt: "Use precision correctly in a setence, or what is it useful for?",
        description: "Precision is certaintity of each measurement (Inversely related to variance)",
        example: "Precision is low if it changes everytime I re-measure it." 
    },
    {
        term: "Resolution",
        prompt: "Use resolution correctly in a setence, or what is it useful for?",
        description: "The number of data points per unit measurement (time, space, individual, etc.)",
        example: "I am measuring at 100hz which means that I have 100 data points per second of resolution"
    },
    {
        term: "Gaussian distribution",
        prompt: "What does a Gaussian distribution suggest?",
        description: "showing that data near the mean are more frequent in occurrence than data far from the mean.",
        example: "Suggests that the data is normally distributed having a bell curve in the middle"
    },
    {
        term: "T distribution",
        prompt: "What does a T distribution suggest?",
        description: "A T distribution is similar to a Gaussian distribution but has fatter tails",
        example: "Suggests that the data is normally distributed having a bell curve in the middle"
    },
    {
        term: "unimodal and bimodal",
        prompt: "What does a unimodal and bimodal distribution suggest?",
        description: "A unimodal distribution has one peak, a bimodal distribution has two peaks",
    },
    {
        term: "Plot a Gaussian distribution",
        prompt: "Plot a Gaussian distribution from -4 to 4 having 1001 discretizations",
        description: "# import libraries\n\
        import matplotlib.pyplot as plt\n\
        import numpy as np\n\
        import scipy.stats as stats",
        example: "x = np.linspace(-4, 4, 1001)\n\
        y = stats.norm.pdf(x, 0, 1)\n\
        plt.plot(x, y)"
    },
    {
        term: "Plot a Normally distributed Histogram ",
        prompt: "Plot a Normally distributed Histogram (25 bins) of random data using 1000 points using randn shifted by 5",
        description: "# import libraries\n\
        import matplotlib.pyplot as plt\n\
        import numpy as np\n\
        import scipy.stats as stats",
        example: "data = np.random.randn(1000) + 5\n\
        plt.hist(data, bins=25)\n\
        plt.show()"
    },
    {
        term: "Calculate the variance",
        prompt: "Calculate the variance of [ 8, 0, 4, 1, -2, 7] knowing that the mean is 3",
        description: "Variance is the average (divide by n - 1) of the squared differences from the Mean",
        example: "8 - 3 = 5\n\
        0 - 3 = -3\n\
        4 - 3 = 1\n\
        1 - 3 = -2\n\
        -2 - 3 = -5\n\
        7 - 3 = 4\n\
        (5^2 + (-3)^2 + 1^2 + (-2)^2 + (-5)^2 + 4^2) / 5 = 16"
    },
    {
        term: "Larger variance",
        prompt: "What does a larger variance mean?",
        example: "A larger variance means that the data is more spread out",
    }

]


module.export = { designing_good_charts, sql }