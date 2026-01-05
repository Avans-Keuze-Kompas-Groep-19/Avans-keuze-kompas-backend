import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
} from '@nestjs/common';
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
    findAll() {
        return this.service.findAll();
    }

    @UseGuards(JwtAuthGuard)
    @Get(':id')
    findOne(@Param('id', MongoIdPipe) id: string) {
        return this.service.findOne(id);
    }
}