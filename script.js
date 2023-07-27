
function buttonClick(val){
    document.getElementById("screen").value=document.getElementById("screen").value+val
}

function clearBtn(){
    document.getElementById("screen").value=''
}

function equalClick(){
    var text = document.getElementById("screen").value
    var result = eval(text)
    document.getElementById("screen").value = result
}

function backSpace(){
    var backval = document.getElementById("screen").value;  
    document.getElementById("screen").value = backval.substring(0, backval.length - 1);
 /* remove the element from total length ? 1 */  
}