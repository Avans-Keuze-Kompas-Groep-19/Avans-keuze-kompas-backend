import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionSchema } from './schemas/questions.schema';
import { QuestionsService } from './questions.service';
import { QuestionsController } from './questions.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            { name: 'Question', schema: QuestionSchema, collection: 'questions' },
        ]),
    ],
    controllers: [QuestionsController],
    providers: [QuestionsService],
})
export class QuestionsModule {}