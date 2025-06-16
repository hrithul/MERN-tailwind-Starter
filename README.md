# MERN Stack Authentication Starter Template

This is a comprehensive starter template for building full-stack MERN (MongoDB, Express, React, Node.js) applications with a complete authentication system. It's designed to be a solid foundation for your next project, with a modern tech stack and best practices baked in.

## Features

- **Full Authentication Flow**: Secure user registration, login, and logout functionality.
- **JWT & Cookie-Based Sessions**: Uses JSON Web Tokens (JWT) stored in secure, HTTP-only cookies for session management.
- **Modern Frontend**:
    - Built with **React** and **Vite** for a fast development experience.
    - State managed by **Redux Toolkit** for efficient and predictable state changes.
    - Styled with **Tailwind CSS** for a utility-first, modern design system.
- **Robust Backend**:
    - Powered by **Node.js** and **Express**.
    - **MongoDB** with **Mongoose** for data persistence.
    - **Passport.js** for authentication strategies.
    - Server-side input validation.
- **Ready to Deploy**: Includes a basic setup for production builds.

## Tech Stack

### Frontend
- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Redux Toolkit](https://redux-toolkit.js.org/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)

### Backend
- [Node.js](https://nodejs.org/)
- [Express](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [Mongoose](https://mongoosejs.com/)
- [Passport.js](http://www.passportjs.org/)
- [bcrypt.js](https://github.com/dcodeIO/bcrypt.js)
- [jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- [Node.js](https://nodejs.org/en/download/) (v14 or later recommended)
- [npm](https://www.npmjs.com/get-npm) or [yarn](https://classic.yarnpkg.com/en/docs/install/)
- [MongoDB](https://www.mongodb.com/try/download/community) installed and running.

### Installation

1.  **Clone the repository:**
    ```bash
    git clone <your-repo-url>
    cd <repo-name>
    ```

2.  **Set up the Backend:**
    - Navigate to the root directory.
    - Install dependencies:
      ```bash
      npm install
      ```
    - Create a configuration file for your environment variables at `config/keys.js`:
      ```javascript
      // config/keys.js
      module.exports = {
        mongoURI: "YOUR_MONGODB_CONNECTION_STRING",
        secretOrKey: "YOUR_SECRET_KEY"
      };
      ```
      Replace `YOUR_MONGODB_CONNECTION_STRING` with your actual MongoDB connection string and `YOUR_SECRET_KEY` with a long, random string.

3.  **Set up the Frontend:**
    - Navigate to the `client` directory:
      ```bash
      cd client
      ```
    - Install dependencies:
      ```bash
      npm install
      ```

## Available Scripts

### Backend (from the root directory)

-   `npm run server`: Starts the backend server on `http://localhost:5000`.
-   `npm run start`: Runs the backend server using `node`.

### Frontend (from the `client` directory)

-   `npm run dev`: Starts the Vite development server for the client on `http://localhost:5173`.
-   `npm run build`: Builds the client application for production.
-   `npm run preview`: Previews the production build locally.

### Running Both Servers

To run the application, you'll need to open two terminal windows:

1.  In the first terminal, start the backend server from the root directory:
    ```bash
    npm run server
    ```

2.  In the second terminal, start the frontend development server from the `client` directory:
    ```bash
    cd client
    npm run dev
    ```

Now, you can access the application at `http://localhost:5173`.

## License

This project is licensed under the MIT License.
