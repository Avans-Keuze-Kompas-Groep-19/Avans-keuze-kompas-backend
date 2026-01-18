import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Vkm } from './schemas/vkm.schema';
import { CreateVkmDto } from './dto/create-vkm.dto';

@Injectable()
export class VkmService {
  constructor(@InjectModel(Vkm.name) private model: Model<Vkm>) {}

  async findAll() {
    return this.model.find().exec();
  }

  async findOne(id: string) {
    return this.model.findById(id).exec();
  }

  async create(data: CreateVkmDto) {
    return new this.model(data).save();
  }

  async update(id: string, data: Partial<CreateVkmDto>) {
    return this.model.findByIdAndUpdate(id, data, { new: true }).exec();
  }

  async delete(id: string) {
    return this.model.findByIdAndDelete(id).exec();
  }

  /**
   * Filter op studyCredit, location, level via query params.
   * Voorbeeld: /vkm/filter?studyCredit=30&location=Den%20Bosch&level=NLQF6
   */
  async filter(filters: {
    studyCredit?: number;
    location?: string;
    level?: string;
  }) {
    const query: Record<string, any> = {};

    if (filters.studyCredit !== undefined) {
      query.studyCredit = filters.studyCredit;
    }

    if (filters.location) {
      // exact match (case-insensitive)
      query.location = new RegExp(`^${escapeRegex(filters.location)}$`, 'i');
    }

    if (filters.level) {
      // exact match (case-insensitive)
      query.level = new RegExp(`^${escapeRegex(filters.level)}$`, 'i');
    }

    return this.model.find(query).exec();
  }
}

function escapeRegex(input: string) {
  // voorkomt regex-injectie / onverwachte matches
  return input.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}
