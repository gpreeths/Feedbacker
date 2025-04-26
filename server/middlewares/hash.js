const bcrypt = require('bcrypt');

// This is the plain text password you're testing
const password = 'admin123';

// Hash the password manually for comparison
bcrypt.hash(password, 10, (err, hashedPassword) => {
  if (err) {
    console.error('Error hashing password:', err);
  } else {
    console.log('Hashed password:', hashedPassword);
  }
});
