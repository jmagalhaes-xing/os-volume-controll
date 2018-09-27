const exec = require('child_process').exec;

const MAX_VOLUME = 65535;

function mute() {
  exec(`${__dirname}\\nircmdc.exe mutesysvolume 1`);
}

function unmute() {
  exec(`${__dirname}\\nircmdc.exe mutesysvolume 0`);
}

function incVol() {
  exec(`${__dirname}\\nircmdc.exe changesysvolume 6553`);
}

function decVol() {
  exec(`${__dirname}\\nircmdc.exe changesysvolume -6553`);
}

function setVol(volume) {
  const vol = MAX_VOLUME * (volume / 100);

  exec(`${__dirname}\\nircmdc.exe changesysvolume -${MAX_VOLUME}`);
  exec(`${__dirname}\\nircmdc.exe changesysvolume ${vol}`);
}

exports.mute   = mute;
exports.unmute = unmute;
exports.incVol = incVol;
exports.decVol = decVol;
exports.setVol = setVol;
