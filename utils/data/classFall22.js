const network = [
    { term: "sample" }
]

const artificialIntelligence = [
    { term: "Backpropagation Neural Network", description: "A backpropagation neural network is a way to train neural networks. It involves providing a neural network with a set of input values for which the correct output value is known beforehand. The network processes the input and produces an output value, which is compared to the correct value. If the result is incorrect, gradual changes are propagated backward through the network, and the calculation is made again. This process repeats until the desired output is calculated by the network.", prompt: "Design one using that model" },
    {
        term: "AI Definitions",
        prompt: "Define in your own words (at least 1): (a) intelligence, (b) artificial intelligence, (c) agent, (d) rationality, (e) logical reasoning.",
        description: "Dictionary definitions of intelligence talk about “the capacity to acquire and apply knowledge” or “the faculty of thought and reason” or “the ability to comprehend and profit from experience.” These are all reasonable answers, but if we want something quantifiable we would use something like “the ability to apply knowledge in order to perform better in an environment.” b. We define artificial intelligence as the study and construction of agent programs that perform well in a given environment, for a given agent architecture. c. We define an agent as an entity that takes action in response to percepts from an environment. d. We define rationality as the property of a system which does the “right thing” given what it knows. See Section 2.2 for a more complete discussion. Both describe perfect rationality, however; see Section 27.3. e. We define logical reasoning as the a process of deriving new sentences from old, such that the new sentences are necessarily true if the old ones are true. (Notice that does not refer to any specific syntax oor formal language, but it does require a well-defined notion of truth.)",

    }
];

module.exports = { network, artificialIntelligence };