const quizData = [
  {
      question: "What is the most used programming language in 2019?",
      a: "Java",
      b: "C",
      c: "Python",
      d: "JavaScript",
      correct: "d",
  },
  {
      question: "What does HTML stand for?",
      a: "Hypertext Markup Language",
      b: "Cascading Style Sheet",
      c: "Jason Object Notation",
      d: "Helicopters Terminals Motorboats Lamborginis",
      correct: "a",
  },
  {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
  },
];

const quiz = document.getElementById("quiz");
const answers = document.querySelectorAll(".answer");
const question = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
  deselectAnswers();

  const currentQuizData = quizData[currentQuiz];

  question.innerText = currentQuizData.question;
  a_text.innerText = currentQuizData.a;
  b_text.innerText = currentQuizData.b;
  c_text.innerText = currentQuizData.c;
  d_text.innerText = currentQuizData.d;
}

function getSelected() {
  let answer = undefined;

  answers.forEach((ans) => {
      if (ans.checked) {
          answer = ans.id;
      }
  });

  return answer;
}

function deselectAnswers() {
  answers.forEach((ans) => {
      if(ans.checked)
        ans.checked = false;
  });
}

submitBtn.addEventListener("click", () => {
  // check to see the answer
  const answer = getSelected();

  if (answer) {
      if (answer === quizData[currentQuiz].correct) {
          score++;
      }

      currentQuiz++;
      if (currentQuiz < quizData.length) {
          loadQuiz();
      } else {
          quiz.innerHTML = `
              <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
              
              <button onclick="location.reload()">Reload</button> 
          `;
          /*  Reload the current document: */

            // Reload the current resources from the browser's cache
            // window.location.reload();
            // For reference reload function:- https://www.youtube.com/watch?v=SQFwFjMUgUc
      }

  }
}); 