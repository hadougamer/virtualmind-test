const PlayerServicePromise = {
    getPlayerTeamId: ( playerId ) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "/player/" + playerId + "/team",
                done: ( team ) => {
                    resolve(team.id);
                },
                fail: ( error ) => {
                    reject(error);
                }
            });
        });
    },
    getPlayers: ( teamId ) => {
        return new Promise((resolve, reject) => {
            $.ajax({
                url: "/team/" + teamId + "/player",
                done: ( players ) => {
                    resolve( players );
                },
                fail: ( error ) => {
                    reject(error);
                }
            });
        });
    }
};

export default PlayerServicePromise;