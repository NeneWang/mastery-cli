"use strict";

/**
 * <RULES>
 * 
 * 1 Creating Collections: It makes sense to create collection for e.g. functions on an array and their hipothetical use.
 * 2 Strategy > Term:, Or at least bundle a collection of terms, to make it worth more.
 */
var designPatterns = [{
  term: "Singleton Pattern",
  description: "Singleton is a creational design pattern that lets you ensure that a class has only one instance, while providing a global access point to this instance.",
  prompt: "Example usage for this."
}];
var artificialIntelligence = [{
  term: "Backpropagation Neural Network",
  description: "A backpropagation neural network is a way to train neural networks. It involves providing a neural network with a set of input values for which the correct output value is known beforehand. The network processes the input and produces an output value, which is compared to the correct value. If the result is incorrect, gradual changes are propagated backward through the network, and the calculation is made again. This process repeats until the desired output is calculated by the network.",
  prompt: "Design one using that model"
}];
var cloud = [{
  term: "Concurrent Computing",
  description: "In concurrent computing, multiple calculations are made within overlapping time frames. It takes advantage of the concept that multiple threads or processes can make progress on a task without waiting for others to complete. This general approach to writing and executing computer programs is called concurrency.  Concurrent computing is different than synchronous (sequential) computing, where calculations are made one after the other, with each waiting for the previous to complete. It's not the same as parallel computing, where calculations are made simultaneously on separate processors.  The three main types of concurrent computing are threading, asynchrony, and preemptive multitasking. Each method has its own special precautions which must be taken to prevent race conditions, where multiple threads or processes access the same shared data in memory in improper order.",
  prompt: "Whats the difference between different concurrent computing types?"
}]; // Some things to populate in the future

var business = [];
var pandasMethods = [];
var marketingTerms = [];
var termJson = []; // Variable to be returned with the total of the terms to be used

termJson.push.apply(termJson, designPatterns);
termJson.push.apply(termJson, artificialIntelligence);
termJson.push.apply(termJson, cloud);
module.exports = {
  termJson: termJson
};