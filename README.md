# 🌤️ WeatherNote

> **Autonomous Development Showcase - Project #3**
> Built automatically by the **Orbit** Command Center and the **AntiGravity** AI Agent.

![License](https://img.shields.io/badge/License-MIT-blue.svg)
![React](https://img.shields.io/badge/React-19-61DAFB?logo=react)
![Tauri](https://img.shields.io/badge/Tauri-v2-FFC131?logo=tauri)

## 📖 Overview

**WeatherNote** は、最新の気象情報を美しい **Glassmorphism UI** で提供するデスクトップアプリケーションです。
このプロジェクトは、自律開発フレームワーク **Orbit** の開発フェーズにおける「開発効率とロジックの整合性」を検証するための実例として構築されました。

---

## ✨ Features

- **Real-time Weather**: [Open-Meteo API](https://open-meteo.com/) を利用した高精度な気象データ取得。
- **Glassmorphism Design**: 背景のボケと透明感を活かした、Windowsデスクトップに馴染むモダンなUI。
- **MVVM + Repository**: 抗重力（AntiGravity）エージェントの基本憲法に基づいた、堅牢で保守性の高いアーキテクチャ。
- **Auto-Sync**: Orbit 管制塔との連携による、自律的なビルド・ドキュメント更新プロトコル。

---

## 🛠️ Technology Stack

| Layer | Technology |
| :--- | :--- |
| **Framework** | [Tauri v2](https://tauri.app/) (Rust + React) |
| **Frontend** | React 19 + TypeScript + Vite |
| **Logic** | Native Fetch API (for data flow validation) |
| **Icons** | [Lucide React](https://lucide.dev/) |
| **CSS** | Vanilla CSS (Glassmorphism Utilities) |

---

## 🏗️ Architecture (Data-Flow Driven)

本プロジェクトは `DATA_FLOW.md` を真実の源、唯一の情報源（Source of Truth）として実装されています。

### **Data Flow Tree**
└─ **WeatherRepository** (Data Layer)
　  ├─ Input: Open-Meteo API Response
　  └─ Output: Normalized `WeatherState`
└─ **WeatherViewModel** (Logic Layer)
　  ├─ State: `uiState` (loading, data, error)
　  └─ Action: `fetchWeather()`
└─ **WeatherView** (Presentation Layer)
　  ├─ Pattern: Glassmorphism Card
　  └─ Components: Temperature, Windspeed, WeatherCode Icons

---

## 🚀 How to Development

### Prerequisites
- Node.js (Latest stable)
- Rust (for Tauri build)

### Setup
```bash
git clone [repository-url]
cd WeatherNote
npm install
```

### Run
```bash
npm run tauri dev
```

---

## 🤖 Managed by Orbit

このリポジトリは **Orbit Command Center** によって管理されています。
AIエージェント（AntiGravity）は、`AGENTS.md` に定義されたロールに従って自律的に実装とデプロイを行います。

---
© 2026 Orbit & AntiGravity Development Team.
