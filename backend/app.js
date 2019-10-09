const express = require('express');
const { TeamMember } = require('./model');
var bodyParser = require("body-parser");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get('/team', async (req, res, next) => {
  const team = await TeamMember.findAll();
  return res.json(team);
});

app.post('/add', async(req, res, next) => {
  TeamMember.create(req.body)
  .then(err => console.log(err))
})

module.exports = app;
