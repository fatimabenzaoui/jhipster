import { ICategory } from 'app/entities/category/category.model';

export interface IProduct {
  id: number;
  productName?: string | null;
  productDescription?: string | null;
  category?: Pick<ICategory, 'id' | 'categoryName'> | null;
}

export type NewProduct = Omit<IProduct, 'id'> & { id: null };
