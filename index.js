const qrcode = require("qrcode-terminal");

const { Client, LocalAuth, MessageMedia } = require("whatsapp-web.js");
// const client = new Client()
const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("ready", () => {
  console.log("Client is ready!");
});
// message
client.on("message", async (msg) => {
  if (msg.body == "!ubah") {
    if (msg.hasMedia) {
      const media = await msg.downloadMedia();
      msg.reply("wait...");
      msg.reply(media, "", {
        sendMediaAsSticker: true,
        stickerName:"by sulthon slebew"
      });
    }
  }
});

client.initialize();
