module.exports.add = function(a, b) {
  //return (a + b);
  return (a + b);
}

module.exports.userData = function(user, fullname) {
  user.firstname = fullname.split(" ")[0];
  user.lastname = fullname.split(" ")[1];
  return user;
}

module.exports.asyncAdd = function(a, b, callback) {
  //return (a + b);
  setTimeout(() => {
    callback(a + b)
  }, 1000)

}

module.exports.asyncSquare = function(x, callback) {
  setTimeout(() => {
    callback(x * x)
  }, 1000)
}
