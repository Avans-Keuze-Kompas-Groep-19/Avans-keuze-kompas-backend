import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema()
export class Ai extends Document {
    @Prop()
    interests_text: string;

    @Prop()
    preferred_location: string;

    @Prop()
    max_difficulty: number;

    @Prop({ type: Object })
    role_include: string[];

    @Prop({ type: Object })
    quiz_answers: Record<string, string>;

    @Prop()
    k: number;
}

export const AiSchema = SchemaFactory.createForClass(Ai);