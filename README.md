# SUA to UA-CH Conversion Routines

## Introduction

Structured User Agent or SUA for short has been introduced by IAB in [OpenRTB v.2.6 spec](https://iabtechlab.com/wp-content/uploads/2022/04/OpenRTB-2-6_FINAL.pdf).
It contains the information passed as part of the User-Agent Client Hint HTTP headers, or that otherwise can be obtained from the NavigatorUAData.

The playground page is available [here](https://51degrees.github.io/sua-uach-conversion). 

## Rationale
Device detection services such as the 
[51Degrees Cloud Service](https://cloud.51degrees.com/api-docs/index.html) or [51Degrees UAParser](https://www.npmjs.com/package/@51degrees/ua-parser-js) 
expect to receive a UA-CH header map as input.  Thus one can't simply feed the OpenRTB's `device.sua` object into one of these.  One first needs to convert it into the UA-CH header map format. 
This is where `convertSUAtoUACH` routine can be used. 

Vice-versa, if you have received the UA-CH headers on the server as part of the (ad) request and would like to send them further as part of the OpenRTB request as `device.sua`, 
you first need to convert this header map into SUA JSON object representation.  This justifies the use of the `convertUACHtoSUA` routine. 

## Usage

### Converting SUA to UA-CH

To convert SUA to UA-CH HTTP header map representation, use the `convertSUAtoUACH` routine:

```js
import convertSUAtoUACH from "./src/convertSUAtoUACH.js";

const SUAExample = {
  browsers: [
    { 
      brand:"Not A;Brand",
      version:["99","0","0","0"]
    },
    {
      brand: "Chromium", 
      version: ["99","0","4844","88"],
    },
    {
      brand: "Google Chrome",
      version: ["99","0","4844","88"]
    },
  ],
  platform: {
    brand: "Android",
    version: ["12"],
  },
  mobile: 1,
  architecture: "arm",
  bitness: "64",
  model: "Pixel 6",
  source: 2
}

let uach = convertSUAtoUACH(SUAExample)
console.log(uach)
```

and you would run this example like:
```sh
node example_sua_uach.js
```

### Converting UA-CH to SUA

Here is an example of using the reverse `convertUACHtoSUA` routine: 

```js
import convertUACHtoSUA from "./src/convertUACHtoSUA.js";
const uach = {
  'sec-ch-ua-arch': '"x86"',
  'sec-ch-ua-bitness': '"64"',
  'sec-ch-ua-full-version-list': '"Google Chrome";v="111.0.5563.146", "Not(A:Brand";v="8.0.0.0", "Chromium";v="111.0.5563.146"',
  'sec-ch-ua-mobile': '?0',
  'sec-ch-ua-model':'',
  'sec-ch-ua-platform': '"macOS"',
  'sec-ch-ua-platform-version': '"13.3.0"'
}

let sua = convertUACHtoSUA(uach)
console.log(sua)
```

you can run this example like: 
```sh
node example_uach_sua.js
```

## Tests

You can run tests by executing: 
```sh
yarn
yarn test
```

Found a bug? Please contribute either via pull request or an issue.  

## License

Copyright 2023 51Degrees.mobi Limited, Postindustria Inc.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
