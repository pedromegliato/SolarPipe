import { InputType } from '@/typings/propsType/input';
import * as S from './InputPrimary.style';


export const InputPrimary: React.FC<InputType> = ({
  name,
  label,
  placeholder,
  id,
  type,
  onChange,
  disabled = false,
}) => {

  function handleOnChange() {
    onChange();
  }

  return (
    <S.ContainerInput>
        <S.Label>{label}</S.Label>
        <S.Input id={id} name={name} type={type} placeholder={placeholder} disabled={disabled} onChange={handleOnChange}/>
    </S.ContainerInput>
  );
};
