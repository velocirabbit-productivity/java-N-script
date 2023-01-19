require('dotenv').config();
const db = require('../sqlconnection.js')
const bcrypt = require('bcryptjs');


authController = {};

authController.addBcrypt = (req, res, next) => {
  console.log('addBcrypt')
  const { password } = req.body;
  const hash = async () => {
    try {
      const newHash = await bcrypt.hash(password, 10);
      req.body.password = newHash;
      return next();
    } catch (error) {
      console.log('err: ', error)
    }
  }
  hash();
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
      bcrypt.compare(password, response.rows[0].password)
        .then(boolean => {
          if (!boolean) {
            next({ log: 'Error in verifyUser - incorrect password'})
          } else {
            return next()
          }
        })
      
      // if(response.rows[0].password !== password) return next({
      //   log: 'Error at authController.verifyUser - incorrect password',
      //   message: {err: 'Username and password do not match'}
      // })
      // return next();
    })
    .catch(e => next({
      log: 'Error at authController.verifyUser',
      message: { err: 'Sign-in unsuccessful. Please try again.'}
    }))
}







module.exports = authController;