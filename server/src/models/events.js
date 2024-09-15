import mongoose, { Schema } from 'mongoose';

const EventSchema = new Schema({
    uuid: { type: String, required: true },
    name: { type: String, required: true },
    startTime: { type: String, required: true },
    endTime: { type: String, required: true },
    userId: { type: String, required: true },
    description: { type: String, required: true },
    extendedDescription: { type: String, required: true },
    image: { type: String },
});

const Event = mongoose.model('Event', EventSchema);

export default Event;
