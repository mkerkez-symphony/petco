import { Module } from '@nestjs/common';
import { OwnerFactoryService } from './owner-factory.service';
import { OwnerUseCases } from './owner.use-case';

@Module({
  imports: [],
  providers: [OwnerFactoryService, OwnerUseCases],
  exports: [OwnerFactoryService, OwnerUseCases],
})
export class OwnerUseCasesModule {}
