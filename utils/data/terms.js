

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */


const { network, artificialIntelligence, algebra, calculousOne } = require("./fall23");

const designPatterns = [
    { term: "solid", prompt: "What are the SOLID principles? Mention at least 3", example: "     S - Single-responsiblity Principle     O - Open-closed Principle     L - Liskov Substitution Principle     I - Interface Segregation Principle     D - Dependency Inversion Principle " },
    { term: "Single Responsability Principle", description: "The single responsibility principle provides another substantial benefit. Classes, software components and microservices that have only one responsibility are much easier to explain, understand and implement than the ones that provide a solution for everything.", prompt: "How could you or are using this SOLID principle?" },
    { term: "Specification Pattern", description: "Specification of which objects satisfy certain business rules should be reusable (DRY). In order to do that we will create a class with sole responsibility of determining, whether object satisfies the rules or not.", prompt: "Example usage of this in current and future projects" },
    {
        term: "Open Closed Principle", description: "The Open/Closed Principle states that software entities (classes, modules, etc.) should be open for extension, but closed for modification. What does this mean, and why is it an important principle of good object-oriented design?\n \
    Open/closed principle is intended to mitigate risk when introducing new functionality. Since you don't modify existing code you can be assured that it wouldn't be broken. It reduces maintenance cost and increases product stability.\n \
    ", prompt: "How could you use this in current/future project, or where have you seen this principle"
    },
    { term: "Singleton Pattern", description: "Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.", prompt: "Example usage for this." },
    {
        term: "Liskov Substitution Principle",
        description: " Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. \n \
    \n \
    This helps us model good inheritance hierarchies. It helps us prevent model hierarchies that don't conform to the Open/Closed principle. Any inheritance model that adheres to the Liskov Substitution Principle will implicitly follow the Open/Closed principle.",
        prompt: "How could you use this principle? What could you fix in the future, any of your code is violeting this principle?"
    },
    {
        term: "Interface Segregation Principle", description: "Clients should not be forced to depend upon interfaces that they do not use.\n \
    Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts.\n \
   Advantages: Doesn't  implement methods we dont need. Increases readability and maintainability of our code.",
        prompt: "How could you improve your existent code using this principle?"
    },
    {
        term: "Dependency Inversion Principle", description: "Depends on the dependency states is that high level classes should not depend on low level but on abstractions. Class with abstract methods. Swap one from the other. Advantages: gives flexibility and stability at the level of the entire architecture of your application. It will allow your application to evolve more securely and stable.\n \
        > In the same way that ceo should not double as a truck driver, Higher level clases shouldnt implement low levels classes.",
        prompt: "What other real life alternatives examples are here? And how can you use this to improve your code?"
    },
    {
        term: "Builder Pattern", description: "Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.\n \
        The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.\n \
        Director: You can go further and extract a series of calls to the builder steps you use to construct a product into a separate class called director. The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.",
        prompt: "How could you implement this to any of the current projects? What are the advantages? Hypothetical case?", attachment: "./img/2023-01-25-15-31-30.png"
    },
    {
        term: "Factory Pattern", attachment: "./img/img/2023-01-26-10-39-16.png.png", example: "The advantage of the PointFactory over the Builder pattern is that it provides a simple way to create objects without exposing the internal complexity of the object creation process. This can make the code more readable and maintainable, as the client code only needs to call the factory method and does not need to know the details of how the object is created. Additionally, the PointFactory can also provide additional functionality, such as caching or validation, that can make the object creation process more efficient.",
        prompt: "Whats the advantage over Builder Pattern? How can you use it on future/imaginative project?", description: "The Factory Method pattern is a design pattern used to create objects. It defines an interface for creating an object, but allows subclasses to alter the type of objects that will be created. \n \
        \n \
        The Factory Method pattern consists of three parts:\n \
        \n \
        (1) The Creator abstract class, which defines a factory method that returns an object of the Product type.\n \
        \n \
        (2) The ConcreteCreator subclasses, which implement the factory method and return an instance of a ConcreteProduct.\n \
        \n \
        (3) The Product interface, which defines the type of objects that the factory method creates.\n \
        \n \
        The advantage of using the Factory Method pattern is that it allows you to encapsulate the process of creating objects and make it more flexible. Because the client code only interacts with the Creator class through the factory method, it can be changed to create a different type of object without affecting the client code. This can be useful in cases where the type of object to be created is not known until runtime, or where the client code should not be tightly coupled to the classes that are responsible for creating the objects. It also allows to provide a single point of control over the creation process and can add additional functionality such as caching, logging, etc. In summary, the Factory Method pattern is a way to create objects without specifying the exact class of object that will be created, providing a way to centralize and encapsulate the creation process, making it more flexible and maintainable."
    },
    {
        term: "Adapters", description: "The Adapter design pattern is used to convert the interface of one class into another interface that the client expects. Here are some advantages and disadvantages of using adapters:\n \
        Advantages:\n \
        Improved compatibility: Adapters allow existing classes to work together that couldn't otherwise because of incompatible interfaces.\n \
        Increased reusability: Adapters can make it easier to reuse existing code by converting it to a form that is more appropriate for the current application.\n \
        Increased flexibility: Adapters can make it easier to change the interface of a class without modifying the class itself.\n \
        Loose coupling: Adapters allow the client and adaptee classes to be loosely coupled, so that changes to one class will not affect the other.\n \
        Disadvantages:\n \
        Increased complexity: Adapters can make the code more complex, especially in large codebases or when multiple adapters are used.\n \
        Reduced performance: Adapters can add an additional layer of indirection, which can slow down the performance of the application.\n \
        Harder to debug: Adapters can make it harder to debug the application, especially if the adaptee class is not well-documented or is hard to understand.\n \
        Limited functionality: Adapters can only convert the interface of a class, they cannot add new functionality to it."
        , prompt: "How could you use adapters in daily life or in one of your projects?"
    },
    {
        term: "The Bridge", description: "The Bridge design pattern is a structural pattern that is used to separate an abstraction from its implementation. It allows the two to evolve independently and provides a way to change the implementation of an abstraction without affecting its clients.\n \
        Advantages:\n \
        Decoupling: The Bridge pattern decouples the abstraction from the implementation, which makes it easier to change the implementation without affecting the clients.\n \
        Increased flexibility: The Bridge pattern allows for the implementation of an abstraction to be changed at runtime, making the code more flexible.\n \
        Improved maintainability: The Bridge pattern improves the maintainability of the code by allowing the abstraction and the implementation to evolve independently.\n \
        Reducing complexity: The Bridge pattern can be useful in situations where you want to avoid a combinatorial explosion of subclasses.\n \
        Disadvantages:\n \
        Increased complexity: The Bridge pattern can make the code more complex, especially in large codebases or when multiple bridges are used.\n \
        Reduced performance: The Bridge pattern can add an additional layer of indirection, which can slow down the performance of the application.\n \
        Limited functionality: The Bridge pattern can only separate the interface and implementation, it cannot add new functionality to it.\n \
        Harder to debug: The Bridge pattern can make it harder to debug the application, especially if the implementation class is not well-documented or is hard to understand.",
        prompt: "", example: "the Bridge design pattern is like having a remote control for your TV. The remote control is the abstraction, and the TV is the implementation. The remote control lets you change the channel, turn the volume up and down, and do other things, but it doesn't actually do anything on its own. It just sends signals to the TV, which is the part that actually changes the channel and adjusts the volume.\n \
        \n \
        The remote control and the TV can change independently of each other. For example, you can change the batteries in the remote control without affecting the TV. You can also buy a new TV that has different features, but you can still use your old remote control to control it. This is similar to how the Bridge pattern allows the abstraction and the implementation to evolve independently.\n \
        \n \
        So, the Bridge pattern is a way of connecting two things so they can work together, while still being able to change them independently. It makes the code more flexible and maintainable, but it can also make it more complex."
    },
    {
        term: "Composite Design Pattern", description: "The Composite design pattern is a way to structure a program so that it can have objects that are made up of other objects. Imagine that you have a school project where you have to build a tree out of different materials like paper, cardboard, and glue. The tree is made up of branches and leaves, and each branch is made up of smaller branches and leaves.\
        It allows you to treat individual objects and compositions of objects in the same way, making it easier to work with complex structures.\
        It promotes the Single Responsibility Principle by allowing each class to only handle its own specific part of the structure.\
        It promotes code reusability, as the same classes can be used to create different structures.\
        \
    Disadvantages of using the Composite design pattern include:\
        It can make code more complex and harder to understand, especially if there are many levels of nesting in the structure.\
        It can make it harder to debug the code, because it can be difficult to trace through the structure to find the source of an error.\
        It can lead to performance issues if the structure is too deep or if there are too many elements in the structure.",
        prompt: "Where do you think it would make sense to implement such design pattern? What applications?"
    },
    {
        term: "Decorator Design Pattern", description: "The Decorator pattern is a way to add new behavior to an object without changing the object's class. Imagine you're a student and you want to decorate a plain notebook with stickers, pictures and drawings. The notebook is your object and the stickers, pictures and drawings are the new behavior you want to add. (The important thing is to make it work at runtime.)",
        prompt: "Provide an example of how could you use this Design Pattern?"
    },
    { term: "Proxy Pattern", description: "A class that functions as an interface to a particular resource. That resource may be remote, expensive to construct, or may require logging or some other functionality.", prompt: "Name an example in how you could use this pattern on", example: "Creating a protection proxy: For protecting business logic", }

];


