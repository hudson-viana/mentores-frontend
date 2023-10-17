import styled from "styled-components";

export const CardContainer = styled.div`
  max-width: 389px;
  height: 272px;
  background-color: #ffff;
  border-radius: 16px;
  padding: 24px 16px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 10px;
`;

export const StyledName = styled.div`
  font-size: 24px;
  line-height: 28.8px;
  width: 50%;
`;

export const StacksContainer = styled.span`
  display: flex;
  gap: 5px;
  width: 100%;
  flex-wrap: wrap;
`;

export const Stack = styled.span`
  background: #f5f1f3;
  font-size: 12px;
  line-height: 14px;
  height: 30px;
  min-width: 73px;
  color: #001633;
  padding: 8px;
  border-radius: 40px;
  text-align: center;
`;

export const SchedButton = styled.button`
  width: 174.5px;
  height: 44px;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  gap: 8px;
  background-color: #003986;
  border: none;
  color: white;
  font-size: 15px;
  line-height: 19.2px;
  display: flex;
  align-items: center;
`;

export const InfoButton = styled.button`
  width: 174.5px;
  height: 44px;
  padding: 16px 24px 16px 24px;
  border-radius: 8px;
  gap: 8px;
  background-color: #ffff;
  border: none;
  color: #003986;
  font-size: 16px;
  line-height: 19.2px;
  text-align: center;
`;

export const ButtonsContainer = styled.span`
  display: flex;
  height: 44px;
`;
