/*
Open/Closed Principle learned from
https://www.youtube.com/watch?v=-ptMtJAdj40

Aim is to create new code rather than constantly change old code
so no never ending Switch or If Statements
instead use individual classes or modules
*/

// We use lots of Question Type Classes than never ending Swith Statements for each type
class BooleanQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("1. True");
    console.log("2. False");
  }
}

class MultipleChoiceQuestion {
  constructor(description, options) {
    this.description = description;
    this.options = options;
  }

  printQuestionChoices() {
    this.options.forEach((option, index) => {
      console.log(`${index + 1}.${option}`);
    });
  }
}

class TextQuestion {
  constructor(description) {
    this.description = description;
  }

  printQuestionChoices() {
    console.log("Answer: _________");
  }
}

class RangeQuestion {
  constructor(description) {
    this.description = description;
  }
  printQuestionChoices() {
    console.log("Min: _________");
    console.log("Max: _________");
  }
}

function printQuiz(questions) {
  questions.forEach(question => {
    console.log(question.description);
    question.printQuestionChoices();
    console.log("");
  });
}

const questions = [
  new BooleanQuestion("Is this statement True or False? Water is wet!"),
  new MultipleChoiceQuestion("What is your fav language?", ["C#", "JS", "PHP"]),
  new TextQuestion("What is your fav Drupal module and why?"),
  new RangeQuestion("How tall are you?")
];

printQuiz(questions);
