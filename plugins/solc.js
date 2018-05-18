// import 'es6-shim'
import Vue from 'vue'
// import solc from 'solc/wrapper'

// function loadScript(name, url, callback){
//   var script = document.getElementById("script-" + name);
//   if (script != null) {
//     script.parentElement.removeChild(script);
//   }

//   script = document.createElement("script")
//   script.type = "text/javascript";
//   script.setAttribute("id", "script-" + name);

//   if (script.readyState){  //IE
//     script.onreadystatechange = function(){
//       if (script.readyState == "loaded" || script.readyState == "complete") {
//         script.onreadystatechange = null;
//         callback();
//       }
//     };
//   } else {  //Others
//     script.onload = function(){
//       callback();
//     };
//   }

//   script.src = url;
//   document.getElementsByTagName("head")[0].appendChild(script);
// }

// function loadVersion(version, callback) {
//   delete window.Module
//   // NOTE: workaround some browsers
//   window.Module = undefined

//   var url = "https://ethereum.github.io/solc-bin/bin/" + version;
//   loadScript("solc", url, function() {
//     var compiler = solc(window.Module);
//     callback(compiler);
//   });
// }

function loadCompiler() {
  return new Promise((resolve, reject) => {
    BrowserSolc.loadVersion("soljson-v0.4.9-nightly.2017.1.31%2Bcommit.f9af2de0.js", (compiler) => {
      resolve(compiler)
    });
  })
}

Vue.use(({ app }) => {
  // Object.defineProperty(Vue.prototype, '$solc', {
  //   get () { return { loadCompiler }; }
  // });
})
