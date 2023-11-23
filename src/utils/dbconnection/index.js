const Pool = require("pg").Pool;
const pool = new Pool({
  connectionString:
    "postgresql://dovanthao2404:NnwEk86hJUqL@ep-icy-boat-92090147-pooler.us-east-2.aws.neon.tech/demouser?sslmode=require",
  ssl: {
    require: true,
  },
});

module.exports = { pool };
