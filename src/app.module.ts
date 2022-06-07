import { Module } from '@nestjs/common';
import { OwnerController } from './controllers/owner.controller';
import { OwnerUseCasesModule } from './use-cases/owner/owner-use-cases.module';

@Module({
  imports: [OwnerUseCasesModule],
  controllers: [OwnerController],
  providers: [],
})
export class AppModule {}
