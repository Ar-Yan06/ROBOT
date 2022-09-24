module.exports.config = {
	name: "upt",
	version: "1.0.1",
	hasPermssion: 1,
	credits: "Mirai - JRT",
	description: "Kiểm tra thời gian bot đã online",
	commandCategory: "Hệ thống admin-bot",
	cooldowns: 5,
	dependencies: {
		"pidusage": ""
	}
};

function byte2mb(bytes) {
	const units = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];
	let l = 0, n = parseInt(bytes, 10) || 0;
	while (n >= 1024 && ++l) n = n / 1024;
	return `${n.toFixed(n < 10 && l > 0 ? 1 : 0)} ${units[l]}`;
}

module.exports.run = async ({ api, event }) => {
	const axios = require('axios');
  const request = require('request');
	const res = await axios.get(`https://image-random-api.dungkon.repl.co/gai/?apikey=0bk3s6IAyq`);
  var love = res.data.data
	const fs = require("fs");
  const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
  const pidusage = await global.nodemodule["pidusage"](process.pid);
	const moment = require("moment-timezone");
    var gio = moment.tz("Asia/Ho_Chi_Minh").format("D/MM/YYYY || HH:mm:ss");
	const timeStart = Date.now();
	let today = new Date();
  axios.get('https://api.vinhbeat.ga/mong.php').then(res => {
	let ext = res.data.data.substring(res.data.data.lastIndexOf(".") + 1);
	let callback = function () {
					api.sendMessage({body: `📅Hôm này là: ${gio}\n🤖Bot của Dũng đã hoạt động được ${hours} giờ ${minutes} phút ${seconds} giây ❤️.\n⚔Prefix: ${global.config.PREFIX}\n🔥Version: 1.2.14\n👻Tổng người dùng: ${global.data.allUserID.length}\n🦋Tổng Nhóm: ${global.data.allThreadID.length}\n⚡Cpu đang sử dụng: ${pidusage.cpu.toFixed(1)}\n⚠️Ram đang sử dụng: ${byte2mb(pidusage.memory)}\n🔰Ping: ${Date.now() - timeStart}ms\n≻───── •👇🏻• ─────≺\n💟Thính:\n${love}`, attachment: fs.createReadStream(__dirname + `/cache/anh.${ext}`)
					}, event.threadID, () => fs.unlinkSync(__dirname + `/cache/anh.${ext}`), event.messageID);
				};
				request(res.data.data).pipe(fs.createWriteStream(__dirname + `/cache/anh.${ext}`)).on("close", callback);
			})
}