import convertSUAtoUACH from "../src/convertSUAtoUACH.js";

const SUAExample = {
  browsers: [
    {
      "Not A;Brand": "99.0.0.0",
    },
    {
      Chromium: "99.0.4844.88",
    },
    {
      "Google Chrome": "99.0.4844.88",
    },
  ],
  platform: {
    Android: "12",
  },
  mobile: "1",
  architecture: "arm",
  bitness: "64",
  model: "Pixel 6",
};

const EXAMPLE_RESULT = {
  'Sec-CH-UA': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  'Sec-CH-UA-Full-Version-List': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  'Sec-CH-UA-Platform': 'Android',
  'Sec-CH-UA-Platform-Version': '12',
  'Sec-CH-UA-Mobile': '?1',
  'Sec-CH-UA-Arch': 'arm',
  'Sec-CH-UA-Bitness': '64',
  'Sec-CH-UA-Model': 'Pixel 6'
};

describe("SUA Object to UACH", () => {
  test("Happy path", () => {
    const result = convertSUAtoUACH(SUAExample);
    expect(result).not.toBeNull();
    expect(result).toEqual(EXAMPLE_RESULT);
  })
  test("NULL check", () => {
    expect(convertSUAtoUACH).toThrowError(new Error('Headers param cannot be empty.'))
  });
})