const { WsExtractor } = require("botfuel-dialog");
class CityExtractor extends WsExtractor {}
CityExtractor.params = {
  diamensions: ["city"]
};

module.exports = CityExtractor;
