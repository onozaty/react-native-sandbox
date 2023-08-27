## 公式のドキュメント

* https://reactnative.dev/

とりあえず Introduction から読んで概要を知る。

* https://reactnative.dev/docs/getting-started
* https://reactnative.dev/docs/intro-react-native-components
* https://reactnative.dev/docs/intro-react
* https://reactnative.dev/docs/handling-text-input
* https://reactnative.dev/docs/using-a-scrollview
* https://reactnative.dev/docs/using-a-listview

## 環境作成

Expo で試す。

* https://reactnative.dev/docs/environment-setup

node のバージョン確認。

```
node -v
v18.14.2
```

プロジェクト作成、起動。  

```
npx create-expo-app AwesomeProject

cd AwesomeProject
npx expo start
```

iPhone に Expo Go 入れて確認。

ブラウザでも確認したいので、下記を追加で入れる。

```
npx expo install react-native-web react-dom @expo/webpack-config
```

VS Code で React Native の拡張機能入れる。

* https://marketplace.visualstudio.com/items?itemName=msjsdiag.vscode-react-native

`.vscode/launch.json` で Web で実行した場合にデバッグできるように。

```json
{
    "version": "0.2.0",
    "configurations": [
        {
            "name": "Launch Web 19006",
            "type": "chrome",
            "request": "launch",
            "url": "http://localhost:19006",
            "webRoot": "${workspaceFolder}"
        }
    ]
}
```

```
npx expo start --web
```

