<div style="text-align: center;">
  <h1>paginate</h1>
  <p>
    An npm module to create a paginated array with a defined length of elements per page.
  </p>
  <p>
    <a href="https://discord.gg/g7wr8xb"><img src="https://img.shields.io/discord/480231440932667393?color=7289da&logo=discord&logoColor=white" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/@the-nerd-cave/paginate"><img src="https://img.shields.io/npm/v/@the-nerd-cave/paginate.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.npmjs.com/package/@the-nerd-cave/paginate"><img src="https://img.shields.io/npm/dt/@the-nerd-cave/paginate.svg?maxAge=3600" alt="NPM downloads" /></a>
    <a href="https://github.com/acollierr17/paginate/actions"><img src="https://github.com/acollierr17/paginate/workflows/Testing/badge.svg" alt="Build status" /></a>
    <a href="https://david-dm.org/acollierr17/paginate"><img src="https://img.shields.io/david/acollierr17/paginate.svg?maxAge=3600" alt="Dependencies" /></a>
    <a href="https://www.patreon.com/acollierr17"><img src="https://img.shields.io/badge/donate-patreon-F96854.svg" alt="Patreon" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/@the-nerd-cave/paginate/"><img src="https://nodei.co/npm/@the-nerd-cave/paginate.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Example
First, import paginate:
```js
// TypeScript or ES Module
import { Paginate } from '@the-nerd-cave/paginate';

// CommonJS
const { Paginate } = require('@the-nerd-cave/paginate');
```

Then to use the module, we're going to need an array object:
```js
const arr = [
  { name: 'John Doe', age: 21 },
  { name: 'John Doe', age: 21 },
  { name: 'John Doe', age: 21 },
  { name: 'Jane Doe', age: 20 },
  { name: 'Jane Doe', age: 20 },
  { name: 'Jane Doe', age: 20 },
  { name: 'Bob Dylan', age: 19 },
  { name: 'Bob Dylan', age: 19 },
  { name: 'Bob Dylan', age: 19 }
];
```

You can generate a new paginated array multiple ways:
```js
// Pass values via the constructor
const paginated = new Paginate(arr, 3);

// Pass values using methods
const paginated = new Paginate()
    .setArray(arr)
    .setSize(3);
```

Then to access the generated pages, use the `Paginate#getPaginatedArray()` method:
```js
// Get the new paginated array
const pages = paginated.getPaginatedArray();

// You can access whichever page you like by passing in the index
console.log(pages[0]); // [{ name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }]
```
