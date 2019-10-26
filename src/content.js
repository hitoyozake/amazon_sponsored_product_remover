

window.addEventListener("load", main, false);
i = 0;

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 4000);
    function jsLoaded() {

      $('.sg-col-inner').remove();
      Alert("test")

      i += 1;
      if(i >= 4)
        clearInterval(jsInitCheckTimer);

  //要素を取得する処理
   };
}
