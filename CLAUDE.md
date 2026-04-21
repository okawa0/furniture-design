# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

家具ECサイトの模写案件。フレームワーク・ビルドツールなしの静的サイト（HTML/CSS/JavaScript）。

- **ページ構成**: トップ、商品一覧（2ページ）、商品詳細（16ページ）、About、Company
- **外部依存**: Ress CSS reset（CDN経由: `https://unpkg.com/ress/dist/ress.min.css`）のみ

## SCSS Compilation

ビルドシステムは存在しない。SCSSは IDE の拡張機能やコマンドラインツールで手動コンパイルする。

```bash
# コマンドラインの場合:
sass --watch assets/scss/style.scss assets/css/style.css
```

HTMLは `assets/css/style.css` を参照しているため、SCSSを変更したら必ずコンパイルすること。

## Architecture

### SCSS構成の考え方

```
assets/scss/
  style.scss          # すべてのSCSSをインポートするエントリーポイント
  base/_reset.scss    # グローバルリセット・基本スタイル
  components/         # ヘッダー・フッターなど共通パーツ
  pages/              # 各ページ固有のスタイル（_top, _products, _product, _about, _company）
```

### レイアウト

- コンテンツ幅: max-width 1360px、水平 padding 40px
- body の padding-top: 80px（固定ヘッダー分）
- 主要ブレークポイント: 1200px（PC→2カラム）、767px/768px（SP）
- 商品グリッド: PC 4カラム / SP 2カラム

### JavaScript

`assets/js/script.js` の IIFE はハンバーガーメニュー専用:

- アイコンアニメーション、セミ透明オーバーレイ、サイドメニューのスライド
- Escape キーで閉じる・body スクロールロック

### HTMLパーシャル

ルートと `products/` ディレクトリそれぞれに `header.html` / `footer.html` があるが、これらはコード参照用のパーシャル。実際の内容は各ページのHTMLに直接組み込まれている。

## Naming Conventions

クラス名は階層構造を明示した長い名前（ハイフン区切り）。BEM は未採用。

例: `interior-store-index-header-nav-line`

## Known Improvement Areas (from README)

- BEM 命名規則の採用
- タグセレクターからクラスセレクターへの移行
- CSS カスタムプロパティ（変数）の活用