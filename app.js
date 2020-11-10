	"use strict"
document.addEventListener("DOMContentLoaded", function(){
    const buttonForSearch = document.getElementsByTagName('button')[0];
    const httpRequestMadeByUser = new XMLHttpRequest();
	const result = document.getElementById('result');
	const aliasOfHero = document.getElementById('alias');
	const nameOfHero = document.getElementById('name');
	const bioOfHero = document.getElementById('biography');
	const missingHero = document.getElementById('notFound');

    buttonForSearch.addEventListener("click", function(event){
        event.preventDefault();
		
		var operationForSearch = document.getElementById('searchBox').value;
		missingHero.innerHTML = "";
		aliasOfHero.innerHTML = "";
		nameOfHero = "";
		bioOfHero.innerHTML = "";
		result.innerHTML = "";

        httpRequestMadeByUser.onreadystatechange = function(){
            if (httpRequestMadeByUser.readyState == 4){
                if (httpRequestMadeByUser.status == 200){
					if (operationForSearch.legth != 0){
						var new_variable = httpRequestMadeByUser.responseText;
						var another_variable = JSON.parse(new_variable);
						if (another_variable == "Superhero Not Found."){
							missingHero.innerHTML = new_variable;
							missingHero.classList.add("notFound");
					}
					else {
						aliasOfHero.innerHTML = another_variable.alias.toUpperCase();
						nameOfHero.innerHTML = "A.K.A" + another_variable.name.toUpperCase();
						bioOfHero.innerHTML = another_variable.biography;
					}
				}
					else{
						result.innerHTML = httpRequestMadeByUser.responseText;
					}
				}
              

                if (httpRequestMadeByUser.status == 404){
                    alert("Error! File not found");
                }
            }
        }

        httpRequestMadeByUser.open('get', 'http://localhost/info2180-lab4/superheroes.php'+operationForSearch, true);
        httpRequestMadeByUser.send();
    });
}); 