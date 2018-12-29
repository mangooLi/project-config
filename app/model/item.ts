
import { Application } from 'egg';


module.exports = (app: Application) => {
    const { mongoose } = app;
    const { Schema } = mongoose;

    const { Mixed } = Schema.Types;

    const ItemSchema = new Schema({
        name: { type: String },
        c_id: { type: String },
        key0: { type: Mixed },
        key1: { type: Mixed },
        key2: { type: Mixed },
        key3: { type: Mixed },
        key4: { type: Mixed },
        key5: { type: Mixed },
        key6: { type: Mixed },
        key7: { type: Mixed },
        key8: { type: Mixed },
        key9: { type: Mixed },
    });

    return mongoose.model('Item', ItemSchema);
}