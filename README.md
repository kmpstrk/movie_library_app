# The Movie Library App
The Movie Library App is a movie library that allows users to search for movies using the TMDB API and view movie details in a simple, interactive interface. The app leverages HTML, CSS, TypeScript and React to provide a responsive user experience.

## How I worked on this project
* API Integration: Integrated with the TMDB API to fetch movie data.
* Responsive UI: User-friendly interface to interact with the movie library, enabling users to search movies on phones, tablets and desktops.
* Code Structuring: Organized the project into modules and packages.

## If I had more time I would change this
* Add Tests to cover the functionalities. That would increase the reliability of the application.
* Improve Error Handling. The current error handling could be made more robust.

## How to setup the project
To run this project, you need to provide your own API key for TMDB (The Movie Database). 

### Step 1: Obtain an API Key

1. Go to [The Movie Database (TMDB) website](https://www.themoviedb.org/).
2. Sign in or create a new account if you don't have one.
3. Navigate to your account settings and find the "API" section.
4. Generate a new API key.

### Step 2: Update the API Key in the Code

Once you have your API key, you need to replace the placeholder key in the `AxiosConfig.tsx` file.

1. Open the `src/scripts/AxiosConfig.tsx` file in your code editor.
2. Locate the line that looks like this:

   ```typescript
   params: {
          api_key: 'YOUR_API_KEY_HERE'
        }


### Step 2: Run the app

Link: https://kmpstrk.github.io/movie_library_app/

In the project directory, you can run:

#### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
