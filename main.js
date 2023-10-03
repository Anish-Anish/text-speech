const textArea = document.getElementById('text');
const speakBtn = document.getElementById('speakBtn');
const stopBtn = document.getElementById('stopBtn');
const speedSlider = document.getElementById('speed');
const pitchSlider = document.getElementById('pitch');

let synth = window.speechSynthesis;
let speaking = false;

function speak() {
    if (synth.speaking) {
        console.error('SpeechSynthesisUtterance is already speaking');
        return;
    }

    if (textArea.value !== '') {
        const text = textArea.value;

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.rate = speedSlider.value;
        utterance.pitch = pitchSlider.value;

        synth.speak(utterance);
        speaking = true;
    }
}

function stop() {
    if (speaking) {
        synth.cancel();
        speaking = false;
    }
}

speakBtn.addEventListener('click', speak);
stopBtn.addEventListener('click', stop);