const dataStructures = [
    {
        term: "Heap", prompt: "Re explain one of the advantages of using Heaps",

        description: "Heaps are a specialized tree-based data structure that are used for various purposes such as priority queues, sorting, graph algorithms, and memory management. Here are some advantages and disadvantages of using heaps:\
        \n\
        Advantages:\
        Fast Insertion and Extraction: Heaps have a fast time complexity for insertion and extraction operations, making them suitable for use in situations where elements are frequently added or removed.\
        Efficient Priority Queue: Heaps can be used to implement priority queues, which are used in many algorithms to efficiently extract the element with the highest or lowest priority.\
        Sorting: Heapsort is a comparison-based sorting algorithm that has a time complexity of O(n log n) which is efficient for sorting large datasets.\
        Memory Management: Heaps are used in memory management to allocate memory dynamically to a program at runtime.\Disadvantages:\
        \n\
        Slow Random Access: Heaps are not well suited for random access, as the time complexity for searching for a specific element is O(n)\
        Not Cache-Friendly: Heaps are not cache-friendly, as the elements are not stored contiguously in memory, which can lead to cache misses and slow down the performance of the application.\
        Complexity: Heaps can be complex to implement, especially when compared to simpler data structures such as arrays or linked lists.\
        In summary, heaps have advantages such as fast insertion and extraction, efficient priority queue, sorting, and memory management. However, they also have some disadvantages such as slow random access, not being cache-friendly and complexity to implement. It's worth noting that using Heaps is not always the best option, it depends on the problem and the use case, for instance, if you require random access or cache-friendliness, then you might want to consider other data structures like balanced trees."
    }
];


