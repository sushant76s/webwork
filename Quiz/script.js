var quizdata = [
    {
        question : "Which framework is related to JS",
        a: '.net',
        b: 'django',
        c: 'react',
        d: 'flask',
        correct: 'c'
    },
    {
        question: "Which is not a programming language",
        a: 'HTML',
        b: 'C++',
        c: 'python',
        d: 'Java',
        correct: 'a'
    },
    {
        question: "Which is not a framework",
        a:'react',
        b:'javascript',
        c:'angular',
        d:'django',
        correct:'b'
    },
    {
        question: "CSS stands for",
        a:'Cascading Style Sheet',
        b: 'Coding style sheet',
        c: 'Cascading Sheet of Style',
        d: 'none',
        correct: 'a'
    }
]

// var quiz = document.getElementById('quiz')
var answer = document.querySelectorAll('.answer')
var question = document.getElementById('question')
var option_a = document.getElementById('a_value')
var option_b = document.getElementById('b_value')
var option_c = document.getElementById('c_value')
var option_d = document.getElementById('d_value')

var submitbtn = document.getElementById('submit')

var currentquestion = 0
var quizScore = 0 

loadQuiz()

function loadQuiz()
{
    dselect()
    question.innerHTML = quizdata[currentquestion].question
    option_a.innerText = quizdata[currentquestion].a
    option_b.innerText = quizdata[currentquestion].b
    option_c.innerText = quizdata[currentquestion].c
    option_d.innerText = quizdata[currentquestion].d
}
 
function dselect()
{
    answer.forEach(answer=>answer.checked=false)
}
submitbtn.addEventListener('click', ()=>{
    
    var selectedoption;
    answer.forEach(answer=>{
        if(answer.checked)
        {
            selectedoption = answer.id
        }
    })
    if(selectedoption == quizdata[currentquestion].correct)
    {
        quizScore = quizScore+1
    }
    currentquestion = currentquestion+1
    if(currentquestion == quizdata.length){
        document.getElementById('quizdiv').innerHTML = `<h1>You have answered ${quizScore} correctly out of ${quizdata.length}</h1>`
    }
    else{
        loadQuiz()
    }
})