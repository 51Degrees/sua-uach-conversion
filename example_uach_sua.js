// Copyright 2023 51Degrees.mobi Limited, Postindustria Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const convertUACHtoSUA = require("./src/convertUACHtoSUA.js");

const uach = {
  "Sec-CH-UA":
    '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  "Sec-CH-UA-Full-Version-List":
    '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  "Sec-CH-UA-Platform": '"macOS"',
  "Sec-CH-UA-Platform-Version": '"13.3"',
  "Sec-CH-UA-Mobile": "?0",
  "Sec-CH-UA-Arch": '"x86"',
  "Sec-CH-UA-Bitness": '"64"',
};

let sua = convertUACHtoSUA(uach);
console.log(JSON.stringify(sua, null, 2));
