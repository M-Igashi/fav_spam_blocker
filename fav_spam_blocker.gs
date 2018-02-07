
// 認証をリセット（必須） 最初に実行して初期化する。  Reset Oauth, the first function you need to execute.
function reset() {
  twitter.reset();
}

// 認証を行う（必須） 関数を実行し、ログに表示されるURLにアクセスして認証する。  Establishing Oauth, see view --> log, access the url shown, and get authorized.
function authorize() {
  twitter.authorize();
}

// 認証後のコールバック（必須）特に触る必要はない。  Callback, you do not need to touch this funciton.
function authCallback(request) {
  return twitter.authCallback(request);
}


var endpoint_block = "https://api.twitter.com/1.1/blocks/create.json"
var endpoint_revert = "https://api.twitter.com/1.1/blocks/destroy.json"
var endpoint_kill = "https://api.twitter.com/1.1/users/report_spam.json"
var endpoint_search = "https://api.twitter.com/1.1/search/tweets.json?lang=ja&count=100&q="


function zfill(number, size) {
  number = number.toString();
  while (number.length < size) number = "0" + number;
  return number;
}

// Tweet検索からアカウントの一斉ブロック  Execute tweet search blocking.
function search_block() {
  service  = twitter.getService();
  result = service.fetch(endpoint_search + encodeURIComponent(search_name));
  data = JSON.parse(result);
  numbers = data["statuses"].length;   
  for (i=0; i<numbers; i++) {
    
    target_screen_name = data["statuses"][i]["user"]["screen_name"];
    response = service.fetch(endpoint_block, {
      method: "POST",
      payload: {screen_name:target_screen_name,
                skip_status:"true"},
      muteHttpExceptions: true
    });
    Logger.log(response)
  }

}

// ブロックを実行 セッティングに従ったブロックを行う。  Execute blocking.
function block_fav_spam() {
  for (i=0; i<Math.pow(10,num_digits); i++) {
    target_screen_name = user_name + zfill(i,num_digits);
    service  = twitter.getService();
    response = service.fetch(endpoint_block, {
        method: "POST",
        payload: {screen_name:target_screen_name,
                  skip_status:"true"},
        muteHttpExceptions: true
  })
  }
}

// ブロックを解除 セッティングに従ったブロック解除を行う。  Execute unblocking.
function revert_fav_spam() {
  for (i=0; i<Math.pow(10,num_digits); i++) {
    target_screen_name = user_name + zfill(i,num_digits);
    service  = twitter.getService();
    response = service.fetch(endpoint_revert, {
        method: "POST",
        payload: {screen_name:target_screen_name,
                 skip_status:"true"},
        muteHttpExceptions: true
  })
  }
}

// ユーザーを報告してブロックを実行 セッティングに従った報告・ブロックを行う。  Execute report and blocking.
function kill_fav_spam() {
  for (i=0; i<Math.pow(10,num_digits); i++) {
    target_screen_name = user_name + zfill(i,num_digits);
    service  = twitter.getService();
    response = service.fetch(endpoint_kill, {
        method: "POST",
        payload: {screen_name:target_screen_name,
                 perform_block:"true"},
        muteHttpExceptions: true
  })
  }
}
