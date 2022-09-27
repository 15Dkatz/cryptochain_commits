const PubNub = require('pubnub');

const credentials = {
  publishKey: 'pub-c-ce2e6a01-0dd0-4b1d-a63d-d97f66f33609',
  subscribeKey: 'sub-c-2f195dcd-8434-4696-8852-59ad66e8b06d',
  secretKey: 'sec-c-NTg3MWIyZTItOWI5Yi00YTIxLWI3N2MtMmI3ZDg3ZGRkMzVk'
};

const CHANNELS = {
  TEST: 'TEST'
};

class PubSub {
  constructor() {
    this.pubnub = new PubNub(credentials);

    this.pubnub.subscribe({ channels: Object.values(CHANNELS) });

    this.pubnub.addListener(this.listener());
  }

  listener() {
    return {
      message: messageObject => {
        const { channel, message } = messageObject;

        console.log(`Message received. Channel: ${channel}. Message; ${message}`);
      }
    };
  }

  publish({ channel, message }) {
    this.pubnub.publish({ channel, message });
  }
}

const testPubSub = new PubSub();
testPubSub.publish({ channel: CHANNELS.TEST, message: 'hello pubnub' });

module.exports = PubSub;
