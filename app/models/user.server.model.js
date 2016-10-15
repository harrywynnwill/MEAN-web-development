var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: String,
    password: String
  });

mongoose.model('User', UserSchema);

// curl -X POST -H "Content-Type: application/json" -d '{"firstName":"First", "lastName":"Last","email":"user@example.com","username":"username","password":"password"}' localhost:3000/users
