let amountOfRows = 4;

function getRow() {
    let filter = "Row" + amountOfRows
    const positionSelect = document.querySelector("[secondid="+ filter +"]");
    amountOfRows++
    let i = amountOfRows
    positionSelect.insertAdjacentHTML("afterend", `<tr style="height: 60px" secondId="Row${i}">
                                    <th style="width: 20%; color: #494b4c">Activity ${i}</th>
                                    <th style="width: 20%; color: #494b4c">A${i}</th>
                                    <th style="width: 20%; color: #494b4c">
                                        <input id="W${i}">
                                    </th>
                                    <th style="width: 20%; color: #494b4c">
                                        <div class="row">
                                        <input id="G${i}" onchange="getPersent()">
                                            <b>/</b>
                                        <input id="GT${i}" onchange="getPersent()">
                                        </div>
                                    </th>
                                    <th id="P${i}" style="width: 20%; color: #494b4c"></th>
                                </tr>`);

    MainContainer


    let newCalculatedHeight = 650 + (amountOfRows - 4)*60
    let newHeight = newCalculatedHeight.toString() + "px"
    document.getElementById("Container").style.height = newHeight;

    let newCalculatedHeightOfMainContainer = (amountOfRows - 4)*60
    let newHeightOfMainContainer = "calc(100vh + " + newCalculatedHeightOfMainContainer.toString() + "px)"
    document.getElementById("MainContainer").style.height = newHeightOfMainContainer;
}

function deleteElement(id){
    if (document.getElementById(id)){
        document.getElementById(id).remove()
    }
}

function getPersent(){
    for (let i = 1; i < amountOfRows + 1; i++){
        let grade = parseFloat(document.getElementById("G" + i).value)
        let total = parseFloat(document.getElementById("GT" + i).value)
        let percent = ((grade/total)*100).toFixed(2)
        if (!isNaN(percent)){
            let newId = "Per" + i
            deleteElement(newId)
            let newValue = ""
            if (total === 0){
                newValue = "<div id="+ newId +">" + "We cannot devide by 0" + "</div>"
            }
            if (grade < 0 || total < 0){
                newValue = "<div id="+ newId +">" + "Use only positive numbers" + "</div>"
            }
            if (grade > total ){
                newValue = "<div id="+ newId +">" + "It is imposible to have more than 100%" + "</div>"
            }
            else{
                newValue = "<b id="+ newId +">" + percent.toString() + " %" + "</b>"
            }

            document.getElementById("P" + i).insertAdjacentHTML("afterbegin",
                newValue);
        }


    }
}


function getWeighted(){
    let totalOfRows = 0
    let divisor = 0
    let answer = 0
    for (let i = 1; i < amountOfRows + 1; i++){
        let grade = parseFloat(document.getElementById("G" + i).value)
        let total = parseFloat(document.getElementById("GT" + i).value)
        let weighted = parseFloat(document.getElementById("W" + i).value)
        let percent = ((grade/total)*100).toFixed(2)
        if (!isNaN(percent)){
            if (total === 0){

            }
            if (weighted === undefined){
                alert("There are no value in some row in Weighted")
                break
            }
            if (grade < 0 || total < 0){

            }
            if (grade > total ){

            }
            else{
                totalOfRows = totalOfRows + parseFloat((grade/total).toFixed(2))*weighted
                divisor = divisor + weighted
            }

        }

    }
    if (totalOfRows > 0 && divisor !== 0){
        deleteElement("Result")
        answer = ((totalOfRows/divisor)*100).toFixed(2)
        let newValue = "<b style='padding-left: 10px' id="+ "Result" +">" + answer.toString() + " %" + "</b>"
        document.getElementById("R").insertAdjacentHTML("afterbegin",
            newValue);
    }
}



function getMean(){
    let totalOfRows = 0
    let divisor = 0
    let answer = 0
    for (let i = 1; i < amountOfRows + 1; i++){
        let grade = parseFloat(document.getElementById("G" + i).value)
        let total = parseFloat(document.getElementById("GT" + i).value)
        let percent = ((grade/total)*100).toFixed(2)
        if (!isNaN(percent)){
            if (total === 0){

            }
            if (grade < 0 || total < 0){

            }
            if (grade > total ){

            }
            else{
                totalOfRows = totalOfRows + parseFloat((grade/total).toFixed(2))
                divisor++
            }

        }

    }
    if (totalOfRows > 0 && divisor !== 0){
        deleteElement("Result")
        answer = ((totalOfRows/divisor)*100).toFixed(2)
        let newValue = "<b style='padding-left: 10px' id="+ "Result" +">" + answer.toString() + " %" + "</b>"
        document.getElementById("R").insertAdjacentHTML("afterbegin",
            newValue);
    }
}

