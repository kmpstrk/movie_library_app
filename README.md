## Setup Instructions

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


## Run the app

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.
