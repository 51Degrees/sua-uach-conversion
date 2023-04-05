const convertUACHtoSUA = (headers) =>  {

  if(headers === null || headers === undefined) throw new Error('Headers param cannot be empty.');
  if(Object.keys(headers).length === 0) return {};

  const headerMap = Object.entries(headers).reduce((accumulator, [key, value]) => {
    accumulator[key.toLowerCase()] = value;
    return accumulator;
  }, {});

  const matches = headerMap['sec-ch-ua'].match(/"([^"]+)";v="([^"]+)"/g);
  const browsers = matches.map(match => {
    const [, name, version] = match.match(/"([^"]+)";v="([^"]+)"/);
    return { [name]: version };
  });

  const platform = {
    [headerMap['sec-ch-ua-platform']]: headerMap['sec-ch-ua-platform-version']
  };


  const mobile = headerMap['sec-ch-ua-mobile'] === '?1' ? '1' : '0';
  const architecture = headerMap['sec-ch-ua-arch'];
  const bitness = headerMap['sec-ch-ua-bitness'];
  const model = headerMap['sec-ch-ua-model'];

  return {
    browsers,
    platform,
    mobile,
    architecture,
    bitness,
    model
  };
}

export default convertUACHtoSUA
