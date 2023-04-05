const convertSUAtoUACH = (SUAObj) => {

  if(SUAObj === null || SUAObj === undefined) throw new Error('Headers param cannot be empty.');
  if(Object.keys(SUAObj).length === 0) return {};

  const mappedHeaders = {};

  const { browsers, platform, mobile, architecture, bitness, model } = SUAObj;

  if (browsers && browsers.length) {
    const brands = browsers
      .map((browser) => `"${Object.keys(browser)[0]}";v="${Object.values(browser)[0]}"`)
      .join(", ");
    mappedHeaders["Sec-CH-UA"] = brands;
    mappedHeaders["Sec-CH-UA-Full-Version-List"] = brands;
  }

  if (platform) {
    const platformKeys = Object.keys(platform);
    if (platformKeys.length > 0) {
      mappedHeaders["Sec-CH-UA-Platform"] = platformKeys[0];
      mappedHeaders["Sec-CH-UA-Platform-Version"] = `${platform[platformKeys[0]]}`;
    }
  }

  mappedHeaders["Sec-CH-UA-Mobile"] = mobile ? "?1" : "?0";

  if (architecture)
    mappedHeaders["Sec-CH-UA-Arch"] = architecture;

  if (bitness)
    mappedHeaders["Sec-CH-UA-Bitness"] = bitness;

  if (model)
    mappedHeaders["Sec-CH-UA-Model"] = model;

  return mappedHeaders;
};

export default convertSUAtoUACH