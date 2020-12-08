import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from '../../../Components/SearchBar/Header';
import '@testing-library/jest-dom/extend-expect';

describe('Header Component', () => {
  test('should text "carros" in Header', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/carros2/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should text "vender meu carro" in Header', () => {
    const { getByText } = render(<Header />);
    const linkElement = getByText(/Vender meu carro2/i);
    expect(linkElement).toBeInTheDocument();
  });
  test('should has class active', () => {
    const handleActiveAuto = jest.fn();
    const { getByText } = render(<Header />);
    const linkElement = getByText(/motos2/i);
    linkElement.onclick = handleActiveAuto;
    fireEvent.click(linkElement);
    expect(handleActiveAuto).toHaveBeenCalledTimes(1);
  });
  test('should has class active', () => {
    const handleActiveAuto = jest.fn();
    const { getByText } = render(<Header />);
    const linkElement = getByText(/carros2/i);
    linkElement.onclick = handleActiveAuto;
    fireEvent.click(linkElement);
    expect(handleActiveAuto).toHaveBeenCalledTimes(1);
  });
});
