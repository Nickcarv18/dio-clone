import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { useAuth } from "../../hooks/useAuth";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  LinkSair,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from "./styles";

const Header = () => {
  const {user, handleSignOut} = useAuth();

  const navigate = useNavigate();
  const handleClickSignIn = () => {
    navigate('/login')
  }
  
  const handleClickSignUp = () => {
    navigate('/cadastro')
  }

  return (
    <Wrapper>
      <Container>
        <Row>
          <Link to="/">
            <img src={logo} alt="Logo Dio" />
          </Link>
          {user.id ? (
            <>
            <BuscarInputContainer>
              <Input placeholder="Buscar..."/>
            </BuscarInputContainer>
            <Menu>Live Code</Menu>
            <Menu>Global</Menu>
          </>
          ): null}
        </Row>
        <Row>
        {user.id ? (<>
            <UserPicture src="https://avatars.githubusercontent.com/u/68923693?v=4"/>
            <LinkSair href="#" onClick={handleSignOut}>Sair</LinkSair>
          </>
          ): (
            <>
              <MenuRight href="/">Home</MenuRight>
              <Button title="Entrar" onClick={handleClickSignIn}/>
              <Button title="Cadastrar" onClick={handleClickSignUp}/>
            </>
          )}
        </Row>
      </Container>
    </Wrapper>
  );
}

export { Header };

