# React API Challenge 

This is a starter project for the React API project challenge. The goal of this challenge is to use React with a web API. 

The sample code here display the weather data from [OpenWeatherMap.org](https://openweathermap.org). 

## Overview 

This project focusses on two concepts used in react: 

1. Form input and the controlled component pattern.
1. Conditionally rendering components. 

## Controlled Components and form input

Forms work differently in react due to the way React handles the DOM with it's virtual DOM. You'll want to understand and master this pattern as it's required when working with form elements, this includes input, checkboxes, radio buttons, and select elements. 

In a nutshell the component holds the value of form elements on component state. This value is set when the component's value is changed, the form element's value is set to the value on state. This may sound a little circular because it is! 

In the example is happens at the input element in the form. Be sure to look at the comments. 

Read more [here](https://reactjs.org/docs/forms.html).

## Conditionally rendering components 

Single Page Applications need to control what is displayed on the page without loading a new page. Using React you will do that by sometimes rendering a component and sometimes not rendering a component. Or, sometimes rendering one component, and rednering a different component at other stimes. 

We will refer to this conditionally rendering. 

There are several patterns for this. The example shows one method. 

Read more about conditional rednering [here](https://reactjs.org/docs/conditional-rendering.html).

## Getting started 

To run this example project you will need to make an account with [OpenWeatherMap](https://openweathermap.org) and generate an API key and set that key as an envoronment variable in this project. Follow these steps:

- Download or fork with project repo
- Create an account at [OpenWeatherMap.org](https://openweathermap.org)
- Go your profile and select API Keys. 
- Generate a key and copy the key to the clipboard
- Back in this project add the following to the end of .env file: 

`REACT_APP_OPENWEATHERMAP_API_KEY=<YOUR_OPENWEATHERMAP_API_KEY_HERE>`

From here you should be able to run the project and get weather data from Open Weather Map. 

## Challenges 

The goal of this assignment is to create a React component that displays data from a web API. 

The goal is to complete this challenge in 3 hours. To do this you will need to limit your scope. 

### Getting started 

1. Fork this repo
1. Post a link to your repo in the tracker
1. Install dependencies: `npm install`
1. Run the project: `npm start`
1. Visit the project at: [http://localhost:3000](http://localhost:3000)

From here the project should update in the browser as you work. 

This project was boot strapped with Create React App. See the notes [here](create-react-app-notes.md) for more information.

### Coding Challenges 

The challenges here are to refactor the code provided. 

**Challenge 1** Weather component 

Goal create a Weather component. Currently all of the work of loading and displaying the weather data is handled by  `App.js`. You should:

- Make a new component `Weather`. This component should load and display the weather data. 
- Import the Weather component into `App.js` 
- Display the new Weather component in `App.js`.
- You're done when all of the work of loading and displaying weather data is removed from App.js, and the Weather component does all the work.  

**Challenge 2** Handling errors 

Problem, if the server returns something other than weather data the app breaks. You can test this by entering an invalid zip code. 

The current implementation has some holes. You need to fix these. One big problem is an error when an invalid zip code is used. The problem occurs because the server returns an object that doesn't include properties the script is looking for. When an invalid zip code is supplied the JSON returned from the server looks like: `{cod: "404", message: "city not found"}`. Your script should look for: `cod:"404"`. When the weather data was fetched successfully you should get `cod:"200"`. 

- Handle this gracefully. Your script should:
  - Spot a successful response `cod:200` and display the weather data when it does. 
  - It should spot an error `code: 404` (or other) and handle this by displaying a message when this occurs. 
- Stretch Goal: make a component that displays error messages. Render this component when there is an error, render the weather data when there is no error. 
  - Bonus: pass the error message into this component as a prop and  component should display the message. 

**Challenge 3** Sub Components

The Weather Component is a little monolithic. It does a little too much. In many cases it's better to have smaller components that handle specific tasks. 

Goal build components that display various elements of the weather data. 

- **Temperature component**. Create a component whose sole task is to display the temperature. You should pass the temperature into the component as a prop and the component should display it. 
  - Bonus! The temperature is supplied in kelvin. Your Temperature component should be able to display the temperature as fahrenheit. The formula is: `300K × 9/5 - 459.67`. 
  - Stretch goal! Temperature component takes a parameter `isMetric` if this is true the component converts the temperature from Kelvin to Celsius.
- **WeatherDescription** component. This component takes the values used for title and description and displays them. 
- **Atmosphere** component. Create a another component that displays the air pressure and humidity. Call this component Atmosphere. It should take the values for pressure and humidity in as props and display them. 

The tasks above as you to build three new components. These should all be children of the Weather component you created in the first challenge. 

**Challenge 4** Style the component! 

Currently there a minimal set of styles. Your goal is to expand on these. 

- Your goal is to add some styles to the components you have created. 

Look at App.css. This file has the has CSS styles that are imported into App.js on line 4 of that file. 

**Note!** Importing CSS in this way works with Create React App starter projects because it is part of the build system. 

- Bonus, create a css file for each component you create and import that set of styles into the component. 

**Stretch Challenges** 

Try any or all of these stretch challenges. 

- Use the Browser API to get the Geo Location
  - The OpenWeatherMap API has an option where you can supply Geo Location rather than the zip code to get weather data. 
- Display a 5 day forcast
  - This project uses the current weather forecast. The OpenWeatherMap also provides a 5 day forcast. Your goal is to display this. 
- Find another simple API and make a component to dispaly data from your chosen API. 

**Challenge 4**

During the loading process your app is limbo, you haven't gotten a success or an error yet. In this state your app should display a message letting us know that the app is in the loading process. 

To do this use keep track of the status of the app and conditionally render a component to display the status of the app. 

**Challenge 5** 

Use an API of your choice. This can be any API you like. Render data from the API with React. BUild components and sub-components to do the work and display your data. 