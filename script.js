let button = document.querySelector("button");
let buttonBox = document.getElementById("button");
let questionBox = document.getElementById("question");
let answerBox = document.getElementById("answer");

button.addEventListener("click", clickListener);

function clickListener(event)
{
    event.preventDefault();
    let firstNumber = Math.floor(Math.random()*11+1); 
    let secondNumber = Math.floor(Math.random()*11+1);
    let operation = Math.floor(Math.random()*4); 
    if(operation == 0)
    {
        let form = document.createElement("form");
        let p = document.createElement("p");
        let input = document.createElement("input");
        input.setAttribute("id", "input");
        p.innerText = firstNumber + "+" + secondNumber + "=";
        form.appendChild(p);
        form.appendChild(input);
        questionBox.appendChild(form);
    }
    else if(operation == 1)
    {
        let form = document.createElement("form");
        let p = document.createElement("p");
        let input = document.createElement("input");
        input.setAttribute("id", "input");
        p.innerText = firstNumber + "-" + secondNumber + "=";
        form.appendChild(p);
        form.appendChild(input);
        questionBox.appendChild(form);
    }
    else if(operation == 2)
    {
        let form = document.createElement("form");
        let p = document.createElement("p");
        let input = document.createElement("input");
        input.setAttribute("id", "input");
        p.innerText = firstNumber + "*" + secondNumber + "=";
        form.appendChild(p);
        form.appendChild(input);
        questionBox.appendChild(form);
    }
    else
    {
        let form = document.createElement("form");
        let p = document.createElement("p");
        let input = document.createElement("input");
        input.setAttribute("id", "input");
        p.innerText = firstNumber + "/" + secondNumber + "=";
        form.appendChild(p);
        form.appendChild(input);
        questionBox.appendChild(form);
    }

    buttonBox.removeChild(button);
    let x = Math.floor(Math.random()*152+1); 
    const url = "https://pokeapi.co/api/v2/pokemon/?limit=151";

    fetch(url)
    .then(function(response)
    {
        console.log("This is the response: ", response);
        return response.json(); 
    })
    .then(function(myJson)
    {
        data = myJson; 
        console.log("This is the JSON: ", myJson);
        for(let i = x; i < x+1; i++)
        {
            let div = document.createElement("div");
            let div2 = document.createElement("div");
            let hint = document.createElement("p");
            hint.innerText = "Here's a hint :)"
            let pokemonName = document.createElement("p");
            pokemonName.className = "name";
            pokemonName.innerText = `Pokemon Name: ${data.results[i].name}`;
        
            div.appendChild(hint);
            div2.appendChild(pokemonName);
            answerBox.appendChild(div);
            answerBox.appendChild(div2);
        }
    });

    const link = "https://random.dog/woof.json/?results=50";
    fetch(link)
    .then(function(response)
    {
        console.log("This is the response: ", response);
        return response.json(); 
    })
    .then(function(myJson)
    {
        data = myJson; 
        console.log("This is the JSON: ", myJson);
        let div3 = document.createElement("div");
            
        let image = document.createElement("img");
        image.className = "image";
        image.src = data.url;
        image.width = "200";
        
        div3.appendChild(image);
        answerBox.appendChild(div3);
    });

}