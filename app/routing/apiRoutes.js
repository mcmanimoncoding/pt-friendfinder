let friends = require("../data/friends.js");

module.exports = function (app){
    app.get("/api/friends", function(req,res){
        res.json(friends);
    });

    app.post("/api/friends", function(req,res){
        console.log(req.body)

        //create variable for inserting best match
        let user = req.body;
        let userScore = user.scores;
        let relativeFriendScore;
        let scoreDiff = 0;
        let bestFriend = {
            name: "",
            photo: "",
            difference: ""
        }

        console.log(userScore);

        
        // friends.forEach(function, (friend, i))
        for (var i = 0; i<friends.length; i++){
            console.log(friends[i]);
            let relativeFriendScore = 0;
            
            for (var x = 0; x<friends[i].scores[x]; x++){
                relativeFriendScore += Math.abs(parseInt(userScore[x]) - parseInt(friends[i].scores[x]));
                
                if (relativeFriendScore <= bestFriend.difference){
                    bestFriend.name = friends[i].name;
                    bestFriend.photo = friends[i].photo;
                    bestFriend.difference = relativeFriendScore;
                }
            }

        }

    })

    friends.push(user);
    res.json(bestFriend);

    
}

