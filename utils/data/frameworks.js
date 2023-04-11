const react_terms = [
    {
        term: "Compilers", prompt: "What is a compiler in JS in OTerms? Whats their function?",
        description: "A JavaScript compiler takes JavaScript code, transforms it and returns JavaScript code in a different format. The most common use case is to take ES6 syntax and transform it into syntax that older browsers are capable of interpreting. Babel is the compiler most commonly used with React.",
        example: "A compiler is a special program that translates a programming language's source code into machine code, bytecode or another programming language."
    },
    {
        term: "Bundlers", prompt: "What are Bundlers in JS and CSS? and whats their function?",
        description: "Bundlers take JavaScript and CSS code written as separate modules (often hundreds of them), and combine them together into a few files better optimized for the browsers. Some bundlers commonly used in React applications include Webpack and Browserify.",
        example: "Similar to Linking, which means creating a single executable file from several multiple object files. In this step, it is common that the linker will complain about undefined functions which are commonly main themselves."

    },
    {
        term: "Package Managers", prompt: "What are Package Managers?",
        description: "Package managers are tools that allow you to manage dependencies in your project. npm and Yarn are two package managers commonly used in React applications. Both of them are clients for the same npm package registry."
    },
    {
        term: "(a) Components, (b) Props (c) props.children  (d) State (e) Controlled Component",
        prompt: "Describe (1+) the meaning on own words",
        description: "\n\
        (a) React components are small, reusable pieces of code that return a React element to be rendered to the page. The simplest version of React component is a plain JavaScript function that returns a React element\n\n\
        (b) props are inputs to a React component. They are data passed down from a parent component to a child component.\n\n\
        (c) props.children is available on every component. It contains the content between the opening and closing tags of a component. For example\n\n\
        (d) A component needs state when some data associated with it changes over time. For example, a Checkbox component might need isChecked in its state, and a NewsFeed component might want to keep track of fetchedPosts in its state.\n\n\
        (e) An input form element whose value is controlled by React is called a controlled component. When a user enters data into a controlled component a change event handler is triggered and your code decides whether the input is valid (by re-rendering with the updated value). If you do not re-render then the form element will remain unchanged.\n\n\
        "
    },



];


