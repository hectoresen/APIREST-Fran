import {createParamDecorator, ExecutionContext} from '@nestjs/common'

/* UserFromRequest() */
export const UserFromRequest = createParamDecorator((data: unknown, ctx: ExecutionContext) =>{
    const request = ctx.switchToHttp().getRequest()
    return request.user
})