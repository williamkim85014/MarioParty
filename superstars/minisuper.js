let count1 = 0;
let count2 = 0;
let count3 = 0;
let count4 = 0;

document.getElementById("p1add").addEventListener("click", addButton1, false);
document.getElementById("p2add").addEventListener("click", addButton2, false);
document.getElementById("p3add").addEventListener("click", addButton3, false);
document.getElementById("p4add").addEventListener("click", addButton4, false);
document.getElementById("p1sub").addEventListener("click", subButton1, false);
document.getElementById("p2sub").addEventListener("click", subButton2, false);
document.getElementById("p3sub").addEventListener("click", subButton3, false);
document.getElementById("p4sub").addEventListener("click", subButton4, false);
document.getElementById("resetmini").addEventListener("click", resetmini, false);

function addButton1() {
    count1++;
    document.getElementById("p1mini").innerHTML = "P1:  " + count1;
}

function addButton2() {
    count2++;
    document.getElementById("p2mini").innerHTML = "P2:  " + count2;
}

function addButton3() {
    count3++;
    document.getElementById("p3mini").innerHTML = "P3:  " + count3;
}

function addButton4() {
    count4++;
    document.getElementById("p4mini").innerHTML = "P4:  " + count4;
}
            
function subButton1() {
    count1--;
    if (count1 < 0) {
        count1 = 0;
    }
    document.getElementById("p1mini").innerHTML = "P1:  " + count1;
}

function subButton2() {
    count2--;
    if (count2 < 0) {
        count2 = 0;
    }
    document.getElementById("p2mini").innerHTML = "P2:  " + count2;
}

function subButton3() {
    count3--;
    if (count3 < 0) {
        count3 = 0;
    }
    document.getElementById("p3mini").innerHTML = "P3:  " + count3;
}

function subButton4() {
    count4--;
    if (count4 < 0) {
        count4 = 0;
    }
    document.getElementById("p4mini").innerHTML = "P4:  " + count4;
}
            
function resetmini() {
    count1 = 0;
    count2 = 0;
    count3 = 0;
    count4 = 0;
    document.getElementById("p1mini").innerHTML = "P1:  " + count1;
    document.getElementById("p2mini").innerHTML = "P2:  " + count2;
    document.getElementById("p3mini").innerHTML = "P3:  " + count3;
    document.getElementById("p4mini").innerHTML = "P4:  " + count4;
}