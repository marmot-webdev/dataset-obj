# @marmot-webdev/dataset-obj

This module provides a utility function for converting data attributes of an HTML element into a JavaScript object. It intelligently handles type conversions, transforming data attribute values into their appropriate JavaScript types, such as boolean, numeric, null, etc.

## Installation

```sh
npm install @marmot-webdev/dataset-obj
```

## Usage

Consider the following HTML element:

```html
<div
  id="elem"
  data-name="John Doe"
  data-age="30"
  data-is-married="true"
  data-identifying-features="null"
  data-langs='["English", "Spanish"]'
  data-contacts='{"email": "john@gmail.com", "facebook": "https://www.facebook.com/john.doe"}'>
</div>
```

The `dataAttrsToObject` function takes an HTML element as its input parameter and returns an object containing the parsed data attributes:

```js
import dataAttrsToObject from '@marmot-webdev/dataset-obj';

const elem = document.querySelector('#elem');
const dataObject = dataAttrsToObject(elem);

console.log(dataObject);
```

The output will be:

```js
{
  name: 'John Doe',
  age: 30,
  isMarried: true,
  identifyingFeatures: null,
  langs: ['English', 'Spanish'],
  contacts: {
    email: 'john@gmail.com',
    facebook: 'https://www.facebook.com/john.doe'
  }
}
```

## Copyright and license

Copyright (c) 2023—present, Serhii Babakov.

This project is [licensed](/license.txt) under [The MIT License](https://opensource.org/licenses/MIT).