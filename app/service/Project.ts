import { Service } from 'egg';


/**
 * Test Service
 */
export default class Project extends Service {




    public async create(name: string, key: string,
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

    public async update(proj) {
       const {_id,...payload} = proj;
        
       return await this.app.model.Project.findByIdAndUpdate(_id,payload);
    }


    public async destroy(id){
        await this.app.model.Project.findByIdAndRemove(id);
    }

    public async show(id){
        const proj = await this.app.model.Project.find({_id:id});
        return proj;
    }

}