const cloud = [
    { term: "Concurrent Computing", example: "yes", description: "In concurrent computing, multiple calculations are made within overlapping time frames. It takes advantage of the concept that multiple threads or processes can make progress on a task without waiting for others to complete. This general approach to writing and executing computer programs is called concurrency.  Concurrent computing is different than synchronous (sequential) computing, where calculations are made one after the other, with each waiting for the previous to complete. It's not the same as parallel computing, where calculations are made simultaneously on separate processors.  The three main types of concurrent computing are threading, asynchrony, and preemptive multitasking. Each method has its own special precautions which must be taken to prevent race conditions, where multiple threads or processes access the same shared data in memory in improper order.", prompt: "Whats the difference between different concurrent computing types?" },
];

const test = [
    {
        term: "Concurrent Computing", example: "yes", description: "In concurrent ", attachment: "./img/2023-01-25-15-31-30.png"
    }
];


// Some things to populate in the future
const business = [];

const pandasMethods = [];

const marketingTerms = [];

const coderTerms = [
    {
        term: "Business Logic Modules Overview",
        description: "Business logic modules are independent code components that multiple business logic units use. Code reuse eases the maintenance of the business logic. Reuse eliminates code duplication and enables you to apply system-wide logic changes quickly and easily.\
        The system uses two of the metrics to describe the helpdesk performance:\
        Metric name:  Successful Ticket resolution on time.\
        Objective statement:  \
        No less than 99% of the tickets should be resolved within 4 hours.\
        Business logic: \
        Resolution should be calculated from Open to Closed.",
        prompt: "Create an example of a business logic."
    },
    {
        term: "Tech bus terms I", description: "\
        (a) Enterprise Project (b) Regression (c) Branch Coverage Metric (d) MUT (e) Mock (f) Double (g) SUT",
        example: "\
        (a) An enterprise application is an application that aims at automating or assisting an organizations inner processes. It can take many forms, but usually the characteris- tics of an enterprise software are  High business logic complexity  Long project lifespan  Moderate amounts of data  Low or moderate performance requirement\
        (b)  when a feature stops working as intended after a cer- tain event (usually, a code modification). The terms regression and software bug are synonyms and can be used interchangeably.\
        (c) To calculate the branch coverage metric, you need to sum up all possible branches in your code base and see how many of them are visited by tests.\
        (d)  a method in the SUT called by the test. The terms MUT and SUT are often used as synonyms, but normally, MUT refers to a method while SUT refers to the whole class -> NAME the class under test using variable sut\
        (e) A mock is a special kind of test double that allows you to examine interactions between the system under test and its collaborators.\
        (f) an overarching term that describes all kinds of non-production-ready, fake dependencies in a test\
        (g) System Under Test\
        ",
        prompt: "Explain any of the following"
    }
]


