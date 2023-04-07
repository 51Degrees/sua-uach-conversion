const convertSUAtoUACH = (SUAObj) => {
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

((window, undefined) => {
  if (typeof exports !== "undefined") {
    // nodejs env
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = convertSUAtoUACH;
    }
    exports.convertSUAtoUACH = convertSUAtoUACH;
  } else {
    // requirejs env (optional)
    if (typeof define === "function" && define.amd) {
      define(() => convertSUAtoUACH);
    } else if (typeof window !== "undefined") {
      // browser env
      window.convertSUAtoUACH = convertSUAtoUACH;
    }
  }
})(typeof window === "object" && window);
