const jwt = require('jsonwebtoken');

const handleMessage = require('../../utils/handleMessages');

/**
 * Manage the register view render
 *
 * @param {*} req
 * @param {*} res
 */
function manageRegisterView(req, res) {
  res.render('auth/register');
}

/**
 * Register new user in the DB
 *
 * @param {*} req
 * @param {*} res
 */
function registerNewUser(req, res) {
  // const { name, lastName, password, email } = req.body;
  // const newUser = new User({ name, lastName, password, email } = req.body);
  // newUser.register();
  const jwtUser = jwt.sign({ foo: 'bar' }, 'shhhhh');
  handleMessage.handleSuccessMessage('Usuario creado correctamente');
  // res.redirect('/');
  console.log('jwtUser :', jwtUser);
  res.cookie('name', jwtUser);
  res.redirect('/');
}

module.exports = {
  manageRegisterView,
  registerNewUser,
};
