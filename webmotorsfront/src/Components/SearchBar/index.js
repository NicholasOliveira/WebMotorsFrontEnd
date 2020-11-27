/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { FaChevronRight } from 'react-icons/fa';
import axios from 'axios';
import ProductItem from './ProductItem';
import {
  LabelRaio, LabelYear, LabelFaixa, LabelState, LabelsCheckbox,
} from './StaticLabels';
import { LabelMarca, LabelModel, LabelVersion } from './DynamicLabels';
import HeaderBar from './Header';
import {
  Container,
  WrapperSearch,
  Row,
  FieldsContain,
  ViewOferButton,
  ClearFilter,
  SearchAdvanced,
  Wrapper,
  ContainerProducts,
} from './styles';

function Components({ makes }) {
  const [products, setProducts] = useState([]);
  const [versions, setVersions] = useState([]);
  const [models, setModels] = useState([]);

  async function searchModel(e) {
    const model = await axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${e.target.value}`,
    );
    setModels(model.data);
  }
  async function searchVersion(e) {
    const version = await axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${e.target.value}`,
    );
    setVersions(version.data);
  }
  async function showAutos() {
    const autos = await axios.get(
      'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1',
    );
    setProducts(autos.data);
  }

  return (
    <Wrapper>
      <Container>
        <img
          src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=308"
          alt=""
          style={{ marginBottom: '0px', marginLeft: '5px' }}
        />
        <WrapperSearch>
          <HeaderBar />
          <FieldsContain>
            <Row row>
              <LabelsCheckbox />
            </Row>
            <Row>
              <LabelState />
              <LabelRaio />
              <LabelMarca makes={makes} searchModel={searchModel} />
              <LabelModel models={models} searchVersion={searchVersion} />
              <LabelVersion versions={versions} />
            </Row>
            <Row>
              <LabelYear />
              <LabelFaixa />
              <LabelVersion />
            </Row>
            <Row spaceBetween>
              <SearchAdvanced>
                <FaChevronRight size={10} /> Busca Avançada
              </SearchAdvanced>
              <Row>
                <ClearFilter>Limpar filtros</ClearFilter>
                <ViewOferButton onClick={showAutos}>VER OFERTAS</ViewOferButton>
              </Row>
            </Row>
          </FieldsContain>
        </WrapperSearch>
      </Container>

      <ContainerProducts>
        {products.map((product) => (
          <ProductItem product={product} />
        ))}
      </ContainerProducts>
    </Wrapper>
  );
}

export default Components;
