var PlayerService = {
    getPlayerTeamId: async ( playerId ) => {
        let response = await $.ajax({
            url: "/player/" + playerId + "/team"
        });

        return response;
    },
    getPlayers: ( teamId ) => {
        let response = await $.ajax({
            url: "/team/" + teamId + "/player",
        });
        
        return response;
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