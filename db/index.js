const {Pool} = require("pg");

const pool = new Pool (settings)

const settings = {
    host: 'ec2-54-228-170-125.eu-west-1.compute.amazonaws.com',
    user: 'tlfhgwrwniyqvy',
    database: 'da857s86bjj1md',
    password: '354b13378260519a903f6f50e41b4ca24aaab980ef1737cb54610ec31648af3c',
    port: 5432,
    ssl: {
        rejectUnauthorized: false,
      },
}

module.exports = {query: (txt, params, cb) => {
        return pool.query (txt, params,cb)
    }
};