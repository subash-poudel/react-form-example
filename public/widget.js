const WIDGET_PREFIX = "vyaguta-search-";
const INPUT_ELEMENT_ID = WIDGET_PREFIX + "input";
const BUTTON_ELEMENT_ID = WIDGET_PREFIX + "button";
const RESULTS_DIV_ID = WIDGET_PREFIX + "results";

function getButton() {
  const button = document.createElement("BUTTON");
  button.innerHTML = "Search";
  button.id = BUTTON_ELEMENT_ID;
  button.addEventListener("click", handleSearch);
  return button;
}

function getInput() {
  const inputElement = document.createElement("INPUT");
  inputElement.placeholder = "Vyaguta Search";
  inputElement.id = INPUT_ELEMENT_ID;
  return inputElement;
}

function getResultsDiv() {
  const resultDiv = document.createElement("DIV");
  resultDiv.id = RESULTS_DIV_ID;
  return resultDiv;
}

function fetchSearchResults() {
  return fetch(
    "https://jsonmock.hackerrank.com/api/countries?page=24"
  ).then((response) => response.json());
}

function getSearchResultDiv(data) {
  const pTag = document.createElement("P");
  pTag.innerHTML = data;
  return pTag;
}

//https://stackoverflow.com/questions/3955229/remove-all-child-elements-of-a-dom-node-in-javascript
function clearChildren(parent) {
  if(!parent) {
    return;
  }
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }
}

function showSearchResults(countries) {
  const parent = document.getElementById(RESULTS_DIV_ID);
  clearChildren(parent);
  countries.forEach((data) => {
    const result = getSearchResultDiv(data);
    parent.appendChild(result);
  });
}

function handleSearch(e) {
  const inputElement = document.getElementById(INPUT_ELEMENT_ID);
  const searchText = inputElement.value;
  fetchSearchResults().then((data) => {
    const countries = data.data.map((d) => d.name);
    showSearchResults(countries);
  });
}

function initializeWidget() {
  const parent = document.getElementById("vyaguta-widget");
  // if called multiple times
  clearChildren(parent);
  const inputElement = getInput();
  const button = getButton();
  const resultsDiv = getResultsDiv();
  parent.appendChild(inputElement);
  parent.appendChild(button);
  parent.appendChild(resultsDiv);
}

function destroy() {
  const parent = document.getElementById("vyaguta-widget");
  clearChildren(parent)
}

window.vyagutaSearch = {
  init: initializeWidget,
  destroy: destroy
};

console.log(window.vyagutaSearch, 'in script')

// initializeWidget();
