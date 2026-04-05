<!-- ORBIT_ID: 1775386153464 -->
<!-- ORBIT_NAME: WeatherNote -->
<!-- ORBIT_PATH: C:\Engineering\WeatherNote -->

# DATA_FLOW: WeatherNote

## 1. データの入力元 (Source)
- **Open-Meteo API**: `https://api.open-meteo.com/v1/forecast`
  - Parameters: `latitude`, `longitude`, `current_weather=true`

## 2. データフロー構造 (Tree)
└─ **WeatherRepository** (Data Layer)
　  ├─ Input: API Response (JSON)
　  └─ Output: `WeatherState` (Normalized Object)
└─ **WeatherViewModel** (Logic Layer)
　  ├─ State: `uiState` { loading: boolean, data: WeatherState | null, error: string | null }
　  └─ Action: `fetchWeather()`
└─ **WeatherView** (Presentation Layer)
　  ├─ Display: Temp, Windspeed, WeatherCode
　  └─ UI Pattern: Glassmorphism

## 3. 型定義 (Domain Models)
- `WeatherState`:
  - `temperature`: number
  - `windspeed`: number
  - `weatherCode`: number (Icon mapping required)
  - `time`: string
