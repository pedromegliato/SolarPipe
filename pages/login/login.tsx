import { SolaPipeImages } from "@/src/assets";
import Image from 'next/image'
import { ButtonPrimary } from "@/src/components/buttons/ButtonPrimary/ButtonPrimary.component";
import { ButtonSecondary } from "@/src/components/buttons/ButtonSecondary/ButtonSecondary.component";
import { InputPrimary } from "@/src/components/inputs/InputPrimary.component";
import * as S from "@/styles/login/login.style";
import { useState } from "react";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);
  
  async function handleLogar() {
    setLoading(true);
    setDisabled(true);
    console.log("ok");
  }

  async function handleCadastro() {
    console.log("ok");
  }
  return (
    <S.Containerbody>
      <S.ContainerContent>
        <Image src={SolaPipeImages.images.logo} alt='SolarPipe' />
        <S.FormContainer>
            <S.TitlePage>Bem-vindo! 👋</S.TitlePage>
            <InputPrimary label={'Email'} type={'email'} placeholder={'pipe@email.com'} name={'email'}/>
            <InputPrimary label={'Senha'} type={'password'} placeholder={'**************'} name={'senha'}/>
            <S.ContanainerSenha>
                <S.TextGradientLink>Esqueceu a senha?</S.TextGradientLink>
            </S.ContanainerSenha>
            <S.ContainerButton>
                <ButtonPrimary name={'Entrar'} onClick={handleLogar} loading={loading} disabled={disabled} />
            </S.ContainerButton>
            <S.ContainerButton>ou</S.ContainerButton>
            <S.ContainerButton>
                <ButtonSecondary name={'Cadastrar-se'} onClick={handleCadastro} />
            </S.ContainerButton>
        </S.FormContainer>
      </S.ContainerContent>
      <S.Containerbg>
          <S.ColumnText>
            <S.TextBg>Inovando a <S.SpanGradient>gestão</S.SpanGradient> para um futuro <S.SpanGradient>sustentável</S.SpanGradient>.</S.TextBg>
          </S.ColumnText>
          <S.ColumnImage>
            <S.ImageBg src={SolaPipeImages.images.bgLogin} alt='SolarPipe' />
          </S.ColumnImage>
      </S.Containerbg>
      <S.ImageFloat src={SolaPipeImages.images.logoDark} alt='SolarPipe'/>
    </S.Containerbody>
  );
}
