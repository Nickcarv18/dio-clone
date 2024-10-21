import { useNavigate } from "react-router-dom";
import logo from "../../assets/logo-dio.png";
import { Button } from "../Button";
import {
  BuscarInputContainer,
  Container,
  Input,
  Menu,
  MenuRight,
  Row,
  UserPicture,
  Wrapper
} from "./styles";

const Header = ({autenticado}) => {

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
          <img src={logo} alt="Logo Dio" />
          {autenticado ? (
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
        {autenticado ? (
            <UserPicture src="https://avatars.githubusercontent.com/u/68923693?v=4"/>
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

