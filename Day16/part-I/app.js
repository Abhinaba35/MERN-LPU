const express = require('express');




const app = express();


app.listen(2900, () => {
  console.log('------ server started  ------');
});


app.get('/', (req, res) => {
  res.json({
    isSucess: true,
    message: "Server is running",
    data: {}
  });
});



