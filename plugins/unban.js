const handler = async (m) => {
  global.db.data.chats[m.chat].isBanned = false;
  m.reply("The chat has been unbanned."); 
};

handler.help = ['unbanchat'];
handler.tags = ['owner'];
handler.command = /^unbanchat$/i;
handler.rowner = true;

export default handler;
