import { Controller } from 'egg';

export default class ProjectController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }

    public async create() {
        const { ctx } = this;
        const { name, owner ,managers,key} = ctx.request.body;

        const project = await ctx.service.project.create(name,key,undefined,undefined, owner,managers);
        ctx.body = project;
    }

}