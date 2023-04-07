const convertUACHtoSUA = require("./src/convertUACHtoSUA.js");

const uach = {
  "sec-ch-ua-arch": '"x86"',
  "sec-ch-ua-bitness": '"64"',
  "sec-ch-ua-full-version-list":
    '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": "",
  "sec-ch-ua-platform": '"macOS"',
  "sec-ch-ua-platform-version": '"13.3.0"',
};

let sua = convertUACHtoSUA(uach);
console.log(sua);
