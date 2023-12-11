# Memo


## remove command hint
```console
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