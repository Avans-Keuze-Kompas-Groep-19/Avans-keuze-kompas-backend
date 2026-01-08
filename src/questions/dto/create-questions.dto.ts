import { IsString, IsNumber, ValidateNested } from 'class-validator';
import { Type } from 'class-transformer';

export class QuizAnswerDto {
    @IsNumber()
    answerId: number;

    @IsString()
    text: string;
}

export class CreateQuestionsDto {
    @IsNumber()
    id: number;

    @IsString()
    question: string;

    @ValidateNested({ each: true })
    @Type(() => QuizAnswerDto)
    quiz_answers: QuizAnswerDto[];
}