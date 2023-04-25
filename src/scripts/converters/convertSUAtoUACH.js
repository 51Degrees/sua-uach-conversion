const CONVERTOR_MAPPINGS = {
  bitness: "Sec-CH-UA-Bitness",
  architecture: "Sec-CH-UA-Arch",
  model: "Sec-CH-UA-Model",
};

const convertSUAtoUACH = (sua) => {
  const cleanSUAObject = cleanRawSUAAndValidate(sua);

  const mappedHeaders = {};
  for (const prop in cleanSUAObject) {
    const value = cleanSUAObject[prop];
    if (prop === "browsers") {
      const brands = value
        .map((browser) => {
          return `"${browser.brand}";v="${browser.version.join(".")}"`;
        })
        .join(", ");
      mappedHeaders["Sec-CH-UA"] = brands;
      mappedHeaders["Sec-CH-UA-Full-Version-List"] = brands;
      continue;
    }

    if (prop === "platform") {
      mappedHeaders["Sec-CH-UA-Platform"] = `"${value.brand}"`;
      if (value.version && value.version.length > 0)
        mappedHeaders["Sec-CH-UA-Platform-Version"] = `"${value.version.join(
          "."
        )}"`;
      continue;
    }

    if (prop === "mobile") {
      mappedHeaders["Sec-CH-UA-Mobile"] = value;
      continue;
    }

    if (!CONVERTOR_MAPPINGS[prop])
      throw new Error(`Property - ${prop} does not exist in conversion schema`);

    mappedHeaders[CONVERTOR_MAPPINGS[prop]] = `"${value}"`;
  }

  return mappedHeaders;
};

const cleanRawSUAAndValidate = (rawSUA) => {
  if (typeof rawSUA != "object")
    throw new Error("Parameter must be an valid object.");
  if (rawSUA === null || rawSUA === undefined)
    throw new Error("Headers param cannot be empty.");
  if (Object.keys(rawSUA).length === 0) return {};

  const filteredSUA = {};
  const { browsers, platform, mobile, architecture, bitness, model } = rawSUA;

  if (browsers && browsers.length > 0)
    filteredSUA["browsers"] = cleanUpBrowsers(browsers);

  if (platform) filteredSUA["platform"] = cleanUpPlatform(platform);

  if (architecture && architecture.length > 0)
    filteredSUA["architecture"] = cleanUpString(architecture);

  if (bitness && bitness.length > 0)
    filteredSUA["bitness"] = cleanUpString(bitness);

  if (model && model.length > 0) filteredSUA["model"] = cleanUpString(model);

  filteredSUA["mobile"] = mobile ? "?1" : "?0";

  return filteredSUA;
};

const cleanUpBrowsers = (browsers) => {
  return browsers.map((el) => {
    return {
      brand: cleanUpString(el.brand),
      version: el.version.map((v) => cleanUpString(v)),
    };
  });
};
const cleanUpPlatform = (platform) => {
  const clean = {};
  for (const property in platform) {
    clean[property] = Array.isArray(platform[property])
      ? platform[property].map((v) => cleanUpString(v))
      : cleanUpString(platform[property]);
  }
  return clean;
};
const cleanUpString = (string) => {
  return string.replace(/"/g, "");
};

export default convertSUAtoUACH;
