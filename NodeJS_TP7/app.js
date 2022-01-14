const express = require('express');
const bodyParser = require('body-parser');


const userRoutes = require('./routes/user.routes');
const postRoutes = require('./routes/post.routes');
const commentRoutes = require('./routes/comment.routes');
const roleRoutes = require('./routes/role.routes');


const app = express();
const port = 3000;


app.use(bodyParser.json());


const myMiddleware1 = (req, res, next) => {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; 
    var yyyy = today.getFullYear();

    if(dd<10) 
    {
        dd='0'+dd;
    } 

    if(mm<10) 
    {
        mm='0'+mm;
    } 

    var today_format = dd+'-'+mm+'-'+yyyy;

    var today_hours = today.getHours();

    console.log('Nous sommes le : ' + today_format + ' et il est : ' + today_hours + 'H');

    next();
}
app.use(myMiddleware1);

const myMiddleware2 = (req, res, next) => {
    res.set({'Application-name': 'ecv-digital'});
    next();
}
app.use(myMiddleware2);

const myMiddleware3 = (req, res, next) => {
    for (let index = 0; index < req.headers.length; index++) {
        const element = array[index];
        if (!element.includes('Authorization')) {
            res.status(403);
        }
    }
    
    next();
}
app.use(myMiddleware3);


app.use('/users', userRoutes);
app.use('/posts', postRoutes);
app.use('/comments', commentRoutes);
app.use('/roles', roleRoutes);


app.listen(port, () => {
    console.log(`Server running on : http://localhost:${port}`)
});
