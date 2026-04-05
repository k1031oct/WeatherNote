import React from 'react';
import { useWeatherViewModel } from '../viewmodels/WeatherViewModel';
import { CloudRain, Sun, Cloud, Wind, RefreshCw, Thermometer } from 'lucide-react';

const getWeatherIcon = (code: number) => {
  if (code === 0) return <Sun className="weather-icon sun" />;
  if (code <= 3) return <Cloud className="weather-icon cloud" />;
  if (code >= 51) return <CloudRain className="weather-icon rain" />;
  return <Cloud className="weather-icon" />;
};

export const WeatherView: React.FC = () => {
  const { data, loading, error, refresh } = useWeatherViewModel();

  if (loading) {
    return (
      <div className="weather-container loading">
        <RefreshCw className="animate-spin" />
        <p>Fetching weather data...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="weather-container error">
        <p>Error: {error}</p>
        <button onClick={() => refresh()}>Retry</button>
      </div>
    );
  }

  if (!data) return null;

  return (
    <div className="weather-card animate-in">
      <header className="weather-header">
        <h1>WeatherNote</h1>
        <button onClick={() => refresh()} className="refresh-button">
          <RefreshCw size={18} />
        </button>
      </header>

      <main className="weather-main">
        <div className="icon-wrapper">
          {getWeatherIcon(data.weatherCode)}
        </div>
        
        <div className="temp-wrapper">
          <Thermometer size={24} />
          <span className="temperature">{data.temperature}°C</span>
        </div>

        <div className="info-grid">
          <div className="info-item">
            <Wind size={20} />
            <span className="label">Wind</span>
            <span className="value">{data.windspeed} km/h</span>
          </div>
          <div className="info-item">
            <Cloud size={20} />
            <span className="label">Observed</span>
            <span className="value">{new Date(data.time).toLocaleTimeString()}</span>
          </div>
        </div>
      </main>

      <footer className="weather-footer">
        <p>Location: Tokyo (Default)</p>
      </footer>
    </div>
  );
};
