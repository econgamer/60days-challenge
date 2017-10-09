var wordList = ["Gong Min-ji", "Kim Jonghyun", "Park Chanyeol", "Im Yoon-ah", "Taeyang", "Park Jin-Young", "Kim Hyun-ah",
"Kim tae-Yeon", "Lee Ji-eun", "G-Dragon"];


var randomNum = Math.floor((Math.random() * wordList.length));


function googleApiClientReady(){
                gapi.client.setApiKey('AIzaSyCTbA6E0CgSPuJfK9lJn0RiywnOwsO7XL0');
                gapi.client.load('youtube', 'v3', function() {
                        $('#search-button').attr('disabled', false);
                });
        }
        function search() {
                randomNum = Math.floor((Math.random() * wordList.length));
                var randomWords = wordList[randomNum];
                var q = $('#query').val();
                var dataTime = new Date();
                dataTime.setDate(1);
                var request = gapi.client.youtube.search.list({
                    q: randomWords,
                    part: 'snippet',
                    'type': 'video',
                    videoCategoryId: '10',
                    order: 'viewCount',
                    publishedAfter: '2017-01-01T00:00:00Z'
                });

                request.execute(function(response) {
                  var str = JSON.stringify(response.result);
                  var randomVideo = Math.floor((Math.random() * response.items.length));

                  var url = `https://www.youtube.com/embed/${response.items[randomVideo].id.videoId}`;
                  $('#search-container').html(`<iframe className="embed-responsive-item" src=${url}></iframe>`);
                });
        }




// After the API loads, call a function to enable the search box.
// function handleAPILoaded() {
//   $('#search-button').attr('disabled', false);
// }
//
// // Search for a specified string.
// function search() {
//   var q = $('#query').val();
//   var request = gapi.client.youtube.search.list({
//     key: 'AIzaSyCTbA6E0CgSPuJfK9lJn0RiywnOwsO7XL0',
//     q: q,
//     part: 'snippet'
//   });
//
//   request.execute(function(response) {
//     var str = JSON.stringify(response.result);
//     $('#search-container').html('<pre>' + str + '</pre>');
//   });
// }