const apex = [
    {
        term: "len-substr-concatenate",
        description: ":m given: \n\
            ```java\n\
             String message = 'Hello, world!';\n\
             ```",
        prompt: "get the length of the message, get the first 5 characters of the message, concatenate the message with `Apex`",
        example: "int length = message.length();\n\
        String sub = message.substring(0, 5);\n\
        String newMessage = sub + 'Apex';\n\
        System.debug(newMessage);"
    },
    {
        term: "contains-trim-charAt",
        description: ":m given: \n\
            ```java\n\
             String message = '  Hello, world!  ';```",
        prompt: "check if message contains `world`, trim the message (remove any leading and trailing white space), and get the first character",
        example: ":m ```java\n\
        boolean contains = message.contains('world');\n\
        String trim = message.trim();\n\
        char first = trim.charAt(0);\n\
        System.debug(first);```"
    },
    // Datetime
    {
        term: "now-format-addDays",
        description: ":m given: \n\
            ```java\n\
                Datetime now = Datetime.now();```",
        prompt: "format the date to `yyyy-MM-dd`, and add 5 days to the date",
        example: ":m ```java\n\
        String format = now.format('yyyy-MM-dd');\n\
        Datetime newDate = now.addDays(5);\n\
        System.debug(newDate);```"

    },
    {
        term: "timzone-difference-parse",
        description: ":m given: \n\
            ```java\n\
                Datetime now = Datetime.now();\n\
                Datetime dt1 = Datetime.newInstance(2019, 1, 1, 0, 0, 0);\n\
                ```",
        prompt: "get the millisecond difference between dt1 and now and parse the date to `yyyy-MM-dd`",
        example: ":m ```java\n\
        Integer difference = now - dt1;\n\
        String parse = now.parse('yyyy-MM-dd');\n\
        System.debug(parse);```"
    },
    // Collections
    {
        term: "list-initialize-size-add-remove-sort",
        prompt: "initialize a list of size 5, add `Hello` to the list, remove `Hello` from the list, and sort the list",
        example: ":m ```java\n\
        List<String> list = new List<String>{'Hello', 'World', 'Apex'};\n\
        list.add('Hello');\n\
        list.remove('Hello');\n\
        list.sort();\n\
        System.debug(list);```"
    },
    {
        term: "query-records-into-list",
        description: "Givena a table Account with columns: id, name, email, phone, createddate, createdbyid, lastmodifieddate, lastmodifiedbyid",
        prompt: "query all records (id, name) from the table and store them in a list",
        example: ":m ```java\n\
        List<Account> accounts = [SELECT Id, Name FROM Account];\n\
        System.debug(accounts);```"

    },
    {
        term: "set-methods",
        prompt: "create  set of animals of 'dog', 'cat', 'bird' initizialization, get the size, add element, remove elemnt,  addAll, clone, retainAll(intersection), removeAll(difference)",
        example: ":m\n\
        ```js\n\
        // Initialization\nSet<String> animals = new Set<String>{'dog', 'cat', 'bird'};\nSystem.debug(animals); // Output: (dog, cat, bird)\n\n// Size\nInteger size = animals.size();\nSystem.debug(size); // Output: 3\n\n// Add Elements\nanimals.add('fish');\nSystem.debug(animals); // Output: (dog, cat, bird, fish)\n\n// Remove Elements\nanimals.remove('bird');\nSystem.debug(animals); // Output: (dog, cat, fish)\n\n// Contains\nBoolean containsDog = animals.contains('dog');\nSystem.debug(containsDog); // Output: true\nBoolean containsBird = animals.contains('bird');\nSystem.debug(containsBird); // Output: false\n\n// Union\nSet<String> pets = new Set<String>{'dog', 'cat', 'hamster'};\nSet<String> allAnimals = animals.clone();\nallAnimals.addAll(pets);\nSystem.debug(allAnimals); // Output: (dog, cat, fish, hamster)\n\n// Intersection\nSet<String> commonAnimals = animals.clone();\ncommonAnimals.retainAll(pets);\nSystem.debug(commonAnimals); // Output: (dog, cat)\n\n// Difference\nSet<String> differentAnimals = animals.clone();\ndifferentAnimals.removeAll(pets);\nSystem.debug(differentAnimals);\
        ```\
        ",
        description: ":m\n\
        ```js\n\
        // Initialization\nSet<String> animals = new Set<String>{'dog', 'cat', 'bird'};\nSystem.debug(animals); // Output: (dog, cat, bird)\n\n// Size\nInteger size = animals.size();\nSystem.debug(size); // Output: 3\n\n// Add Elements\nanimals.add('fish');\nSystem.debug(animals); // Output: (dog, cat, bird, fish)\n\n// Remove Elements\nanimals.remove('bird');\nSystem.debug(animals); // Output: (dog, cat, fish)\n\n// Contains\nBoolean containsDog = animals.contains('dog');\nSystem.debug(containsDog); // Output: true\nBoolean containsBird = animals.contains('bird');\nSystem.debug(containsBird); // Output: false\n\n// Union\nSet<String> pets = new Set<String>{'dog', 'cat', 'hamster'};\nSet<String> allAnimals = animals.clone();\nallAnimals.addAll(pets);\nSystem.debug(allAnimals); // Output: (dog, cat, fish, hamster)\n\n// Intersection\nSet<String> commonAnimals = animals.clone();\ncommonAnimals.retainAll(pets);\nSystem.debug(commonAnimals); // Output: (dog, cat)\n\n// Difference\nSet<String> differentAnimals = animals.clone();\ndifferentAnimals.removeAll(pets);\nSystem.debug(differentAnimals);\
        ```\
        "
    },
    {
        term: "set-vs-list",
        prompt: "What is the difference between set and list in Apex?",
        example: "    Elements:     A List can contain duplicate elements, while a Set cannot. Each element in a Set must be unique.      Order:     A List maintains the order in which elements were added, while a Set does not guarantee any specific order of its elements.      Lookup Time:     A Set provides faster lookup time compared to a List because it uses hashing algorithms to determine whether an element exists in the Set or not. On the other hand, a List has to traverse each element sequentially to find a specific element.      Performance:     Since Sets do not allow duplicates, they require extra processing to prevent duplicate elements from being added. As a result, adding elements to a Set can be slightly slower than adding elements to a List. However, Sets can be much faster than Lists when it comes to checking if an element is present or removing duplicates."

    },
    {
        term: "map-methods",
        example: ":m\n\
        ```js\n\
        // Initialization\nMap<String, Integer> ages = new Map<String, Integer>{'John' => 35, 'Mary' => 42, 'Bob' => 28};\nSystem.debug(ages); // Output: {Bob=28, John=35, Mary=42}\n\n// Size\nInteger size = ages.size();\nSystem.debug(size); // Output: 3\n\n// Put Elements\nages.put('Alice', 20);\nSystem.debug(ages); // Output: {Alice=20, Bob=28, John=35, Mary=42}\nages.put('Bob', 29);\nSystem.debug(ages); // Output: {Alice=20, Bob=29, John=35, Mary=42}\n\n// Remove Elements\nages.remove('Bob');\nSystem.debug(ages); // Output: {Alice=20, John=35, Mary=42}\n\n// Contains Key\nBoolean containsJohn = ages.containsKey('John');\nSystem.debug(containsJohn); // Output: true\nBoolean containsAlice = ages.containsKey('Alice');\nSystem.debug(containsAlice); // Output: true\nBoolean containsBob = ages.containsKey('Bob');\nSystem.debug(containsBob); // Output: false\n\n// Get Values\nList<Integer> allAges = new List<Integer>(ages.values());\nSystem.debug(allAges); // Output: (20, 35, 42)\
        ```\
        ",
        description: ":m\n\
        ```js\n\
        // Initialization\nMap<String, Integer> ages = new Map<String, Integer>{'John' => 35, 'Mary' => 42, 'Bob' => 28};\nSystem.debug(ages); // Output: {Bob=28, John=35, Mary=42}\n\n// Size\nInteger size = ages.size();\nSystem.debug(size); // Output: 3\n\n// Put Elements\nages.put('Alice', 20);\nSystem.debug(ages); // Output: {Alice=20, Bob=28, John=35, Mary=42}\nages.put('Bob', 29);\nSystem.debug(ages); // Output: {Alice=20, Bob=29, John=35, Mary=42}\n\n// Remove Elements\nages.remove('Bob');\nSystem.debug(ages); // Output: {Alice=20, John=35, Mary=42}\n\n// Contains Key\nBoolean containsJohn = ages.containsKey('John');\nSystem.debug(containsJohn); // Output: true\nBoolean containsAlice = ages.containsKey('Alice');\nSystem.debug(containsAlice); // Output: true\nBoolean containsBob = ages.containsKey('Bob');\nSystem.debug(containsBob); // Output: false\n\n// Get Values\nList<Integer> allAges = new List<Integer>(ages.values());\nSystem.debug(allAges); // Output: (20, 35, 42)\
        ```\
        ",
        prompt: "create a map of ages: {John: 35, Mary: 42, Bob: 28}, get the size, add element, remove elemnt,  addAll, clone, retainAll(intersection), removeAll(difference)"
    },
    {
        term: "select-or",
        prompt: "Get Accounts where Industry is Technology or Annual Revenue is greater than 1 million",
        example: ":m\n\
       ```js\n\
       List<Account> accounts = [SELECT Name, Industry, AnnualRevenue FROM Account WHERE Industry = 'Technology' OR AnnualRevenue > 1000000];\nSystem.debug(accounts)\n\
       ```\
       ",
    },
    {
        term: "select-in",
        prompt: "Get Accounts where Industry is Technology or Finance",
        example: ":m\n\
        ```js\n\
        List<Account> accounts = [SELECT Name, Industry, AnnualRevenue FROM Account WHERE Industry IN ('Technology', 'Finance')];\nSystem.debug(accounts);\n\
        ```\
        ",
        description: "List<Account> accounts = [SELECT Name, Industry, AnnualRevenue FROM Account"
    },
    {
        term: "select-like",
        prompt: "Get Accounts where email ends with gmail.com",
        example: ":m\n\
        ```js\n\
        List<Contact> contacts = [SELECT Name, Email FROM Contact WHERE Email LIKE '%gmail.com'];\nSystem.debug(contacts);\n\
        ```\
        ",
        description: "List<Contact> contacts = [SELECT Name, Email FROM Contact "
    },
    {
        term: "select-order",
        prompt: "Get Accounts where Annual Revenue is greater than 1 million and order by Annual Revenue",
        example: ":m\n\
        ```js\n\
        List<Account> accounts = [SELECT Name, Industry, AnnualRevenue FROM Account WHERE AnnualRevenue > 1000000 ORDER BY AnnualRevenue DESC];\nSystem.debug(accounts)\n\
        ```\
        ",
        description: "List<Account> accounts = [SELECT Name, Industry, AnnualRevenue FROM "
    },
    {
        term: "select-next-n-days",
        prompt: "Get Opportunities where Close Date is in the next 7 days",
        example: ":m\n\
        ```js\n\
        List<Account> accounts = [SELECT Name, CloseDate FROM Opportunity WHERE CloseDate = NEXT_N_DAYS:7];\
        ```\
        ",
        description: "List<Account> accounts = [SELECT Name, CloseDate FROM Opportunity..."
    },
    {
        term: "select-last-month",
        prompt: "Get Accounts where Created Date is in the last month",
        example: ":m\n\
        ```js\n\
        List<Account> accounts = [SELECT Name, CreatedDate FROM Account WHERE CreatedDate = LAST_MONTH];\
        ```\
        ",
        description: "List<Account> accounts = [SELECT Name, CreatedDate FROM Account... "
    },
    {
        term: "buffer-vs-cache",
        prompt: "What is the difference between Buffer and Cache? When would you use one over the other?",
        description: "Buffer and cache are two concepts that are often used in computer science and can sometimes be confusing.  A buffer is a temporary storage area in memory or a file that is used to hold data temporarily while it is being moved from one place to another. Buffers are commonly used in computer networking, where data is transmitted in packets that are too large to be processed at once. The data is stored in a buffer and then transmitted in smaller packets. Buffers can also be used to store data that is being read from or written to a file or other input/output device.  A cache, on the other hand, is a type of memory that is used to store frequently accessed data so that it can be accessed more quickly. Caches are used in many different areas of computing, such as web browsers, operating systems, and databases. In a web browser, for example, the cache stores frequently accessed web pages and images so that they can be loaded more quickly the next time they are accessed. In an operating system, the cache may store recently used files or applications so that they can be accessed more quickly.  In summary, buffers are used to temporarily store data during a transfer or processing, while caches are used to store frequently accessed data to improve performance. Buffers are typically used for data that is being transferred, while caches are typically used for data that is being accessed repeatedly.",
        example: "Buffer when building a instant message app, while you texting, Cache when you have a web and cahces some data."
    }

]

