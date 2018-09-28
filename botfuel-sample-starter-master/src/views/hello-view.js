
const { View, BotTextMessage } = require('botfuel-dialog');

class HelloView extends View {
  render() {
    return [new BotTextMessage('Hello world.')];
  }
}

module.exports = BotTextView;