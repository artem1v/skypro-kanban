import styled from "styled-components";

export const DivLoader = styled.div`
 background: white;
  border-radius: 8px;
  padding: 12px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin-bottom: 10px;
`

export const DivHeader = styled.div`
 display: flex;
  justify-content: space-between;
  margin-bottom: 10px;
`

export const DivTheme = styled.div`
  width: 80px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`

export const DivActions = styled.div`
  width: 20px;
  height: 20px;
  background: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`

export const DivContent = styled.div`
display: flex;
  flex-direction: column;
  gap: 15px;
`

export const DivTitle = styled.div`
 width: 100%;
  height: 16px;
  background: #e0e0e0;
  border-radius: 4px;
  margin-bottom: 8px;
  animation: pulse 1.5s infinite ease-in-out;
`

export const DivDate = styled.div`
  width: 60px;
  height: 14px;
  background: #e0e0e0;
  border-radius: 4px;
  animation: pulse 1.5s infinite ease-in-out;
`
/*
@keyframes pulse {
  0%, 100% { opacity: 0.6; }
  50% { opacity: 1; }
}
*/

