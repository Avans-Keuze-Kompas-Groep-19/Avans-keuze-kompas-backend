import { IsArray, IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class RecommendVkmsDto {
  @IsArray()
  @Type(() => String)
  vkmIds: string[];
}
