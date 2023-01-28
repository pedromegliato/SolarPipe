import { colors } from '@/utils/color';
import styled from 'styled-components';
import Image from 'next/image'

export const Containerbody = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  background: ${colors.neutral200};
  position: relative;
`;

export const ContainerContent = styled.div`
  width: 511px;
  min-height: 100vh;
  height: 100%;
  background: ${colors.primary00};
  border-radius: 0px 128px 0px 0px;
  justify-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  padding: 0 80px;
`;

export const Containerbg = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;

`;

export const FormContainer = styled.form`
  width: 100%;
`;

export const TitlePage = styled.div`
  font-weight: 700;
  font-size: 24px;
  line-height: 102%;
  color: ${colors.neutral300};
  margin-bottom: 31px;
  margin-top: 120px;

  @media (max-width: 1440px){
    margin-bottom: 16px;
    margin-top: 60px;
  }
`;

export const ContanainerSenha = styled.div` 
  flex: none;
  order: 0;
  flex-grow: 0;
  width: 100%;
  text-align: end;
  display: flex;
  justify-content: flex-end;
`;

export const ContainerButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 32px;
  font-weight: 500;
  font-size: 16px;

  @media (max-width: 1440px){
    margin-bottom: 16px;
  }

`;

export const TextGradientLink = styled.span`
  color:  ${colors.neutral400};
  width: 100%;
  cursor: pointer;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;

  &:hover {
    background: ${colors.gradiente00};
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }
`;

export const ColumnText = styled.div`
  min-width: 390px;
  width: 100%;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const ColumnImage = styled.div`
  width: 100% ;

  overflow: hidden;
  box-sizing: border-box;
  display: flex;
  justify-content: flex-end;
`;

export const TextBg = styled.div`
  font-weight: 700;
  font-size: 35px;
  letter-spacing: -0.055em;
  color: ${colors.primary00};
  padding-left: 50px;
  line-height: 35px;

  @media (min-width: 1336px){
    font-size: 56px;
    line-height: 57px;
  }
`;

export const SpanGradient = styled.span`
  background: ${colors.gradiente00};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

export const ImageBg = styled(Image)`
  box-sizing: border-box;
  max-width: 550px;
  width: 100%;
  max-height: 100vh;
  object-fit: contain;
  object-position: right top;;
`;

export const ImageFloat = styled(Image)`
  position: absolute;
  right: 20px;
  bottom: 20px;
`;


