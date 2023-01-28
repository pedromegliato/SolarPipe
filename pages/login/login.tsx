import { SolaPipeImages } from "@/src/assets";
import Image from 'next/image'
import { ButtonPrimary } from "@/src/components/buttons/ButtonPrimary/ButtonPrimary.component";
import { ButtonSecondary } from "@/src/components/buttons/ButtonSecondary/ButtonSecondary.component";
import { InputPrimary } from "@/src/components/inputs/InputPrimary.component";
import * as S from "@/styles/login/login.style";
import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export default function Login() {
  const [loading, setLoading] = useState(false);
  const [disabled, setDisabled] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const router = useRouter();

  
  async function handleLogar() {
    setLoading(true);
    setDisabled(true);

    const credentials = {email, password}

    const user = await axios.post("http://localhost:3000/authentication/login", credentials);

    localStorage.setItem("token", user.data.access_token);
    localStorage.setItem("user", user.data.employeeUuid);

    if(user.status === 201  ) {
      router.push('/dashboard');
    }

  }

  async function handleEmail() {
    let email = document.getElementById("email") as HTMLInputElement;
    setEmail(email.value)
  }

  async function handleSenha() {
    let senha = document.getElementById("password") as HTMLInputElement;
    setPassword(senha.value);
  }

  async function handleCadastro() {
    // console.log(email + ": " + password);
  }
  return (
    <S.Containerbody>
      <S.ContainerContent>
        <Image src={SolaPipeImages.images.logo} alt='SolarPipe' />
        <S.FormContainer>
            <S.TitlePage>Bem-vindo! 👋</S.TitlePage>
            <InputPrimary id={'email'} label={'Email'} type={'email'} placeholder={'pipe@email.com'} name={'email'} onChange={handleEmail}/>
            <InputPrimary id={'password'} label={'Senha'} type={'password'} placeholder={'**************'} name={'senha'}  onChange={handleSenha}/>
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
