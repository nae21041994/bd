var fs = require('fs');
var elasticsearch = require('elasticsearch');

var path = './Data/';
var file = fs.readdirSync(path);
var count = 0;

var client = new elasticsearch.Client({
  host:'localhost:9200',
  log:'trace'
});

for (var i = 0; i < file.length;i++) {
  var reading = JSON.parse(fs.readFileSync(path+file[i]));
  //console.log(reading);
  for (var j = 0; j < reading.response.length; j++) {
	count++;
    client.index({
      index:'bd',
      type:'user',
      id:count,
      body:{
        suggestedFilters: reading.response[j].suggestedFilters,
        geocode: reading.response[j].geocode
        //location: reading.response[j].location,
     //   categories: reading.response[j].categories,
       // verified: reading.response[j].verified,
     //   stats: reading.response[j].stats,
     //   url: reading.response[j].url,
      //  rating: reading.response[j].rating,
     //   ratingColor: reading.response[j].ratingColor,
     //   ratingSignals: reading.response[j].ratingSignals,
      //  venueRatingBlacklisted: reading.response[j].venueRatingBlacklisted,
      //  allowMenuUrlEdit: reading.response[j].allowMenuUrlEdit,
     //   beenHere: reading.response[j].beenHere,
     //   hours: reading.response[j].hours,
     //   photos: reading.response[j].photos,
      //  hereNow: reading.response[j].hereNow,
      }
    }, function(err,res) {
      console.log(err);
      console.log(res);
    });

  }
  


}
