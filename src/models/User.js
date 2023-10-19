import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true
  },
  email: {
    unique: true,
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true
  },
  avatar: {
    type: String,
    required: false
  },
  address: {
    type: String,
    required: true
  },
  location: {
    longitude: {
      type: Number,
      required: true,
    },
    latitude: {
      type: Number,
      required: true
    }
  },
  role: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Role'
  }
}, { timestamps: true });

userSchema.pre('save', async function (next) {
  const User = this.model('User');
  const existingUser = await User.findOne({ email: this.email });
  if (existingUser) {
    const error = new Error('Email address already exist.');
    return next(error);
  }
  next();
});

export default mongoose.model('User', userSchema);