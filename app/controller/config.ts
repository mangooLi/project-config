



import { Controller } from 'egg';

export default class ConfigController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }


    public async create() {
        const { name, key, desc, status, p_id, is_top, value, model } = this.ctx.request.body;
        const config = await this.ctx.service.config.create(name, key, desc, status, p_id, is_top, value, model);

        this.ctx.body = config;
    }
}