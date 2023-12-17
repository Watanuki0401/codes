# Memo


## remove command hint
```consolecod
rm -d -f -r <dir_name>
```
このコマンドはあるディレクトリを配下構造もろとも消すコマンドである。  
`-d`でディレクトリ削除を有効化  
`-f`で強制削除  
`-r`で子ディレクトリも削除（再帰的実行）  
This command is to remove all at directory.

## Init nextjs
必要条件：node
```console
npx create-next-app <app_name>
```
この後の質問は好きに答えてください.

```console
npx run dev
```

## devcontainer hint
`name`:開発コンテナ名  
`dockerComposeFile`:オーケストレーションに使用するファイルを指定  
`service`:*.ymlで宣言したサービスに接続するサービス名を指定  
`workspaceFolder`:スタートディレクトリの設定  
`customizations`:様々有  
* `vscode`:vscode周りの設定
    * `extensions`:拡張機能
    * `settings`:settings.jsonと同様
