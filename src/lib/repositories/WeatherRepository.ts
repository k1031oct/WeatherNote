export interface WeatherState {
  temperature: number;
  windspeed: number;
  weatherCode: number;
  time: string;
}

export class WeatherRepository {
  /**
   * Open-Meteo API から現在の天気を取得する
   * 東京 (Lat: 35.6895, Lon: 139.6917) をデフォルト値として使用
   */
  static async fetchWeather(lat: number = 35.6895, lon: number = 139.6917): Promise<WeatherState> {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true`;
    
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Failed to fetch weather: ${response.statusText}`);
      }
      
      const data = await response.json();
      const current = data.current_weather;
      
      if (!current) {
        throw new Error('Current weather data not found in response');
      }

      return {
        temperature: current.temperature,
        windspeed: current.windspeed,
        weatherCode: current.weathercode,
        time: current.time,
      };
    } catch (error) {
      console.error('WeatherRepository Error:', error);
      throw error;
    }
  }
}
