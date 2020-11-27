import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: auto;
  max-width: 933px;
`;

export const ContainerProducts = styled.div`
  width: 100%;
  height: auto;
  max-width: 933px;
  max-height: inherit;
  background-color: #f4f4f4;
  padding: 15px 10px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  section {
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 768px) {
      flex-direction: column-reverse;
    }
    div {
      display: flex;
      flex-direction: column;
      span {
        margin: 5px 0px;
      }
    }
  }
  img {
    max-width: 300px;
  }
  @media (max-width: 768px) {
    max-height: inherit;
  }
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  max-width: 933px;
  max-height: 312px;
  background-color: #f4f4f4;
  padding: 15px 10px;
  border-radius: 2px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  align-items: flex-start;
  input[type="checkbox"] {
    padding: 10px;
  }
  @media (max-width: 768px) {
    max-height: inherit;
  }
`;
export const ViewOferButton = styled.button`
  padding: 12px 60px;
  background-color: #db0225;
  color: #fff;
  font-weight: bold;
  border-radius: 2px;
  transition: background 0.2s;
  &:hover {
    background: ${darken(0.1, '#DB0225')};
  }
`;

export const SaleButton = styled.button`
  color: #e2a938;
  border: 2px solid #e2a938;
  border-radius: 3px;
  padding: 7px 20px;
  font-weight: bold;
  transition: all 0.2s;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
  &:hover {
    background: #e2a938;
    color: #fff;
  }
`;
export const WrapperSearch = styled.div`
  width: 100%;
  height: 100%;
  padding: 5px 0px 5px 0px;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    height: auto;
  }
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: ${(props) => (props.spaceBetween ? 'space-between' : 'flex-start')};
  div {
    margin-right: ${(props) => (props.clearFilter ? '15px' : '')};
  }
  @media (max-width: 768px) {
    flex-direction: ${(props) => (props.row ? 'row' : 'column')};
    justify-content: flex-start;
    align-items: ${(props) => (props.center ? 'center' : 'flex-start')};
  }
`;

export const ClearFilter = styled.div`
  margin-right: 15px;
  font-size: 13px;
  color: #ccc;
  font-weight: normal;
  @media (max-width: 768px) {
    margin: 10px 0px;
  }
`;

export const SearchAdvanced = styled.div`
  font-size: 13px;
  color: #b23141;
  font-weight: bold;
  transition: all 0.2s;
  &:hover {
    color: ${darken(0.1, '#B23141')};
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: flex-end;
  padding: 10px 20px;
  color: #aaa;
  font-weight: lighter;
  cursor: pointer;
  transition: all 0.2s;
  opacity: 0.9;
  &:hover {
    opacity: 1;
  }
  img {
    margin-right: 5px;
  }
  border-bottom: ${(props) => (props.active ? '3px solid #B23141' : '3px solid #f4f4f4')};
  span {
    display: block;
    text-align: left;
    font-size: 12px;
    h2 {
      font-size: 18px;
      font-weight: normal;
      color: ${(props) => (props.active ? '#B23141' : '#aaa')};
    }
  }
`;
export const FieldsContain = styled.div`
  background-color: #fff;
  padding: 10px 40px;
  height: 100%;
  box-shadow: 0px 1px 1px 0px #ccc;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 768px) {
    padding: 10px 10px;
  }
  label {
    border: 1px solid #d0d0d0;
    border-radius: 2px;
    padding: 7px 5px;
    text-align: left;
    font-size: 12px;
    color: #888;
    font-weight: normal;
    margin-right: 15px;
    display: flex;
    align-items: center;
    width: 100%;
    margin: 7px;
    @media (max-width: 768px) {
      div {
        display: flex;
        flex-direction: row;
      }
    }
    input,
    select {
      color: #666;
      font-weight: bold;
    }
    select {
      width: 100%;
    }
    @media (max-width: 768px) {
      margin: 10px 0px;
    }
  }
`;
