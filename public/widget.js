const WIDGET_PREFIX = 'vyaguta-search-';
const INPUT_DIV_ID = WIDGET_PREFIX + 'input-container';
const INPUT_ELEMENT_ID = WIDGET_PREFIX + 'input';
const BUTTON_ELEMENT_ID = WIDGET_PREFIX + 'button';
const RESULTS_DIV_ID = WIDGET_PREFIX + 'results';
const LIST_ITEM_CLASS = WIDGET_PREFIX + 'search-result';

function getButton() {
  const button = document.createElement('BUTTON');
  button.innerHTML = 'Search';
  button.id = BUTTON_ELEMENT_ID;
  button.addEventListener('click', handleSearch);
  return button;
}

function getInputDiv() {
  const inputDiv = document.createElement('DIV');
  inputDiv.id = INPUT_DIV_ID;
  return inputDiv;
}

function getInput() {
  const inputElement = document.createElement('INPUT');
  inputElement.placeholder = 'Vyaguta Search';
  inputElement.id = INPUT_ELEMENT_ID;
  return inputElement;
}

function getResultsDiv() {
  const resultDiv = document.createElement('DIV');
  resultDiv.id = RESULTS_DIV_ID;
  return resultDiv;
}

function initializeWidget() {
  const parent = document.getElementById('vyaguta-widget');
  clearChildren(parent);
  const inputDiv = getInputDiv();
  const inputElement = getInput();
  const button = getButton();
  const resultsDiv = getResultsDiv();
  parent.appendChild(inputDiv);
  inputDiv.appendChild(inputElement);
  inputDiv.appendChild(button);
  parent.appendChild(resultsDiv);
}

function fetchSearchResults(term) {
  const url = `https://jsonmock.hackerrank.com/api/countries?page=25`;
  return fetch(url)
    .then((response) => response.json())
    .then((data) => data.data);
}

function getSearchResultDiv(data) {
  const aTag = document.createElement('A');
  aTag.className = LIST_ITEM_CLASS;
  aTag.innerHTML = data.name;
  aTag.target = '_blank';
  aTag.rel = 'noopener noreferrer';
  aTag.href = `https://en.wikipedia.org/wiki/${data.name}`;
  return aTag;
}

//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function clearChildren(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showSearchResults(countries) {
  const parent = document.getElementById(RESULTS_DIV_ID);
  clearChildren(parent);

  if (!countries.length) {
    parent.style.height = '0px';
    return;
  }

  parent.style.height = '200px';
  countries.forEach((data) => {
    const result = getSearchResultDiv(data);
    parent.appendChild(result);
  });
}

function handleSearch() {
  const inputElement = document.getElementById(INPUT_ELEMENT_ID);
  const searchText = inputElement.value;
  fetchSearchResults(searchText).then((data) => {
    showSearchResults(data);
  });
}

function destroy() {
  const parent = document.getElementById('vyaguta-widget');
  clearChildren(parent);
}

window.vyagutaSearch = {
  init: initializeWidget,
  destroy: destroy
};

console.log(window.vyagutaSearch, 'in script');
