import mongoose from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },

  isAdmin: {
    type: Boolean,
    default: false,
  },
}, { timestamps: true });


userSchema.methods.matchPassword = async function(typedPassword){

  return await bcrypt.compare(typedPassword, this.password);
}

userSchema.pre('save', async function (next) {
  
  if (!this.isModified('password')) {
      
    next();
  }

  let salt = await bcrypt.genSalt(10);
  this.password = await bcrypt.hash(this.password, salt);
})

const userModel = mongoose.model('User', userSchema);

export default userModel;