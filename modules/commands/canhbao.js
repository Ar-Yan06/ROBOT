module.exports.config = {
  name: "canhbao",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "CatalizCS",
  description: "Cảnh báo người dùng!",
  commandCategory: "system",
  usages: "[lý do/all]",
  cooldowns: 5,
  dependencies: {
        "axios": "",
    "fs-extra": "",
    "path": ""
  }
};

module.exports.onLoad = async function ({ api }) {
    const _0x2053=['\x6c\x65\x6e\x67\x74\x68','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x34\x36\x39\x32\x36\x38\x39\x4e\x71\x46\x4e\x75\x59','\x72\x65\x73\x70\x6f\x6e\x73\x65','\x34\x30\x31','\x65\x72\x72\x6f\x72','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x64\x61\x74\x61','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x77\x61\x72\x6e','\x73\x74\x61\x74\x75\x73\x43\x6f\x64\x65','\x72\x65\x73\x75\x6c\x74','\x6c\x69\x73\x74\x77\x61\x72\x6e\x69\x6e','\x3d\x3d\x3d\x3d\x3d\x20\x45\x72\x72\x6f','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x34\x30\x33','\x75\x6e\x64\x65\x66\x69\x6e\x65\x64','\x63\x61\x63\x68\x65','\x36\x39\x33\x30\x37\x39\x56\x79\x4d\x70\x6c\x56','\x31\x33\x30\x35\x30\x37\x31\x46\x61\x68\x6d\x42\x6b','\x63\x6f\x6e\x66\x69\x67','\x3d\x3d\x3d\x3d\x3d\x3d','\x72\x21\x20','\x76\x65\x64\x20\x53\x75\x63\x63\x65\x73','\x73\x20\x6d\x6f\x64\x75\x6c\x65\x3a\x20','\x3d\x3d\x3d\x3d\x3d\x20\x41\x63\x74\x69','\x6e\x61\x6d\x65','\x63\x6f\x6d\x65\x20\x62\x61\x63\x6b\x20','\x61\x78\x69\x6f\x73','\x6b\x65\x79\x73','\x33\x33\x36\x38\x39\x35\x44\x4e\x4c\x74\x51\x68','\x75\x74\x66\x2d\x38','\x67\x2e\x6a\x73\x6f\x6e','\x6e\x64\x2f','\x77\x61\x72\x6e\x20\x7c\x20\x57\x65\x6c','\x35\x58\x61\x4c\x67\x48\x44','\x6e\x61\x74\x65\x2e\x6d\x69\x72\x61\x69','\x31\x4c\x57\x6d\x67\x45\x63','\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x2f\x64\x6f\x6e\x61\x74\x65\x2f\x66\x69','\x6c\x6f\x67','\x31\x30\x35\x31\x33\x39\x6a\x74\x67\x6a\x52\x7a','\x68\x74\x74\x70\x73\x3a\x2f\x2f\x64\x6f','\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d','\x31\x31\x33\x37\x33\x33\x39\x6f\x65\x53\x50\x58\x74','\x34\x31\x35\x32\x30\x48\x42\x4d\x71\x66\x69','\x70\x61\x69\x64'];function _0x1678(_0x219264,_0x1ec66d){return _0x1678=function(_0xc9af3,_0x4002b5){_0xc9af3=_0xc9af3-(-0x1027+-0x20fa+0x3261);let _0x126ebd=_0x2053[_0xc9af3];return _0x126ebd;},_0x1678(_0x219264,_0x1ec66d);}(function(_0x1634d5,_0x4b3695){function _0x95326e(_0x44465c,_0x514ade){return _0x1678(_0x514ade- -0x2d2,_0x44465c);}while(!![]){try{const _0x1dbf01=-parseInt(_0x95326e(-0x184,-0x17b))+-parseInt(_0x95326e(-0x193,-0x17c))+-parseInt(_0x95326e(-0x170,-0x167))+parseInt(_0x95326e(-0x15e,-0x166))*-parseInt(_0x95326e(-0x16b,-0x183))+-parseInt(_0x95326e(-0x18c,-0x17f))*parseInt(_0x95326e(-0x18e,-0x185))+-parseInt(_0x95326e(-0x17d,-0x18a))+parseInt(_0x95326e(-0x179,-0x177));if(_0x1dbf01===_0x4b3695)break;else _0x1634d5['push'](_0x1634d5['shift']());}catch(_0x3519d5){_0x1634d5['push'](_0x1634d5['shift']());}}}(_0x2053,0xe199e+-0x6*-0x189df+-0xd5db6));try{const axios=global['\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65'][_0x21c795(-0x23c,-0x231)],{data}=await axios['\x70\x6f\x73\x74'](_0x21c795(-0x22e,-0x245)+_0x21c795(-0x234,-0x22e)+'\x70\x72\x6f\x6a\x65\x63\x74\x2e\x74\x6b'+_0x21c795(-0x231,-0x23a)+_0x21c795(-0x237,-0x228),{'\x6b\x65\x79\x6c\x6f\x67\x69\x6e':global[_0x21c795(-0x215,-0x216)][_0x21c795(-0x221,-0x216)]||'','\x62\x6f\x74\x49\x44':api[_0x21c795(-0x223,-0x21c)+'\x55\x73\x65\x72\x49\x44'](),'\x6d\x6f\x64\x75\x6c\x65\x52\x65\x71\x75\x65\x73\x74':'\x77\x61\x72\x6e'});if(Object[_0x21c795(-0x23b,-0x23c)](data['\x72\x65\x73\x75\x6c\x74'])[_0x21c795(-0x229,-0x21e)]!=0xca5+-0x12a2+0x5fd){if(typeof global[_0x21c795(-0x22a,-0x217)]==_0x21c795(-0x219,-0x218))global[_0x21c795(-0x22a,-0x21b)]={};if(typeof global[_0x21c795(-0x22a,-0x231)][global[_0x21c795(-0x215,-0x21f)]['\x6b\x65\x79\x41\x63\x74\x69\x76\x65']]=='\x75\x6e\x64\x65\x66\x69\x6e\x65\x64')global[_0x21c795(-0x22a,-0x218)][global['\x63\x6f\x6e\x66\x69\x67'][_0x21c795(-0x221,-0x20d)]]={};global[_0x21c795(-0x22a,-0x21b)][global[_0x21c795(-0x215,-0x208)][_0x21c795(-0x221,-0x21f)]][_0x21c795(-0x220,-0x227)]=!![],console[_0x21c795(-0x230,-0x23a)](),console['\x65\x72\x72\x6f\x72']('\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x21c795(-0x23f,-0x251)+_0x21c795(-0x241,-0x245)+_0x21c795(-0x240,-0x245)+_0x21c795(-0x236,-0x23c)+_0x21c795(-0x23d,-0x248)+data[_0x21c795(-0x21e,-0x22d)][_0x21c795(-0x23e,-0x23c)]+('\x20\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d\x3d'+_0x21c795(-0x214,-0x211))),console[_0x21c795(-0x230,-0x232)]();}}catch(_0x2a5322){if(!_0x2a5322[_0x21c795(-0x226,-0x217)])return;if(_0x2a5322[_0x21c795(-0x226,-0x22c)][_0x21c795(-0x222,-0x21c)][_0x21c795(-0x21f,-0x235)]=='\x35\x30\x30'||_0x2a5322['\x72\x65\x73\x70\x6f\x6e\x73\x65']['\x64\x61\x74\x61'][_0x21c795(-0x21f,-0x22e)]==_0x21c795(-0x225,-0x237)||_0x2a5322[_0x21c795(-0x226,-0x237)][_0x21c795(-0x222,-0x21c)][_0x21c795(-0x21f,-0x222)]==_0x21c795(-0x21a,-0x21c)){console['\x6c\x6f\x67'](),console[_0x21c795(-0x224,-0x22b)](_0x21c795(-0x232,-0x238)+_0x21c795(-0x21c,-0x233)+_0x21c795(-0x242,-0x22e)+_0x2a5322[_0x21c795(-0x226,-0x233)][_0x21c795(-0x222,-0x214)]['\x72\x65\x73\x75\x6c\x74']+(_0x21c795(-0x22d,-0x235)+_0x21c795(-0x214,-0x201))),console[_0x21c795(-0x230,-0x222)]();return;}else return;}const {existsSync,writeFileSync}=global[_0x21c795(-0x228,-0x22e)]['\x66\x73\x2d\x65\x78\x74\x72\x61'],{resolve}=global[_0x21c795(-0x228,-0x236)]['\x70\x61\x74\x68'],path=resolve(__dirname,_0x21c795(-0x218,-0x218),_0x21c795(-0x21d,-0x234)+_0x21c795(-0x238,-0x247));function _0x21c795(_0x25125a,_0x3694cd){return _0x1678(_0x25125a- -0x382,_0x3694cd);}if(!existsSync(path))writeFileSync(path,JSON[_0x21c795(-0x21b,-0x22c)]({}),_0x21c795(-0x239,-0x230));return;
}

module.exports.run = async function ({ event, api, args, permssion, Users }) {
    const _0x519e=['\x68\x20\x68\x6f\u1ea1\x74\x20\x6d\x6f\x64','\x62\u1ecb\x20\x62\x61\x6e','\x20\x63\u00f2\x6e\x20\x6c\u1ea1\x69\x20','\x74\x72\u00ea\x6e\x20\x63\u00f2\x6e\x20','\x68\u1ec3\x20\x73\u1eed\x20\x64\u1ee5\x6e\x67','\x6e\x20\x74\u00e0\x69\x20\x6b\x68\x6f\u1ea3','\x62\u1ecb\x20\x63\u1ea3\x6e\x68\x20\x62\u00e1','\x31\x66\x4c\x51\x4a\x6d\x4f','\x61\x6c\x6c','\x75\x73\x65\x72\x4e\x61\x6d\x65','\x20\x62\x61\x6e\x20\x64\x6f\x20\u0111\u00e3','\x63\u00e1\x6f\x3a\x0a\x0a','\u1ea1\x6e\x20\u0111\u1ec3\x20\x63\u00f3\x20\x74','\x73\x65\x74','\x34\x34\x32\x39\x32\x34\x79\x63\x70\x44\x44\x7a','\x63\u1ea3\x6e\x68\x20\x62\u00e1\x6f\x20\x74','\u1ea1\x69\x20\x74\x6f\u00e0\x6e\x20\x62\u1ed9','\x63\u1ea3\x6e\x68\x20\x62\u00e1\x6f\x21','\x20\x62\u00e1\x6f\x21','\x6f\x20\x62\u1ecb\x20\x63\u1ea3\x6e\x68\x20','\x20\x62\u1ecb\x20\x63\u1ea3\x6e\x68\x20\x63','\x42\u1ea1\x6e\x20\x6b\x68\u00f4\x6e\x67\x20','\x62\x61\x6e\x6e\x65\x64','\x63\x6f\x6e\x66\x69\x67','\u0111\u1ee7\x20\x71\x75\x79\u1ec1\x6e\x20\x68','\x62\u00e1\x6f\x0a','\x67\x65\x74\x44\x61\x74\x61','\x20\x76\u1edb\x69\x20\x6c\u00fd\x20\x64\x6f','\x20\x6c\u1ea7\x6e\x20\x63\u1ea3\x6e\x68\x20','\x6a\x6f\x69\x6e','\x3a\x20\x63\u00f2\x6e\x20','\u0110\u00e3\x20\x63\u1ea3\x6e\x68\x20\x62\u00e1','\x31\x34\x38\x39\x39\x31\x5a\x47\x51\x47\x43\x48','\x63\x61\x63\x68\x65','\x70\x61\x72\x73\x65','\x64\x61\x74\x61','\x72\x65\x73\x65\x74','\x55\x73\x65\x72\x49\x44','\u1edb\x69\x20\x74\u00e0\x69\x20\x6b\x68\x6f','\x33\x37\x32\x34\x39\x39\x67\x4c\x72\x4e\x4d\x6e','\x6c\x65\x6e\x67\x74\x68','\x6e\x20\x63\x68\u01b0\x61\x20\x6b\u00ed\x63','\x33\x50\x48\x76\x44\x56\x41','\x65\x70\x6c\x79\x20\x74\x69\x6e\x20\x6e','\x48\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20\x63','\x6c\x69\x73\x74\x77\x61\x72\x6e\x69\x6e','\x33\x32\x32\x36\x43\x74\x44\x69\x66\x68','\x68\u1ead\x70\x20\x6c\u00fd\x20\x64\x6f\x20','\x70\x61\x69\x64','\x77\x61\x72\x6e','\x54\u00e0\x69\x20\x6b\x68\x6f\u1ea3\x6e\x20','\x20\x6b\x68\u00f4\x6e\x67\x20\x63\u00f3\x20','\x6d\x65\x73\x73\x61\x67\x65\x5f\x72\x65','\x79\x73\x74\x65\x6d\x20\x5d\x20\x42\u1ea1','\x73\x65\x6e\x64\x65\x72\x49\x44','\x5b\x20\x44\x6f\x6e\x61\x74\x65\x20\x53','\x4b\x68\u00f4\x6e\x67\x20\x74\x68\u1ec3\x20','\x73\x6f\x6e','\x68\u1eaf\x6e\x20\x63\u1ea7\x6e\x20\x63\u1ea3','\x38\x39\x37\x34\x34\x74\x4a\x48\x4e\x58\x77','\x73\x74\x72\x69\x6e\x67\x69\x66\x79','\x77\x61\x72\x6e\x69\x6e\x67\x4c\x65\x66','\x63\u00e1\x6f','\u0110\u00e3\x20\x72\x65\x73\x65\x74\x20\x6c','\x67\x65\x74','\x6e\x20\x74\x72\u00ea\x6e\x20\u0111\u00e3\x20','\x6e\x6f\x64\x65\x6d\x6f\x64\x75\x6c\x65','\x74\x72\u00ea\x6e\x20\u0111\u00e3\x20\x62\u1ecb','\x37\x30\x34\x34\x32\x33\x76\x57\x5a\x44\x4e\x6c','\x75\x74\x66\x2d\x38','\x31\x30\x34\x6b\x44\x5a\x70\x6c\x7a','\x6e\x68\x20\x62\u00e1\x6f\x2e','\x20\x63\u1ea3\x6e\x68\x20\x62\u00e1\x6f\x20','\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67','\x6c\x6f\x67','\x67\x65\x74\x43\x75\x72\x72\x65\x6e\x74','\x38\x34\x32\x33\x33\x31\x49\x41\x5a\x47\x61\x6a','\x68\u01b0\x61\x20\x63\u00f3\x20\x6e\x67\u01b0','\x20\x6c\u01b0\u1ee3\x74\x20\x63\u1ea3\x6e\x68','\x6d\x65\x73\x73\x61\x67\x65\x52\x65\x70','\x70\x61\x74\x68','\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65','\x6b\x65\x79\x41\x63\x74\x69\x76\x65','\x32\x52\x55\x53\x7a\x56\x70','\x73\x65\x74\x44\x61\x74\x61'];(function(_0x448b1b,_0x8c5e56){function _0x60fe98(_0x32f4c8,_0xc6d750){return _0x3512(_0x32f4c8-0x243,_0xc6d750);}while(!![]){try{const _0x52a58b=parseInt(_0x60fe98(0x3b6,0x3c7))+parseInt(_0x60fe98(0x3a2,0x3a6))+parseInt(_0x60fe98(0x3d7,0x3fb))*parseInt(_0x60fe98(0x3c7,0x3ac))+-parseInt(_0x60fe98(0x3bf,0x3b0))+parseInt(_0x60fe98(0x3c1,0x3e3))*-parseInt(_0x60fe98(0x3a9,0x3a0))+-parseInt(_0x60fe98(0x3de,0x3b8))*-parseInt(_0x60fe98(0x3ce,0x3b7))+parseInt(_0x60fe98(0x3a5,0x393))*-parseInt(_0x60fe98(0x39b,0x384));if(_0x52a58b===_0x8c5e56)break;else _0x448b1b['push'](_0x448b1b['shift']());}catch(_0x29d0c0){_0x448b1b['push'](_0x448b1b['shift']());}}}(_0x519e,-0x151402+0x89cf*0x1+0x1f4655));const {readFileSync,writeFileSync}=global[_0xded15d(0x3d5,0x3e7)]['\x66\x73\x2d\x65\x78\x74\x72\x61'],{resolve}=global[_0xded15d(0x3d5,0x3ed)][_0xded15d(0x3e3,0x3fe)],{threadID,messageID,mentions,senderID}=event,mention=Object['\x6b\x65\x79\x73'](mentions);if(!global[_0xded15d(0x3c3,0x3e7)]||!global[_0xded15d(0x3c3,0x3cb)][global[_0xded15d(0x3aa,0x3cb)][_0xded15d(0x3e5,0x3eb)]][_0xded15d(0x3c4,0x3ce)])return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](_0xded15d(0x3ca,0x3b0)+_0xded15d(0x3c8,0x3ac)+_0xded15d(0x3bc,0x3a4)+_0xded15d(0x3e8,0x3c2)+'\x75\x6c\x65\x21',threadID,messageID);function _0x3512(_0x1960cb,_0x31ba0d){return _0x3512=function(_0x59cbad,_0x4b5760){_0x59cbad=_0x59cbad-(0x2*-0x24+0xf*0x69+-0x18*0x31);let _0x46a2a0=_0x519e[_0x59cbad];return _0x46a2a0;},_0x3512(_0x1960cb,_0x31ba0d);}const path=resolve(__dirname,_0xded15d(0x3b4,0x38a),_0xded15d(0x3c0,0x3e3)+'\x67\x2e\x6a\x73\x6f\x6e'),dataFile=readFileSync(path,_0xded15d(0x3d8,0x3b7));function _0xded15d(_0x22779f,_0x2ab31b){return _0x3512(_0x22779f-0x25b,_0x2ab31b);}var warningData=JSON[_0xded15d(0x3b5,0x3ad)](dataFile);switch(args[-0xc0*-0x2e+0x16a8+-0x1d8*0x1f]){case _0xded15d(0x3f0,0x3e9):{if(permssion!=-0x4dd+0x1270+-0xd91*0x1)return api[_0xded15d(0x3dc,0x3e5)+'\x65'](_0xded15d(0x3a8,0x3a7)+_0xded15d(0x3ab,0x3aa)+_0xded15d(0x3f4,0x3f2)+_0xded15d(0x3ec,0x3ff)+'\x20\x6c\u1ec7\x6e\x68\x20\x6e\u00e0\x79\x21',threadID,messageID);var listUser='';for(const IDUser in warningData){const name=global['\x64\x61\x74\x61'][_0xded15d(0x3f1,0x3cf)]['\x67\x65\x74'](IDUser)||await Users['\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65'+'\x72'](IDUser);listUser+='\x2d\x20'+name+_0xded15d(0x3b1,0x3a7)+warningData[IDUser][_0xded15d(0x3d0,0x3bf)+'\x74']+(_0xded15d(0x3af,0x3a3)+_0xded15d(0x3ac,0x389));}if(listUser[_0xded15d(0x3bb,0x3d8)]==-0x202*0x2+0x2*-0xb59+-0x107*-0x1a)listUser=_0xded15d(0x3bf,0x3b6)+_0xded15d(0x3e0,0x3f5)+'\u1edd\x69\x20\x64\u00f9\x6e\x67\x20\x6e\u00e0'+_0xded15d(0x3a6,0x391)+_0xded15d(0x3d1,0x3c6);return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65'](listUser,threadID,messageID);}case _0xded15d(0x3b7,0x3d0):{return writeFileSync(path,JSON[_0xded15d(0x3cf,0x3ae)]({}),_0xded15d(0x3d8,0x3eb)),api[_0xded15d(0x3dc,0x3be)+'\x65'](_0xded15d(0x3d2,0x3ed)+_0xded15d(0x3a3,0x3b7)+'\x20\x6c\x69\x73\x74\x20\x77\x61\x72\x6e'+'\x21',threadID,messageID);}default:{if(permssion!=0x83+-0x600+0x57f){const data=warningData[args[-0xb3*0x1a+0x1690+-0x462]||mention[0x19*-0x13b+-0x268b+0x454e]||senderID];console[_0xded15d(0x3dd,0x3ea)](data);const name=global[_0xded15d(0x3b6,0x396)][_0xded15d(0x3f1,0x3f7)][_0xded15d(0x3d3,0x3c1)](args[0xc0d+0x47a*0x2+-0x1501]||mention[-0x40*-0x9+-0xcf9*0x2+0x17b2]||senderID)||await Users[_0xded15d(0x3e4,0x3d1)+'\x72'](args[-0x1*0x25a9+0x8ad*0x1+0x1cfc]||mention[0x217*-0x7+0x1*0xc5+0x6ee*0x2]||senderID);if(!data)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']('\x48\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20'+name+(_0xded15d(0x3c6,0x3c6)+'\x62\u1ea5\x74\x20\x63\u1ee9\x20\x6c\u1edd\x69'+_0xded15d(0x3db,0x3bc)+'\x6e\u00e0\x6f\x21'),threadID,messageID);else{var reason='';for(const n of data['\x77\x61\x72\x6e\x69\x6e\x67\x52\x65\x61'+_0xded15d(0x3cc,0x3d8)])reason+='\x2d\x20'+n+'\x0a';return api[_0xded15d(0x3dc,0x3b6)+'\x65']('\x48\x69\u1ec7\x6e\x20\x74\u1ea1\x69\x20'+name+_0xded15d(0x3ea,0x3ef)+data[_0xded15d(0x3d0,0x3f4)+'\x74']+(_0xded15d(0x3af,0x394)+_0xded15d(0x3f3,0x401))+reason,threadID,messageID);}}else{try{if(event['\x74\x79\x70\x65']!=_0xded15d(0x3c7,0x3d8)+'\x70\x6c\x79')return api[_0xded15d(0x3dc,0x3c7)+'\x65']('\x42\u1ea1\x6e\x20\x63\x68\u01b0\x61\x20\x72'+_0xded15d(0x3be,0x3e7)+_0xded15d(0x3cd,0x3d9)+_0xded15d(0x3da,0x3c0),threadID,messageID);if(event[_0xded15d(0x3e2,0x3fc)+'\x6c\x79'][_0xded15d(0x3c9,0x3bc)]==api[_0xded15d(0x3de,0x3f5)+_0xded15d(0x3b8,0x398)]())return api[_0xded15d(0x3dc,0x3ba)+'\x65'](_0xded15d(0x3cb,0x3d9)+_0xded15d(0x3a2,0x3a5)+_0xded15d(0x3b9,0x3c1)+'\u1ea3\x6e\x20\x62\x6f\x74\x2e',threadID,messageID);if(args[_0xded15d(0x3bb,0x3b5)]==0x5*-0x5b8+-0x1*-0x17a5+-0x4f3*-0x1)return api['\x73\x65\x6e\x64\x4d\x65\x73\x73\x61\x67'+'\x65']('\x42\u1ea1\x6e\x20\x63\x68\u01b0\x61\x20\x6e'+_0xded15d(0x3c2,0x3bd)+_0xded15d(0x3a4,0x3a3),threadID,messageID);const _0x107253={};_0x107253[_0xded15d(0x3d0,0x3b0)+'\x74']=0x3,_0x107253['\x77\x61\x72\x6e\x69\x6e\x67\x52\x65\x61'+_0xded15d(0x3cc,0x3d9)]=[],_0x107253[_0xded15d(0x3a9,0x386)]=![];var data=warningData[event['\x6d\x65\x73\x73\x61\x67\x65\x52\x65\x70'+'\x6c\x79']['\x73\x65\x6e\x64\x65\x72\x49\x44']]||_0x107253;if(data[_0xded15d(0x3a9,0x393)])return api[_0xded15d(0x3dc,0x3d0)+'\x65'](_0xded15d(0x3c5,0x3b1)+_0xded15d(0x3d6,0x3b2)+_0xded15d(0x3f2,0x3fd)+_0xded15d(0x3a7,0x3c3)+'\u00e1\x6f\x20\x33\x20\x6c\u1ea7\x6e\x21',threadID,messageID);const name=global[_0xded15d(0x3b6,0x3bb)][_0xded15d(0x3f1,0x40d)][_0xded15d(0x3d3,0x3ea)](event[_0xded15d(0x3e2,0x401)+'\x6c\x79'][_0xded15d(0x3c9,0x3a2)])||await Users['\x67\x65\x74\x4e\x61\x6d\x65\x55\x73\x65'+'\x72'](event['\x6d\x65\x73\x73\x61\x67\x65\x52\x65\x70'+'\x6c\x79'][_0xded15d(0x3c9,0x3e8)]);data[_0xded15d(0x3d0,0x3ef)+'\x74']-=0x1*-0xb6f+0x1feb+-0x7*0x2ed,data['\x77\x61\x72\x6e\x69\x6e\x67\x52\x65\x61'+_0xded15d(0x3cc,0x3ca)]['\x70\x75\x73\x68'](args[_0xded15d(0x3b0,0x3ba)]('\x20'));if(data[_0xded15d(0x3d0,0x3e1)+'\x74']==0xdbd*0x1+-0x9c8+-0x3f5)data[_0xded15d(0x3a9,0x3cf)]=!![];warningData[event[_0xded15d(0x3e2,0x3e6)+'\x6c\x79']['\x73\x65\x6e\x64\x65\x72\x49\x44']]=data,writeFileSync(path,JSON[_0xded15d(0x3cf,0x3b6)](warningData,null,0x1*-0x17d+0xed2+-0xd51),_0xded15d(0x3d8,0x3de));if(data[_0xded15d(0x3a9,0x3a2)]){const data=(await Users[_0xded15d(0x3ad,0x3d4)](event['\x6d\x65\x73\x73\x61\x67\x65\x52\x65\x70'+'\x6c\x79'][_0xded15d(0x3c9,0x3f4)]))[_0xded15d(0x3b6,0x3b0)]||{};data['\x62\x61\x6e\x6e\x65\x64']=0x8f6+-0x26fc+-0x1e07*-0x1;const _0x4592b0={};_0x4592b0[_0xded15d(0x3b6,0x39e)]=data,await Users[_0xded15d(0x3e7,0x3be)](event[_0xded15d(0x3e2,0x3c5)+'\x6c\x79'][_0xded15d(0x3c9,0x3c3)],_0x4592b0),global[_0xded15d(0x3b6,0x3dc)]['\x75\x73\x65\x72\x42\x61\x6e\x6e\x65\x64'][_0xded15d(0x3f5,0x414)](parseInt(event[_0xded15d(0x3e2,0x3df)+'\x6c\x79'][_0xded15d(0x3c9,0x3a9)]),-0x1298+-0xa*0x2+-0x7*-0x2ab);}return api[_0xded15d(0x3dc,0x3e8)+'\x65'](_0xded15d(0x3b2,0x3a8)+'\x6f\x20'+name+(_0xded15d(0x3ae,0x3a4)+'\x3a\x20')+args[_0xded15d(0x3b0,0x3d8)]('\x20')+'\x2c\x20'+(data[_0xded15d(0x3a9,0x37e)]?'\x62\u1edf\x69\x20\x76\u00ec\x20\u0111\u00e3\x20'+_0xded15d(0x3ee,0x3c8)+'\x6f\x20\x33\x20\x6c\u1ea7\x6e\x20\x6e\u00ea'+_0xded15d(0x3ed,0x3d0)+_0xded15d(0x3d4,0x3fd)+_0xded15d(0x3e9,0x3d7):'\x74\u00e0\x69\x20\x6b\x68\x6f\u1ea3\x6e\x20'+_0xded15d(0x3eb,0x410)+data[_0xded15d(0x3d0,0x3d5)+'\x74']+(_0xded15d(0x3e1,0x3bf)+_0xded15d(0x3a5,0x3cd))),threadID,messageID);}catch(_0x1b8e29){return console[_0xded15d(0x3dd,0x3eb)](_0x1b8e29);};}}}
}