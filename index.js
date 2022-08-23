const adviceId = document.getElementById("advice-id");
const adviceText = document.getElementById("advice");
const idNumber = document.getElementById("id-no");
const diceBtn = document.getElementById("img")

const advice = async () => {
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json()

    adviceText.innerHTML = data.slip.advice;
    idNumber.textContent = ` ${data.slip.id}`
    return data

}

advice()

diceBtn.addEventListener("click", function() {
    advice()
})

