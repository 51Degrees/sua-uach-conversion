const convertUACHtoSUA = (headers) => {
  if (headers === null || headers === undefined)
    throw new Error("Headers param cannot be empty.");
  if (Object.keys(headers).length === 0) return {};

  const headerMap = Object.entries(headers).reduce(
    (accumulator, [key, value]) => {
      accumulator[key.toLowerCase()] = value;
      return accumulator;
    },
    {}
  );

  const matches = headerMap["sec-ch-ua-full-version-list"].match(
    /"([^"]+)";v="([^"]+)"/g
  );

  const browsers = matches.map((match) => {
    const [, name, version] = match.match(/"([^"]+)";v="([^"]+)"/);
    return {
      brand: name,
      version: version.split("."),
    };
  });

  const platform = {
    brand: headerMap["sec-ch-ua-platform"],
    version: headerMap["sec-ch-ua-platform-version"]
      .split(".")
      .map((v) => v.replace(/"/g, "")),
  };

  const mobile = headerMap["sec-ch-ua-mobile"] === "?1" ? 1 : 0;
  const architecture = headerMap["sec-ch-ua-arch"].replace(/"/g, "");
  const bitness = headerMap["sec-ch-ua-bitness"].replace(/"/g, "");
  const model = headerMap["sec-ch-ua-model"];

  return {
    browsers,
    platform,
    mobile,
    architecture,
    bitness,
    model,
  };
};

((window, undefined) => {
  if (typeof exports !== "undefined") {
    // nodejs env
    if (typeof module !== "undefined" && module.exports) {
      exports = module.exports = convertUACHtoSUA;
    }
    exports.convertUACHtoSUA = convertUACHtoSUA;
  } else {
    // requirejs env (optional)
    if (typeof define === "function" && define.amd) {
      define(() => convertUACHtoSUA);
    } else if (typeof window !== "undefined") {
      // browser env
      window.convertUACHtoSUA = convertUACHtoSUA;
    }
  }
})(typeof window === "object" && window);
