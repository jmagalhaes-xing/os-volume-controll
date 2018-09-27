const exec = require('child_process').exec;

function mute() {
  exec("amixer -D pulse sset Master mute");
}

function unmute() {
  exec("amixer -D pulse sset Master unmute");
}

function incVol() {
  exec("amixer -D pulse sset Master 10%+");
}

function decVol() {
  exec("amixer -D pulse sset Master 10%-");
}

function setVol(volume) {
  exec(`amixer -D pulse sset Master ${volume}%`);
}

exports.mute   = mute;
exports.unmute = unmute;
exports.incVol = incVol;
exports.decVol = decVol;
exports.setVol = setVol;
