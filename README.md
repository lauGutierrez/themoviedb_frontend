# Filmix (The Movie Database API frontend)



## About this project

### What is it?

A very simple web application, where you will be able to visually recover information about movies and TV series included in "The Movie Database API".

### Purpose

Created as a practice in the context of the [GeeksHubs Academy's Frontend React Developer](https://geekshubsacademy.com/producto/frontend-react/) Bootcamp.



## Overview

### Features briefing

This is what is included:

* **Display information about movies**. The most popular movies are displayed by default. Movies can be filtered by genre and by a search text. For each movie, its title, overview and poster is displayed.
* **Display information about series**. The most popular series are displayed by default. Movies can be filtered by genre and by a search text. For each movie, its title, overview and poster is displayed.
* **Available in English and Spanish**. Language is auto-detected from the browser.
* **Responsive**. An UI inspired by *Netflix*, the popular streaming service, designed with the aim to be responsive.

### Main dependencies

In this section the main dependencies of this project are highlighted.

| Package                                                      | Purpose                                                      |
| ------------------------------------------------------------ | ------------------------------------------------------------ |
| [@mui/material](https://www.npmjs.com/package/@mui/material) | A library of *React UI* components used to build the interface. |
| [redux](https://www.npmjs.com/package/redux)<br />[react-redux](https://www.npmjs.com/package/react-redux) | A library used to apply a pattern to manage the state of the application in a centralized way, instead of creating an individual state for each component. |
| [react-router-dom](https://www.npmjs.com/package/react-router-dom) | A routing library used to configure the navigation within the application without reloads |
| [i18next](https://www.npmjs.com/package/i18next)<br />[i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector) | A framework used for internationalization. This way the application can be displayed in Spanish or English, depending on the language detected in the browser. |
| [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom)<br />[@testing-library/react](https://www.npmjs.com/package/@testing-library/react)<br />[@testing-library/user-event](https://www.npmjs.com/package/@testing-library/user-event)<br />[jest-axe](https://www.npmjs.com/package/jest-axe)<br /> | A set of libraries to facilitate components testing. In the project some unit tests, integration tests and tests to check accessibility can be found. |
| [react-intersection-observer](https://www.npmjs.com/package/react-intersection-observer) | A library that simplifies the management of Intersection Observer. It is required to detect when a user has reached the end of the page (which triggers the automatic load of a new page of results). |
|                                                              |                                                              |

### How the application looks

Follow these steps to test the application:

1. The home path is loading by default the movies tab. This is what is displayed by accessing "/" or "/movie" paths:

   ![Movies tab](./doc/images/movies_tab.png)

2. In order to acccess to TV series information, it is required to click on the *Series* tab, located at the top left of the header. This will route the application to "/tv".

   ![Series tab](./doc/images/series_tab.png)

3. Movies and TV series are displayed in the same way, so further descriptions can be applied to both views. There are two different options to search for items, both included in the header. The first option consist of selecting a specific genre. It should be highlighted that genres for movies and TV series are different.

   ![Filter by genre](./doc/images/filter_by_genre.png)

4. The other option is to filter by a specific search text, by typing the text in the input to the right. The match is tried against (original and translated) title and overview. It should be noted that it is not possible to apply both filters at the same time (this is a limitation of *TMDB* api), so if one filter is applied, the other is reset.

   ![Filter by search text](./doc/images/filter_by_search_text.png)

5. When a search is applied, the user is properly prompted in case that there are no results for the specific search text.

   ![No results](./doc/images/no_results.png)

6. When the view is initiated or when a search is applied, a skeleton-like loading state is properly prompted to let the user know that results are being recovered.

   ![Loading_results](./doc/images/loading_results.png)

7. Pagination is triggered depending on the scroll. The next page is recovered and displayed automatically when the pagination text (at the bottom) is visible on the screen. Once the second page is visible, a "back to the top" button appears at the bottom right.

   ![Scroll paginator text](./doc/images/scroll_paginator_text.png)

8. This is how it looks automatic pagination.

   ![How scroll paginator looks](./doc/images/scroll_paginator.gif)

9. Regarding movies and TV series cards, they are highlighted on hover. Once clicked, a sidebar panel is opened to show more details.

   ![How item card detail looks](./doc/images/item_card_detail.gif)

### Implementation details

##### Movies vs TV Series

asdf

##### API calls

asdf

##### Why redux?

asdf

##### Testing



## How to execute

### Local environment

##### Start the application

After downloading this repository, in the project directory you can run: `npm start`

This will run the application in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

##### Test the application

3 sets of test are available (for testing series, movies and accessibility) a total of 18 tests. To run the test, execute: `npm test`

### Deployed version

This project has been deployed with the help of *Heroku* and is accessible here:

#### `https://laura-filmix.herokuapp.com/`

