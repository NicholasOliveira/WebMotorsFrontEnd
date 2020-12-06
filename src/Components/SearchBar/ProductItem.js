import React from 'react';
import {
  WrapperSearch,
  FieldsContain,
} from './styles';

export default function ProductItem({ product }) {
  return (
    <WrapperSearch key={product.ID}>
      <FieldsContain>
        <section>
          <div>
            <span>
              Marca: <strong>{product.Make}</strong>
            </span>
            <span>
              Modelo: <strong>{product.Model}</strong>
            </span>
            <span>
              Versão: <strong>{product.Version}</strong>
            </span>
            <span>
              KM: <strong>{product.KM}</strong>
            </span>
            <span>
              Preço: <strong>{product.Price}</strong>
            </span>
            <span>
              Ano/Modelo: <strong>{product.YearModel}</strong>
            </span>
            <span>
              Ano/Fabricação: <strong>{product.YearFab}</strong>
            </span>
            <span>
              Cor: <strong>{product.Color}</strong>
            </span>
          </div>
          <img src={product.Image} alt="" />
        </section>
      </FieldsContain>
    </WrapperSearch>
  );
}
