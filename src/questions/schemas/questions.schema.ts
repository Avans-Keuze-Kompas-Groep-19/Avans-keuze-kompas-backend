import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document, Schema as MongooseSchema } from 'mongoose';

@Schema({ _id: false })
export class QuizAnswer {
    @Prop()
    answerId: number;

    @Prop()
    text: string;
}
const QuizAnswerSchema = SchemaFactory.createForClass(QuizAnswer);

@Schema()
export class Question extends Document {
  @Prop()
  question: string;

  @Prop({ type: [QuizAnswerSchema] })
    quiz_answers: QuizAnswer[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);

(QuestionSchema as MongooseSchema).add({
    _id: Number,
});