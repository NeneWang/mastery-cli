

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */


const designPatterns = [
    { term: "Single Responsability Principle", description: "The single responsibility principle provides another substantial benefit. Classes, software components and microservices that have only one responsibility are much easier to explain, understand and implement than the ones that provide a solution for everything.", prompt: "How could you or are using this SOLID principle?" },
    { term: "Specification Pattern", description: "Specification of which objects satisfy certain business rules should be reusable (DRY). In order to do that we will create a class with sole responsibility of determining, whether object satisfies the rules or not.", prompt: "Example usage of this in current and future projects" },
    {
        term: "Open Closed Principle", description: "The Open/Closed Principle states that software entities (classes, modules, etc.) should be open for extension, but closed for modification. What does this mean, and why is it an important principle of good object-oriented design?\
    Open/closed principle is intended to mitigate risk when introducing new functionality. Since you don't modify existing code you can be assured that it wouldn't be broken. It reduces maintenance cost and increases product stability.\
    ", prompt: "How could you use this in current/future project, or where have you seen this principle"
    },
    { term: "Singleton Pattern", description: "Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.", prompt: "Example usage for this." },
    {
        term: "Liskov Substitution Principle",
        description: " Liskov Substitution Principle (LSP) states that objects of a superclass should be replaceable with objects of its subclasses without breaking the application. \
    \
    This helps us model good inheritance hierarchies. It helps us prevent model hierarchies that don't conform to the Open/Closed principle. Any inheritance model that adheres to the Liskov Substitution Principle will implicitly follow the Open/Closed principle.",
        prompt: "How could you use this principle? What could you fix in the future, any of your code is violeting this principle?"
    },
    {
        term: "Interface Segregation Principle", description: "Clients should not be forced to depend upon interfaces that they do not use.\
    Single Responsibility Principle, the goal of the Interface Segregation Principle is to reduce the side effects and frequency of required changes by splitting the software into multiple, independent parts.\
   Advantages: Doesn't  implement methods we dont need. Increases readability and maintainability of our code.",
        prompt: "How could you improve your existent code using this principle?"
    },
    {
        term: "Dependency Inversion Principle", description: "Depends on the dependency states is that high level classes should not depend on low level but on abstractions. Class with abstract methods. Swap one from the other. Advantages: gives flexibility and stability at the level of the entire architecture of your application. It will allow your application to evolve more securely and stable.\
        > In the same way that ceo should not double as a truck driver, Higher level clases shouldnt implement low levels classes.",
        prompt: "What other real life alternatives examples are here? And how can you use this to improve your code?"
    },
    {
        term: "Creation Paterns", description: ""
    }
]

const artificialIntelligence = [
    { term: "Backpropagation Neural Network", description: "A backpropagation neural network is a way to train neural networks. It involves providing a neural network with a set of input values for which the correct output value is known beforehand. The network processes the input and produces an output value, which is compared to the correct value. If the result is incorrect, gradual changes are propagated backward through the network, and the calculation is made again. This process repeats until the desired output is calculated by the network.", prompt: "Design one using that model" },
]

const cloud = [
    { term: "Concurrent Computing", example: "yes", description: "In concurrent computing, multiple calculations are made within overlapping time frames. It takes advantage of the concept that multiple threads or processes can make progress on a task without waiting for others to complete. This general approach to writing and executing computer programs is called concurrency.  Concurrent computing is different than synchronous (sequential) computing, where calculations are made one after the other, with each waiting for the previous to complete. It's not the same as parallel computing, where calculations are made simultaneously on separate processors.  The three main types of concurrent computing are threading, asynchrony, and preemptive multitasking. Each method has its own special precautions which must be taken to prevent race conditions, where multiple threads or processes access the same shared data in memory in improper order.", prompt: "Whats the difference between different concurrent computing types?" },
]


// Some things to populate in the future
const business = []

const pandasMethods = []

const marketingTerms = []



const termJson = []; // Variable to be returned with the total of the terms to be used

termJson.push(...designPatterns);
termJson.push(...artificialIntelligence);
termJson.push(...cloud);

module.exports = { termJson };