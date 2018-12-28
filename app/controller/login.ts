import { Controller } from 'egg';

export default class LoginController extends Controller {
    public async index() {
        const { ctx } = this;
        ctx.body = await ctx.service.test.sayHi('egg');
    }


    public async login() {
        const { ctx } = this;
        const { user_name, password } = ctx.request.body;

        const user =  await ctx.service.user.getUserByUserName(user_name);

        if(user.password ===  password){
            ctx.body = user;
        }else{
            ctx.body = {
                error : '密码错误'
            };
            ctx.status = 400;
        }

    }
}