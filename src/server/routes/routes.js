import { getLyric, searchTrack } from "api/server";

module.exports = (app) => {
  app.get("/search-tracks/:search/:sort", (req, res) => {
    const { search, sort } = req.params;

    searchTrack(search, sort)
      .then(
        (response) =>
          response.status === 200 &&
          res.send(response.data.message.body.track_list)
      )
      .catch((error) => console.log(error));
  });

  app.get("/track-liryc/id/:id", (req, res) => {
    const { id } = req.params;

    getLyric(id)
      .then(
        (response) =>
          response.status === 200 && res.send(response.data.message.body.lyrics)
      )
      .catch((error) => console.log(error));
  });
};
