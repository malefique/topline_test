module.exports = {

  development: {
      client: 'mysql',
      connection: {
          socketPath: '/Applications/MAMP/tmp/mysql/mysql.sock',
          host : 'localhost',
          user : 'root',
          password : 'root',
          database : 'topline'
      },
      migrations: {
          directory: './db/migrations/'
      },
      seeds: {
          directory: './db/seeds/'
      }
  },

  staging: {
      client: 'mysql',
      connection: {
          host : 'localhost',
          user : 'root',
          password : 'root',
          database : 'topline'
      },
      migrations: {
          directory: './db/migrations/'
      },
      seeds: {
          directory: './db/seeds/'
      }
  },

  production: {
      client: 'mysql',
      connection: {
          host : 'localhost',
          user : 'root',
          password : 'root',
          database : 'topline'
      },
      migrations: {
          directory: './db/migrations/'
      },
      seeds: {
          directory: './db/seeds/'
      }
  }
};
