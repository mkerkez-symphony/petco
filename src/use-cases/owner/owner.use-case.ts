import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from 'src/core/dtos/create-owner.dto';
import { IOwnerRepository } from 'src/core/interfaces/owner-repository.interface';
import { OwnerFactoryService } from './owner-factory.service';

@Injectable()
export class OwnerUseCases {
  constructor(private ownerFactoryService: OwnerFactoryService, private ownerRepository: IOwnerRepository) {}

  async createOwner(createOwnerDto: CreateOwnerDto) {
    const newOwnerEntity =
      this.ownerFactoryService.createNewOwner(createOwnerDto);
    await this.ownerRepository.create(newOwnerEntity);
  }
}
