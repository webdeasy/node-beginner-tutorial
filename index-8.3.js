const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/:yourName', (req, res) => {
  res.send('Your name: ' + req.params.yourName);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
