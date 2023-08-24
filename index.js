// Original source: https://github.com/jquery/jquery/blob/main/src/data.js

const rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/;

function getData(data) {
  if (data === 'true') {
    return true;
  }

  if (data === 'false') {
    return false;
  }

  if (data === 'null') {
    return null;
  }

  if (data === +data + '') {
    return +data;
  }

  if (rbrace.test(data)) {
    return JSON.parse(data);
  }

  return data;
}

export default function dataAttributesToObject(element) {
  const obj = {};
  const attrs = Object.entries(element.dataset);

  for (const [key, value] of attrs) {
    obj[key] = getData(value);
  }

  return obj;
}