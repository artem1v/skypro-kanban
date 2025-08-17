import styled from 'styled-components';

export const DivOverlay = styled.div`
 position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(255, 255, 255, 0.7);
  z-index: 1000;
`

export const DivSpinner = styled.div`
 width: 50px;
  height: 50px;
  border: 5px solid #e0e0e0;
  border-top: 5px solid #4e7fff;
  border-radius: 50%;
  animation: spin 1s linear infinite;
`