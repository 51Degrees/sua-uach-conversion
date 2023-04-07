import convertSUAtoUACH from "../src/convertSUAtoUACH.js";

const INPUT_EXAMPLE = {
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

const OUTPUT_EXAMPLE = {
  "Sec-CH-UA":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Full-Version-List":
    '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
  "Sec-CH-UA-Platform": "Android",
  "Sec-CH-UA-Platform-Version": "12",
  "Sec-CH-UA-Mobile": "?1",
  "Sec-CH-UA-Arch": "arm",
  "Sec-CH-UA-Bitness": "64",
};

describe("SUA Object to UACH", () => {
  test("Happy path", () => {
    const result = convertSUAtoUACH(INPUT_EXAMPLE);
    expect(result).not.toBeNull();
    expect(result).toEqual(OUTPUT_EXAMPLE);
  });
  test("NULL check", () => {
    expect(convertSUAtoUACH).toThrowError(
      new Error("Headers param cannot be empty.")
    );
  });
});
