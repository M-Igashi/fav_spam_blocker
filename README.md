# fav_spam_blocker_gs
TwitterのいいねスパムアカウントをブロックするスクリプトのGoogle Apps Script実装です。

Blocking script (Google Apps Script) for Twitter Fav-Spammers

## How to use
- 2つの.gsファイルをGASにコピーしてライブラリ`1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xTF`をインポートします。
- apps.twitter.com でtwitterアプリを作成します。コールバックurlは https://script.google.com/d/xxxxあなたのGAS_URLxxxxxx/usercallback です。
- setting.gsに必要事項を入れます。
- fav_spam_blocker.gsのresetを実行します。
- authorizeを実行、ログに表示されるURLをブラウザにコピペしてアプリを認証します。
- block_fav_spamを実行してスパマーをブロックします。revert_fav_spamはブロック解除、kill_fav_spamはブロックと同時に報告も行います。

------------------

- Copy two .gs files to your GAS, and import `1rgo8rXsxi1DxI_5Xgo_t3irTw1Y5cxl2mGSkbozKsSXf2E_KBBPC3xTF` in library.  
- Create Twitter app in apps.twitter.com . Callback url is https://script.google.com/d/xxxxYOUR_GAS_URLxxxxxx/usercallback
- Confiture setting.gs
- Execute reset function in fav_spam_blocker.gs
- Execute authorize, copy the URL shown in Log and paste in browser to authorize twitter app.
- Execute block_fav_spam to block the spammers. revert_fav_spam unblocks the accounts, kill_fav_spam performs reporting and blocking.


## 説明動画    
[![](http://img.youtube.com/vi/ByQJwK09F-g/0.jpg)](https://www.youtube.com/watch?v=ByQJwK09F-g)  

