# Global Time Tapestry

Global Time Tapestry is a web application that displays time across various time zones around the world. This app allows users to easily view their local time as well as the time in other major cities simultaneously.

## Demo

Check out the live demo: [Global Time Tapestry](https://time.masdzub.com)
![image](https://github.com/user-attachments/assets/8595a72b-b784-4be9-a6bd-13ef636966c9)


## Features

- Displays user's local time
- Shows time in 9 major world cities
- Date information for each time zone
- Day/night indicator for each location
- UTC offset information for each time zone
- Responsive design that works across various screen sizes
- Attractive user interface with hover effects on clock cards
- Time Zone Converter

## Technologies Used

- HTML5
- CSS3 (with Tailwind CSS for styling)
- JavaScript (Vue.js for state management and rendering)
- Moment.js and Moment Timezone for time zone handling
- CDN to load external libraries

## How to Use

1. Clone this repository to your local machine.
2. Open the `index.html` file in your web browser.
3. You will see your local time at the top, followed by the time in other cities below.

## Customization

You can add or change the displayed cities by editing the `clocks.js` file. Each entry in the `additionalClocks` array represents one city with its name and time zone.

## Further Development

Some ideas for further development:
- Add a city search feature
- Allow users to add or remove cities from the display
- Add an interactive map to visualize time zones
- Implement dark/light themes

## Contribution

Contributions to this project are very welcome. If you have suggestions or improvements, please create a pull request or open an issue.

## License

This project is licensed under the [MIT License](LICENSE).
