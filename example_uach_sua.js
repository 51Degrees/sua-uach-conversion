const convertUACHtoSUA = require("./src/convertUACHtoSUA.js");

const uach = {
  'Sec-CH-UA': '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  'Sec-CH-UA-Full-Version-List': '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  'Sec-CH-UA-Platform': '"macOS"',
  'Sec-CH-UA-Platform-Version': '"13.3"',
  'Sec-CH-UA-Mobile': '?0',
  'Sec-CH-UA-Arch': '"x86"',
  'Sec-CH-UA-Bitness': '"64"'
}
;

let sua = convertUACHtoSUA(uach);
console.log(JSON.stringify(sua, null, 2));
