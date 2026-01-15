import { IsArray, IsMongoId } from 'class-validator';

export class BatchGetVkmDto {
  @IsArray()
  ids: string[];
}
