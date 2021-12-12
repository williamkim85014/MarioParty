function singleDice() {
    console.log("made it here");
        var min = 1;
        var max = 10;
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                console.log(this.responseText);
                document.getElementById("sing").innerHTML = "Your roll is: " + gen;
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

function mushDice() {
        var min = 5;
        var max = 15;
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                console.log(this.responseText);
                document.getElementById("musher").innerHTML = "Your roll is: " + gen;
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

function curseDice() {
        var min = 1;
        var max = 3;
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                console.log(this.responseText);
                document.getElementById("cur").innerHTML = "Your roll is: " + gen;
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

function doubleDice() {
    console.log("made it here");
        var min = 1;
        var max = 10;
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                console.log(this.responseText);
                doubleDice2(gen);
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

function doubleDice2(rolls) {
    console.log("made it here");
        var min = 1;
        var max = 10;
           var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                var fin = +gen + +rolls;
                console.log(this.responseText);
                console.log(fin);
                document.getElementById("dub").innerHTML = "Your roll is: " + fin;
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp2.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.send();
    }

function tripleDice() {
    console.log("made it here");
        var min = 1;
        var max = 10;
           var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                console.log(this.responseText);
                tripleDice2(gen);
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
    }

    function tripleDice2(roll1) {
        console.log("made it here");
            var min = 1;
            var max = 10;
               var xhttp = new XMLHttpRequest();
                xhttp.onreadystatechange = function() {
                if (this.readyState == 4 && this.status == 200) {
                    var gen = this.responseText;
                    console.log(this.responseText);
                    var roll2 = +gen + +roll1;
                    tripleDice3(roll2);
                } 
                else if (this.readyState == 4) {
                    console.log(this.responseText);
                    alert("no work");
                }
            };
            xhttp.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
            xhttp.setRequestHeader("Content-type", "application/json");
            xhttp.send();
        }

function tripleDice3(roll2) {
    console.log("made it here");
        var min = 1;
        var max = 10;
           var xhttp2 = new XMLHttpRequest();
            xhttp2.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                var gen = this.responseText;
                var fin = +gen + +roll2;
                console.log(this.responseText);
                console.log(fin);
                document.getElementById("trip").innerHTML = "Your roll is: " + fin;
            } 
            else if (this.readyState == 4) {
                console.log(this.responseText);
                alert("no work");
            }
        };
        xhttp2.open("GET", "https://www.random.org/integers/?num=1&min=" + min + "&max=" + max + "&col=1&base=10&format=plain&rnd=new", true);
        xhttp2.setRequestHeader("Content-type", "application/json");
        xhttp2.send();
    }