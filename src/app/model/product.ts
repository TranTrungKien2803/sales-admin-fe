import {Category} from "./category";

export interface Product {
  id?: number;
  name?: string;
  img?: string;

  price?: number;

  discount?: number;

  includeVAT?: number;

  amount?: number;

  sold?: number;

  category?: Category[];
}
