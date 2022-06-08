import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { IOwnerRepository } from "src/core/interfaces/owner-repository.interface";
import { Owner, OwnerSchema } from "./models/owner.model";
import { OwnerRepository } from "./repositories/owner.repository";

@Module({
    imports: [MongooseModule.forFeature([
        {name: Owner.name, schema: OwnerSchema}
    ]),
    MongooseModule.forRoot('mongodb://localhost/petsy')
],
providers: [
    {
        provide: IOwnerRepository,
        useClass: OwnerRepository
    }
],
exports: [IOwnerRepository]
})
export class MongoDataServiceModule {}