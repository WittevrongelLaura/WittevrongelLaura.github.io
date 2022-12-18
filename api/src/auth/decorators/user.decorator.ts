import { createParamDecorator, ExecutionContext } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { UsersService } from 'src/users/users.service'


export const CurrentUser = createParamDecorator(
  (data: unknown, context: ExecutionContext) => { 
    const ctx = GqlExecutionContext.create(context)
    return ctx.getContext().req.user
  },
)