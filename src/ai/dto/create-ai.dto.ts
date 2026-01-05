import { IsString, IsNumber, IsOptional } from 'class-validator';

export class CreateAiDto {
    @IsString()
    interests_text: string;

    @IsString()
    preferred_location: string;

    @IsNumber()
    max_difficulty: number;

    @IsString()
    role_include: string[];

    @IsString()
    quiz_answers: Record<string, string>;

    @IsNumber()
    k: number;
}