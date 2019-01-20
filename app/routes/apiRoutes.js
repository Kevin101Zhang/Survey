var PotentialCandidates = require("../data/friends");
module.exports = function (app) {

    app.get("/api/friends", function (req, res) {
        res.json(PotentialCandidates);
    });

    app.post("/api/friends", function (req, res) {

        var bestMatch = {
            entryFirstName: "",
            entryLastName: "",
            friendDifference: Infinity
        };

        var newPerson = req.body;
        var newPersonsScores = newPerson.entryScores;
        var differenceInScore;

        for (var x = 0; x < PotentialCandidates.length; x++) {
            var potentialMatch = PotentialCandidates[x];
            differenceInScore = 0;

            for (var y = 0; y < potentialMatch.entryScores.length; y++) {
                var currentPotentialMatch = potentialMatch.entryScores[y];
                var currentNewPersonScores = newPersonsScores[y];
                differenceInScore += Math.abs(parseInt(currentNewPersonScores) - parseInt(currentPotentialMatch));
            }
            if (differenceInScore <= bestMatch.friendDifference) {
                bestMatch.entryFirstName = potentialMatch.entryFirstName;
                bestMatch.entryLastName = potentialMatch.entryLastName;
                bestMatch.friendDifference = differenceInScore;
            }
        }
        PotentialCandidates.push(newPerson);
        res.json(bestMatch);
    });
};