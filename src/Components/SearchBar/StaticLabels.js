import React from 'react';
import { FaMapMarkerAlt } from 'react-icons/fa';
import {
  Row,
} from './styles';

export function LabelRaio() {
  return (
    <label htmlFor="raio" style={{ marginLeft: '0px' }}>
      <span>Raio:</span>
      <select name="raio" id="">
        <option value="">20km</option>
        <option value="">40km</option>
        <option value="">60km</option>
        <option value="">80km</option>
        <option value="">100km</option>
      </select>
    </label>
  );
}

export function LabelYear() {
  return (
    <label htmlFor="year">
      <select name="year" id="">
        <option value="">Ano Desejado</option>
        <option value="">2015</option>
        <option value="">2016</option>
        <option value="">2017</option>
        <option value="">2018</option>
        <option value="">2019</option>
        <option value="">2020</option>
      </select>
    </label>
  );
}
export function LabelFaixa() {
  return (
    <label htmlFor="faixa">
      <select name="faixa" id="">
        <option value="">Faixa de Preço</option>
        <option value="">10~20</option>
        <option value="">20~30</option>
        <option value="">30~40</option>
        <option value="">40~50</option>
        <option value="">50~70</option>
      </select>
    </label>
  );
}

export function LabelState() {
  return (
    <label htmlFor="state" style={{ marginRight: '-1px' }}>
      <Row>
        <FaMapMarkerAlt
          style={{ color: '#B23141', marginRight: '5px' }}
        />
        Onde:
      </Row>
      <select name="state" id="">
        <option value="">São Paulo - SP</option>
      </select>
    </label>
  );
}
export function LabelsCheckbox() {
  return (
    <>
      <label
        htmlFor="novos"
        style={{
          border: 0,
          width: 'auto',
          paddingLeft: 0,
          margin: '5px',
          padding: '0px',
        }}
      >
        <input type="checkbox" name="novos" id="novos" />
        <span>Novos</span>
      </label>
      <label
        htmlFor="usados"
        style={{
          border: 0,
          width: 'auto',
          margin: '5px',
          padding: '0px',
        }}
      >
        <input type="checkbox" name="usados" id="usados" />
        <span>Usados</span>
      </label>
    </>
  );
}
