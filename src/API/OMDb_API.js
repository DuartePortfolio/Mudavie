// Base URL for OMDb API
const apiBaseMovieUrl = 'https://www.omdbapi.com';
const apiBasePosterUrl = 'https://img.omdbapi.com';

// Your OMDb API key
const apiKey = '6bc669ce';

// The `get` function to fetch data from OMDb API
export async function get(apiBaseMovieUrl, endpoint) {
    try {
        const response = await fetch(`${apiBaseMovieUrl}/${endpoint}`);
        return handleResponse(response);
    } catch (error) {
        console.error(`Error fetching ${endpoint}:`, error);
        throw error;
    }
}

// Helper function for handling responses
async function handleResponse(response) {
    if (!response.ok) {
        const errorMessage = await response.text();
        throw new Error(
            `API request failed with status ${response.status}: ${errorMessage}`
        );
    }
    const data = await response.json();
    return data;
}

// Function to search for a movie by title
export async function searchMovie(movieTitle, movieYear) {
    const endpoint = `?t=${movieTitle}&y=${movieYear}&apikey=${apiKey}`;
    try {
        const movieData = await get(apiBaseMovieUrl, endpoint);
        // document.getElementById("poster1").src = data
        // document.getElementById("poster2").src = data
        // document.getElementById("poster3").src = data
        
        return{
            movieData
        }
    } catch (error) {
        console.error("Failed to fetch movie data:", error);
    }
}


// Example usage of the `searchMovie` function
// searchMovie('Inception').then(movieData => {
//     if (movieData && movieData.Response === 'True') {
//         console.log('Movie found:', movieData);
//         // Output some movie data (Title, Year, Genre, etc.)
//         console.log(`Title: ${movieData.Title}`);
//         console.log(`Year: ${movieData.Year}`);
//         console.log(`Genre: ${movieData.Genre}`);
//         console.log(`Plot: ${movieData.Plot}`);
//     } else {
//         console.log('Movie not found or there was an error.');
//     }
// });
