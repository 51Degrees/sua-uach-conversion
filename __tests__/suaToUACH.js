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


import convertSUAtoUACH from "../src/convertSUAtoUACH.js";

const BASIC_INPUT = {
  browsers: [
    { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
    { brand: "Chromium", version: ["99", "0", "4844", "88"] },
    { brand: "Google Chrome", version: ["99", "0", "4844", "88"] },
  ],
  platform: {
    brand: "Android",
    version: ["12"],
  },
  mobile: "1",
  architecture: "arm",
  bitness: "64",
};

const BASIC_OUTPUT = {
  "Sec-CH-UA":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Full-Version-List":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Platform": '"Android"',
  "Sec-CH-UA-Platform-Version": '"12"',
  "Sec-CH-UA-Mobile": "?1",
  "Sec-CH-UA-Arch": '"arm"',
  "Sec-CH-UA-Bitness": '"64"',
};

const LOW_ENTROPY_INPUT = {
  browsers: [
    { brand: "Chromium", version: ["112"] },
    { brand: "Google Chrome", version: ["112"] },
    { brand: "Not A;Brand", version: ["99"] },
  ],
  platform: {
    brand: "macOS",
    version: [],
  },
  mobile: 0,
};

const LOW_ENTROPY_OUTPUT = {
  "Sec-CH-UA": `"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"`,
  "Sec-CH-UA-Full-Version-List": `"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"`,
  "Sec-CH-UA-Mobile": `?0`,
  "Sec-CH-UA-Platform": `"macOS"`,
};

const HIGH_ENTROPY_INPUT = {
  browsers: [
    { brand: "Chromium", version: ["112", "0", "5615", "49"] },
    { brand: "Google Chrome", version: ["112", "0", "5615", "49"] },
    { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
  ],
  platform: {
    brand: "macOS",
    version: ["13", "3", "1"],
  },
  mobile: 0,
  architecture: "x86",
  bitness: "64",
};

const HIGH_ENTROPY_OUTPUT = {
  "Sec-CH-UA": `"Chromium";v="112.0.5615.49", "Google Chrome";v="112.0.5615.49", "Not A;Brand";v="99.0.0.0"`,
  "Sec-CH-UA-Arch": `"x86"`,
  "Sec-CH-UA-Bitness": `"64"`,
  "Sec-CH-UA-Full-Version-List": `"Chromium";v="112.0.5615.49", "Google Chrome";v="112.0.5615.49", "Not A;Brand";v="99.0.0.0"`,
  "Sec-CH-UA-Mobile": "?0",
  "Sec-CH-UA-Platform": `"macOS"`,
  "Sec-CH-UA-Platform-Version": `"13.3.1"`,
};

const HIGH_ENTROPY_DOUBLE_QUOTES_EXAMPLE = {
  browsers: [
    { brand: "Chromium", version: ["112", "0", "5615", "49"] },
    { brand: "Google Chrome", version: ["112", "0", "5615", "49"] },
    { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
  ],
  platform: {
    brand: '"macOS"',
    version: ["13", "3", "1"],
  },
  mobile: 0,
  architecture: "x86",
  bitness: '"64"',
};

describe("SUA Object to UACH", () => {
  test("Happy path", () => {
    const result = convertSUAtoUACH(BASIC_INPUT);
    expect(result).not.toBeNull();
    expect(result).toEqual(BASIC_OUTPUT);
  });

  test("Low entropy", () => {
    const result = convertSUAtoUACH(LOW_ENTROPY_INPUT);
    expect(result).not.toBeNull();
    expect(result).toEqual(LOW_ENTROPY_OUTPUT);
  });

  test("High entropy", () => {
    const result = convertSUAtoUACH(HIGH_ENTROPY_INPUT);
    expect(result).not.toBeNull();
    expect(result).toEqual(HIGH_ENTROPY_OUTPUT);
  });
  test("High entropy double quotes", () => {
    const result = convertSUAtoUACH(HIGH_ENTROPY_DOUBLE_QUOTES_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(HIGH_ENTROPY_OUTPUT);
  });
  test("NULL check", () => {
    expect(convertSUAtoUACH).toThrowError(
      new Error("Parameter must be an valid object.")
    );
  });
});
