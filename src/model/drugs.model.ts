import { DrugClass } from "./DrugClass.model";

export class Drugs {
  id!: number;
  genericName!: string;
  brandNames!: string;
  dosageForm!: string;
  lastUpdated!: Date;
  DrugClass!: DrugClass;
}
