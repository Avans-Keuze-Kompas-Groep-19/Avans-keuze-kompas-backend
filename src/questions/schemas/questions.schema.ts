import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Question extends Document {
  @Prop()
  question: string;
}

export const QuestionSchema = SchemaFactory.createForClass(Question);