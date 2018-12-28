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
    public async create(name: string, key:string,
        desc: string = '', status: Number = 0, owner: string[], 
        managers: string[] = [], users: string[] = []) {
        const project = await this.app.model.Project.create({
            name,
            key,
            desc,
            status,
            create_at: new Date(),
            owner,
            managers,
            users
        })
        return project;
    }
}
