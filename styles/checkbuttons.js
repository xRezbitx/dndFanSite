// Below code is from: https://codepen.io/vjandrei/pen/nLOobQ
// 
// with some adjustments by: Gaige J, 000869398, 03/02/2022
//
// This disables the checkboxes for each accordian section after certain amount of boxes checked

$("input:checkbox[name=barbarian-skills]").click(function() {
    var bol = $("input:checkbox[name=barbarian-skills]:checked").length >= 2;     
    $(":checkbox[name=barbarian-skills]").not(":checked").attr("disabled",bol);
});
    
$("input:checkbox[name=ranger-skills]").click(function() {
    var bol = $("input:checkbox[name=ranger-skills]:checked").length >= 3;     
    $(":checkbox[name=ranger-skills]").not(":checked").attr("disabled",bol);
});

$("input:checkbox[name=wizard-skills]").click(function() {
    var bol = $("input:checkbox[name=wizard-skills]:checked").length >= 2;     
    $(":checkbox[name=wizard-skills]").not(":checked").attr("disabled",bol);
    
});

// re-enables the checkboxes if reset is pressed
// Original code found here https://stackoverflow.com/questions/17599984/how-to-enable-a-disabled-checkbox-dynamically
// Modified by Gaige J 000869398
function enableBarbarian() {
    // wasn't sure how to use getElementsByClass so I did each individually
    document.getElementById("animal-handling").disabled = false;
    document.getElementById("athletics").disabled = false;
    document.getElementById("intimidation").disabled = false;
    document.getElementById("nature").disabled = false;
    document.getElementById("perception").disabled = false;
    document.getElementById("survival").disabled = false;
}
document.getElementById("reset-barbarian").addEventListener("click", enableBarbarian);

function enableRanger() {
    document.getElementById("animal-handling-r").disabled = false;
    document.getElementById("athletics-r").disabled = false;
    document.getElementById("insight").disabled = false;
    document.getElementById("investigation").disabled = false;
    document.getElementById("nature-r").disabled = false;
    document.getElementById("perception-r").disabled = false;
    document.getElementById("stealth").disabled = false;
    document.getElementById("survival-r").disabled = false;
}
document.getElementById("reset-ranger").addEventListener("click", enableRanger);

function enableWizard() {
    document.getElementById("arcana").disabled = false;
    document.getElementById("history").disabled = false;
    document.getElementById("insight-w").disabled = false;
    document.getElementById("investigation-w").disabled = false;
    document.getElementById("medicine").disabled = false;
    document.getElementById("religion").disabled = false;
}
document.getElementById("reset-wizard").addEventListener("click", enableWizard);