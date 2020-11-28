import React, { useState } from 'react';
import {
  Row,
  Button,
  SaleButton,
} from './styles';

export default function Header() {
  const [activeAuto, setActiveAuto] = useState('auto');
  function handleActiveAuto(auto) {
    setActiveAuto(auto);
  }
  return (
    <Row center spaceBetween>

      <Row row>
        <Button
          onClick={() => handleActiveAuto('auto')}
          active={activeAuto === 'auto' && true}
        >
          <img
            src="https://www.webmotors.com.br/assets/img/icon/icon-search-car.svg?t=979"
            alt=""
          />
          <span>
            <span>COMPRAR</span>
            <h2>CARROS</h2>
          </span>
        </Button>
        <Button
          onClick={() => handleActiveAuto('moto')}
          active={activeAuto === 'moto' && true}
        >
          <img
            src="https://www.webmotors.com.br/assets/img/icon/icon-search-bike.svg?t=979"
            alt=""
          />
          <span>
            <span>COMPRAR</span>
            <h2>MOTOS</h2>
          </span>
        </Button>
      </Row>
      <SaleButton>Vender meu carro</SaleButton>
    </Row>
  );
}
