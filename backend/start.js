const mongoose = require('mongoose');

require('dotenv').config({ path: '.env' });
mongoose.connect(process.env.DATABASE, {useNewUrlParser: true});
mongoose.connection.on('error', (err) => {
  console.error(`Database connection error ${err.message}`);
});

const app = require('./app');
app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log(`Express running → PORT ${server.address().port}`);
});
