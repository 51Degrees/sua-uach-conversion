import "../assets/theme.scss";
import buildErrorMessage from "./buildErrorMessage.js";
import initSelect from "./select.js";
import convertUACHtoSUA from "./converters/convertUACHtoSUA.js";

const EXAMPLE_HEADERS = [
  {
    'Sec-CH-UA': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Full-Version-List': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Platform': 'Android',
    'Sec-CH-UA-Platform-Version': '12',
    'Sec-CH-UA-Mobile': '?1',
    'Sec-CH-UA-Arch': 'arm',
    'Sec-CH-UA-Bitness': '64',
    'Sec-CH-UA-Model': 'Pixel 6'
  },
  {
    'Sec-CH-UA': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Full-Version-List': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Mobile': '?1',
    'Sec-CH-UA-Arch': 'arm',
    'Sec-CH-UA-Bitness': '64',
    'Sec-CH-UA-Model': 'Pixel 6'
  },
  {
    'Sec-CH-UA': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Full-Version-List': '"Not A;Brand";v="99.0.0.0", "Chromium";v="99.0.4844.88", "Google Chrome";v="99.0.4844.88"',
    'Sec-CH-UA-Platform': 'Android',
    'Sec-CH-UA-Platform-Version': '12',
    'Sec-CH-UA-Mobile': '?1',
    'Sec-CH-UA-Model': 'Pixel 6'
  }
]



const selectObjectForConversion = (event) => {
  const value = JSON.parse(event.target.value);
  const conversionResult = convertUACHtoSUA(value);
  drawSelectedObject(JSON.stringify(value,null, "  "))
  drawConversionResult(conversionResult)
}

const objectSelect = document.getElementById("object-selector");
objectSelect.addEventListener("change", selectObjectForConversion);

const drawConversionResult = (value) => {
  const container = document.getElementById('converted-result');
  container.textContent = JSON.stringify(value,null, "  ");
}
const drawSelectedObject = (value) => {
  const container = document.getElementById('selected-object');
  container.textContent = value
}

const initializeObjectSelect = () => {
  drawSelectValues();
  initSelect();
}
const drawSelectValues = () => {
  const select = document.getElementById('object-selector');
  EXAMPLE_HEADERS.forEach( (item, key) => {
    const option = document.createElement('option');
    option.textContent = `Example ${key}`;
    option.value = JSON.stringify(item);
    if(key === 0) {
      option.selected = true;
      const conversionResult = convertUACHtoSUA(item);
      drawSelectedObject(JSON.stringify(item,null, "  "))
      drawConversionResult(conversionResult)
    }
    select.appendChild(option)
  });
}

initializeObjectSelect()