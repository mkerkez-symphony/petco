import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from 'src/core/dtos/create-owner.dto';
import { Owner } from 'src/core/entities/owner';
import { OwnerFactoryService } from './owner-factory.service';

@Injectable()
export class OwnerUseCases {
  constructor(private ownerFactoryService: OwnerFactoryService) {}

  createOwner(createOwnerDto: CreateOwnerDto): Owner {
    const newOwnerEntity =
      this.ownerFactoryService.createNewOwner(createOwnerDto);
    return newOwnerEntity;
  }
}
