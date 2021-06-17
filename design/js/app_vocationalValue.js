const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);

const selectedA = [];
const selectedB = [];
const selectedC = [];
const selectedD = [];

function evaluateTest(e){
    e.preventDefault();
    
    //Gets am array of selected inputs(0 or more)
    const selectedOptions = document.querySelectorAll("input[type='radio']:checked");

    // avoids the no selection error (0 checked inputs)
    if(selectedOptions.length > 0) {
        console.log(selectedOptions);
        // console.log(selectedOptions)
        for(selected in selectedOptions) {
            if(typeof selectedOptions[selected].id !== "undefined") {
                if( selectedOptions[selected].id.includes("A")) {
                    selectedA.push(selectedOptions[selected].id);
                    // console.log("Opcion A", selectedOptions[selected].id);
                } else if( selectedOptions[selected].id.includes("B")) {
                    selectedB.push(selectedOptions[selected].id)
                    // console.log("Opcion B", selectedOptions[selected].id);
                } else if (selectedOptions[selected].id.includes("C")){
                    selectedC.push(selectedOptions[selected].id)
                    // console.log("Opcion C", selectedOptions[selected].id);
                } else if(selectedOptions[selected].id.includes("D")) {
                    selectedD.push(selectedOptions[selected].id)
                    // console.log("Opcion D", selectedOptions[selected].id);
                }
            } 
        }
            
    } else {
        console.log("No option selected.");
    }
 
    console.log("*** Results ***");
    console.log(" ");
    console.log("Option 1: No me gusta nada:");
    console.log("Times selected: ",selectedA.length);
    console.log(selectedA);
    console.log(" ");

    console.log("Option 2: No me gusta:");
    console.log("Times selected: ",selectedB.length);
    console.log(selectedB);

    console.log(" ");
    console.log("Option 3: Me gusta:");
    console.log("Times selected: ",selectedC.length);
    console.log(selectedC);
    console.log(" ");
 
    console.log("Option 4: Me gusta mucho:");
    console.log("Times selected: ",selectedD.length);
    console.log(selectedD);
    console.log(" ");
}

