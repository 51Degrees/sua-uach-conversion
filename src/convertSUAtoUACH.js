const convertSUAtoUACH = (SUAObj) => {
  if (typeof SUAObj != "object")
    throw new Error("Parameter must be an valid object.");
  if (SUAObj === null || SUAObj === undefined)
    throw new Error("Headers param cannot be empty.");
  if (Object.keys(SUAObj).length === 0) return {};

  const mappedHeaders = {};

  const { browsers, platform, mobile, architecture, bitness, model } = SUAObj;

  if (browsers && browsers.length > 0) {
    const brands = browsers
      .map((browser) => {
        return `"${browser.brand}";v="${browser.version.join(".")}"`;
      })
      .join(", ");
    mappedHeaders["Sec-CH-UA"] = brands;
    mappedHeaders["Sec-CH-UA-Full-Version-List"] = brands;
  }

  if (platform) {
    mappedHeaders["Sec-CH-UA-Platform"] = `"${platform.brand}"`;
    if (platform.version.length > 0)
      mappedHeaders["Sec-CH-UA-Platform-Version"] = `"${platform.version.join(
        "."
      )}"`;
  }

  mappedHeaders["Sec-CH-UA-Mobile"] = mobile ? "?1" : "?0";

  if (architecture) mappedHeaders["Sec-CH-UA-Arch"] = `"${architecture}"`;

  if (bitness) mappedHeaders["Sec-CH-UA-Bitness"] = `"${bitness}"`;

  if (model) mappedHeaders["Sec-CH-UA-Model"] = `"${model}"`;

  return mappedHeaders;
};

module.exports = convertSUAtoUACH;
