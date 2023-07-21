import { Product } from "./product";
import { ResponseModel } from "./responseModel";

export interface ProductResponsaModel extends ResponseModel{
    data:Product[]

}