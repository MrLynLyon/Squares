import Engine from "./Engine.js"

// Engine.
var engine: Engine;

/**
 * Application loop.
 */
function loop() {
    engine.loop();
    window.requestAnimationFrame(loop);
}

/**
 * OnLoad : Create and run the engine.
 */
window.onload = function () {
    engine = new Engine();
    window.requestAnimationFrame(loop);
};
