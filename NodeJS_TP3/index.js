const http = require('http');

const server = http.createServer((req, res) => {

	switch(req.url) {
		case '/exo6':

      // exo 1

      const testString20Char = (myString) => {
        return new Promise((resolve, failure) => {
          if (myString.length <= 20) {
            resolve(true);
          } else {
            failure();
          }
        });
      }

      // exo 2

      const test2int = (nb1, nb2) => {
        return new Promise((resolve, failure) => {
          if (nb1 > nb2) {
            resolve(nb1 - nb2);
          } else {
            failure();
          }
        });
      }

      // exo 3

      const testMajor = (dateOdBirth) => {
        return new Promise((resolve, failure) => {
          let dateNow = new Date();
          let dateDiff = dateNow - dateOdBirth;
          if (dateDiff >= 18) {
            resolve(true);
          } else {
            failure();
          }
        });
      }

      let resExecute1 = {};

      async function execute1() {
        try {
          let myString = 'Test my string';
          await testString20Char(myString).then(res => resExecute1 = JSON.stringify(res));
        } catch(e) {
          console.log(e);
        }
      }
      execute1();

      let resExecute2 = {};
      
      async function execute2() {
        try {
          let nb1 = 2;
          let nb2 = 4;
          await test2int(nb1, nb2).then(res => resExecute2 = JSON.stringify(res));
        } catch(e) {
          console.log(e);
        }
      }
      execute2();

      let resExecute3 = {};
      
      async function execute3() {
        try {
          let dateOdBirth = new Date(1996, 7, 5);
          await testMajor(dateOdBirth).then(res => resExecute2 = JSON.stringify(res));
        } catch(e) {
          console.log(e);
        }
      }
      execute3();

      let returnObject = {
        1: resExecute1,
        2: resExecute2,
        3: resExecute3
      };

			res.writeHead(200, {'Content-Type': 'application/json'});
			res.end(returnObject);
			break;

		default:
			res.writeHead(404, {'Content-Type': 'text/plain'});
      res.end('Not found');
			break;
	}
  
});

server.listen(3000, ( ) => console.log('Le serveur tourne sur http://localhost:3000'));

