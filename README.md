# AI クリエイトスタジオ

AI クリエイトスタジオは、AI を活用した革新的なワークフロー作成ツールです。このプロジェクトは、フロントエンドとバックエンドの両方を含む統合システムです。

## プロジェクト概要

AI クリエイトスタジオを使用すると、以下のことが可能になります：

- 複雑な AI タスクを視覚的に設計し、自動化
- 直感的なドラッグ＆ドロップインターフェースを使用
- 多様な AI 機能を統合したノードを組み合わせ
- カスタマイズ可能なワークフローを作成
- 作成したワークフローを API として公開

## セットアップと動作確認手順

### フロントエンド（@frontend）

1. フロントエンドディレクトリに移動: `cd mvp-workflow-app/frontend`
2. 依存関係をインストール: `npm install`
3. 開発サーバーを起動: `npm start`
4. ブラウザで http://localhost:3000 にアクセス

### バックエンド（@backend）

1. バックエンドディレクトリに移動: `cd mvp-workflow-app/backend`
2. 依存関係をインストール: `npm install`
3. .env ファイルを作成し、環境変数を設定:
   ```
   GOOGLE_API_KEY=your_google_api_key_here
   ```
4. 開発サーバーを起動: `npm run dev`
5. バックエンドサーバーが http://localhost:8000 で起動

## 詳細な動作確認手順

1. フロントエンドのトップページにアクセス（http://localhost:3000）
2. 「アプリを起動」ボタンをクリックしてワークフローエディタ画面を開く
3. 「ノードを追加」ボタンをクリックし、以下の順でノードを追加:
   - Start ノード
   - LLM ノード（AI 機能を持つノード）
   - End ノード
4. ノードを接続してワークフローを作成:
   - Start ノードから LLM ノードへ
   - LLM ノードから End ノードへ
5. LLM ノードをクリックし、ノード設定画面で以下を設定:
   - AI 機能: "summarize"（要約機能）
   - 最大文字数: 100（または任意の数値）
6. 「API 情報を設定」ボタンをクリックし、以下の情報を入力:
   - API エンドポイント: 任意の名前（例: "my-first-api"）
   - API の説明: API の機能説明
   - HTTP メソッド: POST を選択
7. 「API を作成」ボタンをクリックして、ワークフローを API として保存
8. 生成された API のプレビュー画面で「API をテスト」ボタンをクリック
9. テキストエリアにサンプルテキスト（200 文字以上）を入力し、「テスト実行」ボタンをクリック
10. レスポンスとして、入力テキストの要約（100 文字以内）が表示されることを確認

## プロジェクト構造と主要コンポーネントの役割

### フロントエンド

- WorkflowEditor: ワークフローの視覚的な作成と編集を担当

  ```typescript:mvp-workflow-app/frontend/src/components/WorkflowEditor.tsx
  startLine: 1
  endLine: 27
  ```

  主な機能:

  - ノードの追加と接続
  - API 情報の設定
  - ワークフローの保存と API 作成

- ApiPreview: 作成した API のプレビューと動作確認を提供
  ```typescript:mvp-workflow-app/frontend/src/components/ApiPreview.tsx
  startLine: 11
  endLine: 57
  ```
  主な機能:
  - API 詳細の表示
  - API テスト機能の提供

### バックエンド

- AIService: AI 機能（テキスト要約など）を実装

  ```typescript:mvp-workflow-app/backend/src/services/ai_service.ts
  startLine: 1
  endLine: 11
  ```

  主な機能:

  - Google Generative AI を使用したテキスト要約

- WorkflowExecutor: ワークフローの実行ロジックを担当

  ```typescript:mvp-workflow-app/backend/src/utils/workflow_executor.ts
  startLine: 1
  endLine: 50
  ```

  主な機能:

  - ワークフローの各ステップの実行
  - AI 機能の呼び出し

- メインアプリケーション: 動的 API エンドポイントの作成
  ```typescript:mvp-workflow-app/backend/src/main.ts
  startLine: 22
  endLine: 65
  ```
  主な機能:
  - ワークフローデータの受信
  - 動的な API エンドポイントの生成

## 開発のポイントと理解すべき概念

1. フロントエンドとバックエンドの連携:

   - API 作成リクエストの流れ（WorkflowEditor → バックエンド）
   - 動的に生成された API の実行フロー

2. ワークフローの視覚化と実行:

   - React Flow を使用したノードの配置と接続の仕組み
   - ワークフローデータの構造と、バックエンドでの解釈方法

