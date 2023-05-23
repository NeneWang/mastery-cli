Assignment 7
List of questions that form the basis of the neural net questions for final. We have gone over this and
the lecture is on Blackboard.
Submitting the answers to these questions will not only help you study for the final, but the final
questions related to Neural nets will come from this list.
1) What is a perceptron. Explain the structure of a neural net.


2) How is a perceptron used to classify 2 pattern classes. Explain

3) What is an augmented pattern vector and why is it used.

4) Describe the perceptron learning algorithm using the reward-punishment procedure. 

5) How is reward-punishment used to separate 2-D patterns such that (0,0)T and (0,1)T  represent one class (ω1 ) and (1,0)T  and (1, 1)T  to represent a second class (ω2 ). If it can separate these pattern classes, explain how to check that the reward-punishment procedure converges.


6) Explain how the Neural Net program Neurolab in Python can be used to set up the network and rain a perceptron to separate the patterns not using reward-punishment. (Give the commands to do
this) 

7) Explain clearly what criterion the Neurolab program uses to learn to separate the pattern classes

8) Can the simple Perceptron be used to seperate the classes if 

```
ω1 = {(0,0)T , (1,1)T}
and ω2 ={(0,1)T , (1,0)T}. 

If not, explain why not.

9) Explain why a 3-layer neural network having a hidden layer can solve the deficiencies of the
perceptron.


10)  
    a) Explain how the back-propagation algorithm uses the delta rule to train a 3-layer network.
(Use a 2-D input pattern space, a 2-D hidden layer, and a 1-D ouput layer to explain the delta
rule in back-propagation).
    
    b) How do you set up a 3-layer neural net using Neurolab in Python to set up the network and train
it. Explain how it is set up and trained.