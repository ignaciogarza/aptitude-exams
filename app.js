
const buttonEndTest = document.getElementById("submitTest");
buttonEndTest.addEventListener("click", evaluateTest);


function evaluateTest(e){
    e.preventDefault();
    const {...userAnswers } =  e.path[2];

  

    calculateCategories(userAnswers)


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

    
   
    console.table(arrResp);


}

function calculateCategories(categories) {
    console.log(categories);

   

    let catAutonomia = 0, 
    catDemostracion = 0, 
    catRemuneracion = 0, 
    catEstabilidad = 0, 
    catReconocimiento = 0, 
    catAltruismo = 0, 
    catCreatividad = 0, 
    catAutodesarrollo =0;

    if() {
        catAutonomia++;
    }


}

