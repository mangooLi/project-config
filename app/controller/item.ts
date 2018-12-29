import { Controller } from 'egg';

export default class ItemController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    public async create() {
        const { ctx } = this;
        const { name, c_id,key0,key1,key2,key3,key4,key5,key6,key7,key8,key9,} = ctx.request.body;

        const item = await ctx.service.item.create(name,c_id,key0,key1,key2,key3,key4,key5,key6,key7,key8,key9);
        ctx.body = item;
    }

}