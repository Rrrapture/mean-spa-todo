import mongoose from 'mongoose';

// http://mongoosejs.com/docs/guide.html
let todoSchema = new mongoose.Schema({
    text: { type: String }
});

todoSchema.add({
    priority: { type: Number}
})

export default mongoose.model('Todo', todoSchema);