const { Client } = require("pg");
const client = new Client(process.env.DATABASE_URL + "?ssl=true");
client.connect();

exports.getUsers = async () => {
  const { rows } = await client.query(`SELECT id FROM users;`);
  console.log(rows);
  return rows;
};

exports.createUsers = async (token) => {
  const res = await client.query(`INSERT into users values ('${token}');`);
  return res;
};
