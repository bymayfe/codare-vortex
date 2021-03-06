const config = {
    "ownerID": "282453998529806338", //kendi IDınızı yazınız
    "admins": [""],
    "support": [""],
    "token": "BURAYATOKENGİRMEYİN ENVDEN ÇEKİN", //botunuzun tokenini yazınız
    "dashboard" : {
      "oauthSecret": "SECRETİ DE GİDİN ENV DEN ÇEKİN", //botunuzun secretini yazınız
      "callbackURL": `https://dash.vortexbot.org/callback`, //site URLnizi yazınız /callback kısmını silmeyiniz!
      "sessionSecret": "", //kalsın
      "domain": "https://dash.vortexbot.org/", //site URLnizi yazınız!
          "port": process.env.PORT
    }
  };
  
  module.exports = config;