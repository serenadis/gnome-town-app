### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

### MY ASSUMPTIONS:

1) I assume that the backend API calls would have this structure:
    getProfiles -> I will get only the list of the gnomes (names and thumbnails)
    getProfileById -> I will get the profile information of each gnome (name, age, weight, height, hair color, professions, friends with their id, name, thumbnails)

2) I assume that the I have another API (getProfessions) that returns all the possible professions and related icons or im.

