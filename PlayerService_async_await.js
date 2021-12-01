var PlayerService = {
    getPlayerTeamId: async ( playerId ) => {
        let response = await $.ajax({
            url: "/player/" + playerId + "/team"
        });

        return response.team_id;
    },
    getPlayers: async ( teamId ) => {
        let response = await $.ajax({
            url: "/team/" + teamId + "/player",
        });
        
        return response;
    }
};

var PlayerDetailsController = {
    playerId: 8,
    showTeammatesClick: async function() {
        try {
            let team_id = await PlayerService.getPlayerTeamId( this.playerId );
            let players = await PlayerService.getPlayers(team_id);
            
            console.log( players );
        } catch( error ) {
            console.log(error);
        }
    }
};