import mongoose, { Schema } from 'mongoose';

const UserSchema = new Schema({
  userID: { type: String, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  profilePic: { type: String },
  description: { type: String },
  interests: { type: String },
});

const User = mongoose.models.Organizer || mongoose.model('User', UserSchema);

export default User;
