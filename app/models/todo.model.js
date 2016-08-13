import mongoose from 'mongoose';

let todoSchema = new mongoose.Schema({
    text: { type: String }
});

export default mongoose.model('Todo', todoSchema);