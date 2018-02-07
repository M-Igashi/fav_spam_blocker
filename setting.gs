// TwitterのAPIキーの入力

var twitter = TwitterWebService.getInstance(
  "XXXXXXXXXXXXXXXXXXXX",  // Twitterのcommercial API Keyを入れる。クオテーションの中にスペースが入るとエラーになるので入らないように気をつける。  Input API key
  "YYYYYYYYYYYYYYYYYYYYYYYYYY"  // Twitterのcommercial API secretを入れる。  Input API secret
);

// ブロックしたいクソ野郎

var user_name = "hiromasa5"  // クソ野郎のスクリーンネーム @hiromasa5298 とかの @と298を抜いたやつ
var num_digits = 3 //クソ野郎の連番桁数　上記のクソ野郎の抜いた桁数 298 --> 3

// 検索ブロック用設定
var search_name = "はじめてみましたー！みなさんよろしくね"  //クソ野郎のツイートの文字列 連続した全角文字列が引っかけやすい。一度twitterで検索してみるといい。


/*

リソース --> ライブラリ から ライブラリの追加に  1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xTF という文字列を入れて
追加ボタンを押し、バージョン 2 を選択して保存する。

Resource --> Library, paste 1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xT , then select version 2 and save.

*/
