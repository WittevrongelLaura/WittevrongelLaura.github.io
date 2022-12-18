/* eslint-disable prettier/prettier */
import { ExecutionContext, Injectable } from '@nestjs/common'
import { GqlExecutionContext } from '@nestjs/graphql'
import { AuthGuard } from '@nestjs/passport'

@Injectable()
export class FirebaseGuard extends AuthGuard('firebase-auth') {
  getRequest(context: ExecutionContext) {
    const ctx = GqlExecutionContext.create(context) // doorgeven van REST (post) naar GraphSL
    // console.log(ctx)

    return ctx.getContext().req
  }
}
