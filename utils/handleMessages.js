/**
 * Handle success messages from requests
 *
 * @param {*} success
 */
function handleSuccessMessage(success) {
  console.log('success:', success);
};

/**
 * Handle error messages from requests
 *
 * @param {*} error
 */
function handleErrorMessage(error) {
  console.error('error: ', error);
};

module.exports = {
  handleErrorMessage,
  handleSuccessMessage,
};
