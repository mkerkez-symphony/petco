import { Body, Controller, Post } from '@nestjs/common';
import { CreateOwnerDto } from 'src/core/dtos/create-owner.dto';
import { OwnerUseCases } from 'src/use-cases/owner/owner.use-case';

@Controller('api/owner')
export class OwnerController {
  constructor(private ownerUseCases: OwnerUseCases) {}

  @Post()
  createOwner(@Body() createOwnerDto: CreateOwnerDto) {
    return this.ownerUseCases.createOwner(createOwnerDto);
  }
}
