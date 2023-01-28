import { colors } from '@/utils/color';
import styled, { css } from 'styled-components';

type ButtonProps = {
    disabled: boolean;
    $loading?: boolean;
  };

export const TextGradientPrimary = styled.span`
  font-weight: 700;
  font-size: 16px;
  line-height: 24px;
  color: ${colors.primary00};
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:hover {
    background:  ${colors.gradiente00};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

`;

export const Button = styled.button<ButtonProps>`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 10px;
  width: 350px;
  height: 56px;
  background: ${colors.gradiente00};
  border-radius: 24px;
  border: none;
  cursor: pointer;
  margin-top: 50px;

  &:hover {
    background: ${colors.gradiente10} padding-box,
               ${colors.gradiente00} border-box;
    border-radius: 24px;
    border: 1px solid transparent;
  }

  ${props => props.disabled && css`
    background: ${colors.neutral100};
    cursor: initial;
    pointer-events: none;
  `}
`;