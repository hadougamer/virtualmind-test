import $ from 'jquery'; 

const PlayerServiceAsync = {
    getPlayerTeamId: async ( playerId ) => {
        let response = await $.ajax({
            dataType : 'json',
            url: "http://localhost:9500/player/" + playerId + "/team"
        });

        return response.team_id;
    },
    getPlayers: async ( teamId ) => {
        let response = await $.ajax({
            dataType : 'json',
            url: "http://localhost:9500/team/" + teamId + "/player"
        });
        
        return response;
    }
};

export default PlayerServiceAsync;