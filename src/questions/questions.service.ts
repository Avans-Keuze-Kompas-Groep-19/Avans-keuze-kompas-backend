import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Question } from './schemas/questions.schema';
import { CreateQuestionsDto } from './dto/create-questions.dto';

@Injectable()
export class QuestionsService {
  constructor(
    @InjectModel(Question.name) private readonly questionModel: Model<Question>,
  ) {}
  async findAll() {
    // Identify where we are reading from (no secrets, just identifiers)
    console.log('db.name:', this.questionModel.db?.name);
    console.log('collection:', this.questionModel.collection?.name);
    console.log('modelName:', this.questionModel.modelName);

    // RAW driver read (bypasses Mongoose query middleware like pre('find'))
    const raw = await this.questionModel.collection
      .find({})
      .limit(50)
      .toArray();
    console.log('RAW docs:', raw.length);

    // Mongoose read (passes through schema middleware/plugins)
    const viaMongoose = await this.questionModel.find({}).limit(50).exec();
    console.log('Mongoose docs:', viaMongoose.length);

    return viaMongoose;
  }
  async findOne(id: string) {
    return this.questionModel.findById(id).exec();
  }
}
