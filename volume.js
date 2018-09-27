let osName = '';

if( /^win/.test(process.platform) ) {
    osName = 'windows';
} else if(process.platform === 'darwin') {
    osName = 'mac';
} else {
    osName = 'linux';
}

const os = require(`${__dirname}/operating-systems/${osName}`);

exports.mute = os.mute;
exports.unmute = os.unmute;
exports.incVol = os.incVol;
exports.decVol = os.decVol;
exports.setVol = os.setVol;