const IDE_S = [
    // Android Studio Shortcuts
    {
        term: "Android Studio | navigation keys | class search",
        description: "     Ctrl+N — Navigate to Class     Ctrl+Shift+N — Navigate to a File     Ctrl+B — Jump to Declarations     Alt+ ↑ — Jump to the Previous Method     Alt+↓ — Jump to Next Method     Ctrl+G — Jump to Line     Ctrl+E — Recent Files     Ctrl+Shift+Backspace — Jump to Last Edited Location     Ctrl+B — Find Declarations     Ctrl+Left Mouse(or)Ctrl+Alt+F7— Show Usage     Alt + F7 / Ctrl + F7 — Find usages /Find usages in file     Ctrl+Shift+B — Find Implementations     F3 — Find Next     Shift+F3 — Find Previous ",
        prompt: "Find a class named `Mock` | How to navigate to a file? ",
        example: "Ctrl+N Mock — Navigate to Class\n\n\
        Ctrl + Shift + N — Navigate to a File\n"
    },
    {
        term: "Android Studio | navigation keys | recent",
        description: "     Ctrl+N — Navigate to Class     Ctrl+Shift+N — Navigate to a File     Ctrl+B — Jump to Declarations     Alt+ ↑ — Jump to the Previous Method     Alt+↓ — Jump to Next Method     Ctrl+G — Jump to Line     Ctrl+E — Recent Files     Ctrl+Shift+Backspace — Jump to Last Edited Location     Ctrl+B — Find Declarations     Ctrl+Left Mouse(or)Ctrl+Alt+F7— Show Usage     Alt + F7 / Ctrl + F7 — Find usages /Find usages in file     Ctrl+Shift+B — Find Implementations     F3 — Find Next     Shift+F3 — Find Previous ",
        prompt: "Go to the recent file score.dart",
        example: "Ctrl+E score.dart — Recent Files"
    },
    {
        term: "Android Studio | navigation keys | declaration",
        description: "     Ctrl+N — Navigate to Class     Ctrl+Shift+N — Navigate to a File     Ctrl+B — Jump to Declarations     Alt+ ↑ — Jump to the Previous Method     Alt+↓ — Jump to Next Method     Ctrl+G — Jump to Line     Ctrl+E — Recent Files     Ctrl+Shift+Backspace — Jump to Last Edited Location     Ctrl+B — Find Declarations     Ctrl+Left Mouse(or)Ctrl+Alt+F7— Show Usage     Alt + F7 / Ctrl + F7 — Find usages /Find usages in file     Ctrl+Shift+B — Find Implementations     F3 — Find Next     Shift+F3 — Find Previous ",
        prompt: "Go to the declaration of a method, you are now hovering over response",
        example: "Ctrl Left mouse or Ctrl+B — Jump to Declarations => This will take you to the declaration of the method"
    },
    {
        term: "Android Studio | navigation keys | navigate to file",
        description: "     Ctrl+N — Navigate to Class     Ctrl+Shift+N — Navigate to a File     Ctrl+B — Jump to Declarations     Alt+ ↑ — Jump to the Previous Method     Alt+↓ — Jump to Next Method     Ctrl+G — Jump to Line     Ctrl+E — Recent Files     Ctrl+Shift+Backspace — Jump to Last Edited Location     Ctrl+B — Find Declarations     Ctrl+Left Mouse(or)Ctrl+Alt+F7— Show Usage     Alt + F7 / Ctrl + F7 — Find usages /Find usages in file     Ctrl+Shift+B — Find Implementations     F3 — Find Next     Shift+F3 — Find Previous ",
        prompt: "Navigate to a file named score.dart",
        example: "Ctrl+Shift+N score.dart — Navigate to a File => This will take you to the file, the difference with recent is that it will take longer to search"
    },

    {
        term: "Android Studio | navigation keys | find usage",
        description: "     Ctrl+N — Navigate to Class     Ctrl+Shift+N — Navigate to a File     Ctrl+B — Jump to Declarations     Alt+ ↑ — Jump to the Previous Method     Alt+↓ — Jump to Next Method     Ctrl+G — Jump to Line     Ctrl+E — Recent Files     Ctrl+Shift+Backspace — Jump to Last Edited Location     Ctrl+B — Find Declarations     Ctrl+Left Mouse(or)Ctrl+Alt+F7— Show Usage     Alt + F7 / Ctrl + F7 — Find usages /Find usages in file     Ctrl+Shift+B — Find Implementations     F3 — Find Next     Shift+F3 — Find Previous ",
        prompt: "Find the usage of a method, you are now hovering over response",
        example: "Ctrl+Alt+F7— Show Usage => This will show you all the places where the method is used"
    },
    // Selection Keys
    {
        term: "Android Studio | selection keys | select next occurence",
        description: "     Ctrl + W — Extend selection (selects a word->line->method->Class )     Ctrl +Shift+ W — Decrease Selection     Alt + J — Select next occurrence     Ctrl + Alt + Shift + J — Select all occurrences     Alt + Shift + J — Unselect occurrence     Ctrl+Shift+V — Paste from recent buffers (from a History of Copied Contents) ",
        prompt: "Select the next occurence of a word, you are now hovering over response How to all and how to unselect?",
        example: "Alt + J — Select next occurrence => This will place a cursor on the same next word\n\n\
        Ctrl + Alt + Shift + J — Select all occurrences => This will place a cursor on all the same words\n\n\
        Alt + Shift + J — Unselect occurrence => This will remove the cursor on the same word\n\n"
    },
    {
        term: "Android Studio | selection keys | Paste from recent clipboard",
        description: "     Ctrl + W — Extend selection (selects a word->line->method->Class )     Ctrl +Shift+ W — Decrease Selection     Alt + J — Select next occurrence     Ctrl + Alt + Shift + J — Select all occurrences     Alt + Shift + J — Unselect occurrence     Ctrl+Shift+V — Paste from recent buffers (from a History of Copied Contents) ",
        prompt: "Paste from recent clipboard",
        example: "Ctrl+Shift+V — Paste from recent buffers (from a History of Copied Contents) => This will show you all the recent clipboard"
    },
    // Editing Keys
    {
        term: "Android Studio | Editing keys | duplicate line",
        description: "     Ctrl+F6 — Refactor Code     Ctrl+D — Duplicate a Line/Selected part     Ctrl+Y — Delete a Line/Selected part     Ctrl+Q — Quick Documentation     Ctrl + Space — Code completion     Ctrl+Shift+Space — Smart code completion (by expected type removes unrelated suggestions)     Alt+Insert — Generate Code     Ctrl+J — Insert Live template     Ctrl + O — Override methods     Ctrl + I — Implement methods     Ctrl + Alt + T — Surround with…     Ctrl + / — Comment / uncomment with line comment     Ctrl + Shift + / — Comment / uncomment with block comment     Ctrl+Alt+L — Reformat code ",
        prompt: "Duplicate a line",
        example: "Ctrl+D — Duplicate a Line/Selected part => This will duplicate the line"
    },
    {
        term: "Android Studio | Editing keys | delete line",
        description: "     Ctrl+F6 — Refactor Code     Ctrl+D — Duplicate a Line/Selected part     Ctrl+Y — Delete a Line/Selected part     Ctrl+Q — Quick Documentation     Ctrl + Space — Code completion     Ctrl+Shift+Space — Smart code completion (by expected type removes unrelated suggestions)     Alt+Insert — Generate Code     Ctrl+J — Insert Live template     Ctrl + O — Override methods     Ctrl + I — Implement methods     Ctrl + Alt + T — Surround with…     Ctrl + / — Comment / uncomment with line comment     Ctrl + Shift + / — Comment / uncomment with block comment     Ctrl+Alt+L — Reformat code ",
        prompt: "Delete a line",
        example: "Ctrl+Y — Delete a Line/Selected part => This will delete the line"
    },
    {
        term: "Android Studio | Editing keys | quick documentation",
        description: "     Ctrl+F6 — Refactor Code     Ctrl+D — Duplicate a Line/Selected part     Ctrl+Y — Delete a Line/Selected part     Ctrl+Q — Quick Documentation     Ctrl + Space — Code completion     Ctrl+Shift+Space — Smart code completion (by expected type removes unrelated suggestions)     Alt+Insert — Generate Code     Ctrl+J — Insert Live template     Ctrl + O — Override methods     Ctrl + I — Implement methods     Ctrl + Alt + T — Surround with…     Ctrl + / — Comment / uncomment with line comment     Ctrl + Shift + / — Comment / uncomment with block comment     Ctrl+Alt+L — Reformat code ",
        prompt: "Quick documentation",
        example: "Ctrl+Q — Quick Documentation => This will show you the documentation of the method"
    },
    {
        term: "Android Studio | Editing keys | code completion",
        description: "     Ctrl+F6 — Refactor Code     Ctrl+D — Duplicate a Line/Selected part     Ctrl+Y — Delete a Line/Selected part     Ctrl+Q — Quick Documentation     Ctrl + Space — Code completion     Ctrl+Shift+Space — Smart code completion (by expected type removes unrelated suggestions)     Alt+Insert — Generate Code     Ctrl+J — Insert Live template     Ctrl + O — Override methods     Ctrl + I — Implement methods     Ctrl + Alt + T — Surround with…     Ctrl + / — Comment / uncomment with line comment     Ctrl + Shift + / — Comment / uncomment with block comment     Ctrl+Alt+L — Reformat code ",
        prompt: "Code completion",
        example: "Ctrl + Space — Code completion => This will show you the suggestions"
    },
    {
        term: "Android Studio | Editing keys | Override and Implement Methods",
        description: "     Ctrl+F6 — Refactor Code     Ctrl+D — Duplicate a Line/Selected part     Ctrl+Y — Delete a Line/Selected part     Ctrl+Q — Quick Documentation     Ctrl + Space — Code completion     Ctrl+Shift+Space — Smart code completion (by expected type removes unrelated suggestions)     Alt+Insert — Generate Code     Ctrl+J — Insert Live template     Ctrl + O — Override methods     Ctrl + I — Implement methods     Ctrl + Alt + T — Surround with…     Ctrl + / — Comment / uncomment with line comment     Ctrl + Shift + / — Comment / uncomment with block comment     Ctrl+Alt+L — Reformat code ",
        prompt: "Override and Implement Methods",
        example: "Ctrl + O — Override methods => This will show you the methods that you can override\n\n\
        Ctrl + I — Implement methods => This will show you the methods that you can implement"
    },
    // Running and Debugging
    {
        term: "Android Studio | Running and Debugging | run",
        description: "     Ctrl + F9 — Compile and Run Make a project     Ctrl + Shift + F9 — Compile selected file, package or module     Shift + F10 — Run     Shift + F9 — Debug     Ctrl + Shift + F10 — Run context configuration from editor \n\
        F8 / F7 — Step over / into     Shift + F7 / Shift + F8 — Smart step into/Step out     Alt + F9 — Run to cursor     Alt + F8 — Evaluate expression     F9 — Resume program     Ctrl + F8 — Toggle breakpoint     Ctrl + Shift + F8 — View breakpoints ",
        prompt: "Compile and Run Make a project, what is the difference between run and compile-run?",
        example: "Ctrl + F9 — Compile and Run Make a project => This will compile and run the project\n\
        Shift + F10 — Run => This will run the project\n\n\
        The difference between the two is that the first one will compile the project and then run it, while the second one will just run the old project"
    }
];


