import logo from './logo.svg';
import './App.css';
import './componets/kakaomap';
import Kakao from './componets/kakaomap';

//https://goddaehee.tistory.com/305

const App = () => {
  return (
    <div className="App">
      <nav>
        <div>
          내비
        </div>
      </nav>
      <Kakao></Kakao>
    </div>
  );
}

export default App;
