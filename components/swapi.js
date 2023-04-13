import { keys } from '../components/keys.js';

// Search SWAPI by category based on user input string and language
export const fetchItems = async (search, category, language, page) => {
  let url = 'https://swapi.dev/api/' + category + '/';

  if (search !== '' && search !== 'undefined') {
    url += '?search=' + search + '&';
  } else {
    url += '?';
  }

  if (language === 'Wookiee') {
    url += 'format=wookiee&';
  }

  url += 'page=' + page;

  try {
    // Extract results from repsponse
    let response = await fetch(url);
    let json = await response.json();
    let items = json[keys[language].results];
    return items;
  } catch (err) {
    // Fix error in SAPI API (invalid json) [page: 1, format: Wookiee]
    if (err.message.startsWith('Unexpected token w in JSON')) {
      let response = await fetch(url);
      let text = await response.text();
      // Replace unquoted value "whhuanan"
      // (globally as it occurs more than once in species!)
      text = JSON.parse(text.replace(/:whhuanan,/g, ':"whhuanan",'));
      let items = text[keys[language].results];
      console.log('RESULTS', items);
      return items;
    }
    // Otherwise, return error
    throw new Error(err.message);
  }
};
