import "../assets/theme.scss";
import initSelect from "./select.js";
import convertUACHtoSUA from "./converters/convertUACHtoSUA";
import convertSUAtoUACH from "./converters/convertSUAtoUACH";

const EXAMPLE_HEADERS = [
  {
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
  },
  {
    "Sec-CH-UA":
      '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    "Sec-CH-UA-Full-Version-List":
      '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    "Sec-CH-UA-Arch": "arm",
    "Sec-CH-UA-Bitness": "64",
    "Sec-CH-UA-Model": "Pixel 6",
  },
  {
    "Sec-CH-UA-Platform": "Android",
    "Sec-CH-UA-Platform-Version": "12",
    "Sec-CH-UA-Mobile": "?1",
    "Sec-CH-UA-Arch": "arm",
  },
];
const EXAMPLE_SUA = [
  {
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
  },
  {
    browsers: [
      { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
      { brand: "Chromium", version: ["99", "0", "4844", "88"] },
      { brand: "Google Chrome", version: ["99", "0", "4844", "88"] },
    ],
    platform: {
      brand: "Android",
      version: ["12"],
    },
  },
  {
    browsers: [
      { brand: "Not A;Brand", version: ["99", "0", "0", "0"] },
      { brand: "Chromium", version: ["99", "0", "4844", "88"] },
      { brand: "Google Chrome", version: ["99", "0", "4844", "88"] },
    ],
    mobile: "1",
    architecture: "arm",
    bitness: "64",
  },
];

const drawSelects = () => {
  const selects = Array.from(document.getElementsByClassName("example-select"));
  selects.forEach((select) => {
    const id = select.dataset.type;
    const values = id === "sua-to-uach" ? EXAMPLE_SUA : EXAMPLE_HEADERS;
    drawSelect(select, values);
    select.addEventListener("change", (event) =>
      selectObjectForConversion(event, id)
    );
  });
};

const drawSelect = (node, values) => {
  values.forEach((item, key) => {
    drawSelectOption(node, item, key);
  });
};
const drawSelectOption = (container, value, index) => {
  const id = container.dataset.type;
  const option = document.createElement("option");
  option.textContent = `Example ${index}`;
  option.value = JSON.stringify(value);
  if (index === 0) {
    option.selected = true;
    drawConversionResults(value, id);
  }
  container.appendChild(option);
};
window.onload = () => {
  drawSelects();
  initSelect();
};

const selectObjectForConversion = (event, id) => {
  const value = JSON.parse(event.target.value);
  drawConversionResults(value, id);
};

const drawConversionResults = (value, id) => {
  const conversionResult = convertValue(value, id);

  const formattedSelectedValue = JSON.stringify(value, null, "  ");
  const formattedResultValue = JSON.stringify(conversionResult, null, "  ");

  const selectedValueContainerID = `${id}-selected-object`;
  const resultValueContainerID = `${id}-converted-result`;

  changeTextContentOfContainer(
    formattedSelectedValue,
    selectedValueContainerID
  );
  changeTextContentOfContainer(formattedResultValue, resultValueContainerID);
};

const changeTextContentOfContainer = (value, id) => {
  const container = document.getElementById(id);
  if (!container) throw new Error(`Container width ID ${id} does not exist`);
  container.textContent = value;
};

const convertValue = (value, id) => {
  if (id === "sua-to-uach") return convertSUAtoUACH(value);
  else return convertUACHtoSUA(value);
};
