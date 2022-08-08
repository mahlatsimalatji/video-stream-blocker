import mongoose from 'mongoose';

//interface representing userstream db document
interface IUserStreamCount {
    username: string;
    count: number;
  }

const userStreamCountSchema = new mongoose.Schema<IUserStreamCount>({
    username: { type: String, required: [true, 'Username required'] },
    count: { type: Number, required: [true, 'Stream count required'] },
})

const UserStreamCount = mongoose.model<IUserStreamCount>("userStreamCount",userStreamCountSchema)

export {UserStreamCount}
