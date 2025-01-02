# SocialWave

A social media platform that enables users to share posts, interact through comments, and engage with likes.

## Features

- 👤 Authentication
  - Register new account
  - Login to existing account
  - Change password

- 📝 Content Management
  - Create new posts
  - Edit post title and content
  - Delete posts
  - View personal profile

- 💬 Social Interaction
  - Comment on posts
  - Like/unlike posts
  - View user profiles

## Tech Stack

### Frontend
- React.js
- Axios for API requests
- React Router for navigation
- Material-UI for styling

### Backend
- Node.js
- Express
- MySQL
- Sequelize ORM
- JWT for authentication

## Live Demo

- Website: https://magical-monstera-7861e2.netlify.app
- API: https://social-wave-api-fei.herokuapp.com

## Local Development

1. Clone the repository：
```bash
git clone https://github.com/keainvhai/SocialWave-Client.git
cd SocialWave-Client
```

2. Install dependencies
```bash
npm install
```

3. Start development server
```bash
npm start
```

## Project Structure
```src/
├── components/ # React components
├── pages/ # Page components
├── services/ # API services
└── App.js # Main app component
```

## Deployment
- Frontend is hosted on Netlify with automatic deployment
- Backend is hosted on Heroku
