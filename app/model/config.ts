


import { Application } from 'egg'


module.exports = (app: Application) => {
    const { mongoose } = app;
    const { Schema } = mongoose;

    const { Mixed } = Schema.Types;

    const ConfigSchema = new Schema({
        name: { type: String },
        key: { type: String },
        desc: { type: String, defaultValue: '' },
        status: { type: Number, defaultValue: 0 },  // 0 禁用 1 可用
        p_id: { type: String },
        is_array: { type: Boolean },

        create_at: { type: Date, defaultValue: Date.now },
        update_at: { type: Date },
        is_top: { type: Boolean },
        model: { type: Mixed }

    });

    return mongoose.model('Config', ConfigSchema);
}