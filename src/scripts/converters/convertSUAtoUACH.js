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
        return `"${browser.brand.replace(/"/g, "")}";v="${browser.version
          .join(".")
          .replace(/"/g, "")}"`;
      })
      .join(", ");
    mappedHeaders["Sec-CH-UA"] = brands;
    mappedHeaders["Sec-CH-UA-Full-Version-List"] = brands;
  }

  if (platform) {
    if (platform.brand && platform.brand.length > 0)
      mappedHeaders["Sec-CH-UA-Platform"] = `"${platform.brand.replace(
        /"/g,
        ""
      )}"`;

    if (platform.version && platform.version.length > 0)
      mappedHeaders["Sec-CH-UA-Platform-Version"] = `"${platform.version
        .join(".")
        .replace(/"/g, "")}"`;
  }

  mappedHeaders["Sec-CH-UA-Mobile"] = mobile ? "?1" : "?0";

  if (architecture && architecture.length > 0)
    mappedHeaders["Sec-CH-UA-Arch"] = `"${architecture.replace(/"/g, "")}"`;

  if (bitness && bitness.length > 0)
    mappedHeaders["Sec-CH-UA-Bitness"] = `"${bitness.replace(/"/g, "")}"`;

  if (model && model.length > 0)
    mappedHeaders["Sec-CH-UA-Model"] = `"${model.replace(/"/g, "")}"`;

  return mappedHeaders;
};

export default convertSUAtoUACH;
