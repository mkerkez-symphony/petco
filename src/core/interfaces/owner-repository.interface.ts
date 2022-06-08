import { OwnerDocument } from "src/data/models/owner.model";
import { Owner } from "../entities/owner";

export abstract class IOwnerRepository {
    abstract create(owner: Owner): Promise<OwnerDocument>;
}