/* eslint-disable react/prop-types */
/* istanbul ignore file */
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
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [versionFinish, setVersionFinish] = useState('');

  async function searchModel(e) {
    const index = e.target.selectedIndex;
    setMake(e.target[index].text);
    const modelsFetch = await axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${e.target.value}`,
    );
    setModels(modelsFetch.data);
  }
  async function searchVersion(e) {
    const index = e.target.selectedIndex;
    setModel(e.target[index].text);
    const version = await axios.get(
      `http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${e.target.value}`,
    );
    setVersions(version.data);
  }

  async function VersionFinish(e) {
    const index = e.target.selectedIndex;
    setVersionFinish(e.target[index].text);
  }

  async function showAutos() {
    const autos = await axios.get(
      'http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1',
    );
    const autoFilter = autos.data.filter((auto) => {
      if (versionFinish !== '' && versionFinish !== 'Todas') {
        return auto.Version === versionFinish && auto.Model === model && auto;
      }

      if (model !== '' && model !== 'Todos') {
        return auto.Model === model && auto;
      }

      if (make !== '' && make !== 'Todas') {
        return auto.Make === make && auto;
      }
      return autos.data;
    });
    setProducts(autoFilter);
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
              <LabelVersion VersionFinish={VersionFinish} versions={versions} />
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
          <ProductItem key={product.ID} product={product} />
        ))}
      </ContainerProducts>
    </Wrapper>
  );
}

export default Components;
