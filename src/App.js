import React from 'react';
import WeatherApp from './components/WeatherApp';
import MyComponent from './components/MyComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><i>Weather Forecast</i></h1>
      </header>
      <main>
        <WeatherApp />
        <MyComponent></MyComponent>
      </main>
      <footer>
        <p>© 2023 YourWeatherApp. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
