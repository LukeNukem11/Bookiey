# Bookiey

Bookiey is a web application that utilizes the Google Books API to provide users with book search and discovery features. Users can search for books, view book details, and save their favorite books to their reading list.

## Features

- Book search: Users can search for books using keywords, titles, authors, or ISBN.
- Book details: Users can view detailed information about a book, including its title, author(s), description, cover image, and more.
- Save to reading list: Users can save their favorite books to their reading list for future reference.
- Responsive design: The application is designed to be responsive and accessible on various devices.

## Technologies Used

- Front-end:
  - HTML
  - CSS
  - JavaScript
  - React.js
  - Apollo Client
- Back-end:
  - Node.js
  - Express.js
  - Apollo Server
  - GraphQL
  - MongoDB
- API:
  - Google Books API

## Installation

1. Clone the repository: `git clone https://github.com/LukeNukem11/bookiey`
2. Navigate to the project directory: `cd bookiey`
3. Install the dependencies: `npm install`
4. Create a `.env` file and provide the necessary environment variables (e.g., API key, database connection string).
5. Start the development server: `npm start`

## Usage

- Access the application in your web browser at: `http://localhost:3000` (or the appropriate URL).
- Use the search bar to search for books by entering keywords, titles, authors, or ISBN.
- View the search results and click on a book to see its details.
- To save a book to your reading list, you need to sign up or log in to your account.
- Once logged in, you can add books to your reading list and view them in your account.

## API Configuration

To configure the backend API, follow these steps:

1. Open the `server` directory: `cd server`
2. Install the dependencies: `npm install`
3. Create a `.env` file and provide the necessary environment variables:
   - `MONGODB_URI`: MongoDB connection URI
   - `GOOGLE_BOOKS_API_KEY`: Your Google Books API key
4. Start the Apollo Server: `npm start`

## Deployment

- Deploy the frontend and backend separately to your hosting provider of choice (e.g., Heroku, Netlify, Vercel).
- Set up the necessary environment variables in your hosting provider's dashboard.
- Build and deploy the React app for the frontend.
- Start the Apollo Server for the backend.

## License

This project is licensed under the [MIT License](LICENSE).

