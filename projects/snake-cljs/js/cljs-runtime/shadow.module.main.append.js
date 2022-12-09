
shadow.cljs.devtools.client.env.module_loaded('main');

try { snake.web._main(); } catch (e) { console.error("An error occurred when calling (snake.web/-main)"); throw(e); }