const flutter_dart = [
    {
        term: "flutter | create",
        description: "Create a new flutter project",
        prompt: "Create a new flutter project",
        example: "flutter create myapp"
    },
    {
        term: "flutter | run",
        description: "Run the flutter project",
        prompt: "Run the flutter project",
        example: "flutter run"
    },
    {
        term: "dart | string | interpolation",
        description: "To put the value of an expression inside a string, use ${expression}. If the expression is an identifier, you can omit the {}.",
        prompt: "What will the following print? \n\
        (1) print('${3 + 2}');\n\
        (2) print('${\"word\".toUpperCase()}');\n\
        (3) print('$myObject');\n\
        ",
        example: "1. 5\n\
        2. WORD\n\
        3. The value of myObject.toString()"
    },
    {
        term: "dart | nullable variable",
        description: "When creating a variable in Dart 2.12 or higher, you can add ? to the type to indicate that the variable can be null:     int? a = null; // Valid in null-safe Dart.  ",
        prompt: "simplify that code:",
        example: "int? a; // The initial value will be null"
    },
    {
        term: "dart | null-aware",
        description: ":m Dart offers some handy operators for dealing with values that might be null. One is the ??= assignment operator, which assigns a value to a variable only if that variable is currently null:\n\n\
        ```dart\n\
        int? a; // = null\na ??= 3;\nprint(a); // <-- Prints 3.\na ??= 5;\nprint(a); // <-- Still prints 3.\n```\n\n",
        prompt: "What will be the output of the following code?\n\
        ```dart\n\
        print(1 ?? 3);\nprint(null ?? 12);.\n```\n\n",
        example: "1\n\
        12"
    },
    {
        term: "dart | list, set, map | map",
        description: "Dart’s type inference can assign types to these variables for you. In this case, the inferred types are List<String>, Set<String>, and Map<String, int>.\n\
        Or you can specify the type yourself:  \n\
        final aListOfInts = <int>[];    final aSetOfInts = <int>{};     final aMapOfIntToDouble = <int, double>{};\n\
        \nSpecifying types is handy when you initialize a list with contents of a subtype, but still want the list to be List<BaseType>:  \n\n\
        final aListOfBaseType = <BaseType>[SubType(), SubType()];  ",
        prompt: "// Assign this a map of String to int so that aMapOfStringsToInts['myKey'] returns 12:\n\
        final aMapOfStringsToInts = ",
        example: "final aMapOfStringsToInts = <String, int>{'myKey': 12};"
    },
    {
        term: "dart | list, set, map assignation | List doubles",
        description: "Dart’s type inference can assign types to these variables for you. In this case, the inferred types are List<String>, Set<String>, and Map<String, int>.\n\
        Or you can specify the type yourself:  \n\
        final aListOfInts = <int>[];    final aSetOfInts = <int>{};     final aMapOfIntToDouble = <int, double>{};\n\
        \nSpecifying types is handy when you initialize a list with contents of a subtype, but still want the list to be List<BaseType>:  \n\n\
        final aListOfBaseType = <BaseType>[SubType(), SubType()];  ",
        prompt: "Assign this an empty List<double>:\n\
        final anEmptyListOfDouble = ",
        example: "final anEmptyListOfDouble = <double>[];"
    },
    {
        term: "dart | list, set, map assignation | double",
        description: "Dart’s type inference can assign types to these variables for you. In this case, the inferred types are List<String>, Set<String>, and Map<String, int>.\n\
        Or you can specify the type yourself:  \n\
        final aListOfInts = <int>[];    final aSetOfInts = <int>{};     final aMapOfIntToDouble = <int, double>{};\n\
        \nSpecifying types is handy when you initialize a list with contents of a subtype, but still want the list to be List<BaseType>:  \n\n\
        final aListOfBaseType = <BaseType>[SubType(), SubType()];  ",
        prompt: "// Assign this an empty Set<String>:\n\
        final anEmptySetOfString = ",
        example: "final anEmptyListOfDouble = <String>{};"
    },
    {
        term: "dart | cascade | null cascade",
        description: ":m Here’s the same expression with a cascade:\n\
        ```dart\n\
        myObject..someMethod()\n\
        ```\n\
        Although it still invokes someMethod() on myObject, the result of the expression isn’t the return value—it’s a reference to myObject!  Using cascades, you can chain together operations that would otherwise require separate statements. For example, consider the following code, which uses the conditional member access operator (?.) to read properties of button if it isn’t null:\n\
        ```dart\n\
        var button = querySelector('#confirm');\nbutton?.text = 'Confirm';\nbutton?.classes.add('important');\nbutton?.onClick.listen((e) => window.alert('Confirmed!'));\nbutton?.scrollIntoView();\n\
        ```\n\
        ",
        prompt: "Convert the latter example into a null shorting cascade (?..)",
        example: "```dart\n\
        querySelector('#confirm') ?..text = 'Confirm'..classes.add('important')..onClick.listen((e) => window.alert('Confirmed!'))..scrollIntoView();\n\
        ```"
    },
    {
        term: "dart | optional parameters | positional ",
        prompt: "change the header of the following so that the second and third parameters are optional:\n\
        int sumUp(int a, int b, int c)\n\n\
        so that these works:\n\
        int total = sumUpToFive(1, 2);\n\
        int total_2 = sumUpToFive(1, 2, 3);\n",
        example: "int sumUp(int a, [int? b, int? c])\n\
        or: int sumUp(int a, [int b = 0, int c = 0])"
    },
    {
        term: "dart | optional parameters | named",
        prompt: "change the header of the following so that the third parameters is optional and is named:\n\
        int sumUp(int a, int b, int c)\n\n\
        so that these works:\n\
        (Suppose that we want to assign: a => 1, b => 2, c => 3)\n\
        int total = sumUpToFive(1, c:3, 2);\n",
        example: "int sumUp(int a, int b, {int? c})"
    },
    {
        term: "dart | exceptions | catching",
        description: ":m\n\
        ```dart\n\
        class OutOfLlamasException implements Exception {\n String errorMessage() {\n return 'Out of Llamas!';\n }\n}\n\n\
        throw OutOfLlamasException();\n\
        throw Exception('Something bad happened.');\n\
        throw 'Waaaaaaah!';\n\
        ```",
        prompt: ":m complete the missing snippet so that both exceptions and errors are caught:\n\
        ```dart\n\
        try {\n breedMoreLlamas();\n} on [#1] {\n // A specific exception\n buyMoreLlamas();\n} [#2] {\n // Anything else that is an exception\n print('Unknown exception: $e');\n} [#3] {\n // No specified type, handles all\n print('Something really unknown: $e');\n}\n\
        ```",
        example: "#1 OutOfLlamasException\n\
        #2 on Exception catch (e)\n\
        #3 catch (e)\n\
        "
    },
    {
        term: "dart | exceptions | rethrow",
        description: ":m If you can’t completely handle the exception, use the rethrow keyword to propagate the exception:\n\
        ```dart\n\
        try {\n breedMoreLlamas();\n} catch (e) {\n print('I was just trying to breed llamas!');\n rethrow;\n}\n\
        ```\n\
        To execute code whether or not an exception is thrown, use finally:\n\
        ```dart\n\
        try {\n breedMoreLlamas();\n} catch (e) {\n // ... handle exception ...\n} finally {\n // Always clean up, even if an exception is thrown.\n cleanLlamaStalls();\n}\n\
        ```",
        prompt: "Whats the difference between finally and rethrow?",
        example: "finally is always executed, rethrow is used to propagate the exception"
    },
    {
        term: "dart | this | constructor",
        description: ":m\n\
        ```dart\n\
        class MyColor {\n int red;\n int green;\n int blue;\n\n MyColor(this.red, this.green, this.blue);\n}\n\nfinal color = MyColor(80, 80, 128);\n\
        ```",
        prompt: "Modify the constructor of My Class Color so that red, green and blue are optional and default to 0",
        example: "final color = MyColor(red: 80, green: 80, blue: 80);"
    },
    {
        term: "dart | this | constructor",
        description: ":m\n\
        ```dart\n\
        class MyColor {\n int red;\n int green;\n int blue;\n\n MyColor(this.red, this.green, this.blue);\n}\n\nfinal color = MyColor(80, 80, 128);\n\
        ```",
        prompt: "Modify the constructor of My Class Color so that red, green and blue are named (mandatroy) properties",
        example: "MyColor({required this.red, required this.green, required this.blue});"
    },
    {
        term: "dart | named constructors",
        description: ":m\n\
        ```dart\n\
        class Point {\n double x, y;\n\n Point(this.x, this.y);\n\n Point.origin()\n : x = 0,\n y = 0;\n}\n\
        ```",
        prompt: "Used the named constructor to create a point at the origin",
        example: "final origin = Point.origin();"
    },
    {
        term: "dart | factory constructors",
        description: ":m\n\
        ```dart\n\
        class Square extends Shape {}\nclass Circle extends Shape {}\nclass Shape {\n Shape();\n\n ## Complete HERE {\n if (typeName == 'square') return Square();\n if (typeName == 'circle') return Circle();\n\n throw ArgumentError('Unrecognized $typeName');\n }\n}\n\
        ```",
        prompt: "Complete the factory constructor so that it returns a Square or a Circle depending on the typeName",
        example: "factory Shape.fromTypeName(String typeName)"
    }
    
    


];


module.exports = { react_terms, apex, flutter: flutter_dart, IDE_S };