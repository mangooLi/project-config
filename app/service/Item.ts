import { Service } from 'egg'
export default class One extends Service {




    public async create(name: string, c_id: string, 
        key0 = '', key1 = '', key2 = '', key3 = '', key4 = '', key5 = '', key6 = '', key7 = '', key8 = '', key9 = '',
    ) {
        const detail = await this.app.model.Config.create({
            name,
            c_id,
            key0,
            key1,
            key2,
            key3,
            key4,
            key5,
            key6,
            key7,
            key8,
            key9,
        })
        return detail;
    }
}