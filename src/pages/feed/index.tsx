import { Card } from '../../components/Card';
import { UserInfo } from '../../components/UserInfo';

import { Header } from '../../components/Header';

import { Column, Container, Title, TitleHighlight } from './styles';

const Feed = () => {
  return (
    <>
        <Header />
        <Container>
            <Column flex={3}>
                <Title>Feed</Title>
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
            </Column>
            <Column flex={1}>
              <TitleHighlight> # RANKING 5 TOP DA SEMANA </TitleHighlight>
                <UserInfo nome="Nicoli Carvalho" image="https://avatars.githubusercontent.com/u/68923693?v=4" percentual={25}/>
                <UserInfo nome="Nicoli Carvalho" image="https://avatars.githubusercontent.com/u/68923693?v=4" percentual={65}/>
                <UserInfo nome="Nicoli Carvalho" image="https://avatars.githubusercontent.com/u/68923693?v=4" percentual={45}/>
                <UserInfo nome="Nicoli Carvalho" image="https://avatars.githubusercontent.com/u/68923693?v=4" percentual={72}/>
            </Column>
        </Container>
    </>
  )
}

export { Feed };
