# Final Project - SWAPI Browser

For the CS50m final project, I designed the **SWAPI Browser** which draws data
from the **S**tar **W**ars **API** via `network calls` to [SWAPI](https://swapi.dev/api/) which can 
be displayed in *English* or *Wookiee*. Note, that there is an [open issue](https://github.com/phalt/swapi/issues/100) with some network calls to SWAPI (in Wookiee format) which return invalid JSON formats. Hence, we added an extra check when such an error is thrown, sanitize the raw text, and then return the results (see `./components/swapi.js`).

The layout is composed of a `tab navigator`, with *Search* and *Translation* tabs, each of which hold `stack navigators` for the search/details and language option views (see `./components/Navigator.js`). 

Note, that for translation, we created two extra files to guide them App's theme and translation views.
The first file `./components/colors.js` merely is used to get the primary and secondary colors (to display inactive elements) according to the current language selected. The second file `./components/keys.js` is the main look-up point for the category views (people, planets, vehicles, and starships) as 
we use the same view for all languages but only insert from our fetched data according to the prescribed keys by the language dictionaries.  

As opposed to project 2 (Movie Browser), the state is now handled by `redux`. All redux orchestration files (action creators, reducers, store) can be found in a separate directory `./components/redux`. 

## Requirements
- Must use `redux`
- Must make at least one `network call`
- Must have at least one `stack navigator`
- Must have at least one `tab navigator`
- Must be at least as large in scope as the previous projects

## Getting Started
The SWAPI Browser, features several search categories: [People](https://swapi.dev/api/people), [planets](https://swapi.dev/api/planets), [species](https://swapi.dev/api/species), [vehicles](https://swapi.dev/api/vehicles) and [starships](https://swapi.dev/api/starships). These can be toggled via the icons above the search bar. Once selected,
you are now able to search within that category. By default, the search will be unrestricted and movies are listed and continoulsly loaded on scroll.

Another feature of the SWAPI Browser is the language setting. When switching to the language option view, at the bottom of the screen, one can choose between *English* and *Wookiee*. When changing the language *Wookiee*, the API calls now return with format *Wookiee*. For easier recognition, we also adjusted the inactive color (to brown) so that the use not only sees the translated text but can easily tell by the new theme/colors which language optoin has been selected.

**Have fun browsing...** and may the force be with you! <3
