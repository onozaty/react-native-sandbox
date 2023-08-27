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

### Expo

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

### React Native CLI

Expoを使わずに。

Windows なので Android まわりの設定を行う。

* https://reactnative.dev/docs/environment-setup?guide=native
* https://learn.microsoft.com/ja-jp/windows/dev-environment/javascript/react-native-for-android

NodeとJavaは既に入っているので、Chocolatey は使わずにAndroid Studioのインストールからやってみる。

* https://developer.android.com/studio

Android Studioインストール後、SDK Managerで`Android SDK Platform 33`を選択肢て入れる。

ユーザ環境変数に`ANDROID_HOME`を追加。  
`Path`に`%LOCALAPPDATA%\Android\Sdk\platform-tools`を追加。

アプリケーションの作成。

```
npx react-native init AwesomeProjectNative
```

```
cd AwesomeProjectNative
npm run android
```

起動できなかった。

Android Studioで仮想デバイスの作成が必要だった。

* https://developer.android.com/studio/run/managing-avds?hl=ja

Pixel 7 にして、ImageはTiramisuを選択。  

無事起動できた。

