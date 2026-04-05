<!-- ORBIT_ID: 1775386153464 -->
<!-- ORBIT_NAME: WeatherNote -->
<!-- ORBIT_PATH: C:\Engineering\WeatherNote -->

# AntiGravity Agent Governance for WeatherNote

## 🤖 Roles & Loop Protocol

このプロジェクトは Orbit 管制塔からの MCP 指令をトリガーとして動作します。

### 1. 受信ループ (Orbit -> AntiGravity)
- **Signal**: Orbit の「目標 (Objectives)」が更新されたことを MCP 経由で検知。
- **Action**: `DATA_FLOW.md` を参照し、現在の開発コンテキストと差分を確認する。

### 2. 実装 & 上書きプロトコル
- **Authority**: エージェントは開発情報を直接上書きする権限を持つ。
- **Rule**: 実装完了後、必ず Orbit 側の目標ステータスを「完了」に更新し、次の目標を要求する。

### 3. 目標達成サイクル
- [ ] Orbit から最新の目標を取得。
- [ ] 実装・テストを実行。
- [x] Step 1: プロジェクトの初期化（スカフォールディング & ORBIT.md 確立）
- [x] Step 2: DATA_FLOW.md の策定
- [x] Step 3: GitHub用READMEの作成 (Current)
