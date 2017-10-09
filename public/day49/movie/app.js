$(document).ready(function() {


  var popularityUrl = `https://api.themoviedb.org/3/discover/movie?api_key=8138eee3e67e1ddc90b9327672808a7d&sort_by=popularity.desc`;
  var latestUrl = `https://api.themoviedb.org/3/movie/now_playing?api_key=8138eee3e67e1ddc90b9327672808a7d&language=en-US&page=1`;

  $.ajax({
    type:"GET",
    url:popularityUrl,
    async:false,
    dataType:"json",
    success: function(data){
      var result = data.results;
      $('#popularity').html('');

      for(var i = 0; i < result.length; i++){
        $('#popularity').append(
          `
          <div class="col-md-4 movie">
              <img src="https://image.tmdb.org/t/p/w185/${result[i].poster_path}"></img>
            </br>
              <strong class="title">${result[i].title}</strong>

              </br>
              <button class="details" value=${result[i].id}>Details</button>
          </div>
          `
        );
      }

      //picture https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg


    },
    error: function(e){
      alert("Error");
    }
  });




  $.ajax({
    type:"GET",
    url:latestUrl,
    async:false,
    dataType:"json",
    success: function(data){
      var result = data.results;

      $('#popularity').append(`
        <div class="col-md-12"><h2 style="border-bottom-style:inset; color: #757575;"">Latest Movies</h2></div>

      `);

      for(var i = 0; i < result.length; i++){
        $('#popularity').append(
          `
          <div class="col-md-4 movie">
              <img src="https://image.tmdb.org/t/p/w185/${result[i].poster_path}"></img>
              </br>
              <strong class="title">${result[i].title}</strong>

              </br>
              <button class="details" value=${result[i].id}>Details</button>
          </div>
          `
        );
      }

      //picture https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg


    },
    error: function(e){
      alert("Error");
    }
  });






  // handle search

  $('#search').click(function(){
    var searchTerm = $('#searchTerm').val();

    $( "#popularity" ).fadeIn();

    $( "#trendingTitle" ).hide();


    var url = `https://api.themoviedb.org/3/search/movie?api_key=8138eee3e67e1ddc90b9327672808a7d&query=${searchTerm}`;

    $.ajax({
      type:"GET",
      url:url,
      async:false,
      dataType:"json",
      success: function(data){
        var result = data.results;
        $('#popularity').html('');

        for(var i = 0; i < result.length; i++){
          $('#popularity').append(
            `
            <div class="col-md-4 movie">
                <img src="https://image.tmdb.org/t/p/w185/${result[i].poster_path}"></img>
                </br>
                <strong class="title">${result[i].title}</strong>

                </br>
                <button class="details" value=${result[i].id}>Details</button>
            </div>
            `
          );
        }

        //picture https://image.tmdb.org/t/p/w500/kqjL17yufvn9OVLyXYpvtyrFfak.jpg


      },
      error: function(e){
        alert("Error");
      }
    });



    //search movie details handling

    $('.details').click(function(data){
      var movieId = data.target.value;

      $( "#popularity" ).fadeOut( "slow", function() {
        // Animation complete.
      });

      $(".credit").hide();

      $( "#trendingTitle" ).fadeOut( "slow", function() {
        // Animation complete.
      });



      var detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8138eee3e67e1ddc90b9327672808a7d&language=en-US`;


      $.ajax({
        type:"GET",
        url:detailsUrl,
        async:false,
        dataType:"json",
        success: function(data){

          $('#movieDetails').html('');


            $('#movieDetails').append(
              `
              <h1>${data.original_title}(${data.release_date[0]}${data.release_date[1]}${data.release_date[2]}${data.release_date[3]})</h1>
              <h2>Score: ${data.vote_average}/10</h2>

              <div class="col-md-4">
                  <img src="https://image.tmdb.org/t/p/w300/${data.poster_path}"></img>
                  </br>

              </div>
              `


            );



            $('#movieDetails').append(
              `
            </br>
            </br>


            <p>  Description: ${data.overview}</p>
            <p>  Run time: ${data.runtime}mins </p>
            <p>  Language: ${data.original_language} </p>
            <p>  Release Date: ${data.release_date}</p>
            <p>  Production countries: ${data.production_countries[0].name} </p>
              `
            );

            for(var i =0; i < data.genres.length; i++){

                if(i === 0){
                  $('#movieDetails').append(`Genre: ${data.genres[i].name}`);
                }else{
                  $('#movieDetails').append(` ${data.genres[i].name}`);
                }


            }

            for(var i =0; i < data.production_companies.length; i++){

              if(i === 0){
                $('#movieDetails').append(`</br>`);
                $('#movieDetails').append(`Producer: ${data.production_companies[i].name}`);
              }else{
                $('#movieDetails').append(` ${data.production_companies[i].name}`);
              }


            }






        },
        error: function(e){
          alert("Error");
        }
      });

    });

  });


  //movie details handling

  $('.details').click(function(data){
    var movieId = data.target.value;

    $( "#popularity" ).fadeOut( "slow", function() {
      // Animation complete.
    });

    $(".credit").hide();

    $( "#trendingTitle" ).fadeOut( "slow", function() {
      // Animation complete.
    });

    var detailsUrl = `https://api.themoviedb.org/3/movie/${movieId}?api_key=8138eee3e67e1ddc90b9327672808a7d&language=en-US`;


    $.ajax({
      type:"GET",
      url:detailsUrl,
      async:false,
      dataType:"json",
      success: function(data){

        $('#movieDetails').html('');

          $('#movieDetails').append(
            `
            <h1>${data.original_title}(${data.release_date[0]}${data.release_date[1]}${data.release_date[2]}${data.release_date[3]})</h1>
            <h2>Score: ${data.vote_average}/10</h2>

            <div class="col-md-4">
                <img src="https://image.tmdb.org/t/p/w300/${data.poster_path}"></img>
                </br>

            </div>
            `
          );



          $('#movieDetails').append(
            `
          </br>
          </br>


          <p>  Description: ${data.overview}</p>
          <p>  Run time: ${data.runtime}mins </p>
          <p>  Language: ${data.original_language} </p>
          <p>  Release Date: ${data.release_date}</p>
          <p>  Production countries: ${data.production_countries[0].name} </p>
            `
          );

          for(var i =0; i < data.genres.length; i++){
              
              if(i === 0){
                $('#movieDetails').append(`Genre: ${data.genres[i].name}`);
              }else if(i === data.genres.length - 1){
                $('#movieDetails').append(`${data.genres[i].name}  </p>`);
              }
              else{
                $('#movieDetails').append(` ${data.genres[i].name} `);
              }


          }

          for(var i =0; i < data.production_companies.length; i++){

            if(i === 0){

              $('#movieDetails').append(`Producer: ${data.production_companies[i].name}`);
            }else{
              $('#movieDetails').append(` ${data.production_companies[i].name}`);
            }


          }






      },
      error: function(e){
        alert("Error");
      }
    });

  });




  $('#searchTerm').keypress(function(key){
    if(key.which === 13){
      $('#search').click();
    };
  })


});
