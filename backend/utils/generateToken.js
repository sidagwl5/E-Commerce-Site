import jwt from 'jsonwebtoken';

export default function (id) {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: '1h',
  });
}
