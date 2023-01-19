require('dotenv').config();
const db = require('../sqlconnection.js')
const bcrypt = require('bcryptjs');


authController = {};

authController.addBcrypt = (req, res, next) => {
  const { password } = req.body;
  // console.log(process.env.WORKFACTOR)
  console.log('bad password ', password)

  // const salt = bcrypt.genSalt(process.env.WORKFACTOR)
  console.log(salt)

  // bcrypt.genSalt(10, function(err, salt) {
  //   bcrypt.hash(password, salt, function(err, hash) {
  //     if (err) {
  //       console.log('error invoked')
  //       console.log(`err: ${err}`)
  //       return next(err)
  //     }
  //     console.log(hash)
  //   })
  // })
console.log(bcrypt.hash('password', 10))
  // bcrypt.hash(password, process.env.WORKFACTOR, (err, hash) => {
  //   console.log('made it')
  //   if (err) {
  //     console.log(err)
  //     return next(err)
  //   }
  //   req.body.password = hash;
  //   console.log('hash password ', req.body)
  //   return next();
  // })

  // bcrypt.hash(password, process.env.WORKFACTOR)
  // .then(hash => {
  //   req.body.password = hash;
  //   return next();
  // })
  // .catch(err => console.log(err))
}

authController.createUser = (req, res, next) => {
  const { username, password } = req.body;
  console.log('user: ', username)
  console.log('pass: ', password)
  const query = `INSERT INTO users (username, password) VALUES ($1, $2)`;
  const array = [username, password];
  db.query(query, array)
    .then(response => {
      console.log('query responded'); 
      return next();
    })
    .catch(e => next({
        log: 'Error occured at authController.createUser middleware',
        message: { err: 'Unable to create new user'}
    }))
}

authController.verifyUser = (req, res, next) => {
  const { username, password } = req.body;
  const query = `SELECT password from users WHERE username='${username}'`;
  db.query(query)
    .then(response => {
      console.log(response.rows);
      if(response.rows[0].password !== password) return next({
        log: 'Error at authController.verifyUser - incorrect password',
        message: {err: 'Username and password do not match'}
      })
      return next();
    })
    .catch(e => next({
      log: 'Error at authController.verifyUser',
      message: { err: 'Sign-in unsuccessful. Please try again.'}
    }))
}







module.exports = authController;



// const size = process.env.WORKFACTOR

// const hash = async (password, size) => {
//   try {
//     const salt = await bcrypt.genSalt(size);
//     const hash = await bcrypt.hash(password, salt);
    
//     return hash;
//   } catch (error) {
//     console.log('err: ', error)
//   }
// }
// console.log(hash())