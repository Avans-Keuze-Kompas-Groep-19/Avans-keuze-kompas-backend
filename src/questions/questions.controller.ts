import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  Req,
} from '@nestjs/common';
import type { Request } from 'express';

import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';
import { QuestionsService } from './questions.service';
import { CreateQuestionsDto } from './dto/create-questions.dto';
import { get } from 'axios';

@Controller('questions')
export class QuestionsController {
  constructor(private readonly service: QuestionsService) {}
  @Get()
  findAll(@Req() req: Request) {
    console.log('[QuestionsController] GET /questions hit', {
      host: req.headers.host,
      url: req.originalUrl,
    });
    return this.service.findAll();
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.service.findOne(id);
  }
}
