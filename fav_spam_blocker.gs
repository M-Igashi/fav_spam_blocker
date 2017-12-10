
// 認証をリセット（必須） 最初に実行して初期化する。
function reset() {
  twitter.reset();
}

// 認証を行う（必須） 関数を実行し、ログに表示されるURLにアクセスして認証する。
function authorize() {
  twitter.authorize();
}

// 認証後のコールバック（必須）特に触る必要はない。
function authCallback(request) {
  return twitter.authCallback(request);
}


var endpoint = "https://api.twitter.com/1.1/blocks/create.json"
var endpoint_revert = "https://api.twitter.com/1.1/blocks/destroy.json"


function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}

// ブロックを実行 セッティングに従ったブロックを行う。
function kill_fav_spam() {
  for (i=0; i<Math.pow(10,num_digits); i++) {
    target_screen_name = user_name + zfill(i,num_digits);
    service  = twitter.getService();
    response = service.fetch(endpoint, {
        method: "POST",
        payload: {screen_name:target_screen_name},
        muteHttpExceptions: true
  })
  }
}

// ブロックを解除 セッティングに従ったブロック解除を行う。
function revert_fav_spam() {
  for (i=0; i<Math.pow(10,num_digits); i++) {
    target_screen_name = user_name + zfill(i,num_digits);
    service  = twitter.getService();
    response = service.fetch(endpoint_revert, {
        method: "POST",
        payload: {screen_name:target_screen_name},
        muteHttpExceptions: true
  })
  }
}