3. 動的 API 生成メカニズム:

   - Express.js を使用した動的ルーティングの実装
   - ワークフローデータに基づく API エンドポイントの生成プロセス

4. AI 機能の統合:

   - Google Generative AI の利用方法
   - AI 機能をワークフローノードとして組み込む方法

5. 型安全性の確保:
   - TypeScript を使用した型定義の重要性
   - フロントエンドとバックエンド間のデータ構造の一貫性

6. サービスコネクションを設定:

7. Azure App Serviceを準備：
　Frontend→WindowsとBackend→LinuxをAzure App Serviceにデプロイ

このプロジェクトを通じて、モダンなウェブアプリケーション開発の複雑な側面を学ぶことができます。フロントエンドとバックエンドの統合、ビジュアルプログラミング、AI 機能の実装、動的 API 生成など、多岐にわたる技術要素を含んでいます。

## テスト文

```
{
"text": "江戸時代は 1603 年から 1868 年まで続いた日本の封建社会の最後の時代でした。徳川家康によって開かれたこの時代は、約 250 年にわたる平和と繁栄の期間として知られています。幕藩体制のもと、武士階級が社会の頂点に立ち、農民、職人、商人がそれに続きました。この時代には、歌舞伎や浮世絵など、独特の文化が発展しました。一方で、厳格な身分制度や鎖国政策により、社会の変化は抑制されていました。しかし、19 世紀に入ると、外国船の来航や国内の政治的不安定さにより、幕府の権威が揺らぎ始めます。最終的に、1868 年の明治維新によって江戸時代は幕を閉じ、日本は近代化への道を歩み始めることになりました。",
"max_length": 100,
"language": "日本語"
}
```

## バックエンドパイプライン記載

```
trigger:
  - none

variables:
  - group: webgame-portal-backend-variables

pool:
  vmImage: 'ubuntu-latest'

steps:
- task: NodeTool@0
  inputs:
    versionSpec: '20.x'  # Node.jsのバージョンを指定
  displayName: 'Node.jsのインストール'

- script: |
    echo "MONGODB_URI: $(MONGODB_URI)"
    echo "JWT_SECRET: $(JWT_SECRET)"
  displayName: '変数の確認'

- script: |
    cd webgame-portal-backend
    npm ci
    npm run build
  displayName: '依存関係のインストールとプロジェクトのビルド'

# ビルド成果物をルートにコピー
- task: CopyFiles@2
  inputs:
    sourceFolder: '$(System.DefaultWorkingDirectory)/webgame-portal-backend/dist'
    contents: '**'
    targetFolder: '$(Build.ArtifactStagingDirectory)/dist'
    flattenFolders: false
  displayName: 'ビルド成果物のコピー'

# package.jsonとpackage-lock.jsonをコピー
- task: CopyFiles@2
  inputs:
    sourceFolder: '$(System.DefaultWorkingDirectory)/webgame-portal-backend'
    contents: 'package*.json'
    targetFolder: '$(Build.ArtifactStagingDirectory)'
  displayName: 'package.jsonとpackage-lock.jsonのコピー'

# プロダクション依存関係のインストール
- script: |
    cd $(Build.ArtifactStagingDirectory)
    npm install --only=production
  displayName: 'プロダクション依存関係のインストール'

# ビルド成果物のアーカイブ
- task: ArchiveFiles@2
  inputs:
    rootFolderOrFile: '$(Build.ArtifactStagingDirectory)'
    includeRootFolder: false
    archiveType: 'zip'
    archiveFile: '$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip'
    replaceExistingArchive: true
  displayName: 'ビルド成果物のアーカイブ'

# Azure App Service へのデプロイ
- task: AzureRmWebAppDeployment@4
  inputs:
    ConnectionType: 'AzureRM'
    azureSubscription: 'armsvc-webgameportal'
    appType: 'webApp'
    WebAppName: 'webgameportal-backend'
    DeployToSlotOrASE: true
    ResourceGroupName: 'rg-kojima-webgameportal'
    SlotName: 'production'
    package: '$(Build.ArtifactStagingDirectory)/$(Build.BuildId).zip'
    AppSettings: |
      NODE_ENV=production
      MONGODB_URI=$(MONGODB_URI)
      JWT_SECRET=$(JWT_SECRET)
      PORT=5000
  displayName: 'Azure App Serviceへのデプロイ'

```
