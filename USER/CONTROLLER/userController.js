const userModel = require('../models/userModel');

const createUser = (req,res) => {
  const newUser = req.body;
  res.send('Usuário ${newUser.name} criado com sucesso');
};

module.exports = {createUser};
