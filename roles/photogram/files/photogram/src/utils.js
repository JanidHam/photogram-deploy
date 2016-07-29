var axios = require('axios');

async function loadAuth (ctx, netx) {
  try {
    var whoami = await axios.get('/whoami').then(res => res.data)

    if (whoami.username) {
      ctx.auth = whoami
    } else {
      ctx.auth = false
    }

    netx();
  } catch (err) {
    console.log(err);
  }
}

exports.loadAuth = loadAuth;
