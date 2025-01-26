import { describe, it, expect, beforeEach, vi } from 'vitest';
import { createTestingPinia } from '@pinia/testing';
import { movieStore } from '@/stores/movies';
import { searchMovie } from '@/API/OMDb_API';

vi.mock('@/API/OMDb_API', () => ({
  searchMovie: vi.fn(),
}));

describe('Movie Store', () => {
  let store;

  beforeEach(() => {
    document.body.innerHTML = `
      <div id="moviePopup" style="display: none;"></div>
      <img id="moviePoster" />
      <div id="movie-title"></div>
      <div id="date-number"></div>
      <div id="day"></div>
      <div id="time-range"></div>
      <div id="synopsis-text"></div>
      <img id="testPoster" />
    `;

    const pinia = createTestingPinia({
      initialState: {
        movies: {
          selectedMovies: ["The Lodger", "Nosferatu", "Metropolis", "General", "The Kid"],
          movieYears: ["1927", "1922", "1927", "1926", "1921"],
          movieSynopsis: [
            "The Lodger synopsis...",
            "Nosferatu synopsis...",
            "Metropolis synopsis...",
            "General synopsis...",
            "The Kid synopsis...",
          ],
          timeInfo: ["11/Saturday/19:00", "11/Saturday/21:00", "11/Saturday/22:00", "12/Sunday/15:00", "12/Sunday/18:00"],
          focusedMovie: 0,
          focusedPoster: "",
          popupVisible: false,
        },
      },
      createSpy: vi.fn,
      stubActions: false,
    });

    store = movieStore(pinia);
  });

  it('should toggle the popup visibility using getMovieInfo', async () => {
    const mockMovieData = {
      movieData: {
        Poster: 'test-poster-url',
      },
    };

    searchMovie.mockResolvedValueOnce(mockMovieData);

    const getMovieInfo = store.getMovieInfo;
    await getMovieInfo("The Lodger", "1927", 0);

    expect(searchMovie).toHaveBeenCalledWith("The Lodger", "1927");
    expect(document.getElementById('moviePopup').style.display).toBe('flex');
    expect(document.getElementById('moviePoster').src).toContain('test-poster-url');
    expect(document.getElementById('movie-title').textContent).toBe("The Lodger");
    expect(document.getElementById('date-number').textContent).toBe("11");
    expect(document.getElementById('day').textContent).toBe("Saturday");
    expect(document.getElementById('time-range').textContent).toBe("19:00");
    expect(document.getElementById('synopsis-text').textContent).toBe("The Lodger synopsis...");
  });

  it('should fetch and update the movie poster using getMoviePoster', async () => {
    const mockMovieData = {
      movieData: {
        Poster: 'test-poster-url',
      },
    };

    searchMovie.mockResolvedValueOnce(mockMovieData);

    const getMoviePoster = store.getMoviePoster;
    await getMoviePoster("The Kid", "1921", "testPoster");

    expect(searchMovie).toHaveBeenCalledWith("The Kid", "1921");
    expect(document.getElementById('testPoster').src).toContain('test-poster-url');
  });

  it('should change the focused movie using changeFocusedMovie action', () => {
    expect(store.focusedMovie).toBe(0);

    store.changeFocusedMovie(3);

    expect(store.focusedMovie).toBe(3);
  });
});
