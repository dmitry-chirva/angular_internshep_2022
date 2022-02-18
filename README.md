# Angular Internship 2022


## Overview
During internship we will learn Angular framework and its features implementing a weather application project. The application will allow user searching through the locations, viewing a location weather, weather history, inspect detailed view, adding list of favorite locations etc.

## Project setup
Before starting working on the project make sure that the following tools are installed:
- Editor or IDE (WebStorm, VS Code etc.)
- Git
- Latest LTS version of NodeJS & NPM
- Google Chrome browser

## API usage
You will use https://www.weatherapi.com/ as data provider. The [API](https://www.weatherapi.com/api-explorer.aspx) and [Documentation](https://www.weatherapi.com/docs/) available.

We generated API key:

    b88614b3fb684e8b996104153220302

to be used in your requests.
As a requirement from API provider you have to include

    Powered by <a href="https://www.weatherapi.com/" title="Weather API">WeatherAPI.com</a>``


## Minimal Requirements
The application layout must contain:
1. Header
2. Main that depends on the current URL
3. Footer
4. Loader for each page

### Simple landing page
Page URL - '/'.

The page must include:
1. Default location current weather (location from chrome/or marked as default from local storage)
2. 'Search' input and button
3. Fancy background
4. Footer

### Weather details page
Page URL - '/details/${city}'.

This should show detailed information about weather for selected city.
User should be able to add/remove city to Favorites list.

### Weather forecast page
Page URL - '/forecast/${city}/${date}'.

This should show forecast for selected city and date

## Nice to have requirements
You can choose any or take them all:
1. Show weather forecast as a chart for selected period.
2. Add support for history view (like a forecast and as chart).
3. Add theme support (based on your design - pink/blue or white/dark modes as example).
4. Integrate with Google maps (or any other map provider) to show the selected city on Details page.
5. Responsive design (should be mobile-friendly).

## Constraints
- No UI libraries allowed (like Bootstrap, Angular Material etc.)
- You can use libraries for charts, maps, fonts, icons etc.
- All other libraries must be confirmed with mentor.

## Design
There are no requirements for the application design at all. Be creative!
