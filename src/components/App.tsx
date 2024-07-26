import { Outlet } from 'react-router-dom';
import Footer from './Footer';
import Header from './Header';

import Theme from './Theme';
import GlobalStyle from '../styles/GlobalStyle';

type AppProps = {
  children?: React.ReactNode;
};

export default function App({ children }: AppProps) {
  return (
    <Theme>
      <GlobalStyle />
      <Header />
      <Outlet />
      {children}
      <Footer />
    </Theme>
  );
}
