import { useRouteError } from 'react-router-dom';
import { StyledErrorPage } from '../styles/ErrorPage.styled';

export default function ErrorPage() {
  const error = useRouteError();

  if (error instanceof Error) {
    return (
      <StyledErrorPage>
        <h2>500</h2>
        <h1>{error.message}</h1>
      </StyledErrorPage>
    );
  } else {
    return (
      <StyledErrorPage>
        <h2>500</h2>
        <h1>Unknown Error</h1>
      </StyledErrorPage>
    );
  }
}
