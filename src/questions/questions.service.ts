import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/questions.schema';
import { CreateQuestionsDto } from './dto/create-questions.dto';

@Injectable()
export class QuestionsService {
    constructor(@InjectModel(Question.name) private readonly questionModel: Model<Question>,) {}
    async findAll() {
        const questions = await this.questionModel.find().exec();
        console.log(questions);
        return questions;
    }
    async findOne(id: string) {
        return this.questionModel.findById(id).exec();
    }
}