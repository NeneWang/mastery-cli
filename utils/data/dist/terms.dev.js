"use strict";

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */
var designPatterns = [{
  term: "",
  prompt: "What are the SOLID principles? Mention at least 3",
  example: "     S - Single-responsiblity Principle     O - Open-closed Principle     L - Liskov Substitution Principle     I - Interface Segregation Principle     D - Dependency Inversion Principle "
}, {
  term: "Single Responsability Principle",
  description: "The single responsibility principle provides another substantial benefit. Classes, software components and microservices that have only one responsibility are much easier to explain, understand and implement than the ones that provide a solution for everything.",
  prompt: "How could you or are using this SOLID principle?"
}, {
  term: "Specification Pattern",
  description: "Specification of which objects satisfy certain business rules should be reusable (DRY). In order to do that we will create a class with sole responsibility of determining, whether object satisfies the rules or not.",
  prompt: "Example usage of this in current and future projects"
}, {
  term: "Open Closed Principle",
  description: "The Open/Closed Principle states that software entities (classes, modules, etc.) should be open for extension, but closed for modification. What does this mean, and why is it an important principle of good object-oriented design?\n \
    Open/closed principle is intended to mitigate risk when introducing new functionality. Since you don't modify existing code you can be assured that it wouldn't be broken. It reduces maintenance cost and increases product stability.\n \
    ",
  prompt: "How could you use this in current/future project, or where have you seen this principle"
}, {
  term: "Singleton Pattern",
  description: "Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.",
  prompt: "Example usage for this."
}, {
  term: "Liskov Substitution Principle",
  description: " Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. \n \
    \n \
    This helps us model good inheritance hierarchies. It helps us prevent model hierarchies that don't conform to the Open/Closed principle. Any inheritance model that adheres to the Liskov Substitution Principle will implicitly follow the Open/Closed principle.",
  prompt: "How could you use this principle? What could you fix in the future, any of your code is violeting this principle?"
}, {
  term: "Interface Segregation Principle",
  description: "Clients should not be forced to depend upon interfaces that they do not use.\n \
    Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts.\n \
   Advantages: Doesn't  implement methods we dont need. Increases readability and maintainability of our code.",
  prompt: "How could you improve your existent code using this principle?"
}, {
  term: "Dependency Inversion Principle",
  description: "Depends on the dependency states is that high level classes should not depend on low level but on abstractions. Class with abstract methods. Swap one from the other. Advantages: gives flexibility and stability at the level of the entire architecture of your application. It will allow your application to evolve more securely and stable.\n \
        > In the same way that ceo should not double as a truck driver, Higher level clases shouldnt implement low levels classes.",
  prompt: "What other real life alternatives examples are here? And how can you use this to improve your code?"
}, {
  term: "Builder Pattern",
  description: "Builder is a creational design pattern that lets you construct complex objects step by step. The pattern allows you to produce different types and representations of an object using the same construction code.\n \
        The Builder pattern suggests that you extract the object construction code out of its own class and move it to separate objects called builders.\n \
        Director: You can go further and extract a series of calls to the builder steps you use to construct a product into a separate class called director. The director class defines the order in which to execute the building steps, while the builder provides the implementation for those steps.",
  prompt: "How could you implement this to any of the current projects? What are the advantages? Hypothetical case?",
  attachment: "./img/2023-01-25-15-31-30.png"
}, {
  term: "Factory Pattern",
  attachment: "./img/img/2023-01-26-10-39-16.png.png",
  example: "The advantage of the PointFactory over the Builder pattern is that it provides a simple way to create objects without exposing the internal complexity of the object creation process. This can make the code more readable and maintainable, as the client code only needs to call the factory method and does not need to know the details of how the object is created. Additionally, the PointFactory can also provide additional functionality, such as caching or validation, that can make the object creation process more efficient.",
  prompt: "Whats the advantage over Builder Pattern? How can you use it on future/imaginative project?",
  description: "The Factory Method pattern is a design pattern used to create objects. It defines an interface for creating an object, but allows subclasses to alter the type of objects that will be created. \n \
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
}, {
  term: "Adapters",
  description: "The Adapter design pattern is used to convert the interface of one class into another interface that the client expects. Here are some advantages and disadvantages of using adapters:\n \
        Advantages:\n \
        Improved compatibility: Adapters allow existing classes to work together that couldn't otherwise because of incompatible interfaces.\n \
        Increased reusability: Adapters can make it easier to reuse existing code by converting it to a form that is more appropriate for the current application.\n \
        Increased flexibility: Adapters can make it easier to change the interface of a class without modifying the class itself.\n \
        Loose coupling: Adapters allow the client and adaptee classes to be loosely coupled, so that changes to one class will not affect the other.\n \
        Disadvantages:\n \
        Increased complexity: Adapters can make the code more complex, especially in large codebases or when multiple adapters are used.\n \
        Reduced performance: Adapters can add an additional layer of indirection, which can slow down the performance of the application.\n \
        Harder to debug: Adapters can make it harder to debug the application, especially if the adaptee class is not well-documented or is hard to understand.\n \
        Limited functionality: Adapters can only convert the interface of a class, they cannot add new functionality to it.",
  prompt: "How could you use adapters in daily life or in one of your projects?"
}, {
  term: "The Bridge",
  description: "The Bridge design pattern is a structural pattern that is used to separate an abstraction from its implementation. It allows the two to evolve independently and provides a way to change the implementation of an abstraction without affecting its clients.\n \
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
  prompt: "",
  example: "the Bridge design pattern is like having a remote control for your TV. The remote control is the abstraction, and the TV is the implementation. The remote control lets you change the channel, turn the volume up and down, and do other things, but it doesn't actually do anything on its own. It just sends signals to the TV, which is the part that actually changes the channel and adjusts the volume.\n \
        \n \
        The remote control and the TV can change independently of each other. For example, you can change the batteries in the remote control without affecting the TV. You can also buy a new TV that has different features, but you can still use your old remote control to control it. This is similar to how the Bridge pattern allows the abstraction and the implementation to evolve independently.\n \
        \n \
        So, the Bridge pattern is a way of connecting two things so they can work together, while still being able to change them independently. It makes the code more flexible and maintainable, but it can also make it more complex."
}, {
  term: "Composite Design Pattern",
  description: "The Composite design pattern is a way to structure a program so that it can have objects that are made up of other objects. Imagine that you have a school project where you have to build a tree out of different materials like paper, cardboard, and glue. The tree is made up of branches and leaves, and each branch is made up of smaller branches and leaves.\
        It allows you to treat individual objects and compositions of objects in the same way, making it easier to work with complex structures.\
        It promotes the Single Responsibility Principle by allowing each class to only handle its own specific part of the structure.\
        It promotes code reusability, as the same classes can be used to create different structures.\
        \
    Disadvantages of using the Composite design pattern include:\
        It can make code more complex and harder to understand, especially if there are many levels of nesting in the structure.\
        It can make it harder to debug the code, because it can be difficult to trace through the structure to find the source of an error.\
        It can lead to performance issues if the structure is too deep or if there are too many elements in the structure.",
  prompt: "Where do you think it would make sense to implement such design pattern? What applications?"
}, {
  term: "Decorator Design Pattern",
  description: "The Decorator pattern is a way to add new behavior to an object without changing the object's class. Imagine you're a student and you want to decorate a plain notebook with stickers, pictures and drawings. The notebook is your object and the stickers, pictures and drawings are the new behavior you want to add. (The important thing is to make it work at runtime.)",
  prompt: "Provide an example of how could you use this Design Pattern?"
}];
var dataStructures = [{
  term: "Heap",
  prompt: "Re explain one of the advantages of using Heaps",
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
}];
var artificialIntelligence = [{
  term: "Backpropagation Neural Network",
  description: "A backpropagation neural network is a way to train neural networks. It involves providing a neural network with a set of input values for which the correct output value is known beforehand. The network processes the input and produces an output value, which is compared to the correct value. If the result is incorrect, gradual changes are propagated backward through the network, and the calculation is made again. This process repeats until the desired output is calculated by the network.",
  prompt: "Design one using that model"
}];
var cloud = [{
  term: "Concurrent Computing",
  example: "yes",
  description: "In concurrent computing, multiple calculations are made within overlapping time frames. It takes advantage of the concept that multiple threads or processes can make progress on a task without waiting for others to complete. This general approach to writing and executing computer programs is called concurrency.  Concurrent computing is different than synchronous (sequential) computing, where calculations are made one after the other, with each waiting for the previous to complete. It's not the same as parallel computing, where calculations are made simultaneously on separate processors.  The three main types of concurrent computing are threading, asynchrony, and preemptive multitasking. Each method has its own special precautions which must be taken to prevent race conditions, where multiple threads or processes access the same shared data in memory in improper order.",
  prompt: "Whats the difference between different concurrent computing types?"
}];
var test = [{
  term: "Concurrent Computing",
  example: "yes",
  description: "In concurrent ",
  attachment: "./img/2023-01-25-15-31-30.png"
}]; // Some things to populate in the future

var business = [];
var pandasMethods = [];
var marketingTerms = [];
var coderTerms = [{
  term: "Business Logic Modules Overview",
  description: "Business logic modules are independent code components that multiple business logic units use. Code reuse eases the maintenance of the business logic. Reuse eliminates code duplication and enables you to apply system-wide logic changes quickly and easily.\
        The system uses two of the metrics to describe the helpdesk performance:\
        Metric name:  Successful Ticket resolution on time.\
        Objective statement:  \
        No less than 99% of the tickets should be resolved within 4 hours.\
        Business logic: \
        Resolution should be calculated from Open to Closed.",
  prompt: "Create an example of a business logic."
}];
var termJson = [];
; // Variable to be returned with the total of the terms to be used

termJson.push.apply(termJson, designPatterns);
termJson.push.apply(termJson, artificialIntelligence);
termJson.push.apply(termJson, cloud);
termJson.push.apply(termJson, dataStructures); // termJson.push(...test);

module.exports = {
  termJson: termJson
};