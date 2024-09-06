var setofWords = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    "Deserunt error cumque veniam minima quod aperiam, incidunt similique necessitatibus explicabo!",
    "Quaerat dolorem iste dolore eveniet vel temporibus facilis tempora magnam asperiores."
];

const msg = document.getElementById('msg');
const typedWords = document.getElementById('mywords');
const btn = document.getElementById('btn');
let startTime, endTime;

const playgame = () => {
    let randomNumber = Math.floor(Math.random() * setofWords.length);
    msg.innerText = setofWords[randomNumber];
    let date = new Date();
    startTime = date.getTime();
    btn.innerText = "Done";
}

const endPlay = () => {
    let date = new Date();
    endTime = date.getTime();
    let totaltime = ((endTime - startTime) / 1000);
    console.log(totaltime);
    let totalStr = typedWords.value;
    let wordCount = wordCounter(totalStr);

    let speed = Math.round((wordCount / totaltime) * 60);

    let finalMsg = "You typed at " + speed + " words per minute.";
    finalMsg += compareWords(msg.innerText, totalStr);
    msg.innerText = finalMsg;
}

const compareWords = (str1, str2) => {
    let words1 = str1.split(" ");
    let words2 = str2.split(" ");
    let cnt = 0;

    words1.forEach(function (item, index) {
        if (item === words2[index]) {
            cnt++;
        }
    });
    let errWords = words1.length - cnt;
    return ` ${cnt} correct out of ${words1.length} words and the number of errors is ${errWords}.`;
}

const wordCounter = (str) => {
    let response = str.split(" ").length;
    console.log(response);
    return response;
}

btn.addEventListener('click', function () {
    if (this.innerText === 'Start') {
        typedWords.disabled = false;
        playgame();
    } else if (this.innerText === "Done") {
        typedWords.disabled = true;
        btn.innerText = "Start";
        endPlay();
    }
});
