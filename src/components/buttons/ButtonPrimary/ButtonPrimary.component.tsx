import { ButtonType } from '@/typings/propsType/button';
import * as S from './ButtonPrimary.style';

export const ButtonPrimary: React.FC<ButtonType> = ({
  name,
  onClick,
  loading = false,
  disabled = false,
}) => {

  function handleOnClick() {
    if (loading) return;
    onClick();
  }


  return (
    <S.Button
      onClick={handleOnClick}
      disabled={disabled}
      $loading={loading}
    >
      <S.TextGradientPrimary>
        {loading ? 'Aguarde...' : name}
      </S.TextGradientPrimary>
    </S.Button>
  );
};
