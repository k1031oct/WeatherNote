import { useState, useCallback, useEffect } from 'react';
import { WeatherRepository, WeatherState } from '../lib/repositories/WeatherRepository';

export interface WeatherUiState {
  loading: boolean;
  data: WeatherState | null;
  error: string | null;
}

export const useWeatherViewModel = () => {
  const [uiState, setUiState] = useState<WeatherUiState>({
    loading: false,
    data: null,
    error: null,
  });

  const fetchWeather = useCallback(async (lat?: number, lon?: number) => {
    setUiState(prev => ({ ...prev, loading: true, error: null }));
    
    try {
      const data = await WeatherRepository.fetchWeather(lat, lon);
      setUiState({
        loading: false,
        data,
        error: null,
      });
    } catch (err) {
      setUiState({
        loading: false,
        data: null,
        error: err instanceof Error ? err.message : 'Unknown error occurred',
      });
    }
  }, []);

  // 初期化時に一度実行
  useEffect(() => {
    fetchWeather();
  }, [fetchWeather]);

  return {
    ...uiState,
    refresh: fetchWeather,
  };
};
