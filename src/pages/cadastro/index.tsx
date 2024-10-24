import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from "react-hook-form";
import { MdEmail, MdLock, MdPerson } from 'react-icons/md';
import { useNavigate } from "react-router-dom";
import * as yup from "yup";
import { Button } from '../../components/Button';
import { Header } from '../../components/Header';
import { Input } from '../../components/Input';

import { Column, Container, LoginText, Row, SubtitleCadastro, Text, Title, TitleCadastro, Wrapper } from './styles';

const schema = yup.object({
    email: yup.string().email("E-mail não é válido").required("E-mail é obrigatório"),
    nome: yup.string().min(10, "No minimo 10 caracteres").required("Nome é obrigatório"),
    password: yup.string().min(8, "No minimo 8 caracteres").required("Senha é obrigatório"),
}).required();

const Cadastro = () => {

    const navigate = useNavigate()

    const {control, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
        mode: 'onChange',
    });

    const onSubmit = () => {
        navigate('/feed')
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
                <TitleCadastro>Comece agora grátis</TitleCadastro>
                <SubtitleCadastro>Crie sua conta e make the change._</SubtitleCadastro>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Input placeholder="Nome completo" leftIcon={<MdPerson />} name="nome" control={control} errorMessage={errors.nome?.message}/>
                    <Input placeholder="E-mail" leftIcon={<MdEmail />} name="email"  control={control} errorMessage={errors.email?.message}/>
                    <Input type="password" placeholder="Senha" leftIcon={<MdLock />}  name="password" control={control} errorMessage={errors.password?.message}/>
                    <Button title="Criar minha conta" variant="secondary" type="submit"/>
                </form>

                <Text>Ao clicar em "criar minha conta", declaro que aceito as Políticas de Privacidade e os Termos de Uso da DIO.</Text>
                <Row>
                    Já tenho conta.<LoginText>Fazer Login</LoginText>
                </Row>
                </Wrapper>
            </Column>
        </Container>
    </>)
}

export { Cadastro };

