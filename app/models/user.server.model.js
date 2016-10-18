var mongoose = require('mongoose'),
  Schema = mongoose.Schema;

  var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    email: String,
    username: {
      type: String,
      trim: true
    },
    password: String,
    created: {
      type: Date,
      default: Date.now
    },
    website: {
        type: String,
        get: function(url) {
          if (!url) {
            return url;
          } else {
            if (url.indexOf('http://') !== 0 && url.indexOf('https://') !== 0) {
              url = 'http://' + url;
            }
        return url;
      }
    }
  }

  });

UserSchema.virtual('fullName').get(function(){
  return this.firstName + ' ' + this.lastName;
}).set(function(fullName) {
  var splitName = fullName.split(' ');
  this.firstName = splitName[0]  || '';
  this.lastName = splitName[1] || '';
});

 UserSchema.set('toJSON', { getters: true, virtuals: true});
mongoose.model('User', UserSchema);

// curl -X POST -H "Content-Type: application/json" -d '{"firstName":"First", "lastName":"Last","email":"user@example.com","username":"username","password":"password"}' localhost:3000/users
// curl -X PUT -H "Content-Type: application/json" -d '{"lastName":"Updated"}' localhost:3000/users/5801fd3ab5e5bf0b23dd5741
