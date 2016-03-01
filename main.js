$(document).ready(function(){
  cage.init
})

var Cage = {
  url: imdb.wemakesites.net/api/nm0000115,
  init: function(){
    cage.styling();
    cage.event();
  },
  styling function() {
    cage.getCageData
  },
  event function(){
  $('input[type="submit"]').on('click', function(event) {
   event.preventDefault();
   var searches = $('input[type="text"]').val();
   $('input[type="text"]').val("");
   cage.getCageData(searches);
 }),
},

cageTemplate: function(templateStr,data) {
    return _.template(templates[templateStr]);
},

getCageData: function(arrData) {
  return arrData.map(function(el) {
  return {
    title: el.data.title,
    year: el.data.year,
    info: el.data.info
  }
});
addPostsToDOM: function(templateStr, data, $target) {
    $target.html('');
    var cageTmpl = searchCage.cageTemplate(templateStr);
    var htmlStr = "";
    data.forEach(function(el) {
      htmlStr += cageTmpl(el);
    })
    $target.html(htmlStr);
  }
};

$.ajax({
    method: 'GET',
    url: cage.url,
    success: function() {
    var cageData = cage.getCageData(.data.filmography)
    cage.addPostsToDOM('searchCage',cageData,$('section.main-container'));
  }
});
