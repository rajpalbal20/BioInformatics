function letter_to_number(input_letter)
{
  var output = -1
  if(input_letter == "a"){output = 0;}
  if(input_letter == "b"){output = 1;}
  if(input_letter == "c"){output = 2;}
  if(input_letter == "d"){output = 3;}
  return output
}

(function() {
  function buildQuiz() {
    // we'll need a place to store the HTML output
    const output = [];

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // we'll want to store the list of answer choices
      const answers = [];

      // and for each available answer...
      for (letter in currentQuestion.answers) {
        // ...add an HTML radio button
        answers.push(
          `<label>
            <input type="radio" name="question${questionNumber}" value="${letter}">
            ${letter} :
            ${currentQuestion.answers[letter]}
          </label>`
        );
      }

      // add this question and its answers to the output
      output.push(
        `<div class="question"> ${currentQuestion.question} </div>
        <div class="answers"> ${answers.join("")} </div>`
      );
    });

    // finally combine our output list into one string of HTML and put it on the page
    quizContainer.innerHTML = output.join("");
  }
  var l=0;
  var x=0;
  function showResults() {
    // gather answer containers from our quiz
    const answerContainers = quizContainer.querySelectorAll(".answers");

    // keep track of user's answers
    var numCorrect = 0;

    // for each question...
    myQuestions.forEach((currentQuestion, questionNumber) => {
      // find selected answer
      const answerContainer = answerContainers[questionNumber];
      const selector = `input[name=question${questionNumber}]:checked`;
      const userAnswer = (answerContainer.querySelector(selector) || {}).value;

      // if answer is correct
      if (userAnswer == currentQuestion.correctAnswer) {
        // add to the number of correct answers
        numCorrect++;

        // color the answers green
        answerContainers[questionNumber].style.color = "lightgreen";


      } else {
        // if answer is wrong or blank
        // color the answers red
        answerContainers[questionNumber].style.color = "red";



      }
      correct_answer = currentQuestion.correctAnswer;
      answer_index = letter_to_number(correct_answer);
      this_container = answerContainers[questionNumber];
      answer_html = this_container.children[answer_index];
      answer_html.style.color = "blue";
    });

    // show number of correct answers out of total
    if (l==0) {
      x=numCorrect;
      l+=1;
    }
    resultsContainer.innerHTML = `${x} out of ${myQuestions.length}`;
  }

  const quizContainer = document.getElementById("quiz");
  const resultsContainer = document.getElementById("results");
  const submitButton = document.getElementById("submit");
  const myQuestions = [
    {
      question: "1 About how long does it take for inhaled marijuana to reach its highest levels in the brain?",
      answers: {
        a: "1 hour",
        b: "30 minutes",
        c: "It's instantaneous",
        d: "10 minutes"
      },
      correctAnswer: "d"
    },
    {
      question: "2 When did Oregon first decriminalize weed?",
      answers: {
        a: "2000",
        b: "Technically it has never been \"criminalized.\"",
        c: "1973",
        d: "2012"
      },
      correctAnswer: "c"
    },
    {
      question: "3 How may compounds does the marijuana plant have?",
      answers: {
        a: "420",
        b: "346",
        c: "3",
        d: "483"
      },
      correctAnswer: "d"
    },
    {
      question: "4 There are more marijuana dispensaries than Starbucks in Los Angeles.",
      answers: {
        a: "True",
        b: "False"
      },
      correctAnswer: "a"
    },
    {
      question: "5 Which state is the biggest producer of marijuana?",
      answers: {
        a: "Oregon",
        b: "Alaska",
        c: "California",
        d: "Colorado"
      },
      correctAnswer: "c"
    },
    {
      question: "6 Why is cannabis green?",
      answers: {
        a: "Compounds in the soil",
        b: "Sunlight",
        c: "Chlorophyll",
        d: "THC"
      },
      correctAnswer: "c"
    },
    {
      question: "7 Which president has admitted to smoking weed?",
      answers: {
        a: "All 3",
        b: "Barack Obama",
        c: "George W. Bush",
        d: "Bill Clinton"
      },
      correctAnswer: "a"
    },
    {
      question: "8 Where does THC go after it passes through the lungs?",
      answers: {
        a: "Brain",
        b: "Stomach lining",
        c: "Bloodstream",
        d: "Nose"
      },
      correctAnswer: "c"
    },
    {
      question: "9 Which has buds: male or female plants?",
      answers: {
        a: "Male",
        b: "Female"
      },
      correctAnswer: "b"
    },
    {
      question: "10 In what year was hemp used as currency when there was a short supply in money?",
      answers: {
        a: "1645",
        b: "1888",
        c: "1492",
        d: "1781"
      },
      correctAnswer: "d"
    }
  ];

  // display quiz right away
  buildQuiz();

  // on submit, show results
  submitButton.addEventListener("click", showResults);
})();
