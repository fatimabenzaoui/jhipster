import { ICategory, NewCategory } from './category.model';

export const sampleWithRequiredData: ICategory = {
  id: 2529,
  categoryName: 'Namibia Sausages',
};

export const sampleWithPartialData: ICategory = {
  id: 77300,
  categoryName: 'Tala',
};

export const sampleWithFullData: ICategory = {
  id: 35403,
  categoryName: 'gold',
};

export const sampleWithNewData: NewCategory = {
  categoryName: 'PCI virtual Chair',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
