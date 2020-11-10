	"use strict"
document.addEventListener("DOMContentLoaded", function(){
    const buttonForSearch = document.getElementsByTagName('button')[0];
    const httpRequestMadeByUser = new XMLHttpRequest();

    buttonForSearch.addEventListener("click", function(event){
        event.preventDefault();

        httpRequestMadeByUser.onreadystatechange = function(){
            if (httpRequestMadeByUser.readyState == 4){
                if (httpRequestMadeByUser.status == 200){
                    alert(httpRequestMadeByUser.responseText);
                }

                if (httpRequestMadeByUser.status == 404){
                    alert("Error! File not found");
                }
            }
        }

        httpRequestMadeByUser.open('get', 'http://localhost/info2180-lab4/superheroes.php', true);
        httpRequestMadeByUser.send();
    });
}); 