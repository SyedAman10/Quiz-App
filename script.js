const quizData = [
    {
         question: 'How old is Aman?' ,
         a:'10',
         b:'17',
         c:'26',
         d:'21',
         correct:'d'
        
    }, {
        question: 'What is the most used programming language in 2019?',
        a:'Java',
        b:'C',
        c:'Python',
        d:'JavaScript',
        correct:'d'
    }, {
        question: 'Who is the president of US?',
        a:'Syed Aman',
        b:'Donald Trump',
        c:'Michael Jordan',
        d:'Joe Biden',
        correct:'d'
    }, {
        question: 'What does HTML stand for ?',
        a:'Hypertext Markup Language',
        b:'Hypertext Markups Language',
        c:'Hyper Markup Language',
        d:'Hypertext Mark Language',
        correct:'a'
    },
    {
        question: 'What year was Javascript launched?',
        a:'1996',
        b:'1995',
        c:'2018',
        d:'none of above',
        correct:'d'
    }
];

const questionEl = document.getElementById('question');

const a_text = document.getElementById('a_text'); 
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const d_text = document.getElementById('d_text');



let currentQuiz = 0;

loadQuiz();
function loadQuiz() {
    const currentQuizData = [currentQuiz];

    questionEl.innerText =currentQuizData.question
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;

    currentQuestion++;
}