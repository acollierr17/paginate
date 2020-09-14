const { Paginate } = require('../dist/lib');

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

// Pass values using methods
const paginated = new Paginate()
    .setArray(arr)
    .setSize(3);

// Get the new paginated array
const pages = paginated.getPaginatedArray();

// You can access whichever page you like by passing in the index
console.log(pages[0]); // [{ name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }, { name: 'John Doe', age: 21 }]
