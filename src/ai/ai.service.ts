import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Ai } from './schemas/ai.schema';
import { CreateAiDto } from './dto/create-ai.dto';

@Injectable()
export class AiService {
    constructor(@InjectModel('temp') private aiModel: Model<Ai>) {}
    async create(createAiDto: CreateAiDto): Promise<Ai> {
        const createdAi = new this.aiModel(createAiDto);
        return createdAi.save();
    }
}
