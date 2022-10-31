/*
global process:readonly
*/

const app = require('./app.js');

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
