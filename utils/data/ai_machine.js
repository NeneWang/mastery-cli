/**
 * The idea is to have Advanced deep neural networks (Deep learning) and Machine Learning models  and algorithms here.
 */

const pytorch_machine_learning_course = [

]


const machine_learning_pandas = [
    {
        term: "count-duplicate-rows",
        prompt: "Print the number of duplicate rows in the DataFrame `df`.",
        example: "print(df.duplicated().sum())",
        description: "Duplicate rows in a DataFrame can cause issues with data analysis and modeling. To identify the number of duplicate rows in a DataFrame, we can use the `duplicated()` method of the DataFrame and the `sum()` method to count the number of `True` values. The output of the `print(df.duplicated().sum())` command represents the total number of duplicate rows in the DataFrame `df`."
    },
    {
        term: "print-df-shape",
        prompt: "Given a pandas DataFrame `df`, print the number of rows and columns it has. \n\
        Then, remove duplicate rows from the DataFrame and assign the result to the same variable.",
        example: ":m ```js\n\
        print(df.shape)\n\
        df = df.drop_duplicates()\n\
        ```",
        description: "Before working with a pandas DataFrame, it is important to understand its dimensions. To print the number of rows and columns in the DataFrame `df`, you can use the command `print(df.shape)`. This will output a tuple with two values: the first value is the number of rows, and the second value is the number of columns. Additionally, you may want to remove duplicate rows in the DataFrame to ensure data quality. To remove duplicate rows in a DataFrame, we can use the `drop_duplicates()` method of the DataFrame. The command `df = df.drop_duplicates()` removes duplicate rows from the DataFrame `df` and assigns the result to the same variable. This modified DataFrame can be used for further analysis or modeling."
    },
    {
        term: "count-car-brands-bar-chart",
        prompt: "Given a pandas DataFrame `df` that contains a column 'Make' representing the brand of each car, make a bar chart that displays the count of cars for each brand.",
        example: ":m\n\
        ```js\n\
        gb = df.groupby('Make')\ncount_makes = gb['Make'].count()\ncount_makes.plot(kind='bar')\n\
        ```\
        ",
        attachment: "./img/2023-03-24-12-09-14.png",
        description: "When working with a DataFrame that contains information about cars, it can be useful to visualize the count of cars for each brand. To create a bar chart that displays this information, we can use the `groupby()` method of the DataFrame to group the cars by their brand, and then use the `count()` method to count the number of cars for each brand. Finally, we can use the `plot()` method with `kind='bar'` to create a bar chart that displays the count of cars for each brand."
    },
    {
        term: "average-msrp-timeline-chart",
        prompt: "Given a pandas DataFrame `df` that contains a column 'Year' representing the year of each car, make a line chart that displays the average MSRP for each year.",
        example: ":m\n\
        ```js\n\
        gb = df.groupby('Year')\naverage_MSRP = gb['MSRP'].mean()\naverage_MSRP.plot(kind='line', figsize=(8,5))\n\
        ```\
        ",
        description: ":m\n\
        ```js\n\
        gb = df.groupby('Year')\naverage_MSRP = gb['MSRP'].mean()\naverage_MSRP.plot(kind='line', figsize=(8,5))\n\
        ```\
        " + "When working with a DataFrame that contains information about cars, it can be useful to visualize how the average MSRP changes over time. To create a line chart that displays this information, we can use the `groupby()` method of the DataFrame to group the cars by their year, and then use the `mean()` method to calculate the average MSRP for each year. Finally, we can use the `plot()` method with `kind='line'` to create a line chart that displays the average MSRP for each year, with the year on the x-axis and the average MSRP on the y-axis."
    },
    {
        term: "adjust-price-by-year",
        prompt: "Given a pandas DataFrame `df` that contains a column 'Year' representing the year of each car, create a new column 'adjusted_price' where the MSRP is adjusted by a factor based on the year.",
        example: ":m\n\
        ```js\n\
        df['adjusted_price'] *= df['Year'].apply(adjust_price_year)\n\
        ```\
        " + "To adjust the MSRP of each car in the DataFrame `df` based on the year, you can use the following code:\n\n```\ndef adjust_price_year(x):\n    if x <= 2000:\n        return 10\n    else:\n        return 1\n\ndf['adjusted_price'] = df['MSRP']\ndf['adjusted_price'] *= df['Year'].apply(adjust_price_year)\n```",
        description: ":m\n\
        ```js\n\
        # Make a column where is 10 when year is less than 2000, else 1.\ndef adjust_price_year(x):\n\tif x<=2000:\n\t\treturn 10\n\telse:\n\t\treturn 1\n\n# Multiply the MSRP by the price adjuster.\ndf[\"adjusted_price\"] = df[\"MSRP\"]\n\
        ```\
        "+ "When working with a DataFrame that contains information about cars, it can be useful to adjust the MSRP based on the year of the car. To do this, we can create a new column in the DataFrame called 'adjusted_price', where the MSRP is multiplied by a factor based on the year. We can define a function called `adjust_price_year` that takes a year as input and returns a factor based on that year. For example, if the year is less than or equal to 2000, the factor could be 10, while for other years it could be 1. We can then use the `apply()` method of the 'Year' column to apply this function to each row, and multiply the result by the 'MSRP' column to get the adjusted price. Finally, we can assign this new column to the 'adjusted_price' column of the DataFrame."
    },
    {
        term: "histogram-adjusted-price-car-makers",
        prompt: "Given a pandas DataFrame `df` that contains a column 'adjusted_price' representing the adjusted MSRP of each car, and columns 'Make' and 'Year' representing the make and year of each car, create a histogram of the adjusted price of just these car makers using `sns.histplot`.",
        example: ":m\n\
        ```js\n\
        import seaborn as sns\n\ncondC = df[\"Make\"] == \"Chevrolet\"\ncondF = df[\"Make\"] == \"Ford\"\ncondT = df[\"Make\"] == \"Toyota\"\n\n# Using sns.histplot, make histogram of the adjusted_price of just these car makers.\nsns.set()\n\ntemp_df = df[condC | condF | condT]\n\nax = sns.histplot(data=temp_df, x=\"Year\", y=\"adjusted_price\", hue=\"Make\")\
        ```",
        description: "When working with a DataFrame that contains information about cars, it can be useful to visualize the adjusted price of just certain car makers. To create a histogram of the adjusted price of just these car makers, we can use the `sns.histplot` function from the Seaborn library. We can start by creating Boolean conditions that check if the 'Make' column is equal to each of the car makers we want to include in the histogram. We can then use these conditions to create a temporary DataFrame that includes only the rows that match these conditions. Finally, we can use `sns.histplot` with this temporary DataFrame to create the histogram, using the 'Year' column for the x-axis, the 'adjusted_price' column for the y-axis, and the 'Make' column for the hue." +
            "To create a histogram of the adjusted price of just the car makers Chevrolet, Ford, and Toyota in the DataFrame `df`, using `sns.histplot`, you can use the following code:\n\n``` \n import seaborn as sns\n\ncondC = df['Make'] == 'Chevrolet'\ncondF = df['Make'] == 'Ford'\ncondT = df['Make'] == 'Toyota'\n\ntemp_df = df[condC | condF | condT]\n\nsns.histplot(data=temp_df, x='Year', y='adjusted_price', hue='Make')\n```",
        attachment: "./img/2023-03-24-12-47-25.png"
    },
    {
        term: "count-listings-price-less-than",
        prompt: "Given a pandas DataFrame `df` that contains a column 'price' representing the price of each listing, how many listings are there with a price less than a certain value `x`?",
        example: "To count the number of listings in the DataFrame `df` that have a price less than 100, you can use the following code:\n\n```\ncount = (df['price'] < 100).sum()\nprint(count)\n```",
        description: "When working with a DataFrame that contains information about listings, it can be useful to count the number of listings with a price less than a certain value. To do this, we can use a Boolean condition that checks if the 'price' column is less than the desired value, and then use the `sum()` method to count the number of `True` values in this condition. For example, to count the number of listings in the DataFrame `df` that have a price less than 100, we can use the code `count = (df['price'] < 100).sum()`",

    },
    {
        term: "count-brooklyn-listings-price-less-than",
        prompt: "Given a pandas DataFrame `df` that contains a column 'neighbourhood_group' representing the borough of each listing and a column 'price' representing the price of each listing, how many listings are there in Brooklyn with a price less than a certain value `x`?",
        example: "To count the number of listings in Brooklyn in the DataFrame `df` that have a price less than 100, you can use the following code:\n\n```\nin_brooklyn = df['neighbourhood_group'] == 'Brooklyn'\nless_100 = df['price'] < 100\ncount = (in_brooklyn & less_100).sum()\nprint(count)\n```",
        description: "When working with a DataFrame that contains information about listings, it can be useful to count the number of listings in a certain borough with a price less than a certain value. To do this, we can use two Boolean conditions: one that checks if the 'neighbourhood_group' column is equal to the desired borough, and one that checks if the 'price' column is less than the desired value. We can then use the `&` operator to combine these conditions with an 'and' operation, and then use the `sum()` method to count the number of `True` values in this combined condition. For example, to count the number of listings in Brooklyn in the DataFrame `df` that have a price less than 100, we can use the code:\n\n```\nin_brooklyn = df['neighbourhood_group'] == 'Brooklyn'\nless_100 = df['price'] < 100\ncount = (in_brooklyn & less_100).sum()\nprint(count)\n```"
    },
    {
        term: "select-host-names",
        prompt: "Given a pandas DataFrame `df` that contains a column 'host_name' representing the name of each host, select anyone that has the host name of Michael, David, John, and Daniel using the `.isin()` method.",
        example: "To select anyone in the DataFrame `df` that has the host name of Michael, David, John, and Daniel, you can use the following code:\n\n```\nhost_names = ['Michael', 'David', 'John', 'Daniel']\nchosen_ones = df.host_name.isin(host_names)\nprint(len(df[chosen_ones]))\n```",
        description: "When working with a DataFrame that contains information about hosts, it can be useful to select only the hosts with certain names. To do this, we can create a list of the desired names, and then use the `.isin()` method of the 'host_name' column to create a Boolean condition that checks if each row's 'host_name' is in the list. We can then use this condition to select only the rows that meet the condition. For example, to select anyone in the DataFrame `df` that has the host name of Michael, David, John, and Daniel, we can use the code:\n\n```\nhost_names = ['Michael', 'David', 'John', 'Daniel']\nchosen_ones = df.host_name.isin(host_names)\nprint(len(df[chosen_ones]))\n```"
    },
    {
        term: "min-max-price-neighbourhood-groups",
        prompt: "Given a pandas DataFrame `df` that contains a column 'neighbourhood_group' representing the borough of each listing and a column 'price' representing the price of each listing, use `groupby()` and `.agg()` to find the minimum and maximum price for each of the neighbourhood groups.",
        example: "To find the minimum and maximum price for each of the neighbourhood groups in the DataFrame `df`, you can use the following code:\n\n```\ngb = df.groupby('neighbourhood_group')\nprint(gb['price'].agg(['min', 'max']))\n```",
        description: "When working with a DataFrame that contains information about listings, it can be useful to find the minimum and maximum price for each neighbourhood group. To do this, we can use the `groupby()` method of the DataFrame to group the listings by their neighbourhood group, and then use the `.agg()` method to apply the `min()` and `max()` functions to the 'price' column of each group. We can then print the result to see the minimum and maximum price for each neighbourhood group. For example, to find the minimum and maximum price for each neighbourhood group"
    },
    {
        term: "scatterplot-engine-HP-highway-MPG",
        attachment: "./img/2023-03-24-12-48-24.png",
        prompt: "Given a pandas DataFrame `df` that contains columns 'Engine HP' and 'highway MPG', plot the relationship between these two variables using a scatter plot with `sns.scatterplot()`.",
        example: "To plot the relationship between the 'Engine HP' and 'highway MPG' columns of the DataFrame `df` using a scatter plot with Seaborn, you can use the following code:\n\n```\nimport seaborn as sns\n\nax = sns.scatterplot(data=df, x='Engine HP', y='highway MPG')\nax.set_title('Relationship of the Engine HP and the Highway NPG')\n```",
        description: "When working with a DataFrame that contains information about cars, it can be useful to visualize the relationship between certain variables, such as the engine horsepower and highway miles per gallon. To do this, we can use a scatter plot with the `sns.scatterplot()` function from the Seaborn library. We can pass in the DataFrame `df` as the `data` argument, and specify the 'Engine HP' and 'highway MPG' columns as the `x` and `y` arguments, respectively. We can also add a title to the plot using the `set_title()` method of the plot axis. For example, to plot the relationship between the 'Engine HP' and 'highway MPG' columns of the DataFrame `df`, we can use the code:\n\n```\nimport seaborn as sns\n\nax = sns.scatterplot(data=df, x='Engine HP', y='highway MPG')\nax.set_title('Relationship of the Engine HP and the Highway NPG')\n```"
    },
    {
        term: "boxplot-engine-HP",
        attachment: "./img/2023-03-24-12-49-38.png",
        prompt: "Given a pandas DataFrame `df` that contains a column 'Engine HP', create a box plot of this column using `sns.boxplot()`.",
        example: "To create a box plot of the 'Engine HP' column of the DataFrame `df` using Seaborn, you can use the following code:\n\n```\nimport seaborn as sns\n\nax = sns.boxplot(data=df, x='Engine HP')\n```",
        description: ":m When working with a DataFrame that contains information about cars, it can be useful to visualize the distribution of certain variables, such as the engine horsepower. To do this, we can use a box plot with the `sns.boxplot()` function from the Seaborn library. We can pass in the DataFrame `df` as the `data` argument, and specify the 'Engine HP' column as the `x` argument. This will create a box that shows the median, quartiles, and range of the 'Engine HP' values, allowing us to easily see any outliers or other features of the distribution. For example, to create a box plot of the 'Engine HP' column of the DataFrame `df`, we can use the code:\n\n```\nimport seaborn as sns\n\nax = sns.boxplot(data=df, x='Engine HP')\n```"
    },
    {
        term: "get-info-on-columns",
        attachment: "./img/2023-03-24-12-52-33.png",
        prompt: "Suppose we have a pandas DataFrame `df`. How can we get information about the columns in this DataFrame, including their names, data types, and number of non-null values?",
        example: "We can use the `info()` method of the DataFrame `df` to get information about its columns. For example:\n\n```\ndf.info()\n```",
        description: ":m When working with a pandas DataFrame, it can be useful to get information about the columns in the DataFrame, such as their names, data types, and number of non-null values. We can use the `info()` method of the DataFrame to get this information. This method prints a summary of the DataFrame's columns, including their names, data types, and number of non-null values. For example, to get information about the columns in a DataFrame `df`, we can use the code:\n\n```\ndf.info()\n```"
    },
    {
        term: "pairplot-seaborn",
        attachment: "./img/2023-03-24-12-54-05.png",
        prompt: "Suppose we have a pandas DataFrame `df` that contains several columns, and we want to visualize the pairwise relationships between these columns using a scatter plot matrix. How can we create such a plot using the Seaborn library?",
        example: "We can use the `pairplot()` function from the Seaborn library to create a scatter plot matrix of the pairwise relationships between the columns in a DataFrame `df`. We can also specify a column to use for color-coding the points using the `hue` argument. For example:\n\n```\nimport seaborn as sns\n\nsns.pairplot(df, hue='survived')\n```",
        description: ":m When working with a pandas DataFrame, it can be useful to visualize the pairwise relationships between its columns using a scatter plot matrix. We can use the `pairplot()` function from the Seaborn library to create such a plot. This function takes a DataFrame `df` as its first argument, and can also take several optional arguments to customize the appearance of the plot, such as `hue` to color-code the points based on a categorical column. For example, to create a scatter plot matrix of the pairwise relationships between the columns in a DataFrame `df` using Seaborn, we can use the code:\n\n```\nimport seaborn as sns\n\nsns.pairplot(df, hue='survived')\n```"
    } 
    
    
    
    


]


module.exports = { pytorch_machine_learning_course, machine_learning_pandas }


