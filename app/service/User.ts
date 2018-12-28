import { Service } from 'egg';

/**
 * Test Service
 */
export default class User extends Service {

   

    /**
     * 新建用户
     * @param user_name 
     * @param password 
     */
    public async create(user_name: string, password: string) {

        const user = await this.app.model.User.create({  user_name, password });

        return user;
    }

    public async getUserByUserName (user_name){
        const user = await this.app.model.User.find({user_name});
        return user[0];
    }
}
