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

    public async update(){

        const {ctx} = this;
        const proj = ctx.request.body;

        ctx.body =  await ctx.service.project.update(proj);
    }

    public async show(){
        const {id} = this.ctx.params;

        this.ctx.body = await this.ctx.service.project.show(id)

    }
}


