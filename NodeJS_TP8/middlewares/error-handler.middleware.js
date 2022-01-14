const HTTPStatuses = require('statuses');

function errorMiddleware (err, req, res, next) {

  /* Si jamais un autre handler d'erreur
   a déjà envoyé la reponse */
  if (res.headersSent) {
    next(err);
  }

  /* On renvoie l'erreur parsée proprement */
  res
  .status(err.status)
  .json({
      statusCode: err.status,
      message: HTTPStatuses.message[err.status]
  });
  res.end();

}

module.exports = errorMiddleware;
