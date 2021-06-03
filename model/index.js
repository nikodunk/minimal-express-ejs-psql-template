const { Client } = require("pg");
const client = new Client(
  "postgres://postgres:password@localhost:5432/alibaba"
);
client.connect();

exports.getUsers = async () => {
  const { rows } = await client.query(`SELECT id FROM users;`);
  return rows;
};

exports.createUsers = async (token) => {
  const res = await client.query(`INSERT into users values ('${token}');`);
  return res;
};
