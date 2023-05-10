const { Pool } = require("pg");

connectionString  = 'postgres://mptmbpbc:RMcN_VRBrUzEkAOqrxssVYn9ZGpdOhQa@lucky.db.elephantsql.com/mptmbpbc'
const pool = new Pool({
    connectionString,
    max: 4,
  });
  
  module.exports = pool;