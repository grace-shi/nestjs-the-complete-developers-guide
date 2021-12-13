import { Controller, Get, Post, Body, Param, NotFoundException } from '@nestjs/common'
import { CreateMessageDto } from './dtos/create-message.dto'
import { MessagesService } from './messages.service';

@Controller('messages')
export class MessagesController {
  constructor (
    public messageService: MessagesService,
    public messageService2: MessagesService,
    public messageService3: MessagesService
  ) {
    // Dependency Injection 中所有instance共用service
    console.log(messageService === messageService2)
    console.log(messageService2 === messageService3)
  }

  @Get()
  listMessages() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    return this.messageService.create(body.content);
  }

  @Get('/:id')
  async getMessage(@Param('id') id: string) {
    const message = await this.messageService.findOne(id);

    if (!message) {
      throw new NotFoundException('message not found');
    }

    return message;
  }
}
