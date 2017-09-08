var header = document.querySelector("header");
var section = document.querySelector("section");

var requestURL = "https://raw.githubusercontent.com/ewomackqa/JSONDataRepo/master/example.json";
var btn = document.getElementById("btn");
var memberContainer = document.getElementById("member-info");
btn.addEventListener("click",function() {
    var request = new XMLHttpRequest();
    request.open("GET",requestURL);
    request.onload = function() {
        var heroes = JSON.parse(request.responseText);
        populateHeader(heroes);
        showHeroes(heroes);
    };
    request.send();
});
function populateHeader(data) {
    var myH1 = document.createElement("h1");
    myH1.textContent = data["squadName"];
    header.appendChild(myH1);

    var myPara = document.createElement("p");
    myPara.textContent = "Hometown: " + data["homeTown"];
    header.appendChild(myPara);

    var myPara11 = document.createElement("p");
    myPara11.textContent = "Formed: " + data["formed"];
    header.appendChild(myPara11);

    var myPara22 = document.createElement("p");
    myPara22.textContent = "Secret Base: " + data["secretBase"];
    header.appendChild(myPara22);
    

    /*var htmlString = "";
    
    for(var i =0; i < da.length; i++){
        htmlString += "<p>" + da[i].members.name + " " + da[i].members.age + "</p>";
    }

    memberContainer.insertAdjacentHTML("beforeend", htmlString);*/
}

function showHeroes(obj) {
    var hero = obj["members"];

    for (var i=0; i < hero.length; i++) {
        var myArticle = document.createElement("article");
        var myH2 = document.createElement("h2");
        var myPara1 = document.createElement("p");
        var myPara2 = document.createElement("p");
        var myPara3 = document.createElement("p");
        var myList = document.createElement("ul");

        myH2.textContent = hero[i].name;
        myPara1.textContent = "Secret identity: ";
        myPara2.textContent = "Age: " + hero[i].age;
        myPara3.textContent = "SuperPower: ";

        var superPowers = hero[i].powers;
        for(var j = 0; j < superPowers.length; j++) {
            var listItem = document.createElement("li");
            listItem.textContent = superPowers[j];
            myList.appendChild(listItem);
        }

        myArticle.appendChild(myH2);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);
        myArticle.appendChild(myList);      
        
        section.appendChild(myArticle);
    }
}