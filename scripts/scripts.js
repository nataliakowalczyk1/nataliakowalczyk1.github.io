function pokażZwierzęta() {
    var zwierzęta = document.getElementsByClassName('display');
    Array.from(zwierzęta).forEach(
        function(element) { 
            element.classList.remove('display');         
        }
    )
}