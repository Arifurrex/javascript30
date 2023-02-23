var myQuestions = [
    {
        question : "whats your country name ?",
        answers : {
            a : 'uk',
            b : 'portogule',
            c : 'korea' ,
            d : 'bangladesh'
        },
        correctAnswer : 'd'
    },
    {
        question : "whats your national bird name ?",
        answers : {
            a : 'crow',
            b : 'cow',
            c : 'koel' ,
            d : 'tiger'
        },
        correctAnswer : 'c'
    },
    {
        question : "whats your national flag color ?",
        answers : {
            a : 'red',
            b : 'blue',
            c : 'green' ,
            d : 'white'
        },
        correctAnswer : 'c'
    }
];
var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('result');
var submitButton = document.getElementById('submit');

function generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton){

   function showQuestions(myQuestions, quizContainer){
    // this function will show the question 
    output = [];
    for(let i = 0; i<myQuestions.length; i++){
        // this is array
        console.log(myQuestions[i]);
        answers = [];
    
        for(letter in myQuestions[i].answers){
            answers.push(
                `
                <label>
                <input type = "radio" name="${myQuestions[i]}" value = ${letter}>
                 ${letter} : ${myQuestions[i].answers[letter]}
                </label>
                `
            )
           
        }
        output.push(
            `
            <div class="question>${myQuestions[i].question}</div>
            <div class = "answers">${answers.join('')}</div>
            `
        )
        quizContainer.innerHTML = output.join('');
    }
   }
   function showResults(myquestions,quizContainer,resultsContainer){
    var answerContainers = quizContainer.querySelectorAll('.answers');
     var userAnswer ='';
     var numCorrect = 0;
 
     for(var i = 0;i<myQuestions.length;i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;
         
         if(userAnswer == myQuestions[i].correctAnswer){
             numCorrect++;
 
             answerContainers[i].style.color = 'lightgreen';
         }else{
             answerContainers[i].style.color ='red';
         }
     }
     resultContainers.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
 }
 // show questions right away
 showQuestions(myQuestions,quizContainer);
     
 // on submit, show results
 submitButton.onclick = function(){
     showResults(myQuestions, quizContainer, resultsContainer);
 }
 
}
generateQuiz(myQuestions,quizContainer, resultsContainer, submitButton);

