import { colors } from '@/utils/color';
import styled, { css } from 'styled-components';


export const TextGradientSecondary = styled.span`
  width: 100%;
  height: 100%;
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  background: ${colors.gradiente00};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    background: ${colors.primary00};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const ButtonSecondary = styled.button`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  gap: 10px;
  width: 350px;
  height: 56px;
  background: ${colors.gradiente10} padding-box,
              ${colors.gradiente00} border-box;
  border-radius: 24px;
  border: 1px solid transparent;
  transition: ease-in-out 0.5s;

  &:hover {
    background: ${colors.gradiente00};
    transition: ease-in-out 0.5s;
  }
`;