const unit_testing = [
    {
        term: 'testing upkeeps',
        description: " Refactoring the test when you refactor the underlying code  Running the test on each code change  Dealing with false alarms raised by the test  Spending time reading the test when you’re trying to understand how the underlying code behaves",
        prompt: "What to consider before creating our tests?"
    },
    {
        term: "(a) Shared, (b) private, and (c) out-of-process dependencies (d) volatile (e) Collaborator, (f) Cyclomatic Complexity", prompt: "Use this definitions on a sentence:",
        description: "\
        \
       (a) A shared dependency is a dependency that is shared between tests and provides means for those tests to affect each other’s outcome. A typical example of shared dependencies is a static mutable field. \
       (b) A private dependency is a dependency that is not shared\
       (c) An out-of-process dependency is a dependency that runs outside the application’s execution process; it’s a proxy to data that is not yet in the memory.\
       (d) that exhibits one of the following: It introduces a requirement to set up and configure a runtime environment inaddition to what is installed on a developer’s machine by default. Databasesand API services are good examples here. They require additional setup andare not installed on machines in your organization by default. It contains nondeterministic behavior. An example would be a random num-ber generator or a class returning the current date and time. These depen-dencies are non-deterministic because they provide different results on eachinvocation\
       (e) Collaborator: providing access to the database is a collaborator since the database is a shared dependency \
       (d) indicates the number of branches in a given program or method. This metric is calculated as 1 + <number of branching points> You can think of it as the amount of tests to reach 100% branch coverage\
       \
        "
    },
    {
        term: "Chicago vs London School of TDD", prompt: "In which situation would you use each of them?",
        description: "\
        Chicago school: Test changes in the state, then test the return values | Better for Functional Architecture \n\
        London School: Desing from top down, and test the Interactions between. Characterized with ideas of mocks (Just interfaces) | Better for Object oriented architecture.  \
        ",
        attachment: "./img/2023-02-01-14-34-56.png"
    },
    {
        term: "AAA Pattern", prompt: "Describe when you could use this pattern? (2) What it means if there is more than AAA?, (3) What happens if you find an if? (4) Whats the right length of each section?",
        description: "The AAA pattern advocates for splitting each test into three parts: arrange, act, and assert. The advatnage being that following increases readability on the future.",
        example: "(2) Means that probably is an integration test and is time to split it into multiple tests. (3) That would be an antipattern. (4) Act should be one line, Assertion if too large means lack of abstraction and is okay for arrange to be large."
    },
    {
        term: "Namings in Testing", prompt: "(1) How should you call this test ? (Sum_TwoNumbers_ReturnsSum, isDateInvalid) ",
        description: "Don’t follow a rigid naming policy. You simply can’t fit a high-level description of a complex behavior into the narrow box of such a policy. Allow freedom of expression.  Name the test as if you were describing the scenario to a non-programmer who is familiar with the problem domain. A domain expert or a business analyst is a good example.  Separate words with underscores. Doing so helps improve readability, especially in long names",
        example: "(1) Sum_of_two_numbers, delivery_with_pastdate_is_invalid // More specific why it's invalid, it's okay to be verbose."
    },
    {
        term: "Good Pillars Tests", prompt: "What mental guidelines to have to create good code?",
        description: "(1) Protection against Regressions (2) Resistance to refactoring (3) Using mocks to assert intra-system communications leads to fragile tests. Mock- ing is legitimate only when it’s used for inter-system communications",
        example: "(1) To maximize the metric of protection against regressions, the test needs to aim at exercising as much code as possible.\
        (2) Aim to keep distance between the actual (current implementation of the class.) \
        "
    },
    {
        term: "mock stub", prompt: "Describe difference Mock and Stub, when would you use each?",
        description: "Mocks help to emulate and examine outcoming interactions. These interactions are calls the SUT makes to its dependencies to change their state.  Stubs help to emulate incoming interactions. These interactions are calls the SUT makes to its dependencies to get input data",
        attachment: "./img/2023-02-02-10-13-30.png"
    },
    {
        term: 'CQRS Principle', prompt: "Whats the principle useful for?", attachment: "./img/2023-02-02-10-30-14.png",
        description: "Commoand Query Responsability Segregation It states that every method should either be a command that performs an action, or a query that returns data to the caller, but not both; Useful in event sourcing on the event source. CQRS takes the defining principle of CQS and extends it to specific objects within a system, one retrieving data and one modifying data. CQRS is the broader architectural pattern, and CQS is the general principle of behaviour.",
    },
    {
        term: "Encapsulating APIs", prompt: "What mental guidelines to follow when encapsulating API?", attachment: "./img/2023-02-02-10-51-02.png", description: "\
        Without encapsulation, you have no practical way to cope with ever-increasing code complexity. When the code’s API doesn’t guide you through what is and what isn’t allowed to be done with that code, you have to keep a lot of information in mind to make sure you don’t introduce inconsistencies with new code changes"
    },
    {
        term: "Hexagonal Architecture Enphasis", prompt: "How would you refactor or use this Pattern on your projects?", attachment: "./img/2023-02-02-12-11-43.png",
        description: "Hexagonal architecture emphasizes three important aspects:\
        - Separation of concerns between the domain and application services layers. The domain layer should be responsible for the business logic, while the application services should orchestrate the work between the domain layer and external applications.\n\
        - A one-way flow of dependencies from the application services layer to the domain layer. Classes inside the domain layer should only depend on each other; they should not depend on classes from the application services layer.\n\
        - External applications connect to your application through a common inter- face maintained by the application services layer. No one has a direct access to the domain layer "
    },
    {
        term: "(a) Mathematical functions", prompt: "Why identifying this is important?",
        example: "The goal is to cover the functional core exten- sively with output-based tests and leave the mutable shell to a much smaller number of integration tests",
        description: "\
        \
       (a)Methods with no hidden inputs and outputs are called mathematical functions because such methods adhere to the definition of a function in mathematics\n\
       Functional functions are easier to mantain as can be wrapped into Chicago Style testing, which abstracts internal workings, while class based functions make this harder.\
       \
        "
    },
    {
        term: "Humble Object Pattern", prompt: "When and why would be convenient to use it? What preconditions to test and what not to test?",
        description: "For example you have a code with logs of logic and time to setup, or also an ", example: "You can break it down into Factory pattern to build the objects, (with those preconditions)"
    },
    {
        term: "end to end vs integration test", prompt: "What is the difference between integration and end to end test?"
    },
    {
        term: "integration testing", prompt: "Think of how would you design a passable Integration Testing for your current project?",
        description: "To have in mind: (1) Make the domain model boundaries explicit (2) Reduce the amount of layers (3) Cover one intgegrated Happy path / edge cases are for unit tests (4) Test the controllers"
    },
    {
        term: "support, diagnostic", prompt: "Whats the difference?", description: "Logging should only be done only if is a business requirement",
        example: "Support logging produces messages that are intended to be tracked by support staff or system administrators. \n\
        Diagnostic logging helps developers understand what’s going on inside the applicatio"
    },
    {
        term: "Managaged, Unmanaged", prompt: "Whats the difference? For which should you create a test?", description: "Managed dependencies are dependencies that are directly controlled and managed by a package manager (e.g. npm, pip, gem, etc.). These dependencies are installed and updated automatically when you run a command such as npm install or pip install. \n\
        Unmanaged dependencies are dependencies that are not managed by a package manager and must be installed and updated manually. This can occur, for example, if you're using a library or package that isn't listed in a public repository, or if you've forked a project and made changes to its dependencies. Use real instances of managed dependencies in integration tests; replace unman-\n\
        aged dependencies with mocks."
    },
    {
        term: "YAGNI", prompt: "Why Yagni is a good principle? Not good? Why would you use an interface with a single implementation?",
        description: "Interfaces with a single implementation are not abstractions and don’t provide loose coupling any more than the concrete classes that implement those inter- faces. Trying to anticipate future implementations for such interfaces violates the YAGNI (you aren’t gonna need it) principl\n\
        A feature creep is avoided. No bloatware is created, i.e. software with functions that are hardly used or not used at all. Functions that are not implemented do not have to be tested, documented and supported. Thus there is no (unnecessary) effort.",
        example: "The only legit reason would be to enable mocking."
    }




]


