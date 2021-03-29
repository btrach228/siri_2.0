const button_speak = document.querySelector(".speak_btn");
const content = document.querySelector(".speak_text");
const answer = document.querySelector(".answer");
const microImg = document.querySelector(".microphone_img");

// try {
// } catch (error) {}
const speechRecognition =
  window.speechRecognition || window.webkitSpeechRecognition;

const recognition = new speechRecognition();

recognition.onstart = () => {
  console.log("Please speak");
};

//robot saying
const greetings = [
  "Hello you too",
  "Hey what is up",
  "Hi bitch, ops",
  "oh, you again",
  "leave me alone",
];

const weather = [
  "It is sunny",
  "I dont know",
  "Stupid question , because I stuck between nulls and ones",
];

const HAY = [
  "Nice, what about you?",
  "better that you",
  "I am fucking robot, you do you mind",
  "better not answer",
  "Good, you?",
  "I wanna die",
];

const dontUnderstand = [
  "Say again",
  "I dont speak Japaneese",
  "What?",
  "Jesus, what?",
];

const bye = ["Finaly, good bye", "Bye", "Have fun", "I am gone, buy"];

const randomText = ["I am tired of you,buy"];

recognition.onresult = (event) => {
  const currentText = event.resultIndex;

  const showMsg = event.results[currentText][0].transcript;
  console.log(showMsg);
  console.log(event);
  content.textContent = `You: ${showMsg}`;
  readOutLoud(showMsg);
  microImg.classList.remove("microphone_img-active");
};

// add event listener to button

button_speak.addEventListener("click", () => {
  recognition.start();
  microImg.classList.add("microphone_img-active");
});

// loud

function readOutLoud(voice_message) {
  const message = new SpeechSynthesisUtterance();
  message.text =
    dontUnderstand[Math.floor(Math.random() * dontUnderstand.length)];

  if (
    voice_message.includes("Hello") ||
    voice_message.includes("Hi") ||
    voice_message.includes("Привет")
  ) {
    const greetAnswer = greetings[Math.floor(Math.random() * greetings.length)];
    message.text = greetAnswer;
  } else if (
    voice_message.includes("How are you") ||
    voice_message.includes("How you been") ||
    voice_message.includes("Как дела")
  ) {
    const HAYAnswer = HAY[Math.floor(Math.random() * HAY.length)];
    message.text = HAYAnswer;
  } else if (
    voice_message.includes("Goodbye") ||
    voice_message.includes("See you soon") ||
    voice_message.includes("Пока")
  ) {
    const ByeAnswer = bye[Math.floor(Math.random() * bye.length)];
    message.text = ByeAnswer;
  } else if (
    voice_message.includes("Weather") ||
    voice_message.includes("Погода")
  ) {
    const weatherSay = weather[Math.floor(Math.random() * weather.length)];
    message.text = weatherSay;
  }

  answer.textContent = ` Bot:${message.text}`;

  message.volume = 1;
  message.rate = 1;
  message.pitch = 1;

  window.speechSynthesis.speak(message);
}
