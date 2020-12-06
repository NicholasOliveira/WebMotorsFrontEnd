import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import {
  render,
} from '@testing-library/react';
import { LabelMarca, LabelModel, LabelVersion } from '../../../Components/SearchBar/DynamicLabels';

describe('DynamicLabels Component', () => {
  test('should text "Label Marca" in Header', () => {
    const makes = [{ ID: 1, name: 'abc' }, { ID: 2, name: 'abc' }, { ID: 3, name: 'abc' }];
    const { getByLabelText } = render(<LabelMarca makes={makes} />);
    const linkElement = getByLabelText(/Marca/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should change "Label Model"', () => {
    const models = [{ ID: 1, name: 'abc' }, { ID: 2, name: 'abc' }, { ID: 3, name: 'abc' }];
    const { getByText } = render(<LabelModel models={models} />);
    const linkElement = getByText(/Modelo:/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should change "Label Version"', () => {
    const versions = [{ ID: 1, name: 'abc' }, { ID: 2, name: 'abc' }, { ID: 3, name: 'abc' }];
    const { getByText } = render(<LabelVersion versions={versions} />);
    const linkElement = getByText(/Versão:/i);
    expect(linkElement).toBeInTheDocument();
  });
});
