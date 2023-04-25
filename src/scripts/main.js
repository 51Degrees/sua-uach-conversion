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
    "Sec-CH-UA-Platform": `"Android"`,
    "Sec-CH-UA-Platform-Version": `"12"`,
    "Sec-CH-UA-Mobile": "?1",
    "Sec-CH-UA-Arch": `"arm"`,
    "Sec-CH-UA-Bitness": `"64"`,
    "Sec-CH-UA-Model": `"Pixel 6"`,
  },
  {
    "Sec-CH-UA":
      '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    "Sec-CH-UA-Full-Version-List":
      '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    "Sec-CH-UA-Arch": `"arm"`,
    "Sec-CH-UA-Bitness": `"64"`,
    "Sec-CH-UA-Model": `"Pixel 6"`,
  },
  {
    "sec-ch-ua":
      '"Chromium";v="112", "Google Chrome";v="112", "Not A;Brand";v="99"',
    "sec-ch-ua-mobile": "?0",
    "sec-ch-ua-platform": '"macOS"',
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
      {
        brand: "Chromium",
        version: ["112"],
      },
      {
        brand: "Google Chrome",
        version: ["112"],
      },
      {
        brand: "Not:A-Brand",
        version: ["99"],
      },
    ],
    platform: {
      brand: "macOS",
      version: [],
    },
    mobile: 0,
  },
];

const EXAMPLE_TYPE_JSON = "json";
const EXAMPLE_TYPE_PLAIN = "plain";

const OPERRTB_AVAILABLE_HEADERS = [
  "sec-ch-ua",
  "sec-ch-ua-full-version-list",
  "sec-ch-ua-platform",
  "sec-ch-ua-platform-version",
  "sec-ch-ua-mobile",
  "sec-ch-ua-arch",
  "sec-ch-ua-bitness",
  "sec-ch-ua-model",
];

let current_type = EXAMPLE_TYPE_JSON;

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
  option.textContent = `Example ${index + 1}`;
  option.value = JSON.stringify(value);
  if (index === 0) {
    option.selected = true;
    drawConversionResults(value, id);
  }
  container.appendChild(option);
};

window.onload = () => {
  drawSelects();
  bindClipboardListeners();
  bindConvertButtonClickListener();
  initSelect();
};

const selectObjectForConversion = (event, id) => {
  const value = JSON.parse(event.target.value);
  drawConversionResults(value, id);
};

const drawConversionResults = (value, id) => {
  const conversionResult = convertValue(value, id);

  let some = [];
  let formattedSelectedValue,
    formattedResultValue = "";

  if (id === "sua-to-uach") {
    for (const [k, v] of Object.entries(conversionResult)) {
      some.push(`${k.toLowerCase()}: ${v}`);
    }
    formattedSelectedValue = JSON.stringify(value, null, "  ");
    formattedResultValue =
      current_type === EXAMPLE_TYPE_JSON
        ? JSON.stringify(conversionResult, null, "  ")
        : some.join(" \n");
  } else {
    for (const [k, v] of Object.entries(value)) {
      some.push(`${k.toLowerCase()}: ${v}`);
    }
    formattedSelectedValue =
      current_type === EXAMPLE_TYPE_JSON
        ? JSON.stringify(value, null, "  ")
        : some.join("\n");
    formattedResultValue = JSON.stringify(conversionResult, null, "  ");
  }

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
  if (container.tagName === "TEXTAREA") {
    container.value = value;
    container.style.height = 2 + container.scrollHeight + "px";
    container.style.maxHeight = 2 + container.scrollHeight + "px";
    container.style.minHeight = 2 + container.scrollHeight + "px";
  } else {
    container.textContent = value;
  }
};

const convertValue = (value, id) => {
  if (id === "sua-to-uach") return convertSUAtoUACH(value);
  else return convertUACHtoSUA(value);
};

const copyContainerContent = (event) => {
  const container = event.target;

  const targetID = container.dataset.target;
  const targetDataContainer = document.getElementById(targetID);
  if (!targetDataContainer)
    throw new Error(`Container width ID ${targetID} does not exist`);
  navigator.clipboard.writeText(targetDataContainer.textContent).then(() => {
    alert("Copied to clipboard");
  });
};

const bindClipboardListeners = () => {
  const buttons = Array.from(document.getElementsByClassName("copy-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", copyContainerContent);
  });
};

const bindConvertButtonClickListener = () => {
  const buttons = Array.from(document.getElementsByClassName("convert-button"));
  buttons.forEach((button) => {
    button.addEventListener("click", handleButtonClick);
  });
};

const handleButtonClick = (event) => {
  const id = event.target.dataset.type;
  const editable = document.querySelectorAll(`textarea[data-type="${id}"]`)[0];
  if (!editable) throw new Error(`Editable component not found by ID - ${id}`);

  let value = {};
  if (id === "uach-to-sua" && current_type === EXAMPLE_TYPE_PLAIN) {
    editable.value
      .split("\n")
      .filter((el) => el.length > 0)
      .forEach((line) => {
        const tempLine = line.toLowerCase();
        const k = OPERRTB_AVAILABLE_HEADERS.find((header) =>
          tempLine.includes(header)
        );
        const [, v] = line.split(`${k}:`);
        value[k] = v.replace(" ", "");
      });
  } else {
    value = JSON.parse(editable.value.replace(/\\"/g, ""));
  }

  // console.clear();
  drawConversionResults(value, id);
};

const editables = Array.from(
  document.querySelectorAll("code[contenteditable]")
);
editables.forEach((edit) => {
  edit.addEventListener("paste", function (e) {
    e.preventDefault();
    const text = e.clipboardData.getData("text/plain");
    document.execCommand("insertHTML", false, text);
  });
});

const typeSwitches = document.querySelectorAll(
  `div[data-action="type-change"]`
);

const subtitleLabels = {
  plain: "in HTTP format",
  json: "in JSON format",
};

typeSwitches.forEach((tswitch) => {
  tswitch.addEventListener("click", (event) => {
    const type = event.target.dataset.actionType;
    const prevType = current_type;

    if ([EXAMPLE_TYPE_JSON, EXAMPLE_TYPE_PLAIN].includes(type))
      current_type = type;

    const subtitles = Array.from(
      document.getElementsByClassName("sub-headers")
    );

    subtitles.forEach((subtitle) => {
      subtitle.textContent = subtitleLabels[current_type];
    });

    typeSwitches.forEach((ts) => {
      ts.classList.add("outlined");
    });
    tswitch.classList.remove("outlined");

    const SUAToUACHValue = JSON.parse(
      document.getElementById("sua-to-uach-selected-object").value
    );

    let UACHToSUAValue = {};

    if (prevType === EXAMPLE_TYPE_PLAIN) {
      let temp = document.getElementById("uach-to-sua-selected-object").value;
      temp
        .split("\n")
        .filter((el) => el.length > 0)
        .forEach((line) => {
          const [k, v] = line.split(":");
          UACHToSUAValue[k] = v.replace(" ", "");
        });
    } else {
      let temp = document.getElementById("uach-to-sua-selected-object").value;
      UACHToSUAValue = JSON.parse(temp);
    }

    drawConversionResults(SUAToUACHValue, "sua-to-uach");
    drawConversionResults(UACHToSUAValue, "uach-to-sua");
  });
});
