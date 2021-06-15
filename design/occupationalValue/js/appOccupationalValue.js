
const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);


function evaluateTest(e){
    e.preventDefault();

    const userSelections =  document.querySelectorAll("input[type='radio']:checked")
  
    console.log(userSelections)

    const resultados = calculateCategories(userSelections);

    console.log("Resultados", resultados);

}

function calculateCategories(userAnswers){

    let catAutonomia = 0, 
    catDemostracion = 0, 
    catRemuneracion = 0, 
    catEstabilidad = 0, 
    catReconocimiento = 0, 
    catAltruismo = 0, 
    catCreatividad = 0, 
    catAutodesarrollo =0;


 const arrCatAutonomia = ["optionBQ01","optionBQ08","optionAQ10","optionAQ14", "optionBQ15", "optionAQ18", "optionBQ28"];

 const arrCatDemostracion = ["optionAQ01","optionBQ05","optionAQ09","optionAQ13", "optionBQ19", "optionBQ21", "optionAQ24"];

 const arrCatRemuneracion = ["optionAQ03","optionBQ06","optionAQ12","optionBQ16", "optionAQ21", "optionBQ22", "optionAQ28"];
 
 const arrCatEstabilidad = ["optionBQ02","optionAQ04","optionBQ14","optionAQ16", "optionBQ20", "optionAQ23", "optionBQ24"];

 const arrCatReconocimiento = ["optionBQ04","optionAQ06","optionBQ07", "optionBQ10", "optionAQ17", "optionAQ19", "optionBQ26"];

 const arrCatAltruismo = ["optionBQ09","optionAQ11","optionBQ12","optionAQ15", "optionAQ20", "optionBQ25", "optionAQ26"];

 const arrCatCreatividad = ["optionAQ02","optionBQ03","optionAQ08","optionBQ11", "optionBQ13", "optionBQ17", "optionAQ27"];

 const arrCatAutodesarrollo = ["optionAQ05","optionAQ07","optionBQ18","optionAQ22", "optionBQ23", "optionAQ25", "optionBQ27"];

 if(userAnswers.length > 0 ) {
    
    for(answer in userAnswers) {
       
        if(typeof userAnswers[answer].id != "undefined") {
            if(arrCatAutonomia.includes(userAnswers[answer].id)) {
                catAutonomia++
            } else if(arrCatDemostracion.includes(userAnswers[answer].id)) {
                catDemostracion++
            } else if(arrCatRemuneracion.includes(userAnswers[answer].id)) {
                catRemuneracion++
            } else if(arrCatEstabilidad.includes(userAnswers[answer].id)) {
                catEstabilidad++
            }  else if(arrCatReconocimiento.includes(userAnswers[answer].id)) {
                catReconocimiento++
            } else if(arrCatAltruismo.includes(userAnswers[answer].id)) {
                catAltruismo++
            } else if(arrCatCreatividad.includes(userAnswers[answer].id)) {
                catCreatividad++
            } else if(arrCatAutodesarrollo.includes(userAnswers[answer].id)) {
                catAutodesarrollo++
            }
        }
     }
 } 

 console.log("Autonomia: ", catAutonomia);
 console.log("Demostración: ", catDemostracion);
 console.log("Remuneración: ", catRemuneracion);
 console.log("Estabilidad: ", catEstabilidad);
 console.log("Reconocimiento:", catReconocimiento, );
 console.log("Altruismo: ", catAltruismo);
 console.log("Creatividad: ", catCreatividad);
 console.log("Autodesarrollo: ", catAutodesarrollo);

 return [catAutonomia, catDemostracion, catRemuneracion, catEstabilidad, catReconocimiento, catAltruismo, catCreatividad, catAutodesarrollo]

}

