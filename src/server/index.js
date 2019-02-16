const express = require('express');
const os = require('os');

const app = express();

app.use(express.static('dist'));
app.set('port', process.env.PORT || 8080);
app.get('/api/username', (req, res) => res.send({ username: os.userInfo().username }));

app.listen(app.get('port'), () => console.log('App is running on ' + server.address().port + ' port'));
