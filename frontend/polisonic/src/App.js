import logo from './logo.svg';
import './App.css';
import AudioPlayer from './Components/AudioPlayer/AudioPlayer';

function App() {
  return (
    <div className="App">
      <AudioPlayer audioSrc="http://localhost:3000/speech.mp3" />
    </div>
  );
}

export default App;
