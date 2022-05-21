/**
 * is関数
 *  判定関数
 *  @param string type String,Object,Function,Array,Date
 *  @param objext obj [description]
 */
function is(type, obj) {
  var clas = Object.prototype.toString.call(obj).slice(8, -1);
  return obj !== undefined && obj !== null && clas === type;
}
/**
 * フォーマット関数
 *  "あいう{0},かきく{1}".format(["えお","けこ"]); //->あいうえお,かきくけこ
 */
if (String.prototype.format == undefined) {
  String.prototype.format = function (arg) {
    // 置換ファンク
    var rep_fn = undefined;

    if (!arg) {//引数がnullの場合は何もしない
      return this;
    }
    // オブジェクトの場合
    if (typeof arg == "object") {
      rep_fn = function (m, k) { return arg[k]; }
    }
    // 複数引数だった場合
    else {
      var args = arguments;
      rep_fn = function (m, k) { return args[parseInt(k)]; }
    }

    return this.replace(/\{(\w+)\}/g, rep_fn);
  }
}
/**
 * 連想配列連結関数
 *  [{name:"あああ"},{name:"いいい"}].renketsu("name"); //->あああ\n\nいいい
 */
if (Array.prototype.renketsu == undefined) {
  Array.prototype.renketsu = function (arg) {
    // 置換ファンク
    var rep_fn = undefined;

    if (!arg || typeof arg == "String") {//引数がnullの場合は何もしない
      return this;
    }
    let _n = "";
    this.forEach(function (value, key) {
      _n += value[arg] + "\n\n";
    });
    return _n;
  }
}
