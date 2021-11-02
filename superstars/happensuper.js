let hapcount1 = 0;
let hapcount2 = 0;
let hapcount3 = 0;
let hapcount4 = 0;

document.getElementById("p1hapadd").addEventListener("click", addButton1, false);
document.getElementById("p2hapadd").addEventListener("click", addButton2, false);
document.getElementById("p3hapadd").addEventListener("click", addButton3, false);
document.getElementById("p4hapadd").addEventListener("click", addButton4, false);
document.getElementById("p1hapsub").addEventListener("click", subButton1, false);
document.getElementById("p2hapsub").addEventListener("click", subButton2, false);
document.getElementById("p3hapsub").addEventListener("click", subButton3, false);
document.getElementById("p4hapsub").addEventListener("click", subButton4, false);
document.getElementById("resethappening").addEventListener("click", resethappening, false);

function addButton1() {
    hapcount1++;
    document.getElementById("p1happen").innerHTML = "P1:  " + hapcount1;
}

function addButton2() {
    hapcount2++;
    document.getElementById("p2happen").innerHTML = "P2:  " + hapcount2;
}

function addButton3() {
    hapcount3++;
    document.getElementById("p3happen").innerHTML = "P3:  " + hapcount3;
}

function addButton4() {
    hapcount4++;
    document.getElementById("p4happen").innerHTML = "P4:  " + hapcount4;
}
            
function subButton1() {
    hapcount1--;
    if (hapcount1 < 0) {
        hapcount1 = 0;
    }
    document.getElementById("p1happen").innerHTML = "P1:  " + hapcount1;
}

function subButton2() {
    hapcount2--;
    if (hapcount2 < 0) {
        hapcount2 = 0;
    }
    document.getElementById("p2happen").innerHTML = "P2:  " + hapcount2;
}

function subButton3() {
    hapcount3--;
    if (hapcount3 < 0) {
        hapcount3 = 0;
    }
    document.getElementById("p3happen").innerHTML = "P3:  " + hapcount3;
}

function subButton4() {
    hapcount4--;
    if (hapcount4 < 0) {
        hapcount4 = 0;
    }
    document.getElementById("p4happen").innerHTML = "P4:  " + hapcount4;
}
            
function resethappening() {
    hapcount1 = 0;
    hapcount2 = 0;
    hapcount3 = 0;
    hapcount4 = 0;
    document.getElementById("p1happen").innerHTML = "P1:  " + hapcount1;
    document.getElementById("p2happen").innerHTML = "P2:  " + hapcount2;
    document.getElementById("p3happen").innerHTML = "P3:  " + hapcount3;
    document.getElementById("p4happen").innerHTML = "P4:  " + hapcount4;
}