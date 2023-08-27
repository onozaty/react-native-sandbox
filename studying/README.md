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