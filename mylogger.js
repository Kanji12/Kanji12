function log(message) {
    console.log(message);
}
function warning(message) {
    console.warn(message);
}
function error(message) {
  console.error(message);
}
module.exports.log = log;
module.exports.warn = warning;
module.exports.error = error;
