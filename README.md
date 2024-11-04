# Court Reservation Admin Dashboard
A Next14.js project for managing court reservations efficiently. This admin dashboard provides an intuitive interface for scheduling and managing court bookings, designed to streamline operations for administrators.

## Project Description
The Court Reservation Admin Dashboard is a web application that offers an efficient solution for managing court reservations. Built using Next14.js, this project provides a robust and scalable front-end that integrates seamlessly with a backend server to handle all booking-related operations.

### Key Features:
- User authentication and authorization through NextAuth.js.
- Dashboard interface for creating, editing, and viewing reservations.
- Real-time data synchronization with the backend.
- Configurable environment for flexible deployment.
### Technologies Used:
- Next14.js: Provides a powerful framework for server-side rendering and static site generation.
- NextAuth.js: Handles user authentication securely.
- Tailwind CSS: Ensures modern, responsive design.
- React: Core front-end library for building interactive components.
### Challenges and Future Enhancements:
- Managing session persistence and secure API calls with NextAuth.js.
- Future features may include advanced filtering options, user role management, and calendar view integrations.
## Table of Contents
1. Installation
2. Usage
3. Environment Variables
4. Credits
5. License
## Installation
Follow these steps to get the project up and running locally:

1. Clone the repository:

```bash
git clone https://github.com/Chuviil/ding-web-canchas-frontend.git
cd ding-web-canchas-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Set up environment variables: Create a .env.local file in the root directory and add the required variables:

```bash
NEXTAUTH_URL=<Your NextAuth URL>
NEXTAUTH_SECRET=<Your NextAuth Secret>
```
4. Run the development server:

```bash
npm run dev
```

5. Access the project: Open your browser and navigate to http://localhost:3000.

## Usage
1. Log in using your provided credentials.
2. Navigate through the dashboard to view, create, and manage court reservations.
3. Utilize available tools to update reservation statuses and manage user accounts as needed.


## Environment Variables
The project requires the following environment variables for configuration:

- NEXTAUTH_URL: The URL where your application is hosted.
- NEXTAUTH_SECRET: A secret used by NextAuth.js for signing and encryption.
Ensure these variables are securely stored and configured in the `.env.local` file.

## Backend Integration
This frontend project is designed to work with a separate backend repository that handles server-side logic and database management. You can find the backend project here: Court Reservation Backend.

## Credits
This project is developed and maintained by Chuviil. Special thanks to contributors and other developers who provided valuable feedback during the development phase.

GitHub: @Chuviil
## License
This project is licensed under the MIT License. You are free to use, modify, and distribute this project as long as proper credit is given.
