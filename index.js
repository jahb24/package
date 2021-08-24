const log4js = require("log4js");

let logger = log4js.getLogger();

logger.level = "debug"; //"production"

logger.info("la app si jaló");
logger.warn("ijole, te puede fallar crack");
logger.error("ahora si ya valiste");
logger.fatal("ya ni lo intentes");

function sumar(x, y){
    return x + y;
}

module.exports = sumar;