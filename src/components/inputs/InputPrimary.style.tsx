import { colors } from "@/utils/color";
import styled from "styled-components";


export const ContainerInput = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.neutral200};
  padding-left: 10px;
  margin-bottom: 8px;
`;

export const Input = styled.input`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.neutral200};
  flex: none;
  order: 0;
  flex-grow: 0;
  border: 1px solid ${colors.primary10};
  border-radius: 24px;
  height: 56px;
  padding-left: 20px;
  &::placeholder {
    color: ${colors.neutral500};
  }

  &:focus {
    outline: none;
    background: ${colors.gradiente10} padding-box,
              ${colors.gradiente00} border-box;
    border-radius: 24px;
    border: 1px solid transparent;
  }

  @media (max-width: 1440px){
    height: 35px;
    font-size: 14px;
  }

`;
