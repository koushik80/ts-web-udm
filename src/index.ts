import { User } from './models/User';

const user = new User({ name: 'rajon', age: 102 });

console.log(user.get('name'));
console.log(user.get('age'));