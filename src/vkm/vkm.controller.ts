import {
  Controller,
  Get,
  Post,
  Param,
  Body,
  Put,
  Delete,
  Query,
  UseGuards,
} from '@nestjs/common';
import { VkmService } from './vkm.service';
import { CreateVkmDto } from './dto/create-vkm.dto';
import { MongoIdPipe } from '../common/pipes/mongo-id.pipe';
import { JwtAuthGuard } from '../auth/jwt-auth.gaurd';
import { BatchGetVkmDto } from './dto/batch-get-vkm.dto';

@Controller('vkm')
export class VkmController {
  constructor(private readonly service: VkmService) {}

  @Get()
  findAll() {
    return this.service.findAll();
  }

  /**
   * GET /vkm/filter?studyCredit=30&location=Den%20Bosch&level=NLQF6
   * Guard kun je aan/uit zetten; hieronder staat hij aan.
   */
  @Get('filter')
  filter(
    @Query('studyCredit') studyCredit?: string,
    @Query('location') location?: string,
    @Query('level') level?: string,
  ) {
    const parsedStudyCredit =
      studyCredit !== undefined && studyCredit !== ''
        ? Number(studyCredit)
        : undefined;

    return this.service.filter({
      studyCredit: Number.isFinite(parsedStudyCredit)
        ? parsedStudyCredit
        : undefined,
      location,
      level,
    });
  }

  @UseGuards(JwtAuthGuard)
  @Get(':id')
  findOne(@Param('id', MongoIdPipe) id: string) {
    return this.service.findOne(id);
  }

  @UseGuards(JwtAuthGuard)
  @Post('batch')
  findBatch(@Body() dto: BatchGetVkmDto) {
    return this.service.findBatch(dto.ids);
  }

  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() dto: CreateVkmDto) {
    return this.service.create(dto);
  }

  @UseGuards(JwtAuthGuard)
  @Put(':id')
  update(
    @Param('id', MongoIdPipe) id: string,
    @Body() dto: Partial<CreateVkmDto>,
  ) {
    return this.service.update(id, dto);
  }

  @UseGuards(JwtAuthGuard)
  @Delete(':id')
  delete(@Param('id', MongoIdPipe) id: string) {
    return this.service.delete(id);
  }
}
