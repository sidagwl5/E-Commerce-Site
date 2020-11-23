import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin',
    email: 'admin@email.com',
    isAdmin: true,
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Sid',
    email: 'sid@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
  {
    name: 'Shubh',
    email: 'shubh@email.com',
    password: bcrypt.hashSync('123456', 10),
  },
];


export default users;