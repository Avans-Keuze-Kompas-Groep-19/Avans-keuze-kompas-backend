import {
  Controller,
  Post,
  Body,
} from '@nestjs/common';
import { AiService } from './ai.service';
import { CreateAiDto } from './dto/create-ai.dto';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';

@Controller('ai')
export class AiController {
  constructor(private readonly service: AiService) {}

  @UseGuards(JwtAuthGuard)
  @Post()
    create(@Body() dto: CreateAiDto) {
        return this.service.create(dto);
    }
}