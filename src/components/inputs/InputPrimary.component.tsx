import { InputType } from '@/typings/propsType/input';
import * as S from './InputPrimary.style';


export const InputPrimary: React.FC<InputType> = ({
  name,
  label,
  placeholder,
  type,
  disabled = false,
}) => {

  return (
    <S.ContainerInput>
        <S.Label>{label}</S.Label>
        <S.Input name={name} type={type} placeholder={placeholder} disabled={disabled}/>
    </S.ContainerInput>
  );
};
