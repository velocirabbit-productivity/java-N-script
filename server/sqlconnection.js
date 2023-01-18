const { Pool } = require('pg'); //had to npm install pg

// const PG_URI = 'postgres://xryqbhgj:bssNj-4w1ttykBuzhXd0ZMjHeuR7EKCs@mahmud.db.elephantsql.com/xryqbhgj';

//connecting to pool to keep this one open constantly (opening/closing takes resources)
const pool = new Pool({
    connectionString: process.env.PG_URI
});


//pool.query "exported" in this way so that we can call query method. read the read.me?
//code did not respond to direct pool.query export. 
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  }
}


/*
    CREATE TABLE users (
      user_id serial PRIMARY KEY,
      username VARCHAR ( 50 ) NOT NULL,
      password VARCHAR ( 200 ) NOT NULL
    )

    CREATE TABLE shops (
      _id serial PRIMARY KEY,
      food DECIMAL ( 6, 3) DEFAULT 0,
      drinks DECIMAL ( 6, 3) DEFAULT 0,
      space DECIMAL ( 6, 3) DEFAULT 0,
      sound DECIMAL ( 6, 3) DEFAULT 0,
      outlets DECIMAL ( 6, 3) DEFAULT 0,
      parking DECIMAL ( 6, 3) DEFAULT 0,
      wifi DECIMAL ( 6, 3) DEFAULT 0,
      name VARCHAR ( 50 ) NOT NULL,
      reviewcount INT DEFAULT 0
    )
*/