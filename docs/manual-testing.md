# Manual Testing Guide for Angular Carousel Component

This document provides step-by-step instructions for manually testing the Angular carousel component. Follow these instructions to verify that the carousel is functioning correctly.

## Prerequisites

Before you begin testing, ensure you have the following installed:

- Node.js (v14.x or higher)
- npm (v6.x or higher)

You can verify your installations with:
```bash
node -v
npm -v
```

## Setting Up the Testing Environment

1. Clone the repository (if you haven't already):
   ```bash
   git clone <repository-url>
   cd cvdemo2
   ```

2. Install dependencies:
   ```bash
   npm run setup
   ```
   This command installs all required dependencies without prompting for any user input.

3. Build the application:
   ```bash
   npm run build
   ```
   This creates a production build of the application.

## Running the Application for Testing

1. Start the development server:
   ```bash
   npm start
   ```
   This command:
   - Starts the Angular development server
   - Opens the application in your default browser
   - The application will be available at `http://localhost:4200/`

   If you need to make the application accessible from other devices on your network:
   ```bash
   npm run start:network
   ```

2. Verify the application loads correctly:
   - The page should display a header "Angular Carousel Demo"
   - The carousel should be visible below the header
   - The initial slide should be displayed with its title and content

## Testing Carousel Functionality

### 1. Auto-Advancing Feature

1. When the carousel first loads, observe it for at least 12 seconds
2. Verify that:
   - The carousel automatically advances to the next slide after 6 seconds
   - The transition between slides is smooth
   - The pagination dots at the bottom update to reflect the current slide
   - After reaching the last slide, it should loop back to the first slide

### 2. Manual Navigation

Test the navigation controls:

1. **Previous/Next Buttons**:
   - Click the left arrow (`‹`) and verify the carousel moves to the previous slide
   - Click the right arrow (`›`) and verify the carousel moves to the next slide
   - Test edge cases:
     - When on the first slide, clicking the left arrow should go to the last slide
     - When on the last slide, clicking the right arrow should go to the first slide

2. **Pagination Dots**:
   - Click each dot at the bottom of the carousel
   - Verify that the carousel immediately jumps to the corresponding slide
   - Verify that the active dot is visually distinct from the inactive dots

### 3. Pause/Resume Functionality

1. **Pause on Hover**:
   - Move your mouse cursor over the carousel and keep it there for at least 10 seconds
   - Verify that the auto-advancing stops while the cursor is over the carousel

2. **Resume on Mouse Leave**:
   - After testing the pause functionality, move your mouse cursor away from the carousel
   - Verify that the auto-advancing resumes after the mouse leaves the carousel area
   - The carousel should advance to the next slide after the configured interval (6 seconds)

### 4. Visual Appearance

Verify the visual aspects of the carousel:

1. **Slide Content**:
   - Each slide should display its title in a larger font
   - The content text should be clearly readable
   - The content should be properly contained within the carousel boundaries

2. **Controls**:
   - Navigation arrows should be visible and properly positioned
   - Pagination dots should be aligned at the bottom center
   - The active pagination dot should be visually distinct

3. **Transitions**:
   - Transitions between slides should be smooth
   - There should be no visual glitches during transitions

## Cross-Browser Testing

If possible, test the carousel in multiple browsers to ensure consistent behavior:

1. Chrome
2. Firefox
3. Safari (if on macOS)
4. Edge (if on Windows)

For each browser, repeat the core functionality tests (auto-advancing, manual navigation, and pause/resume).

## Mobile Device Testing

If possible, test the carousel on mobile devices or using browser developer tools to simulate mobile devices:

1. Open browser developer tools (F12 or right-click and select "Inspect")
2. Enable device simulation mode (usually an icon that looks like a phone/tablet)
3. Select different device presets and verify:
   - The carousel is responsive and fits within the screen
   - Touch interactions work (if testing on an actual mobile device)
   - All text is readable and controls are accessible

## Troubleshooting Common Issues

If you encounter any issues during testing:

1. **Carousel not advancing automatically**:
   - Check if you have your mouse cursor over the carousel (which pauses auto-advancing)
   - Verify that `autoPlay` is set to `true` in the carousel-host component

2. **Navigation controls not working**:
   - Check the browser console for any JavaScript errors
   - Verify that the click events are properly bound in the HTML template

3. **Visual glitches**:
   - Try clearing your browser cache
   - Test in an incognito/private window
   - Verify that all CSS is properly loaded

4. **Application not starting**:
   - Ensure all dependencies are installed (`npm run setup`)
   - Check if port 4200 is already in use (try `npm start -- --port=4201`)

## Reporting Issues

If you find any issues during testing:

1. Take a screenshot of the issue if possible
2. Note the exact steps to reproduce the issue
3. Record any error messages from the browser console
4. Note the browser and operating system you're using
5. Create an issue in the project repository with all this information

## Conclusion

After completing all the test cases above, you should have a good understanding of how the carousel component functions and whether it meets the requirements. The carousel should provide a smooth, intuitive user experience with both automatic and manual navigation options.