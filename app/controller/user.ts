import { Controller } from 'egg';

export default class UserController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }


    public async new() {
        const { ctx } = this;
        const { user_name, password } = ctx.request.body;
        const user =  await ctx.service.user.create(user_name, password);
        ctx.body = user;
    }

    public async create() {
        const { ctx } = this;
        const { user_name, password } = ctx.request.body;

        const user =  await ctx.service.user.create(user_name, password);
        ctx.body = user;
    }
}