import { EMeasurementUnit } from "./enum/e-measurement-unit";

export interface IListTableData {
    name:string,
    measurement_unit:EMeasurementUnit,
    quantity: number,
    price:number,
    perishable:boolean,
    expiration_date: Date,
    manufacturing_date:Date
}
