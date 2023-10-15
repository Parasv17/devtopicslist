import mongoose ,{Schema} from 'mongoose';

const TopicSchema = new Schema({

    title: String,
    description: String,
    
}, {timestamps: true});

const Topic = mongoose.model.Topic ||   mongoose.model('Topic', TopicSchema);

export default Topic;