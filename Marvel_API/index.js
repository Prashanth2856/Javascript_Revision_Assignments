var characters = document.getElementById("inputResults");

var timerId;

function throttleFunction() {
    if (timerId) {
        return false
    }
    timerId = setTimeout(() => {
        main();
        timerId = undefined
    }, 500)
}

const Marvel = async () => {
    var query = document.getElementById('query').value
    var chars = await fetch(`https://gateway.marvel.com:443/v1/public/characters?&ts=1&apikey=3b36b36ffd6d6f019e89a6935992541b&hash=0d62670dd0bbadd1a150c742a84599e0&nameStartsWith=${query}`);
    var data = await chars.json();
    var marvelData = data.data.results
    console.log(marvelData);
    return marvelData
}

const appendChars = (results) => {
    console.log(results)
    characters.innerHTML = null;
    results.forEach(({ name }) => {
        var charName = document.createElement("p");
        charName.setAttribute("id", "charName")
        charName.innerText = name;
        characters.append(charName)
    })
}



const main = async () => {
    var characters = await Marvel();
    appendChars(characters)
}