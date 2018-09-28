const { PromptDialog } = require("botfuel-dialog");

class Travel extends PromptDialog {}
Travel.params = {
  namespace: "tavel",
  entities: {
    destination: {
      dim: "city"
    }
  }
};

module.exports = Travel;
