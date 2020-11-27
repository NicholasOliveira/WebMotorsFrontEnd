import React, {useState} from 'react';
import { FaChevronRight, FaMapMarkerAlt } from 'react-icons/fa';
import { Container, WrapperSearch, Row, Button, FieldsContain, ViewOferButton, SaleButton, ClearFilter, SearchAdvanced, Wrapper, ContainerProducts } from './styles';
import axios from 'axios';
import { padding } from 'polished';

function Components({makes}) {

  const [models,setModels]=useState([]);
  const [activeAuto, setActiveAuto] = useState('auto');
  const [versions, setVersions] = useState([]);
  const [products, setProducts]=useState([]);
  

  function handleActiveAuto(auto){
    setActiveAuto(auto);
  }

  async function showAutos(){
    const autos = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Vehicles?Page=1`);
    setProducts(autos.data);
  }

  async function searchModel(e){
    const model = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Model?MakeID=${e.target.value}`);
    setModels(model.data);
  }

  async function searchVersion(e){
    const version = await axios.get(`http://desafioonline.webmotors.com.br/api/OnlineChallenge/Version?ModelID=${e.target.value}`);
    setVersions(version.data);
  }

  return (
    <Wrapper>
    <Container>
      <img src="https://www.webmotors.com.br/assets/img/webmotors.svg?t=308" alt="" style={{marginBottom: '0px', marginLeft: '5px'}} />
      <WrapperSearch>
       <Row center spaceBetween>
         <Row row>
           <Button onClick={()=>handleActiveAuto('auto')} active={activeAuto==='auto'&&true} >
            <img src="https://www.webmotors.com.br/assets/img/icon/icon-search-car.svg?t=979" alt="" />
            <span>
              <span>COMPRAR</span>
              <h2>CARROS</h2>
            </span>
           </Button>
           <Button onClick={()=>handleActiveAuto('moto')} active={activeAuto==='moto'&&true}>
           <img src="https://www.webmotors.com.br/assets/img/icon/icon-search-bike.svg?t=979" alt="" />
            <span>
              <span>COMPRAR</span>
              <h2>MOTOS</h2>
            </span>
           </Button>
         </Row>
         <SaleButton>
         Vender meu carro
         </SaleButton>
       </Row>
       <FieldsContain>
       <Row row>
         <label htmlFor="novos" style={{border: 0, width: 'auto', paddingLeft: 0,margin: '5px', padding: '0px'}}>
         <input type="checkbox" name="novos" id="novos"/>
         <span>Novos</span>
         </label>
         <label htmlFor="usados" style={{border: 0,  width: 'auto', margin: '5px', padding: '0px'}}>
         <input type="checkbox" name="usados" id="usados"/>
         <span>Usados</span>
         </label>
         </Row>
         <Row>
         <label htmlFor="" style={{marginRight: '-1px'}}>
            <Row>
              <FaMapMarkerAlt style={{color: '#B23141', marginRight: '5px'}} />Onde:</Row>
            <select name="" id="">
              <option value="">São Paulo - SP</option>
            </select>
          </label>
          <label htmlFor="" style={{marginLeft: '0px'}}>
            <span>Raio:</span>
              <select name="" id="">
              <option value="">20km</option>
              <option value="">40km</option>
              <option value="">60km</option>
              <option value="">80km</option>
              <option value="">100km</option>
            </select>
          </label>
          <label htmlFor="">
            <span>Marca:</span>
            <select name="Marca" onChange={searchModel}>
              <option value="">Todas</option>
              {makes.map(make=>(
                <option key={make.ID} value={make.ID}>{make.Name}</option>
              ))
            }
            </select>
          </label>
          <label htmlFor="" style={{marginRight: 0}}>
            <span>Modelo:</span>
            <select name="models" onChange={searchVersion}>
              <option value="">Todos</option>
              {models.map(model=>(
                <option key={model.ID} value={model.ID}>{model.Name}</option>
              ))
            }
              
            </select>
          </label>
         </Row>
         <Row>
         <label htmlFor="">
            <select name="" id="">
              <option value="">Ano Desejado</option>
              <option value="">2015</option>
              <option value="">2016</option>
              <option value="">2017</option>
              <option value="">2018</option>
              <option value="">2019</option>
              <option value="">2020</option>
            </select>
          </label>
          <label htmlFor="">
            <select name="" id="">
              <option value="">Faixa de Preço</option>
              <option value="">10~20</option>
              <option value="">20~30</option>
              <option value="">30~40</option>
              <option value="">40~50</option>
              <option value="">50~70</option>
            </select>
          </label>
          <label htmlFor="" style={{marginRight: 0}}>
            <span>Versão:</span>
            <select name="versions">
              <option value="">Todas</option>
              {versions.map(version=>(
                <option key={version.ID} value={version.ID}>{version.Name}</option>
              ))
            }
            </select>
          </label>
         </Row>
         <Row spaceBetween>
         <SearchAdvanced>
         <FaChevronRight size={10} /> Busca Avançada
         </SearchAdvanced>
         <Row>
            <ClearFilter>
              Limpar filtros
            </ClearFilter>
            <ViewOferButton onClick={showAutos}>
              VER OFERTAS
            </ViewOferButton>
         </Row>
         </Row>
       </FieldsContain>
      </WrapperSearch>
    </Container>

    <ContainerProducts>
      {
        products.map(product=>(
        <WrapperSearch key={product.ID}>
        <FieldsContain>
          <section>
          <div>
            <span>Marca: <strong>{product.Make}</strong></span>
            <span>Modelo: <strong>{product.Model}</strong></span>
            <span>Versão: <strong>{product.Version}</strong></span>
            <span>KM: <strong>{product.KM}</strong></span>
            <span>Preço: <strong>{product.Price}</strong></span>
            <span>Ano/Modelo: <strong>{product.YearModel}</strong></span>
            <span>Ano/Fabricação: <strong>{product.YearFab}</strong></span>
            <span>Cor: <strong>{product.Color}</strong></span>
          </div>
          <img src={product.Image} alt=""/>
        </section>
        </FieldsContain>
      </WrapperSearch>
        ))
      }

    </ContainerProducts>
</Wrapper>
  );
}

export default Components;