const system_design = [
    {
        term: "Load Balancing Algorithms", description: "Load balancing refers to efficiently distributing incoming network traffic across a group of backend servers, also known as a server farm or server pool.",
        prompt: "When would it be useful to have Load balancing going on?"
    },
    {
        term: "Round Robin", description: "Requests are distributed across the group of servers sequentially. \n\
        Round robin load balancing is a load balancing technique that cyclically forwards client requests via a group of servers to effectively balance the server load. It works best when these servers have similar computational and storage capabilities. ",
        prompt: "When should u use this?"
    },
    {
        term: "Weighted Server", description: "The weighted round robin load balancing approach is based on the round robin load balancing method. In a weighted round robin, the network administrator assigns a pre-set numerical weight to each server in the pool. The most efficient and top-performing server is given a weighted score of 100. A server with half the processing capability is given a weight of 50, and so on for the rest of the farm’s servers.",
        prompt: "What if I have weight 75 and 25?"
    },
    {
        term: "Micro-frontends", description: "The micro frontend approach makes it possible to delay loading these other modules until they are required to speed up performance across your site. \n\
        Benefits: Performance, Faster Feature Rollouts, Reusabiility of code, Technology Agnotism.\n\
        MFE Standards:\n\
        - Indenpendece: Each application provides its own development experience, and each will build, version, and release distinctly apart from each other. \n\
        - Composition: should be manageable by a reasonably small development team. This composition should support horizontal scaling of UI development to many teams and allow engineers to avoid organizational bottlenecks to feature delivery.\n\
        - Isolation: In the context of a build and dependency resolution system, this means each application is free to bundle and depend on its own set of libraries and frameworks. \n\
        - Automation.",
        prompt: "How could I use Micro front end in one of my current projects, how about in life?"
    },
    {
        term: "Continuous Integration", description: "Developers practicing continuous integration merge their changes back to the main branch as often as possible. The developer's changes are validated by creating a build and running automated tests against the build. By doing so, you avoid integration challenges that can happen when waiting for release day to merge changes into the release branch.\n\n\
        Continuous integration puts a great emphasis on testing automation to check that the application is not broken whenever new commits are integrated into the main branch.\n\n\
        What you need (cost) - Your team will need to write automated tests for each new feature, improvement or bug fix. You need a continuous integration server that can monitor the main repository and run the tests automatically for every new commits pushed. Developers need to merge their changes as often as possible, at least once a day.\n\n\
        What you gain: Less bugs get shipped to production as regressions are captured early by the automated tests. Building the release is easy as all integration issues have been solved early. Less context switching as developers are alerted as soon as they break the build and can work on fixing it before they move to another task. Testing costs are reduced drastically – your CI server can run hundreds of tests in the matter of seconds. Your QA team spends less time testing and can focus on significant improvements to the quality culture.",
        prompt: "How could you apply Continuous Integration into Business or Academic Fields? (Or on ur personal project? Or design one architecture that accets that"
    },
    {
        term: "Continuous Delivery", description: "Continuous delivery is an extension of continuous integration since it automatically deploys all code changes to a testing and/or production environment after the build stage. \n\n\
        What you need (cost): You need a strong foundation in continuous integration and your test suite needs to cover enough of your codebase.Deployments need to be automated. The trigger is still manual but once a deployment is started there shouldn't be a need for human intervention. Your team will most likely need to embrace feature flags so that incomplete features do not affect customers in production. What you gain: The complexity of deploying software has been taken away. Your team doesn't have to spend days preparing for a release anymore.  You can release more often, thus accelerating the feedback loop with your customers. There is much less pressure on decisions for small changes, hence encouraging iterating faster.",
        prompt: "Define the difference between continuous integration and continuous delivery."
    },
    {
        term: "Ringelmann Effect", description: "The Ringelmann effect is the tendency for individual members of a group to become increasingly less productive as the size of their group increases\n\
        This effect, discovered by French agricultural engineer Maximilien Ringelmann (1861–1931), illustrates the inverse relationship that exists between the size of a group and the magnitude of group members’ individual contribution to the completion of a task",
        prompt: "How could you use Ringelman Effect in business? How could you design a model to take advantage of this fact?"
    },
    // https://ganeshpr227.medium.com/key-concepts-and-terms-of-system-design-interview-notes-9bf882cf3730
    {
        term: "Fault Tolerance", description: "the ability of a system to perform well despite some failures in the system.\n\n\
        For example, suppose some of the hundreds of thousands of servers serving Youtube videos stop working. In that case, you will still be able to enjoy watching videos because of Youtube's ability to continue its operation without any terrible user experience.",
        prompt: "How could you improve the current Fault Tolerance of your project?"
    },
    {
        term: "Availability", description: "A System is said to be available if it is operational. The availability of a system is the percentage it remains usable during its lifetime, excluding time for maintenance, repair, or other problems it might suffer.",
        prompt: "What would be the availability percentage of your current project?"
    },
    { 
        term: "Reliability", prompt: "Whats the difference between reliability and availability?", 
        description: "Reliability is the probability that a system will remain available for use during a period.\n\n\
        Today every major company invests heavily to achieve some, if not total, reliability. For example, when you upload a photo on Facebook or Instagram, several copies of that data are stored at several locations to ensure that the image is not lost if some system failure occurs. Read in detail ❤️‍🔥.",
        example: "Availability is a measure of the percentage of time that an IT service or component is in an operable state. Reliability, on the other hand, is a measure of the probability that the system will meet defined performance standards in performing its intended function during a specified interval."
    },
    {
        link: 'https://medium.com/swlh/6-best-ways-to-scale-your-systems-590c901e6d7',
        term: "Scalability", prompt: "When scalability becomes important? | \n\
        Design s scalable system (it can be for business, for software, for your current project)\n\
        You can use outsourcing,  standarization, Assets,\n\n\
        As for software: Memory Chaching, Database Sharding, CQRS, Splitting Services, Horizontal Splitting ",
        description: "Scalability is the ability of a system to increase or decrease performance or cost depending on the demand. A system may need to scale when it needs more data storage or processing power.",
    },
    {
        term: "Vertical Scaling vs Horizonal scalling", prompt: "Whats the difference?",
        example: "a. Vertical Scaling  When you add more storage, RAM, GPU power, and CPU to an existing system you have, it is called Scaling Vertically. \n\n\
        b. Horizontal Scaling  When you scale by adding more nodes/servers to tackle increased demands, that's called horizontal scaling."
    },
    {
        term: "Redundanacy & Replication", prompt: "Why they are useful? What are their advantages?",
        description: "To increase the reliability of a system in case of failures, duplication of resources is performed; this is called achieving redundancy. Having multiple copies of some resources assures us that others can work as a backup if one system has trouble. Redundancy also reduces loads on resources by distributing them over duplicate systems.  Replication is the process of making consistent copies of resources, be it software or hardware, to increase reliability, and fault tolerance, reduce latency, or increase accessibility.",
    },
    {
        term: "Proxies", prompt: "How could you use Proxies in Maid CLI (or other current project?)",
        description: "Proxies are used to cache requests and responses to serve the clients if multiple requests are made for the same web page or file; they protect you from hackers or any snooper who may want to track your online activity. Proxies are also used to limit access to resources; for example, in places like colleges, hospitals, etc., you cannot use their wifi to access certain websites."
    },
    {
        term: "Data Partitioning", prompt: "Advantages of partitioning Horizontally vs Vertically?", attachment: "./img/2023-02-07-10-29-38.png",
        description: "partitioning horizontally means dividing a large table into multiple tables (by rows), also known as sharding. Whereas vertical partitioning is dividing a table based on columns, for example, a school record of students can be divided into a table storing students' names, I.D.s, etc., and different table may store their addresses.\n\
        if you divide a table into very small chunks, it leads to complex join operations.\n\
        If you added a record using a hash function depending on the number of partitions, and later when you add or remove a partition, all of the data needs to be redistributed with the updated hash function.",

    }

]



let termJson = [];; // Variable to be returned with the total of the terms to be used

// termJson.push(...designPatterns);
// termJson.push(...cloud);
// termJson.push(...dataStructures);
termJson.push(...artificialIntelligence);
termJson.push(...cloud);
termJson.push(...dataStructures);
termJson.push(...coderTerms);
termJson.push(...unit_testing);
termJson.push(...system_design);
termJson.push(...algebra);
termJson.push(...calculousOne);
termJson.push(...network)
// termJson.push(...test);

module.exports = { termJson };