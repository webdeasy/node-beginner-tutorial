const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
app.get('/', (request, response) => {
  response.send('Our first Node.js webserver');
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
