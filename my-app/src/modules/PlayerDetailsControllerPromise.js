import PlayerServicePromise from './PlayerServiceAsync';
let PlayerService = PlayerServicePromise;

const PlayerDetailsControllerAsync = {
    playerId: 8,
    showTeammatesClick: async function() {
        try {
            let team_id = await PlayerService.getPlayerTeamId( this.playerId );
            return await PlayerService.getPlayers(team_id);
        } catch( error ) {
            //console.log(error);
        }
    }
};

export default PlayerDetailsControllerAsync;