



import { Service } from 'egg';


export default class Config extends Service {



    /**
     * 新建用户
     * @param user_name 
     * @param password 
     */
    public async create(name: string, key:string,
        desc: string = '', status: Number = 0, p_id: string, 
        is_top:boolean = false,
        value = {}, model = {}
       ) {
        const project = await this.app.model.Config.create({
            name,
            key,
            desc,
            status,
            create_at: new Date(),
            p_id,
            is_top,
            value,
            model
        })
        return project;
    }
}
