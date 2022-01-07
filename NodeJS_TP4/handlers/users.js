// Exo 9

module.exports = function(app) {

  app.get('/users', function (req, res) {
    res.send("All users");
  });

  app.get('/users/:id', function (req, res) {
    res.send(`User id ${req.params.id}`);
  });

  app.post('/users', function (req, res) {
    res.send("Create user");
  });

  app.post('/users/:id', function (req, res) {
    res.send(`Delete user id ${req.params.id}`);
  });

}