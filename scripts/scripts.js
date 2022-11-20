function pokażZwierzęta() {
    var zwierzęta = document.getElementsByClassName('display');
    Array.from(zwierzęta).forEach(
        function(element) { 
            element.classList.remove('display');         
        }
    )
}

function rysujKoty() {
    var ileKotow = 79;
    for (var i=0; i <ileKotow; i++) {
        var kotek = document.createElement('p');
        kotek.classList.add("czerwony-kotek");
        var twarzKotka = document.createTextNode(i + "=^.^=");
        kotek.appendChild(twarzKotka);
        var piesek = document.getElementById("piesek");
        document.body.insertBefore(kotek, piesek);
    }
}; 
