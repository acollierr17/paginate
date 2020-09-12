<div align="center">
  <br />
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
</div>

## Example
First, import paginate:
```js
// TypeScript or ES Module
import { Paginate } from '@the-nerd-cave/paginate';

// CommonJS
const { Paginate } = require('@the-nerd-cave/paginate');
```

Here is some basic usage of the module.
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

const paginated = new Paginate(arr, 3);
const pages = paginated.getPaginatedArray();

console.log(pages[0]); // [{ name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }]
```
