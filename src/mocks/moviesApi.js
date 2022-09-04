const RESULTS_PER_PAGE = 20;
const TEST_POSTER_PATH = '/rugyJdeoJm7cSJL1q4jBpTNbxyU.jpg';

const getMostPopular = (page, item) => {
  return getMockItems(page, item, 'the most popular');
}

const getByGenre = (page, item) => {
  return getMockItems(page, item, 'the filtered by genre');
}

const getBySearchText = (page, item) => {
  return getMockItems(page, item, 'the filtered by search text');
}

const getMockItems = (page, item, filter) => {
  let movies = {
    "total": (page + 1) * RESULTS_PER_PAGE,
    "result": []
  };

  [...Array(RESULTS_PER_PAGE)].forEach((_, i) => {
    let id = page + i;
    movies['result'].push(
      {
        "id": id,
        "overview": `This is the overview text for ${filter} ${item} ${id}`,
        "poster_path": TEST_POSTER_PATH,
        "title": `This is the title text for ${filter} ${item} ${id}`
      }
    );
  });
}

const getMoviesGenres = () => {
  return {
    "result": [
      { "id": 1, "name": "Action" },
      { "id": 2, "name": "Adventure" },
      { "id": 3, "name": "Animation" },
      { "id": 4, "name": "Comedy" },
      { "id": 5, "name": "Crime" },
      { "id": 6, "name": "Documentary" },
      { "id": 7, "name": "Drama" },
      { "id": 8, "name": "Family" },
      { "id": 9, "name": "Fantasy" },
      { "id": 10, "name": "History" },
      { "id": 11, "name": "Horror" },
      { "id": 12, "name": "Music" },
      { "id": 13, "name": "Mystery" },
      { "id": 14, "name": "Romance" },
      { "id": 15, "name": "Science Fiction" },
      { "id": 16, "name": "TV Movie" },
      { "id": 17, "name": "Thriller" },
      { "id": 18, "name": "War" },
      { "id": 19, "name": "Western" }
    ],
    "total": null
  } 
}

const getSeriesGenres = () => {
  return {
    "result": [
      { "id": 1, "name": "Action & Adventure" },
      { "id": 2, "name": "Animation" },
      { "id": 3, "name": "Comedy" },
      { "id": 4, "name": "Crime" },
      { "id": 5, "name": "Documentary" },
      { "id": 6, "name": "Drama" },
      { "id": 7, "name": "Family" },
      { "id": 8, "name": "Kids" },
      { "id": 9, "name": "Mystery" },
      { "id": 10, "name": "News" },
      { "id": 11, "name": "Reality" },
      { "id": 12, "name": "Sci-Fi & Fantasy" },
      { "id": 13, "name": "Soap" },
      { "id": 14, "name": "Talk" },
      { "id": 15, "name": "War & Politics" },
      { "id": 16, "name": "Western" }
    ],
    "total": null
  }
}


export {
  getMostPopular,
  getByGenre,
  getBySearchText,
  getMoviesGenres,
  getSeriesGenres,
  TEST_POSTER_PATH
}
