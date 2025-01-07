# Mastery CLI

![](https://media.giphy.com/media/eveBk0ptKzjqUe0iTg/giphy.gif)

Docs: https://nenewang.github.io/mastery-cli/

Mastery CLI: Your Command Line Assistant for Programmer Development"

Mastery CLI is a comprehensive tool designed to boost your programming skills. It features flashcards, DSA practice, statistics, and habit hooks. For instance, every commit now triggers a random flashcard or suggests a DSA problem to solve, fostering continuous learning.

Key Highlights:

- Easily track personal project goals, such as daily commits.
- Access over 150 offline programming problems with accompanying offline tests and a built-in compiler.
- Seamlessly collect and sync progress across devices when connected to the internet.
- Establish habit hooks, like integrating flashcards and math practice into your development cycle.
- Utilize an offline algorithm that identifies weaknesses and generates quick flashcards for memory refresh.
- Enjoy free flashcard decks covering Computer Science Architecture, Networking, AWS, System Design, Design Patterns, and more. Plus, easily share your flashcard decks.


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




# Developer Notes

If you are a developer feel free to contribute the project, for installing as a adeveloper:

Make sure you have both `git` and `node` installed.

```
git clone https://github.com/NeneWang/mastery-cli.git
cd mastery-cli
npm install
npm link
```

That's it!, you can now run `mastery` from the command line.



### Organization

Advantage and Reasoning

This wa advantageous because the client api had the flexibility to work with the individual components, lets say, 'kotlin flashcards' in the same way it would trat the entire hierarchy e.g. 'programming flashcards'.

This is an example of how the strucutre supports both itself and their children components:

```js


    /**
     * Returns list of deck title. e.g.
     * [kotlin, java, javascript...]
     */
    get deck_titles() {
        const deck_names = [this.deck_name];
        for (const deck of this.decks) {
            deck_names.push(...deck.deck_titles);
        }
        return deck_names;
    }

    
    /**
     * Returns list of deck titles with the count of cards inside: e.g.:
     * [kotlin - 3, java - 5, javascript - 10...]
     */
    get deck_titles_with_count(){
        const deck_names = [`${this.deck_name} - ${this.terms.length}`];
        for (const deck of this.decks) {
            deck_names.push(...deck.deck_titles_with_count);
        }
        return deck_names;
    }

```

![](./img/2024-01-12-11-57-29.png)


**Solid Principles**

    S - Single-responsiblity Principle
    O - Open-closed Principle
    L - Liskov Substitution Principle
    I - Interface Segregation Principle
    D - Dependency Inversion Principle

Listov Substitution Principle:
This means that every subclass or derived class should be substitutable for their base or parent class.

**Deliverate Practice and the Scheduling System**

Deliberate practice refers to a special type of practice that is purposeful and systematic. While regular practice might include mindless repetitions, deliberate practice requires focused attention and is conducted with the specific goal of improving performance.


**Optimization**

async/await: The async/await syntax, introduced in ECMAScript 2017 (ES8), provides a more intuitive way to work with asynchronous code. The async keyword is used to define asynchronous functions, and the await keyword is used within these functions to pause execution until a promise is resolved. This makes asynchronous code appear more like synchronous code, which can be easier to understand.

**Testing**

Scope:

    Unit Testing:
        Focuses on testing individual components or units of code in isolation, such as functions, methods, or classes.
        The primary goal is to ensure that each unit of code works correctly as per its design and specifications.
        Typically written and executed by developers during the coding phase.

    Functional Testing:
        Focuses on testing the entire software application or specific functionalities as a whole.
        The primary goal is to verify that the software functions correctly according to specified requirements, user expectations, and the intended use cases.
        Conducted on a fully integrated and assembled system.

Isolation:

    Unit Testing:
        Isolates the unit being tested from the rest of the application by using mock objects, stubs, or other techniques.
        Dependencies on external systems, components, or services are typically simulated or replaced.

    Functional Testing:
        Does not isolate individual units but tests the application in a real-world environment with all its components, including external dependencies.

Test Scope:

    Unit Testing:
        Tests focus on the smallest code units, such as individual functions or methods.
        Granular and fine-grained tests are common, targeting specific code paths and edge cases.

    Functional Testing:
        Tests cover a broader scope and assess the software's functionality from a user's perspective.
        Typically, high-level test scenarios and user interactions are tested.

Timing:

    Unit Testing:
        Typically performed during the development phase, often concurrently with code writing.
        Helps developers catch and fix issues early in the development process.

    Functional Testing:
        Usually conducted after unit testing, during the testing or quality assurance phase, and sometimes during the user acceptance testing (UAT) phase.

Test Environment:

    Unit Testing:
        Executes in a controlled environment, with a focus on the unit's specific logic and behavior.
        Dependencies are often replaced with mock objects or stubs.

    Functional Testing:
        Executes in a more realistic environment that mirrors the production setup, including databases, external services, and user interfaces.

Test Objective:

    Unit Testing:
        Primarily focuses on verifying the correctness of individual code units and their interactions.
        Aims to detect and resolve bugs at the code level.

    Functional Testing:
        Focuses on validating that the software meets functional requirements and user expectations.
        Aims to ensure that the software functions correctly as a whole.



****

#### Credits and Updates

- Removing the following libraries to make the program shorter.

```
express
markdown-it-toc-done-right
"esm": "^3.2.25",
```

Added

```js
node-fetch => For fetching images 
```



