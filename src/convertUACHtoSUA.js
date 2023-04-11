const convertUACHtoSUA = (headers) => {
  if (typeof headers != "object")
    throw new Error("Header must be an valid header map.");
  if (headers === null || headers === undefined)
    throw new Error("Headers param cannot be empty.");
  if (Object.keys(headers).length === 0) return {};

  const SUAObject = {};

  const headerMap = Object.entries(headers).reduce(
    (accumulator, [key, value]) => {
      accumulator[key.toLowerCase()] = value;
      return accumulator;
    },
    {}
  );

  const brands = headerMap["sec-ch-ua-full-version-list"]
    ? headerMap["sec-ch-ua-full-version-list"]
    : headerMap["sec-ch-ua"];

  const matches = brands.match(/"([^"]+)";v="([^"]+)"/g);

  if (matches)
    SUAObject["browsers"] = matches.map((match) => {
      const [, name, version] = match.match(/"([^"]+)";v="([^"]+)"/);
      return {
        brand: name,
        version: version.split("."),
      };
    });

  if (headerMap["sec-ch-ua-platform"]) {
    const version = headerMap["sec-ch-ua-platform-version"]
      ? headerMap["sec-ch-ua-platform-version"]
          .split(".")
          .map((v) => v.replace(/"/g, ""))
      : [];
    SUAObject["platform"] = {
      brand: headerMap["sec-ch-ua-platform"].replace(/"/g, ""),
      version: version,
    };
  }

  if (headerMap["sec-ch-ua-mobile"])
    SUAObject["mobile"] = headerMap["sec-ch-ua-mobile"] === "?1" ? 1 : 0;
  if (headerMap["sec-ch-ua-arch"])
    SUAObject["architecture"] = headerMap["sec-ch-ua-arch"].replace(/"/g, "");
  if (headerMap["sec-ch-ua-bitness"])
    SUAObject["bitness"] = headerMap["sec-ch-ua-bitness"].replace(/"/g, "");

  if (headerMap["sec-ch-ua-model"])
    SUAObject["model"] = headerMap["sec-ch-ua-model"].replace(/"/g, "");

  return SUAObject;
};

module.exports = convertUACHtoSUA;
