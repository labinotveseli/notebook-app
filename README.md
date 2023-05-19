# My Note App

The My Note app is a simple note-taking application that allows users to create, search, and manage their notes. It provides an intuitive user interface and leverages React for efficient state management and dynamic rendering.

Features
Add Note: Users can easily create new notes by providing a title, category, and date.
Delete Note: Each note in the list has a delete button to remove it from the collection.
Search Note: Users can search for specific notes by entering keywords in the search bar.
Display All Notes: After performing a search, users can click the "All Notes" button to revert to displaying all the notes.
Persistence: The app stores the notes locally using local storage, ensuring that the data is preserved even when the page is refreshed.
Usage
To use the My Note app, follow these steps:

Clone the repository or download the project files.
Install the required dependencies using the package manager of your choice (npm, yarn, etc.).
Run the development server using the appropriate command (e.g., npm start).
Access the app through your web browser by visiting the provided URL.
Dependencies
The My Note app relies on the following dependencies:

React: A JavaScript library for building user interfaces.
Bootstrap: A CSS framework for responsive and mobile-first web development.
File Structure
The main files and directories in the project are structured as follows:

src/
components/: Contains React components used in the app.
App.js: The main component that serves as the entry point for the app.
index.js: Renders the root component and mounts the app into the DOM.
public/: Contains the static assets and HTML template for the app.
package.json: Contains the project's metadata and dependencies.
