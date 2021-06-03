const { Client } = require("pg");
const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ...(process.env.NODE_ENV !== "development" && {
    ssl: {
      rejectUnauthorized: false,
    },
  }),
});
client.connect();

exports.getUsers = async () => {
  const { rows } = await client.query(`SELECT id FROM users;`);
  return rows;
};

exports.createUsers = async (token) => {
  const res = await client.query(`INSERT into users values ('${token}');`);
  return res;
};
