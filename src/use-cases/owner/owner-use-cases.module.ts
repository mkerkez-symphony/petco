import { Module } from '@nestjs/common';
import { MongoDataServiceModule } from 'src/data/mongo-data-service.module';
import { OwnerFactoryService } from './owner-factory.service';
import { OwnerUseCases } from './owner.use-case';

@Module({
  imports: [MongoDataServiceModule],
  providers: [OwnerFactoryService, OwnerUseCases],
  exports: [OwnerFactoryService, OwnerUseCases],
})
export class OwnerUseCasesModule {}
