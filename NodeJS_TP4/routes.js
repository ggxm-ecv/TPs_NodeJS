// Exo 7

module.exports = function(app){

  // Exo 1

  app.get('/hello-world', function (req, res) {
    res.json({
      "message": "Hello world !"
    });
  });


  // Exo 2

  app.get('/message', function (req, res) {

    let message = req.query.message;

    if (message.length > 20) {
      res.status(400).json({
        "message": "Bad Request"
      });
    } else {
      res.send(message);
    }
    
  });


  // Exo 3

  app.post('/infos/headers', function (req, res) {

    res.json(req.headers);
    
  });


  // Exo 4

  app.post('/exo4', function (req, res) {

    let payload = req.body;
    let birthDate = new Date(payload.birthdate);
    let dateNow = new Date();

    let yearsDiff =  dateNow.getFullYear() - birthDate.getFullYear();

    if (yearsDiff >= 18) {
      res.status(200).json({
        "message": `Welcome ${payload.firstname}`
      });
    } else {
      res.status(403).json({
        "message": "Forbidden"
      });
    }

  });


  // Exo 5

  app.get('/rick-roll', function (req, res) {

    res.redirect('https://youtu.be/dQw4w9WgXcQ');
    
  });


  // Exo 6

  app.delete('/custom-header', function (req, res) {

    res.set('Message', 'Hello world !').send();
    
  });


  // Exo 8

  app.get('/params/:id/:key/:slug', function (req, res) {

    let params = {
      "id": req.params.id,
      "key": req.params.key,
      "slug": req.params.slug
    }

    res.json(params);
    
  });

}