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


const convertSUAtoUACH = require("./src/convertSUAtoUACH.js");

const SUAExample = {
  browsers: [
    {
      brand: "Google Chrome",
      version: ["111", "0", "5563", "146"],
    },
    {
      brand: "Not(A:Brand",
      version: ["8", "0", "0", "0"],
    },
    {
      brand: "Chromium",
      version: ["111", "0", "5563", "146"],
    },
  ],
  platform: {
    brand: "macOS",
    version: ["13", "3"],
  },
  mobile: 0,
  architecture: "x86",
  bitness: "64",
  model: "",
  source: 2,
};

let uach = convertSUAtoUACH(SUAExample);

console.log(uach);
