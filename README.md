
# Temperature Converter

This project is a simple temperature conversion tool that allows users to convert temperatures between Celsius and Fahrenheit.

## Features

- Convert Celsius to Fahrenheit
- Convert Fahrenheit to Celsius
- Input temperature within a specified range (0 to 100 with step 5)
- Reset functionality to clear the form
- Displays the result of the conversion

## Technologies Used

- **HTML**: Structure of the web page
- **CSS**: Styling for the web page
- **JavaScript**: Logic for the temperature conversion
- 
## How to Run

1. Clone or download the repository.
2. Open `index.html` in your browser to use the temperature converter tool.

## Styling

- The page uses the **Nunito** font imported from Google Fonts.
- The main container (`#divContainer`) is centered with a border, shadow, and rounded corners for a clean, user-friendly design.
- Inputs and buttons are styled with border-radius and hover effects.
- Media queries ensure the page is responsive, adapting to tablet and mobile screen sizes.

### Media Queries

- For **tablet screens (max-width: 768px)**, the container's width and margin are adjusted, and the input and button sizes are made responsive.
- For **mobile devices (max-width: 480px)**, further adjustments are made for smaller screens, ensuring usability with larger buttons and a more compact layout.

## JavaScript Functionality

The JavaScript code provides the logic for temperature conversion and form resetting:

1. **Conversion**:
   - When the user enters a temperature value and selects the desired conversion (Celsius to Fahrenheit or Fahrenheit to Celsius), the tool converts the value and displays the result.
   - If no unit is selected or if the input value is empty, a corresponding message is displayed.

2. **Reset**:
   - Clicking the reset button clears the input fields and the result, allowing the user to start fresh.
