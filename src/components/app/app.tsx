import { Main } from '../../pages/main/main';
import { Header } from '../header/header';

type AppProps = {
  places: number;
};

export default function App({ places }: AppProps) {
  return (
    <>
      <Header />
      <Main places={places} />;
    </>
  );
}
