'use strict';

/**
 * Class user
 *
 * @class User
 */
class User {
  constructor({ name, lastName, password, email }) {
    this.name = name;
    this.lastName = lastName;
    this.password = password;
    this.email = email;
  };

  register() {
    return true;
  }
}

module.exports = User;
