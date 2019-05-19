# ny-Times
Get the most popular articles in NY-Times 

* It's a simple app bult with the React Framework to get the NY Times Most Popular Articles  and show a list of articles,
This app deal in CLIENT side only.
So I created the App using create-react-app command, and I create three components: 
    ` Default component <App /> , which is my container component`
    1. Article component <Article /> , this is a stateful comonent which contain my core state.
    2. Article component <ArticleList  /> , which is a UI component `stateless`.
    3. Navbar componet <Navbar />, also a stateless component.
    and I fetch the data using NY-Time API.
* Style: I used a pure CSS, and make it as much as mobile responsoble.
* Time: It takes about four hours.

 
# To run the app:
    - clone it
    - npm install 
then >

# npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits.
You will also see any lint errors in the console.

# npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

# npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

# npm run eject
Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
