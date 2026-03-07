# DevTinder
 
- Create a vite + React application
- Install Tailwind CSS
- Install DaisyUI 
- Add navbar components to app.jsx
- Create a NavBar.jsx separate component file and link it to the App.jsx
- Install react-rouoter-dom
- Create BrowseRouter > Routes > Route=/ Body > RouteChildren
- Create an outlet in your Body component
- Create a footer component
- Create a Login Page
- Install axios, AXIOS: is a npm library used for HTTP methods

- CORS - install cors in backend => Add middleware with configurations: origin , credentials:true
- In frontEnd - Login page => add {withCredentials: true}
- Install react-redux + reduxjs/toolkit

- react-redux : it connects react to redux through useSelector() -> takes data & useDispatch() -> update states
- redux-toolkit : it is a modern simplified version of redux and it reduces boilerplate, gives createSlice -> handle features and defines
- state + reducers, gives configureStore -> handles whole app and combine all reducers

- configureStore => Provider => createSlice => add reducer to store 
- Add redux devtools in chrome 
- Login & check if the data is coming properly in the store
- NavBar should update as soon as user logs in and user go to the Feed page
- user should not have to access other routes without login
- If token is not present, redirect user to login page
- User can logout and redirect to profile API from the NavBar
- Get and add the feed in the store
- Build the userCard 
- Build the edit profile component
- show toast message on updating the profile 
- build connection compo to check existing connections of the user
- build request compo to check the incoming request to the user
- Accept/Reject request features



Body
    NavBar
    Route=/ => Feed
    Route=/login => Login 
    Route=/profile => Profile
    Route=/connections => Connections