import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AiSchema } from './schemas/ai.schema';
import { AiService } from './ai.service';
import { AiController } from './ai.controller';

@Module({
    imports: [
        MongooseModule.forFeature([
            {name:'temp', schema: AiSchema, collection: 'AI' },
        ]),
    ],
    controllers: [AiController],
    providers: [AiService],
})
export class AiModule {}