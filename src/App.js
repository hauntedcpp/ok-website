import './App.css';
import TargetCursor from './components/TargetCursor/TargetCursor';
import Particles from './components/Particles/Particles';
import TextPressure from './components/TextPressure/TextPressure';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div style={{ width: '100%', height: '1078px', position: 'relative' }}>
          <Particles
            particleColors={['#ffffff', '#ffffff']}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover={true}
            alphaParticles={false}
            disableRotation={false}
          />
        </div>

        <div style={{position: 'absolute', height: '400px', fontSize: '300px'}}>
          <TextPressure
            text="oK Community!"
            flex={true}
            alpha={false}
            stroke={false}
            width={true}
            weight={true}
            italic={true}
            textColor="#ffffff"
            strokeColor="#ff0000"
            minFontSize={300}
          />
        </div>
        <TargetCursor />
      </header>
    </div>
  );
}

export default App;
