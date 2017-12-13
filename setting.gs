// TwitterのAPIキーの入力

var twitter = TwitterWebService.getInstance(
  "xxxxxxxxxx",  // Twitterのcommercial API Keyを入れる。クオテーションの中にスペースが入るとエラーになるので入らないように気をつける。  Input API key
  "yyyyyyyyyyyyyyyyyy"  // Twitterのcommercial API secretを入れる。  Input API secret
);

// ブロックしたいクソ野郎

var user_name = "Noamin"  // クソ野郎の名前
var num_digits = 2  //クソ野郎の連番桁数


/*
これ以下は触る必要なし。
You don't need to touch below
*/
function getInstance(consumer_key, consumer_secret) {
  return new TwitterWebService_(consumer_key, consumer_secret);
}

var TwitterWebService_ = function (consumer_key, consumer_secret) {
  this.consumer_key    = consumer_key;
  this.consumer_secret = consumer_secret;
}

TwitterWebService_.prototype.getService = function() {
  return OAuth1.createService('Twitter')
    .setAccessTokenUrl('https://api.twitter.com/oauth/access_token')
    .setRequestTokenUrl('https://api.twitter.com/oauth/request_token')
    .setAuthorizationUrl('https://api.twitter.com/oauth/authorize')
    .setConsumerKey(this.consumer_key)
    .setConsumerSecret(this.consumer_secret)
    .setCallbackFunction('authCallback')
    .setPropertyStore(PropertiesService.getUserProperties())
}

TwitterWebService_.prototype.authorize = function() {
  var service = this.getService();
  if (service.hasAccess()) {
    Logger.log('Already authorized');
  } else {
    var authorizationUrl = service.authorize();
    Logger.log('Open the following URL and re-run the script: %s', authorizationUrl);
  }
}

TwitterWebService_.prototype.reset = function() {
  var service = this.getService();
  service.reset();
}

TwitterWebService_.prototype.authCallback = function(request) {
  var service      = this.getService();
  var isAuthorized = service.handleCallback(request);
  var mimeType     = ContentService.MimeType.TEXT;
  if (isAuthorized) {
    return ContentService.createTextOutput('Success').setMimeType(mimeType);
  } else {
    return ContentService.createTextOutput('Denied').setMimeType(mimeType);
  }
}
