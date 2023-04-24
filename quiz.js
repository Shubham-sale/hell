const data = [
    {
      id: 1,
      question: "Who developed object-oriented programming?",
      answers: [
        { answer: "Adele Goldberg", isCorrect: false },
        { answer: "Dennis Ritchie", isCorrect: false },
        { answer: "Alan Kay", isCorrect: true },
        { answer: "Andrea Ferro", isCorrect: false },
      ],
    },
    {
      id: 2,
      question: "Which of the following is not an OOPS concept?",
      answers: [
        { answer: "Encapsulation", isCorrect: false },
        { answer: "Polymorphism", isCorrect: false },
        { answer: "Exception", isCorrect: true },
        { answer: "Abstration", isCorrect: false },
      ],
    },
    {
      id: 3,
      question: "Which of the following language supports polymorphism but not the classes?",
      answers: [
        { answer: "C++", isCorrect: false },
        { answer: "Java", isCorrect: false },
        { answer: "Ada", isCorrect: true },
        { answer: "C#", isCorrect: false },
      ],
    },
    {
      id: 4,
      question: "Which feature of OOPS derives the class from another class?",
      answers: [
        { answer: "Inheritance", isCorrect: true },
        { answer: "Data hiding", isCorrect: false },
        { answer: "Encapsulation", isCorrect: false },
        { answer: "Polymorphism", isCorrect: false },
      ],
    },{
      id: 5,
      question: "A single program of OOPS contains _______ classes?",
      answers: [
        { answer: "Only 1", isCorrect: false },
        { answer: "Only 100", isCorrect: false },
        { answer: "Only 999", isCorrect: false },
        { answer: "Any Number", isCorrect: true },
      ],
    }
  ];
  
  const gameScreen = document.querySelector(".game");
  const resultScreen = document.querySelector(".result");
  const question = document.querySelector(".question");
  const answersContainer = document.querySelector(".answers");
  const submit = document.querySelector(".submit");
  const play = document.querySelector(".play");
  
  let qIndex = 0;
  let correctCount = 0;
  let wrongCount = 0;
  let total = 0;
  let selectedAnswer;
  
  const playAgain = () => {
    qIndex = 0;
    correctCount = 0;
    wrongCount = 0;
    total = 0;
    showQuestion(qIndex);
  };
  
  play.addEventListener("click",()=>{
    resultScreen.style.display = "none";
    gameScreen.style.display = "block";
    playAgain()
  })
  
  const showResult = () => {
    resultScreen.style.display = "block";
    gameScreen.style.display = "none";
  
    resultScreen.querySelector(
      ".correct"
    ).textContent = `Correct Answers: ${correctCount}`;
  
    resultScreen.querySelector(
      ".wrong"
    ).textContent = `Wrong Answers: ${wrongCount}`;
  
    resultScreen.querySelector(".score").textContent = `Score: ${
      (correctCount - wrongCount) * 10
    }`;
  };
  
  const showQuestion = (qNumber) => {
    if (qIndex === data.length) return showResult();
    selectedAnswer = null;
    question.textContent = data[qNumber].question;
    answersContainer.innerHTML = data[qNumber].answers
      .map(
        (item, index) =>
          `
    <div class="answer">
        <input type="radio" id=${index} name="answer" value=${item.isCorrect} />
        <label for="1">${item.answer}</label>
    </div>
    `
      )
      .join("");
  
    selectAnswer();
  };
  
  const selectAnswer = () => {
    answersContainer.querySelectorAll("input").forEach((el) => {
      el.addEventListener("click", (e) => {
        selectedAnswer = e.target.value;
      });
    });
  };
  
  const submitAnswer = () => {
    submit.addEventListener("click", () => {
      if (selectedAnswer !== null) {
        selectedAnswer === "true" ? correctCount++ : wrongCount++;
        qIndex++;
        showQuestion(qIndex);
      } else alert("Select an answer!");
    });
  };
  
  showQuestion(qIndex);
  submitAnswer();