import Emoji from 'react-emoji-render';
import NameContainer from './containers/NameContainer';
import ButtonContainer from './containers/ButtonContainer';
import SavedNames from './containers/SavedNames';
import './App.css';
import { ConfigProvider } from 'antd';

function App() {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#787ef1',
          colorBgContainer: '#fff',
        }
      }}
    >
      <header>
        <section className="title">
          <Emoji text=":baby: Name Generator :baby:" />
        </section>
        <NameContainer />
        <ButtonContainer />
      </header>
      <SavedNames />
    </ConfigProvider>
  );
}

export default App;
