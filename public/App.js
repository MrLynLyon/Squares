import Engine from "./Engine.js";
var engine;
function loop() {
    engine.loop();
    window.requestAnimationFrame(loop);
}
window.onload = function () {
    engine = new Engine();
    window.requestAnimationFrame(loop);
};
