const express = require('express');
var cors = require('cors');
const bodyParser  = require('body-parser');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

app.get('/player/8/team', (req, res) => {
    res.json({
      "team_id": 10,
      "team_name": "My Team"
  });
});

app.get('/team/10/player', (req, res) => {
   res.json( [
      {
          "id": 2,
          "name": "Seyia"
      },
      {
          "id": 4,
          "name": "Shun"
      },
      {
          "id": 6,
          "name": "Shiryu"
      },
      {
          "id": 8,
          "name": "Hyoga"
      },
      {
          "id": 10,
          "name": "Ikki"
      }
   ]);
});

app.listen( 9500, () => {
    console.log(`listening at http://localhost:9500`);
})