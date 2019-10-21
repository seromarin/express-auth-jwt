const jwt = require('jsonwebtoken');

const handleMessage = require('../../utils/handleMessages');

/**
 * Manage the login view render
 *
 * @param {*} req
 * @param {*} res
 */
function manageLoginView(req, res) {
  res.render('auth/register');
}

/**
 * Manage the user autentication
 *
 * @param {*} req
 * @param {*} res
 */
function authUser(req, res) {
  // const { email, password } = req.body;
  const jwtCookie = req.cookies['name'];
  console.log('jwtCookie :', jwtCookie);
  const validation = validateJWT(jwtCookie, 'abc');
  console.log('validation :', validation);

  if (validation) {
    handleMessage.handleSuccessMessage('User auntenticated');
  } else {
    handleMessage.handleErrorMessage('Fallo la auth');
  }
}

/**
 * Validate the JWT
 *
 * @param {*} token
 * @param {*} secret
 * @return {*} valid/invalid token
 */
function validateJWT(token, secret) {
  console.log('data', token, secret);
  try {
    return jwt.verify(`${token}abc`, secret);
  } catch (error) {
    return false;
  }
}

module.exports = {
  manageLoginView,
  authUser,
};
