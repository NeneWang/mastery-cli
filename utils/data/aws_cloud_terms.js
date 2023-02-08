const aws_glossary = [
    {
        term: 'access key rotation',
        description: 'A method to increase security by changing the AWS access key ID. You can use this method to retire an old key at your discretion.',
        prompt: 'Define it | Use it on a sentence'

    }
];

const aws_services = [
    {
        prompt: "When should you use SQS vs SNS?",
        term: "sqs sns",
        description: "SNS: \n\
        Publishing messages to a topic can deliver to many subscribers of different types (SQS, Lambda, Email)\n\
        SNS topics are used to enable communication: producers publish messages to topics, and consumers subscribe to these topics to receive messages. You can deliver messages to various types of subscribers, such as AWS SQS queues, AWS Lambda functions, and HTTP endpoints. You can also use SNS to send SMS messages, email, and push notifications to end-user devices.\n\n\
        Queueing service for message processing. A system which must poll the queue to discover new events. Messages in the queue are typically processed by a single consumer. So there is a poling on stage ot get a certain amount of jsons.\n\
        AWS SQS is a distributed, managed queueing service used for communication between applications, microservices, and distributed systems."
    }
]



module.exports = { aws_glossary, aws_services };


