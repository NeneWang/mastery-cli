# Mastery CLI

![](https://media.giphy.com/media/eveBk0ptKzjqUe0iTg/giphy.gif)

Docs: https://nenewang.github.io/mastery-cli/

Mastery CLI: Your Command Line Assistant for Programmer Development"

Mastery CLI is a comprehensive tool designed to boost your programming skills. It features flashcards, DSA practice, statistics, and habit hooks. For instance, every commit now triggers a random flashcard or suggests a DSA problem to solve, fostering continuous learning.

Key Highlights:

- Easily track personal project goals, such as daily commits.
- Access over 150 offline programming problems with accompanying offline tests and a built-in compiler.
- Seamlessly collect and sync progress across devices when connected to the internet.
- Establish habit hooks that integrate flashcards and math practice into your development cycle.
- Utilize an offline algorithm that identifies weaknesses and generates quick flashcards for memory refresh.
- Enjoy free flashcard decks covering Computer Science Architecture, Networking, AWS, System Design and Design Patterns.
- Commit and push code with `mcli coa` and automatically receive a DSA problem or flashcard.
- Get tomorrow's weather forecast and perform quick currency conversions directly from the CLI.
- Maintain an events database with publish and edit features for tracking your progress.
- Automatically test algorithm problems and visualize your activity with heatmaps.
- Prioritize learning with a skill-tree structure and generate decks from spreadsheets or grouped JSON data.
- Quickly convert images to ASCII for use in terminals or reports.
- Keep momentum with study sessions like `mcli ses`, `cses`, and `amses`.


## Install and Test.

```
npm install -g mastery-cli
mcli report
mcli quiz
mcli report
```

- You need to install nvim for the dsa option to work
- Eventually you would be able to select your own editor.


## Help

We support multiple ways to call the cli, for instance, you can use `mastery-cli`, `mastery`, or `mcli` to access the tool. 

Supported calls:

```
mcli
mastery
m-cli
```

### Settings.

Change the editor in 

```
utils/dsa-cli/user_files/temp_settings.json
```

## Usage

Commiting a code and pushing it to HEAD

```
mcli coa "Commit message"
```


![](https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzYzYzU5NWJiMjNhNThkYzBkNTJlM2MxNjFjZjdiNzJiMTZhMGVmOSZlcD12MV9pbnRlcm5hbF9naWZzX2dpZklkJmN0PWc/JavdJQ8YjfQyOq0Cfy/giphy.gif)

Reporting:

```
mcli report
```


Help 

```
mcli --help
```


## Skills Integration

Now you can track locally the type of cards you are studying, and the type of problems you are solving.
You will be able to see the progress of your skills, and the type of problems you are solving.

```
mcli skill
```

### Data Structures and Algorithms 
We have a collection of DSA problems that you can solve.

View DSA problems:
```
mcli dsa
```

- We keep track of solved problems, as well as new problems.




View all DSA Problems

```
mcli dsa --all
```

### Flashcards

```
mcli term
```

Math Problems:

```
mcli math
```

### Study Sessions and Utilities

Manage continuous practice and assorted utilities with these commands:

```bash
mcli ses       # Start a regular study session
mcli cses      # Begin a cloze study session (also available as mcses)
mcli amses     # Tackle ten random DSA challenges in a row
mcli cloze     # Open a single cloze DSA problem
mcli services  # Access conversions and credential helpers
mcli clean     # Prompt to tidy up the terminal
mcli code      # Print the root directory path
mcli settings  # Show the settings file location
```




# Developer Notes

If you are a developer feel free to contribute the project, for installing as a  developer:

Make sure you have both `git` and `node` installed.

```
git clone https://github.com/NeneWang/mastery-cli.git
cd mastery-cli
npm install
npm link
```

That's it!, you can now run `mastery` from the command line.


### Documentation

Genearate Documentaiton running:

```
npm run doc
```
