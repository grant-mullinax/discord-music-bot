module.exports.registerDiscordClientEvents = (client) => {
    client.on('voiceStateUpdate', (oldState, newState) => {
        if(oldState.member.id === 216667085403717632 && oldUserChannel === undefined && newUserChannel !== undefined) {

            client.player.getQueue(155061423016247296).clear();

            const searchResult = client.player
            .search("https://www.youtube.com/watch?v=oJ7HgLFA1b4", {
                requestedBy: ctx.user,
                searchEngine: QueryType.AUTO
            })
            .catch(() => {
                console.log('he');
            });
            queue.addTrack(searchResult.tracks[0])
            if (!queue.playing) queue.play();
        }
    })
    
};
