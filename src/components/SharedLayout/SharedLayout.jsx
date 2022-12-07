import { Loader } from 'components/Loader/Loader';
import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Container, Header, Link, Main } from './SharedLayout.styled';
// import { Box } from './Box';

export const SharedLayout = () => {
  return (
    // <Box display="grid" gridTemplateColumns="200px 1fr">
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>

      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
    </Container>

    // </Box>
  );
};
