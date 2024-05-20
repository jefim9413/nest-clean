import { Controller, Post, UseGuards } from '@nestjs/common'
import { CurrentUser } from 'src/auth/current-user-decorator'
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard'
import { UserPayload } from 'src/auth/jwt.strategy'

@Controller('/questions')
export class CreateQuestionController {
  constructor() {}

  @Post()
  @UseGuards(JwtAuthGuard)
  async handle(@CurrentUser() user: UserPayload) {
    console.log(user)
    return 'ok '
  }
}
