import styled from "styled-components";

export const ColumnContainer = styled.div`
  height: fit-content;
  overflow-y: auto;
  min-height: 300px;
  width: 220px; /* Убедись, что контейнер занимает всю доступную ширину */
`;

export const ColumnTitle = styled.div`
  font-weight: 700;
  font-size: 18px;
  color: #94a6be;
  padding-bottom: 16px;
  text-transform: uppercase;
  letter-spacing: 0.5px;

  p {
    margin: 0;
    font-size: 18px;
    font-weight: 700;
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const EmptyColumn = styled.div`
  text-align: center;
  padding: 60px 20px;
  color: #94a6be;
  font-size: 14px;
  background: #f8f9fa;
  border-radius: 8px;
  border: 2px dashed #dee2e6;

  p {
    margin: 0;
    font-style: italic;
    font-weight: 500;
  }
`;
