import { Container, DecorativeCircle, HomeButton, Message, Title } from "./NotFound.styled";


const NotFound = () => {
  return (
    <Container>
      <DecorativeCircle />
      <Title>404</Title>
      <Message>
        Упс! Страница, которую вы ищете, не существует. Давайте вернем вас на путь истинный :3
      </Message>
      <HomeButton to="/">Вернуться на Главную</HomeButton>
    </Container>
  );
};

export default NotFound;