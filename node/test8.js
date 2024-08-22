const express = require('express');
const app = express();
const port = 9000;
// app.use(express.json());
const router = express.Router();
app.use(router);
router.get('/api/track', (req, res) => {
  console.log('Received keep-alive request:', req);
  res.send({name: 'John Doe'});
  // res.sendStatus(200);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
