

window.addEventListener("load", main, false);
i = 0;

function main(e) {
    const jsInitCheckTimer = setInterval(jsLoaded, 250);
    function jsLoaded() {

      $("[data-component-type='sp-sponsored-result']").remove();
      //$(".a-section.a-spacing-medium").remove();
      //console.log("jsLoaded is called!")
      i += 1;
      //console.log(i);
      if(i >= 50){
        clearInterval(jsInitCheckTimer);
      }
        
   };
}
