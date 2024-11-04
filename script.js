const quesContainer = document.getElementById("question")
const jokeContainer = document.getElementById("joke")
const btn = document.getElementById("btn")
const url = "https://official-joke-api.appspot.com/jokes/random"

let getJoke = async() => {
    quesContainer.classList.remove("fade")
    jokeContainer.classList.remove("fade")
    await fetch(url)
    .then(data => data.json())
    .then(item => {
        quesContainer.textContent = `Question: ${item.setup}`
        jokeContainer.textContent = `Punchline: ${item.punchline}`
        quesContainer.classList.add("fade")
        jokeContainer.classList.add("fade")
    })
}

btn.addEventListener("click", getJoke)
