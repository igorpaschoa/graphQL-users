const express = require('express');
const expressGraphQL = require('express-graphql');

const schema = require('./schema/schema');

const app = express();

app.use(
  '/graphql',
  expressGraphQL({
    schema,
    graphiql: true
  })
);

app.get('/', (req, res) => {
  res.json({ hello: 'there' });
});

app.listen(4000, () => {
  console.log('Hello from express/graphql');
});
