# Horizon Afrika

## Overview

Horizon Afrika is a travel agency platform designed to provide users with an easy and interactive way to explore, plan, and book safari travel packages. The platform allows travel agencies to post curated packages while giving users access to detailed travel resources and real-time communication with travel experts.

## Features

- **User Authentication**: Users can sign up and log in securely.
- **Package Browsing**: Users can explore available safari packages.
- **Booking System**: Users can book travel packages.
- **Payment Integration**: Secure payment processing for bookings.

## Future Plans

- **Search Functionality**: Implementing search for safari packages.
- **Reviews System**: Enabling users to leave reviews for each package.
- **Design Enhancements**: Improving overall UI and UX.

## Project Structure

```
HORIZON_AFRIKA/
│── public/
│── src/
│   ├── Components/
│   │   ├── ContactPage.jsx
│   │   ├── DestinationPage.jsx
│   │   ├── Footer.jsx
│   │   ├── Home.jsx
│   │   ├── LoginClient.jsx
│   │   ├── NavBar.jsx
│   │   ├── PackagePage.jsx
│   │   ├── PaymentPage.jsx
│   │   ├── ReviewsModal.jsx
│   │   ├── SafariModal.jsx
│   │   ├── SearchBar.jsx
│   │   ├── SignUpClient.jsx
│   ├── images/
│   ├── styles/
│── App.css
│── App.jsx
│── index.css
│── main.jsx
│── .env
│── .gitignore
```

## Technologies Used

- **Frontend**: React.js, CSS
- **Backend**: Flask (RESTful API)
- **Database**: PostgreSQL (Supabase)
- **Authentication**: JWT-based authentication
- **Deployment**:
  - Frontend: Netlify/Render
  - Backend: Render

## Deployment

The deployed version of the app can be accessed here:
[Deployed URL](#) _(Replace with actual link once available)_

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/Maina206/Horizon_Afrika_Client_Front_end
   ```
2. Navigate to the project directory:
   ```bash
   cd Horizon_Afrika_Client_Front_end
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Run the development server:
   ```bash
   npm start
   ```

## Contributing

We welcome contributions to Horizon Afrika! If you’d like to contribute, follow these steps:

1. **Fork the Repository**: Click the fork button on GitHub to create your own copy of the project.
2. **Create a Branch**: Work on a new feature or fix a bug in a separate branch.
   ```bash
   git checkout -b feature-name
   ```
3. **Make Changes**: Implement your changes, ensuring they follow the project's coding standards.
4. **Commit and Push**: Commit your changes with a clear message and push them to your forked repository.
   ```bash
   git commit -m "Added new feature"
   git push origin feature-name
   ```
5. **Submit a Pull Request**: Open a pull request to the main repository, describing the changes you’ve made.
6. **Review and Merge**: The maintainers will review your request, provide feedback, and merge if appropriate.

### Contribution Guidelines

- Keep your code clean and well-documented.
- Follow the existing coding style.
- Submit detailed descriptions with your pull requests.
- If you are working on a major feature, discuss it with maintainers before implementation.

## License

This project is licensed under the MIT License.
