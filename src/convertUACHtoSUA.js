// Copyright 2023 51Degrees.mobi Limited, Postindustria Inc.

// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at

//    http://www.apache.org/licenses/LICENSE-2.0

// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.


const convertUACHtoSUA = (headers) => {
  const headerMap = cleanRawHTTPsAndValidate(headers);

  const brands = headerMap["sec-ch-ua-full-version-list"]
    ? headerMap["sec-ch-ua-full-version-list"]
    : headerMap["sec-ch-ua"];

  let matches;

  if (brands) matches = brands.split(", ");

  const SUAObject = {};

  SUAObject["source"] = 0;

  if (headerMap["sec-ch-ua-mobile"] || headerMap["sec-ch-ua-platform"])
    SUAObject["source"] = 1;

  if (
    headerMap["sec-ch-ua-model"] ||
    headerMap["sec-ch-ua-platform-version"] ||
    headerMap["sec-ch-ua-platform-arch"] ||
    headerMap["sec-ch-ua-platform-bitness"]
  )
    SUAObject["source"] = 2;

  if (matches)
    SUAObject["browsers"] = matches.map((match) => {
      const [, name, version] = match.match(/([^]+);v=([^,]+)/);
      return {
        brand: name,
        version: version.split("."),
      };
    });

  if (headerMap["sec-ch-ua-platform"]) {
    const version = headerMap["sec-ch-ua-platform-version"]
      ? headerMap["sec-ch-ua-platform-version"].split(".")
      : [];
    SUAObject["platform"] = {
      brand: headerMap["sec-ch-ua-platform"],
      version: version,
    };
  }

  if (headerMap["sec-ch-ua-mobile"])
    SUAObject["mobile"] = headerMap["sec-ch-ua-mobile"] === "?1" ? 1 : 0;

  if (headerMap["sec-ch-ua-arch"])
    SUAObject["architecture"] = headerMap["sec-ch-ua-arch"];

  if (headerMap["sec-ch-ua-bitness"])
    SUAObject["bitness"] = headerMap["sec-ch-ua-bitness"];

  if (headerMap["sec-ch-ua-model"])
    SUAObject["model"] = headerMap["sec-ch-ua-model"];

  return SUAObject;
};

const cleanRawHTTPsAndValidate = (headers) => {
  if (typeof headers != "object")
    throw new Error("Header must be an valid header map.");
  if (headers === null || headers === undefined)
    throw new Error("Headers param cannot be empty.");
  if (Object.keys(headers).length === 0) return {};

  return Object.entries(headers).reduce((accumulator, [key, value]) => {
    accumulator[key.toLowerCase().trim()] = value.replace(/"/g, "");
    return accumulator;
  }, {});
};

module.exports = convertUACHtoSUA;
