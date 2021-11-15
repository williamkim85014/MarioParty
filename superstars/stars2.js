document.getElementById("s1").addEventListener("click", function(){hideStar("s1")}, false);
document.getElementById("s2").addEventListener("click", function(){hideStar("s2")}, false);
document.getElementById("s3").addEventListener("click", function(){hideStar("s3")}, false);
document.getElementById("s4").addEventListener("click", function(){hideStar("s4")}, false);
document.getElementById("s5").addEventListener("click", function(){hideStar("s5")}, false);
document.getElementById("s6").addEventListener("click", function(){hideStar("s6")}, false);
document.getElementById("s7").addEventListener("click", function(){hideStar("s7")}, false);
document.getElementById("s8").addEventListener("click", function(){hideStar("s8")}, false);
document.getElementById("s9").addEventListener("click", function(){hideStar("s9")}, false);
document.getElementById("s10").addEventListener("click", function(){hideStar("s10")}, false);
document.getElementById("starreset").addEventListener("click", resetstar, false);

function hideStar(star) {
    document.getElementById(star).style.visibility="hidden";
}

function resetstar() {
    document.getElementById("s1").style.visibility="visible";
    document.getElementById("s2").style.visibility="visible";
    document.getElementById("s3").style.visibility="visible";
    document.getElementById("s4").style.visibility="visible";
    document.getElementById("s5").style.visibility="visible";
    document.getElementById("s6").style.visibility="visible";
    document.getElementById("s7").style.visibility="visible";
    document.getElementById("s8").style.visibility="visible";
    document.getElementById("s9").style.visibility="visible";
    document.getElementById("s10").style.visibility="visible";
}