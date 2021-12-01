var PlayerService = {
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

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: function() {
        try {
            PlayerService.getPlayerTeamId( this.playerId )
            .then((team_id) =>{
                PlayerService.getPlayers(team_id)
                .then((players) => {
                    // Render Players
                    console.log(players);
                }).catch((error) => {
                    console.log(error);
                    throw new Error("Error on get players");
                })
            })
            .catch((error) => {
                console.log(error);
                throw new Error("Error on load Team");
            });
        } catch( error ) {
            console.log(error);
        }
    }
};