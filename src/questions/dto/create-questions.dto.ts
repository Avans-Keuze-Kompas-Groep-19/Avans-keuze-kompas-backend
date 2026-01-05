import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateQuestionsDto {
    @IsNumber()
    id: number;

    @IsString()
    question: string;

    @IsString({ each: true })
    quiz_answers: string[];
}