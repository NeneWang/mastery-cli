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
    }
];


const flutter = [
    {
        term: "flutter | create",
        description: "Create a new flutter project",
        prompt: "Create a new flutter project",
        example: "flutter create myapp"
    },
    


];


module.exports = { react_terms, apex, flutter, IDE_S };