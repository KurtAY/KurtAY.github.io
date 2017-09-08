var btn = document.getElementById("btn");
var animalContainer = document.getElementById("animal-info");
btn.addEventListener("click", function () {
    var ourResquest = new XMLHttpRequest();
    ourResquest.open("GET","https://learnwebcode.github.io/json-example/animals-1.json");
    ourResquest.onload = function(){
        var ourData = JSON.parse(ourResquest.responseText);
        renderHTML(ourData);
        };
    ourResquest.send();
});
function renderHTML(data) {
    var htmlString = "";

    for(var i =0; i < data.length; i++){
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + "</p>";
    }

    animalContainer.insertAdjacentHTML("beforeend", htmlString);
}
