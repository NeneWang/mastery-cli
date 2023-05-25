# Maid CLI

![](https://i.ibb.co/fCfYmbT/mapping-icon.png)

Your assistant to improve as a programmer. Flashcards, DSA Practice, Statistics, and habit hooks. For example, everytime you commit code, you could have a random flashcard being prompted (or even a random DSA problem suggestion to be completed!). Designed to work offline, but when connected to the internet assists you to collect your progress and sync it with your other devices. 

Other main features include:
- Helping you keep track on your personal goal projects e.g. Doing some commit in a project on a daily basi
- More than 150 programming problems (with tests that work offline)


## Created Features

- [x] Simple `coa` commit and push
- [x] Includes weather for tomorrow and raining chance
- [x] basic credential creation.
- [x] Currency Conversion
- [x] Crete database for events
  - [x] Post that database
  - [x] Use that database to get publish and edit faetures
  - [x] Features Progress Tracking
- [x] Terms Testing
- [x] Daily reports [database]
  - [x] What you wrote for your journal the same day 1 year ago. 1 month ago. 1 Week ago + 1 Day ago.
- [x] Indicate Core Progress.
- [x] Pullout algorithm questions and automatically test them. You should also test in a file that is being selected 
  - [x] Markdown database.
- [x] Create a heatmap like overtime using the allowed charts
- [x] A Skill tree type strucutre which is useful for prioritizing and creating dependency for deck of cards and for books as well in general
  - [x] The deck of cards would inherit from an Class type
  - [x] I am thinking about a composite structure, where those who are not in the tree take random priority, and those who have more dependencies goes first
  - [x] Implement the system so that the cards with gigher priority are selected first, or the tree sees the agroupations and checks if everything (pre cached) caclculates which deck to select.
  - [x] This would actually be a smart way to make faster queries once I have way too many knowledge objects.
- [x] Image into Ascii
  - [x] As a tool
  - [x] As an automatic pattern ideal for terms images where no image is available. (Or you just want to preview 
  - [x] Report the progress results of 1 year ago, 1 month ago + 1 week ago + 1 day ago.
- [x] Serve as an organization extension for studying


![](./img/2022-12-12-17-14-57.png)

## In Progress


- [ ] Daily Survey
- [ ] Support for multiple users (right now is just the base user)
  - [ ] Support for Logging in
  - [ ] Support for Syncing Settings

## Features

### Study

- [ ] Ability To Generate Cloze (derivants of the concepts models)
- [ ] Ability to Generate a terms through an collection of XLSX (Derivant of Concept Models)
- [ ] Ability to Have a Cloze generator
- [ ] Ability to create a grouper (inserts tags such as category or type to the collection of jsons it represents)
- [ ] Ability to Sync (At least one way up (and have subscribers to the decks)) 



### Productivity


- [ ] Clone from Personal TDD Tasks
- [ ] Clone Make-files examples or have them there
- [ ] Create Skelethon Donwloader using templating (cpp testunits, ) 

### Life Quality

the attechment on the console. You should also set it up so that it prints that onto the computer.)
- [ ] Pull out excels and tell you about the daily tasks you didnt finish
- [ ] Integrated Daily Performance
- [ ] Display daily metrics, or write into the daily metrics for the day where it stores based on datetime and you cna update the json that is being submitted.
- [ ] The idea is that when you introduce a topic, it should use pattern matching to find other with that topic at hand [csv]
- [ ] It should be also be able to open specifics on a specific folder to help you open a file that you were reading such as a specific page on the site.

### Long Term

- [ ] Serve as a guiding AI template
- [ ] Serve as something u can inherit and fork and develop through inheritance.














