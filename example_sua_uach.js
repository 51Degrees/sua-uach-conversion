import convertSUAtoUACH from "./src/convertSUAtoUACH.js";

const SUAExample = {
  browsers:
  [
      {
          brand: "Google Chrome",
          version:
          [
              "111",
              "0",
              "5563",
              "146"
          ]
      },
      {
          brand: "Not(A:Brand",
          version:
          [
              "8",
              "0",
              "0",
              "0"
          ]
      },
      {
          brand: "Chromium",
          version:
          [
              "111",
              "0",
              "5563",
              "146"
          ]
      }
  ],
  platform:
  {
      brand: "macOS",
      version:
      [
          "13",
          "3"
      ]
  },
  mobile: 0,
  architecture: "x86",
  bitness: "64",
  model: "",
  source: 2
}

let uach = convertSUAtoUACH(SUAExample)
console.log(uach)
