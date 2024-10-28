import { yupResolver } from '@hookform/resolvers/yup';
import { MdEmail, MdLock } from 'react-icons/md';
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { useForm } from "react-hook-form";

import { useAuth } from '../../hooks/useAuth';
import { Column, Container, CriarText, EsqueciText, Row, SubtitleLogin, Title, TitleLogin, Wrapper } from './styles';
import { ILogin } from './types';

const schema = yup.object({
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    password: yup.string().min(8, "No minimo 8 caracteres").required("Senha é obrigatório"),
}).required();
 
const Login = () => {
    const {handleLogin} = useAuth();

    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = async (formData: ILogin) => {
        handleLogin(formData);
    };

    return (<>
        <Header />
        <Container>
            <Column>
                <Title>A plataforma para você aprender com experts, dominar as principais tecnologias
                 e entrar mais rápido nas empresas mais desejadas.</Title>
            </Column>
            <Column>
                <Wrapper>
                <TitleLogin>Faça seu cadastro</TitleLogin>
                <SubtitleLogin>Faça seu login e make the change._</SubtitleLogin>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} errorMessage={errors.email?.message}/>
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" control={control} errorMessage={errors.password?.message}/>
                    <Button title="Entrar" variant="secondary" type="submit"/>
                </form>
                <Row>
                    <EsqueciText>Esqueci minha senha</EsqueciText>
                    <CriarText>Criar Conta</CriarText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Login };
