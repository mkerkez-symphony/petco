import { Injectable } from '@nestjs/common';
import { CreateOwnerDto } from 'src/core/dtos/create-owner.dto';
import { Owner } from 'src/core/entities/owner';

@Injectable()
export class OwnerFactoryService {
  createNewOwner(createOwnerDto: CreateOwnerDto) {
    const newOwner = new Owner();
    newOwner.email = createOwnerDto.email;
    newOwner.name = createOwnerDto.name;
    return newOwner;
  }
}
