window.addEventListener("DOMContentLoaded", getApi);

const apiRest = "https://rickandmortyapi.com/api/character/"
const inputSearch = document.getElementById("search");
const main = document.getElementById("main");

inputSearch.addEventListener("keyup", searcher)


function getApi() {
    
    fetch(apiRest)
    .then(response => response.json())
    .then(data =>  createCard(data))
    

}
function createCard(data) {

    data["results"].map(result =>{
        
        const card= document.createElement('div')
        card.classList.add('card')

        const text = document.createElement('div')
        text.classList.add('text')

        const nameCharacter = document.createElement('h2');
        nameCharacter.textContent= result["name"];
        nameCharacter.classList.add('name');

        
        const imageCharacter = document.createElement('img');
        imageCharacter.setAttribute("src", result["image"]);
        imageCharacter.classList.add('image');

        const circle = document.createElement("i");
        circle.classList.add('icon-circle');

        const statusCharacter= document.createElement("p");
        statusCharacter.textContent= `${result["status"]}-${result["species"]}`;
        // statusCharacter.classList.add('icon-circle');
        statusCharacter.classList.add('status');
        
        const origin = document.createElement('p');
        origin.textContent = result["origin"].name;
        origin.classList.add('origin');

        
        // const specieCharacter= document.createElement("p");
        // specieCharacter.textContent= result["species"];

        if (result["status"]=="Alive") {
            circle.style.color= "#5cdf5c";
        }
        else if (result["status"]=="Dead") {
            circle.style.color="red";
        }
        else{
            circle.style.color="gray";
        }
        

        card.appendChild(text);
        text.appendChild(nameCharacter);
        text.appendChild(circle);
        circle.appendChild(statusCharacter);
        text.appendChild(origin);
        // text.appendChild(episode);
        // text.appendChild(specieCharacter);
        card.appendChild(imageCharacter)
        main.appendChild(card);
    }) 
}


function searcher(event) {
    main.innerHTML=" ";
    let newApi = apiRest+`?name=${event.target.value}`;
    console.log(newApi)

    fetch(newApi)
    .then(response => response.json())
    .then(data =>  createCard(data))
}