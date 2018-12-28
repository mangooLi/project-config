


import { Application } from 'egg'


module.exports = (app: Application) => {
    const { mongoose } = app;
    const { Schema } = mongoose;

    const ConfigSchema = new Schema({
        name: { type: String },
        key: { type: String },
        desc: { type: String, defaultValue: '' },
        status: { type: Number, defaultValue: 0 },  // 0 禁用 1 可用
        create_at: { type: Date, defaultValue: Date.now },
        update_at: { type: Date },
        owner: { type: String },   // 项目拥有者，可以删除项目
        managers: { type: Array }, // 项目管理者，可以配置项目
        users: { type: Array } // 项目使用者，可以修改配置项

    });

    return mongoose.model('Project', ConfigSchema);
}