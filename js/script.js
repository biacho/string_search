const form = document.getElementById('search_form');
const inputs = form.elements;
const resultsList = document.getElementById('resultsList');


form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const keywords = keywords_extract(inputs["keywords"].value);
  
  keywords.forEach(function(item) {
    if(item.startsWith('mod_'))
    {
      let contain = checkIfContains(inputs["full_txt"].value, item);

      $('#resultsList').append("<li class='list-group-item'>" + item + ", " + contain + "</li>");
    }
  });
});

var clear_btn = document.getElementById('clear_btn');
clear_btn.onclick = function() {
  $('#full_txt').val('');
  $('#keywords').val('');
  $('li').remove();
}

function checkIfContains(str, keyword)
{
  let keywordLength = keyword.length;
  let keywordPlace = str.search(keyword);

  if(keywordPlace >= 0 && str.substring(keywordPlace + keywordLength, keywordPlace + keywordLength + 1) === " ")
  {
    return 'FOUND';
  } 
  return 'NOT FOUND';
}

function keywords_extract(input)
{
  const keywordsArr = input.split(/[\s,]+/);
  return keywordsArr;
}
