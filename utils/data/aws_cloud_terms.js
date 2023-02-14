/**
 * A good Roadmap:
 * https://roadmap.sh/devops
 * The advantage of devops is that tit is usually definition based, so I should be able to go throught the list and get as much of these definitions based problems.
 */


const aws_glossary = [
    {
        term: 'access key rotation',
        description: 'A method to increase security by changing the AWS access key ID. You can use this method to retire an old key at your discretion.',
        prompt: 'Define it | Use it on a sentence'

    }
];

/**
 * Probably a good idea to take form here:
 *  https://intellipaat.com/blog/interview-question/aws-lambda-interview-questions/
 */

const aws_services = [
    {
        prompt: "When should you use SQS vs SNS?",
        term: "sqs sns",
        description: "SNS: \n\
        Publishing messages to a topic can deliver to many subscribers of different types (SQS, Lambda, Email)\n\
        SNS topics are used to enable communication: producers publish messages to topics, and consumers subscribe to these topics to receive messages. You can deliver messages to various types of subscribers, such as AWS SQS queues, AWS Lambda functions, and HTTP endpoints. You can also use SNS to send SMS messages, email, and push notifications to end-user devices.\n\n\
        Queueing service for message processing. A system which must poll the queue to discover new events. Messages in the queue are typically processed by a single consumer. So there is a poling on stage ot get a certain amount of jsons.\n\
        AWS SQS is a distributed, managed queueing service used for communication between applications, microservices, and distributed systems."
    },
    {
        prompt: "Whats the difference between SQS FIFO and Standard queue?",
        term: "sns queues",
        description: "Standard queues provide at-least-once delivery, which means that each message is delivered at least once. FIFO queues provide exactly-once processing, which means that each message is delivered once and remains available until a consumer processes it and deletes it.",

    },
    {
        term: "Containers - Dockerization",
        prompt: "What problem solves for you?",
        description: "a virtual machine can still sit under-utilized or even idle when the demand is low. If you've ever worked in a role managing a fleet of servers, you would have noticed the dramatic under-utilization of compute during low demand periods. Ideally, we don't want the overhead of deploying and configuring a full operating system every time we need to run a workload.\n\n\
        To achieve this, we can make use of containerization technologies such as Docker. Docker allows applications running on an operating system to be isolated from each other by running inside a container. Each container holds only the application and associated dependencies (binaries and libraries):",
    },
    {
        term: "Function as a Service (FaaS)",
        prompt: "What is this and how In what situation do you see this as useful, what real life alternatives can you find?",
        description: "While containerization technologies such as Docker are commonplace in cloud-native applications, we can take another step further by dividing our applications into discrete functions.\n\n\
        Function as a Service (FaaS) is another level of abstraction and is where we get to choose the runtime to execute our code on, some execution parameters such as memory allocation, and that's about it. The hardware, operating system, and runtime are all managed for you."
    },
    {
        term: "Scaling Horizontally in AWS",
        prompt: "What does this mean, and how do you achieve this?",
        description: "In terms of hardware utilization, the biggest impact here is that we can now scale by workload type. If the user demand was running a task that was creating a high load on the processing tier, we can add more compute nodes (virtual machines) to this tier, independently of the web tier. This is called scaling horizontally",
    },
    {
        term: "EAI",
        prompt: "What is that and when would you use it?",
        description: "Enterprise application integration (EAI) refers to the process of connecting different enterprise applications to allow data and functionality to be shared between them. Here are the pros and cons of EAI:\n\
        Pros:      Increased efficiency: By connecting different enterprise applications, data and functionality can be shared easily between different departments, reducing manual data entry and avoiding duplication of effort.     Improved data accuracy: Integration can ensure that data is consistent and up-to-date across different enterprise applications, reducing the risk of errors and inconsistencies.\
        Enhanced collaboration: Integration makes it easier for different departments and teams to work together, as they can access the same information and collaborate on projects in real-time.     Increased competitiveness: Integration can help organizations respond more quickly to changes in the market, allowing them to stay ahead of the competition."
    },
    {
        term: "ESB", prompt: "What's the difference between this and EAI?",
        description: "ESB stands for Enterprise Service Bus, and it's a type of software architecture that helps different computer systems communicate with each other.  Imagine that you have a bunch of different software systems in your school, like a library system, a student management system, and a payment system. All of these systems have different ways of storing and processing information, and it can be difficult to get them to work together and share information.  An ESB acts as a middleman between these different systems, allowing them to communicate and share information with each other. It acts like a bus, carrying messages and data between the systems, and making sure that the right information gets to the right place at the right time.",
        example: "Enterprise Application Integration (EAI) and Enterprise Service Bus (ESB) are similar concepts in the field of software architecture, but they have some key differences.      Purpose: EAI is a broader term that refers to the overall goal of integrating different enterprise applications, while ESB specifically refers to a type of architecture used to achieve that goal.      Approach: EAI can involve a variety of approaches, including file transfer, message-oriented middleware, and service-oriented architecture (SOA), while ESB is a specific type of SOA architecture that uses a message bus to route messages between applications.      Focus: EAI focuses on the integration of applications, while ESB focuses on the routing and transformation of messages between applications.      Functionality: EAI often provides additional functionality beyond message routing, such as data transformation and mapping, security, and monitoring, while ESB focuses primarily on message routing and transformation.      Complexity: EAI can be a more complex solution, as it may involve a variety of technologies and approaches, while ESB is a more focused and streamlined solution.  In general, ESB is considered a subset of EAI, and many EAI solutions include an ESB as a key component. Both EAI and ESB are aimed at solving the same problem: how to integrate different enterprise applications and systems, and how to make sure that they can communicate and share data effectively. The choice between an EAI solution and an ESB depends on the specific needs and requirements of your organization."
    },
    {
        term: "cyclomatic complexity", prompt: "use this on a sentence",
        description: "Cyclomatic complexity is calculated based on the control flow graph of the code, where each node in the graph represents a single point of execution and each edge represents a possible flow of control. The cyclomatic complexity of a program is defined as the number of nodes minus the number of edges plus two. This formula provides a measure of the minimum number of independent paths that must be tested to ensure that all paths through the code have been tested."
    },
    {
        term: "Questions-ch2", prompt: "Adding new components to a large monolith can increase what? [Code Base, Static Coupling, Cyclomatic Complexity]\
        What is the concept of providing application connect? \
        What should an event producer and an event consumer use to exchange mmessages? [Message broker]\
        ",
        example: "In event-driven architecture, event producers and event consumers exchange messages through a message broker. A message broker acts as an intermediary between the event producer and the event consumer, allowing them to exchange messages asynchronously and decoupling their interactions. The message broker receives messages from event producers, stores them in a queue, and then delivers them to the event consumers. This helps to ensure reliability, as messages are stored and delivered even if the event consumer is temporarily unavailable.\n\
        Message brokers can also provide additional features such as routing, transformation, and filtering of messages, making them a powerful tool for event-driven integration and communication between systems."
    },
    {
        term: "Event Driven Architecture (EDA)",
        description: "Event-driven architecture (EDA) is a software design pattern in which the flow of the program is determined by events or messages. In event-driven systems, individual components, or event emitters generate events or messages that are then processed by other components, or event handlers.\n\
        Advantages of event-driven architecture include:      Loose coupling: Event-driven systems can allow for a high degree of decoupling between components, which can make it easier to build and maintain large, complex software systems.      Scalability: Event-driven systems can be designed to handle large amounts of data, making them well-suited to cloud computing and big data applications.      Real-time processing: Event-driven systems can process events and update applications in real-time, making them ideal for applications that require immediate responsiveness, such as financial trading systems or social media applications.      Flexibility: Event-driven systems can be highly flexible, as different components can be easily added, removed, or replaced to accommodate changing requirements.",
        prompt: "How to use this?"
    },
    {
        term: "Sharding and SQL", prompt: "What advantages are there in PostgreSQL?",
        example: "With PostgreSQL, it supports sharding, which means that now you can run horizontal distributed queries for aggregations, as well as vertical distributed queries for Filtering ORS and AND\
        I imagine this would be the case if you have an operation that request for Column A to be X and Column B to be Y then, you could have one shard running first condition and another for the other condition.\n\
        An advantage over NONSQL is also that it is ACID compliant.", attachment: "./img/2023-02-10-16-07-42.png"
    },
    {
        term: "Lambda-ch3", prompt: "Answer why the following",
        description: "\
        1) Why do I keep receiving HTTP 429 status code responses when using the6. Lambda Invoke API? [ The request concurrency limit has been exceeded]\
        2) Event-driven compute and architectural patterns have evolved to abstract away1. the runtime from the developer so that they can focus on writing business value into their code. Such a pattern is called what? [Functions as a Service]\
        3) When creating a Lambda function, there are a number of configurable options Which of the following is NOT a directly configurable option []\
        ",
        example: "\
        3) When creating a Lambda function, you can configure various options such as memory allocation, runtime, and execution timeout. However, the number of CPU cores is not a directly configurable option. Instead, the number of CPU cores is determined by the memory allocation you choose for your function. AWS Lambda automatically allocates an equal number of CPU shares proportional to the amount of memory you have configured for your function. So, when you increase the memory allocation for your function, the number of CPU cores allocated to the function will also increase."
    },
    {
        term: "XMPP", prompt: "What does it translates to? Use it on an example?",
        description: "Based on XML, it enables the near-real-time exchange of structured data between two or more network entities.\n\
        XMPP protocol is used for all the following applications. • Instant messaging apps (Google Talk, WhatsApp) • Presence status • Message delivery • Conferencing (Multi-party chat) • Roster management • Voice and video calls • Online gaming • News websites • VoIP apps \n\n\
        Benefits or advantages of XMPP protocol  Following are the benefits or advantages of XMPP protocol: ➨Extensible : It can be customized to individual user requirements. ➨Messaging : Short messages are used for fast communication between user and server. ➨Presence : It is reactive to presence of user and his/her status. ➨Protocol : It is an open platform which is constantly evolving. ➨Secured : It uses TLS and SASL to provide secured end to end connection. ➨It offers persistent connection. ➨It is decentralized in nature as no central XMPP servers are needed. ➨It allows servers with different architectures to communicate.\n\n\
        Drawbacks or disadvantages of XMPP protocol  Following are the drawbacks or disadvantages of XMPP protocol: ➨It does not have QoS mechanism as used by MQTT protocol. ➨Streaming XML has overhead due to text based communication compare to binary based communication. ➨XML content transports asynchronously. ➨Server may overload with presence and instant messaging. ",
        prompt: "Extensible Messaging and Presence Protocol is an open communication protocol designed for instant messaging, presence information, and contact list maintenance."
    },
    {
        term: "Database selection", prompt: "Pick 1+ of the following databases and tell me why (in what situation) would you use it?",
        attachment: "./img/2023-02-14-11-47-17.png",
        description: "You have: 1) Aurora RDS, 2) Aurora RDS Serverless, 3) Postgres, 4) ElasticSearch, 5) Elasticache, 6) DynamoDB, 7) MongoDB"
    },
    {
        term: "Cloud Formation Cloud", prompt: "What happens when you delete a stack?\n\
         What happens when you update a stack",
         description: "Stack Actions Creaate Change set for current Stack -> Upload File, calculate and then makes the changes\n\
         Deleting the stack will also delete the resources created."
    }
]



module.exports = { aws_glossary, aws_services };


