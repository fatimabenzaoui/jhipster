import { IProduct, NewProduct } from './product.model';

export const sampleWithRequiredData: IProduct = {
  id: 77672,
  productName: 'Customer-focused',
};

export const sampleWithPartialData: IProduct = {
  id: 78560,
  productName: 'Brand Programmable',
  productDescription: 'Bedfordshire',
};

export const sampleWithFullData: IProduct = {
  id: 54568,
  productName: 'recontextualize',
  productDescription: 'Health calculate neural',
};

export const sampleWithNewData: NewProduct = {
  productName: 'District',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
