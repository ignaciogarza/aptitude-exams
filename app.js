
const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);


function evaluateTest(e){
    e.preventDefault();
    const [...userAnswers ] =  e.path[2];
    console.log(userAnswers);
    console.log(userAnswers[0].checked);
    console.log(userAnswers[1].checked);
}



