import  {Application} from 'egg'


module.exports = (app:Application) => {
    const { mongoose } = app;
    const { Schema } = mongoose;


    // const {ObjectId} = Schema.Types;

    const UserSchema = new Schema({
        user_name: { type: String },
        password: { type: String },
    });

    return mongoose.model('User', UserSchema);
}