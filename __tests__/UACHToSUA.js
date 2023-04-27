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


import convertUACHtoSUA from "../src/convertUACHtoSUA.js";

const BASIC_EXAMPLE = {
  "Sec-CH-UA":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Full-Version-List":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Platform": "Android",
  "Sec-CH-UA-Platform-Version": "12",
  "Sec-CH-UA-Mobile": "?1",
  "Sec-CH-UA-Arch": "arm",
  "Sec-CH-UA-Bitness": "64",
  "Sec-CH-UA-Model": "Pixel 6",
};

const BASIC_OUTPUT = {
  browsers: [
    { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
    { brand: "Chromium", version: ["99", "0", "4844", "88"] },
    { brand: "Google Chrome", version: ["99", "0", "4844", "88"] },
  ],
  platform: {
    brand: "Android",
    version: ["12"],
  },
  mobile: 1,
  architecture: "arm",
  bitness: "64",
  model: "Pixel 6",
};

const LOW_ENTROPY_EXAMPLE = {
  "sec-ch-ua": `"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"`,
  "sec-ch-ua-mobile": `?0`,
  "sec-ch-ua-platform": "macOS",
};

const LOW_ENTROPY_OUTPUT = {
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

const HIGH_ENTROPY_EXAMPLE = {
  "sec-ch-ua": `"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"`,
  "sec-ch-ua-arch": "x86",
  "sec-ch-ua-bitness": "64",
  "sec-ch-ua-full-version-list": `"Chromium";v="112.0.5615.49", "Google Chrome";v="112.0.5615.49", "Not A;Brand";v="99.0.0.0"`,
  "sec-ch-ua-mobile": "?0",
  "sec-ch-ua-model": "",
  "sec-ch-ua-platform": "macOS",
  "sec-ch-ua-platform-version": "13.3.1",
};

const HIGH_ENTROPY_OUTPUT = {
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

const HIGH_ENTROPY_SOURCE_OUTPUT = {
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
  source: 2,
};
const LOW_ENTROPY_SOURCE_OUTPUT = {
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
  source: 1,
};

const EMPTY_INPUT = {};
const UNDEFINED_SOURCE_OUTPUT = {
  source: 0,
};

describe("UACH Object to SUA", () => {
  test("Happy path", () => {
    const result = convertUACHtoSUA(BASIC_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(expect.objectContaining(BASIC_OUTPUT));
  });
  test("Low entropy", () => {
    const result = convertUACHtoSUA(LOW_ENTROPY_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(expect.objectContaining(LOW_ENTROPY_OUTPUT));
  });
  test("High entropy", () => {
    const result = convertUACHtoSUA(HIGH_ENTROPY_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(expect.objectContaining(HIGH_ENTROPY_OUTPUT));
  });

  test("Undefined source", () => {
    const result = convertUACHtoSUA(EMPTY_INPUT);
    expect(result).not.toBeNull();
    expect(result).toEqual(UNDEFINED_SOURCE_OUTPUT);
  });

  test("Low entropy source", () => {
    const result = convertUACHtoSUA(LOW_ENTROPY_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(LOW_ENTROPY_SOURCE_OUTPUT);
  });

  test("High entropy source", () => {
    const result = convertUACHtoSUA(HIGH_ENTROPY_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(HIGH_ENTROPY_SOURCE_OUTPUT);
  });

  test("NULL check", () => {
    expect(convertUACHtoSUA).toThrowError(
      new Error("Header must be an valid header map.")
    );
  });
});
