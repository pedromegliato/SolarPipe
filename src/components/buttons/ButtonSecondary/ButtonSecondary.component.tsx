import { ButtonType } from '@/typings/propsType/button';
import * as S from './buttonsecondary.style';



export const ButtonSecondary: React.FC<ButtonType> = ({
  name,
  onClick,
}) => {

  function handleOnClick() {
    onClick();
  }


  return (
    <S.ButtonSecondary
      onClick={handleOnClick}
    >
      <S.TextGradientSecondary>
        {name}
      </S.TextGradientSecondary>
    </S.ButtonSecondary>
  );
};
