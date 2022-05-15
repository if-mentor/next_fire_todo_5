# Todo リスト作成チーム開発（第5期）

## 開発メンバー

- 管理： ジュンペイ （Junkichi89）
- リーダー:（Issue 管理など）
- レビュワー: メンバー全員
- サポート: 
  - Hiro (hirooutdoor)
  - inoue (toshi-ino)
  - kanamoto (Takagineer)

- 参加メンバー
- 

## 使用技術

- React.js (https://github.com/facebook/react)
- TypeScript (https://www.typescriptlang.org/)
- Next.js (https://github.com/vercel/next.js)
- Firebase (https://firebase.google.com/docs/web/setup?hl=ja)

## 推奨VScode拡張機能
- [Git Graph](https://marketplace.visualstudio.com/items?itemName=mhutchie.git-graph&ssr=false#qna) コミットの一覧→詳細を閲覧できる 
- [Git History](https://marketplace.visualstudio.com/items?itemName=donjayamanne.githistory) ファイルの履歴などを確認できる
- [Todo Tree](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 
- [GitLens](https://marketplace.visualstudio.com/items?itemName=eamodio.gitlens)

※ おすすめしたいものがあれば適宜追加する

## バージョン情報

voltaで管理、volta以外をお使いの方は自身で以下のバージョンにあわせてください。
https://volta.sh/

```
"node": "14.17.6",
"yarn": "1.22.18"
```

## プロジェクトの概要

Todo リストの作成を通じて、React、Next.js 、Firebaseの基礎、git,Github の使い方に慣れ、チーム開発を体験する。
また、ポートフォリオアプリとして使えるような機能をみんなで作り上げていく。
チームメンバー同士でのコードレビュー、毎週MTGでのissueやデザインについての議論など個人開発では行えない内容をカバー。

## 報告について

毎週MTGまでに、やったこと、翌週やることを事前に議事録に記述いただいて、MTGにて発表を行なってもらいます。
また、チームで話し合いたいことやIssueの要件の相談などもMTGで行うので、アジェンダに記述しおくようにお願いいたします。

- 議事録（Google Document）: https://docs.google.com/document/d/13ySRHhdp15c4zbWxvPwcUY4VKgzaTQ0me66YLxxH8W0/edit?usp=sharing

## 質問や議論について

Issueや実装に関する質問はプルリクエストもしくは、該当のIssueにてコメントを残した上で、slackでurlを共有しましょう。
また、Issueなどに関係のない質問（gitやgithubの使い方など）は、なるべくDiscussionにまとめて、urlをslackで共有してください。

- Discussion : https://github.com/if-mentor/next_fire_todo_5/discussions/categories/q-a
- Issues ： https://github.com/if-mentor/next_fire_todo_5/issues/new/choose


## 環境構築手順

1. クローン作業
   1. `git clone https://github.com/if-mentor/next_fire_todo_5.git`　(HTTPS)
   2. `git clone git@github.com:if-mentor/next_fire_todo_5.git`　(SSH) なるべくSSHを使うこと
2. **githubアカウントを2つ以上持っている方のみ、確認**    
   - cloneしたリポジトリのディレクトリに移動
   - `git config --list`を実行する
   - vscodeでgithubと連携をおこなっているユーザー名がプロジェクトに招待してもらっているユーザー名と同じになっているか確認
   - 同じとなっていない場合は、ログインを変更する（※方法がわからない場合は、ジュンペイに連絡すること）
3. リポジトリのディレクトリへ移動
4. `yarn`  // packageのinstall
5. `yarn dev `

   上記を実行し、`http://localhost:3000/`
   以下の画像の画面が表示できるか確認をお願いします。

   ![image](https://user-images.githubusercontent.com/24813936/148723807-3b3e571b-6669-4d1c-a96f-d623f9650e09.png)

## 開発Tips

1. プルリクエスト前の作業

プルリクエストを上げる前に必ず、自分が作業を行なっているブランチで`git pull origin main`を行うこと
もし、コンフリクトが発生したら、ローカル上で解決する、解決の仕方がわからない場合は、メンバーに相談すること

2. `git pull origin main`を行なった後の作業

remoteに変更があった場合は、`git pull origin main`のコマンドを実行し、remoteの変更を取り込む
packageに更新がないか、確認するため、`yarn`コマンドを実行する
`success Already up-to-date.`と表示されればOK。

### 自主的な貢献を歓迎

チームにとっていいことを考え行動してくれる方を尊重します。
やりたいことや試してみたいことなどを自主的に提案していただき、どんどんチーム開発を盛り上げていきましょう！
基本的にはチームとして行いたいものを自由にやってもらうスタンスで進めていきます。

### git/gitHub

毎週MTGの際にメンバーの中で翌週のプルリクに対して、レビュワーを2人以上決めて、順番に回していく。

#### ブランチ命名規則

issue 番号を必ず含める

**＜具体例＞**
issue#３ Todo の作成画面の実装の場合

`git checkout -b #3-Todo-Page-Layout`

#### コミットメッセージ

#issue 番号 + 日本語で端的に

例）
`git commit -m '#3 Todo作成画面の要素を追加し、レイアウト調整' `

#### Mergeする基準

一人でもレビュワーからapproveが出ていればMergeしてOK
ただし、問題を見つけたら見つけた人がIssueにあげること