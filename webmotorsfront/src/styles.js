import styled from 'styled-components';

export const Container = styled.div`
  padding-top: 10%;
  width: 100%;
  height: auto;
  max-height: auto;
  display: flex;
  justify-content: center;
  background-color: #fff;
  overflow-y: auto;
  @media(max-width: 768px) {
    overflow-y: auto;
    padding-top: 0%;
  }
`;
