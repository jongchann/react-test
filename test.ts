interface User {
  name: string
  age: number
  city?: string
}

const a: User = { name: 'John', age: 30, city: 'New York' }
console.log(a)
console.log('test!!')

function add<T extends number | string>(a: T, b: T): T {
  return (a + b) as T
}

console.log(add(1, 2))
