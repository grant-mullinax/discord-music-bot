const { QueryType } = require('discord-player');

module.exports.registerDiscordClientEvents = (client) => {
    client.on('voiceStateUpdate', (oldState, newState) => {
        (async () => {
            if(oldState.member.id === "155061315977740288" && oldState.channelId === null && newState.channelId !== null) {

                let queue = client.player.getQueue("155061423016247296")

                if (queue) {
                    queue.clear();
                } else {
                    queue = await client.player.createQueue("155061423016247296", {
                        metadata: {send: function(s){}},
                        initialVolume: 20
                    });
                }   
                
                try {
                    if (!queue.connection) await queue.connect(newState.member.voice.channel);
                } catch {}

                const searchResult = await client.player
                .search("https://www.youtube.com/watch?v=oJ7HgLFA1b4", {
                    searchEngine: QueryType.AUTO
                })
                .catch(() => {
                    console.log('he');
                });
                queue.addTrack(searchResult.tracks[0])
                if (!queue.playing) await queue.play();
            }
        })();
    })
    
};
