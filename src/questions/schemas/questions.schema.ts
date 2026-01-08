import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ _id: false })
export class QuizAnswer {
    @Prop()
    answerId: number;

    @Prop()
    text: string;
}
const QuizAnswerSchema = SchemaFactory.createForClass(QuizAnswer);

@Schema({ _id: false })
export class Question extends Document {
    @Prop({ type: Number, required: true })
    _id: number;

  @Prop()
  question: string;

  @Prop({ type: [QuizAnswerSchema] })
    quiz_answers: QuizAnswer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);