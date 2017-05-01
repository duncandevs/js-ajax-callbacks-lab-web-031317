// Display the collection of repositories inside the results div. Include repository name, description, and a link to the HTML URL. Also include repository owner login, repository owner avatar as an image, and a link to the owner's profile page. Hint: Pay close attention to the structure of the search results!
const $searchInput = $('input#searchTerms');
const $results = $('#results');
let url = "https://api.github.com/search/repositories?q="
function handlebarsSetup() {
  //put any handlebars setup in here
  Handlebars.registerPartial("userDetails", $("#user-details-partial").html())
}

function searchRepositories(){
  //make a call to the github api and return results
  //append url with search term
  var search = url+$searchInput.val();
  $.get(search , function(data){
    data.items.forEach(function(repo){
      // build out html elements, then append them to the dom one by one
      $results.append(
        `<ul>
          <li>
            <div>${repo.name}</div>
            <div>${repo.description}</div>
            <div>${repo.html_url}</div>
            <div>${repo.owner.login}</div>
            <img src=${repo.owner.avatar_url} alt="">
            <div>${repo.owner.html_url}</div>
            <a href="#" id="url" class="showcommit">show commit</a>
            <br><br>
          </li>
        </ul>`
      )
    })// end each
  }).fail(function(error){
    console.log('Something went wrong');
  });// end success fxn
}

function showCommits(){
  //define show commits here!
}
$(document).ready(function (){
  $('body').on('click','.showcommit', function(){
    showCommits()
  });
});
