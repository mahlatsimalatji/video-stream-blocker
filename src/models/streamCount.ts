import mongoose from 'mongoose';

const streamCountSchema = new mongoose.Schema({
    username: { type: String, required: [true, 'Username required'] },
    count: { type: Number, required: [true, 'Username required'] },
})

const StreamCounter = mongoose.model("streamCounter",streamCountSchema)

export {StreamCounter}
