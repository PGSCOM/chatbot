//Configuración de la voz del robot

const synth = window.speechSynthesis;

const textToSpeech = (string) => {
  let voice = new SpeechSynthesisUtterance(string);
  voice.text = string;
  voice.lang = "es-ES";
  voice.volume = 1;
  voice.rate = 1;
  voice.pitch = 1; // Puede ser 0, 1 o 2
  synth.speak(voice);
}