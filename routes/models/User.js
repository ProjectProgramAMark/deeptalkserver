var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var ObjectId = Schema.Types.ObjectId;

var userSchema = new Schema({
    email:   {type: String},
    password: {type: String},
    phoneNumber:  {type: String}
});

var User = mongoose.model('User', userSchema);

module.exports = User;
