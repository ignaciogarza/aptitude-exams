const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);

function evaluateTest(e){
    e.preventDefault();
    console.log(typeof e.path);
    const [...formResults ] = e.path;
    console.log(formResults);
    console.log(formResults[1][1].checked);
}
