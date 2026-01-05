import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
  @Prop({ type: Number })
  declare id: number;

  @Prop()
  question: string;

  @Prop({ type: Object })
    quiz_answers: string[];
}

export const QuestionSchema = SchemaFactory.createForClass(Question);