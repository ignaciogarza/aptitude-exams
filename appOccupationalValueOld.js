
const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);


function evaluateTest(e){
    e.preventDefault();
    const {...userAnswers } =  e.path[2];

  

    const categoriesTotal = calculateCategories(userAnswers)


    const arrResp = [ 
        [userAnswers[0].checked, userAnswers[1].checked], 
        [userAnswers[2].checked, userAnswers[3].checked], 
        [userAnswers[4].checked, userAnswers[5].checked], 
        [userAnswers[6].checked, userAnswers[7].checked], 
        [userAnswers[8].checked, userAnswers[9].checked], 
        [userAnswers[10].checked, userAnswers[11].checked], 
        [userAnswers[12].checked, userAnswers[13].checked], 
        [userAnswers[14].checked, userAnswers[15].checked], 
        [userAnswers[16].checked, userAnswers[17].checked], 
        [userAnswers[18].checked, userAnswers[19].checked], 
        [userAnswers[20].checked, userAnswers[21].checked], 
        [userAnswers[22].checked, userAnswers[23].checked], 
        [userAnswers[24].checked, userAnswers[25].checked], 
        [userAnswers[26].checked, userAnswers[27].checked], 
        [userAnswers[28].checked, userAnswers[29].checked], 
        [userAnswers[30].checked, userAnswers[31].checked], 
        [userAnswers[32].checked, userAnswers[33].checked], 
        [userAnswers[34].checked, userAnswers[35].checked], 
        [userAnswers[36].checked, userAnswers[37].checked], 
        [userAnswers[38].checked, userAnswers[39].checked], 
        [userAnswers[40].checked, userAnswers[41].checked], 
        [userAnswers[42].checked, userAnswers[43].checked], 
        [userAnswers[44].checked, userAnswers[45].checked], 
        [userAnswers[46].checked, userAnswers[47].checked], 
        [userAnswers[48].checked, userAnswers[49].checked], 
        [userAnswers[50].checked, userAnswers[51].checked], 
        [userAnswers[52].checked, userAnswers[53].checked], 
        [userAnswers[54].checked, userAnswers[55].checked], 
    ]

    console.log("");
    console.log("");
    console.log("USER SELECTIONS") 
    console.log("Column 0 is left option, column 1 is right option")
    console.table(arrResp);
   


}

function calculateCategories(categories = []) {

   

    let catAutonomia = 0, 
    catDemostracion = 0, 
    catRemuneracion = 0, 
    catEstabilidad = 0, 
    catReconocimiento = 0, 
    catAltruismo = 0, 
    catCreatividad = 0, 
    catAutodesarrollo =0;


    const arrAutonomia = [
        categories[1].checked,
        categories[15].checked,
        categories[18].checked,
        categories[26].checked,
        categories[29].checked,
        categories[34].checked, 
        categories[55].checked
    ]

    const arrDemostracion = [
        categories[0].checked,
        categories[9].checked,
        categories[16].checked,
        categories[24].checked,
        categories[37].checked,
        categories[41].checked,
        categories[46].checked
    ]

    const arrRemuneracion = [
        categories[4].checked,
        categories[11].checked,
        categories[22].checked,
        categories[31].checked,
        categories[40].checked,
        categories[43].checked,
        categories[54].checked
    ]

    const arrEstabilidad = [
        categories[3].checked,
        categories[6].checked,
        categories[27].checked,
        categories[30].checked,
        categories[39].checked,
        categories[44].checked,
        categories[47].checked
    ]

    const arrReconocimiento = [
        categories[7].checked,
        categories[10].checked,
        categories[13].checked,
        categories[19].checked,
        categories[32].checked,
        categories[36].checked,
        categories[51].checked,
    ]

    const arrAltruismo = [
        categories[17].checked,
        categories[20].checked,
        categories[23].checked,
        categories[28].checked,
        categories[38].checked,
        categories[49].checked,
        categories[50].checked
    ]

    const arrCreatividad = [
        categories[2].checked,
        categories[5].checked,
        categories[14].checked,
        categories[21].checked,
        categories[25].checked,
        categories[33].checked,
        categories[52].checked
    ]

    const arrAutodesarollo = [
        categories[8].checked,
        categories[12].checked,
        categories[35].checked,
        categories[42].checked,
        categories[45].checked,
        categories[48].checked,
        categories[53].checked
    ]

    for(respuesta in arrAutonomia) {
        if(arrAutonomia[respuesta] === true) {
            catAutonomia++;   
        }
    }
    for(respuesta in arrDemostracion) {
        if(arrDemostracion[respuesta] === true) {
            catDemostracion++;   
        }
    }
    for(respuesta in arrRemuneracion) {
        if(arrRemuneracion[respuesta] === true) {
            catRemuneracion++;   
        }
    }
    for(respuesta in arrEstabilidad) {
        if(arrEstabilidad[respuesta] === true) {
            catEstabilidad++;   
        }
    }
    for(respuesta in arrReconocimiento) {
        if(arrReconocimiento[respuesta] === true) {
            catReconocimiento++;   
        }
    }
    for(respuesta in arrAltruismo) {
        if(arrAltruismo[respuesta] === true) {
            catAltruismo++;   
        }
    }
    for(respuesta in arrCreatividad) {
        if(arrCreatividad[respuesta] === true) {
            catCreatividad++;   
        }
    }
    for(respuesta in arrAutodesarollo) {
        if(arrAutodesarollo[respuesta] === true) {
            catAutodesarrollo++;   
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

