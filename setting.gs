// TwitterのAPIキーの入力

var twitter = TwitterWebService.getInstance(
  "xxxxxxxxxx",  // Twitterのcommercial API Keyを入れる。クオテーションの中にスペースが入るとエラーになるので入らないように気をつける。  Input API key
  "yyyyyyyyyyyyyyyyyy"  // Twitterのcommercial API secretを入れる。  Input API secret
);

// ブロックしたいクソ野郎

var user_name = "ptwptw"  // クソ野郎のスクリーンネーム @ptwptw300 とかの @と300を抜いたやつ
var num_digits = 3  //クソ野郎の連番桁数

var search_name = "このギター講師の動画みて練習してます！残念ながらこの方は去年も12月に退職されたみたいです・・・会いたかった"  //クソ野郎のツイートの文字列 連続した全角文字列が引っかけやすい。一度twitterで検索してみるといい。


/*

リソース --> ライブラリ から ライブラリの追加に  1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xTF という文字列を入れて
追加ボタンを押し、バージョン 2 を選択して保存する。

Resource --> Library, paste 1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xT , then select version 2 and save.

*/
