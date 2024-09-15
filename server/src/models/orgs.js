import mongoose, { Schema } from 'mongoose';

const OrganizerSchema = new Schema({
    userID: { type: String, required: true },
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    profilePic: { type: String },
    description: { type: String },
});

const Organizer =  mongoose.model('Organizer', OrganizerSchema);

export default Organizer;
