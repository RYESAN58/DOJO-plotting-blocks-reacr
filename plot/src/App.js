import './App.css';
import Header from './components/header';
import Navi from './components/navigation';
import Main from './components/main';

function App() {
  const style = {
    display: 'flex',
    flexDirection: 'row',
    width: '90%',
    margin: 'auto'
  }

  return (
    <div>
      <Header/>
      <div style={style}>
        <Navi/>
        <Main/>
      </div>
    </div>
  );
}

export default App;
