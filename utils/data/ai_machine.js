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
        prompt: "Given a pandas DataFrame `df`, print the number of rows and columns it has.",
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
        description: "When working with a DataFrame that contains information about cars, it can be useful to visualize how the average MSRP changes over time. To create a line chart that displays this information, we can use the `groupby()` method of the DataFrame to group the cars by their year, and then use the `mean()` method to calculate the average MSRP for each year. Finally, we can use the `plot()` method with `kind='line'` to create a line chart that displays the average MSRP for each year, with the year on the x-axis and the average MSRP on the y-axis."
    },
    {
        term: "adjust-price-by-year",
        prompt: "Given a pandas DataFrame `df` that contains a column 'Year' representing the year of each car, create a new column 'adjusted_price' where the MSRP is adjusted by a factor based on the year.",
        example: ":m\n\
        ```js\n\
        df['adjusted_price'] *= df['Year'].apply(adjust_price_year)\n\
        ```\
        " + "To adjust the MSRP of each car in the DataFrame `df` based on the year, you can use the following code:\n\n```\ndef adjust_price_year(x):\n    if x <= 2000:\n        return 10\n    else:\n        return 1\n\ndf['adjusted_price'] = df['MSRP']\ndf['adjusted_price'] *= df['Year'].apply(adjust_price_year)\n```" ,
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
    }
    

]


module.exports = { pytorch_machine_learning_course, machine_learning_pandas }


