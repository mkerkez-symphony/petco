import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { Owner } from "src/core/entities/owner";
import { IOwnerRepository } from "src/core/interfaces/owner-repository.interface";
import { OwnerDocument } from "../models/owner.model";

@Injectable()
export class OwnerRepository implements IOwnerRepository{
    private _repository: Model<OwnerDocument>

    constructor(
        @InjectModel(Owner.name) 
        repository: Model<OwnerDocument>){
        this._repository = repository;
    }

    async create(owner: Owner): Promise<OwnerDocument> {
        return await this._repository.create(owner);
    }
}