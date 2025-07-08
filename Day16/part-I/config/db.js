const mongoose = require('mongoose');


mongoose.connect(
  "mongodb+srv://Abhinaba:ABC123@clusters.5qxjrtp.mongodb.net/?retryWrites=true&w=majority&appName=Clusters",
  {
    dbName: "Day16",
    
  }
);