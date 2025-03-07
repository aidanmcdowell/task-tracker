# TaskFlow - Modern Task Management Web App

A sleek, responsive web application for managing personal and team tasks with real-time collaboration features. Built with React, Firebase, and styled with Tailwind CSS.

![TaskFlow Preview](preview.png)

## Features

- **User Authentication**: Secure login and registration with email or Google account
- **Task Management**: Create, edit, delete, and organize tasks
- **Projects & Categories**: Group tasks into projects and categories
- **Due Dates & Reminders**: Set deadlines and receive notifications
- **Priority Levels**: Mark tasks with different priority levels
- **Kanban Board View**: Drag-and-drop interface for visual task management
- **Team Collaboration**: Share projects and assign tasks to team members
- **Real-time Updates**: Changes sync instantly across all devices
- **Dark/Light Theme**: Toggle between comfortable viewing modes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile

## Technology Stack

- **Frontend**: React.js with Hooks and Context API
- **State Management**: Redux Toolkit
- **Backend/Database**: Firebase (Firestore, Authentication, Cloud Functions)
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Drag-and-Drop**: react-beautiful-dnd
- **Date Handling**: date-fns
- **Charts**: recharts
- **Testing**: Jest, React Testing Library

## Getting Started

### Prerequisites
- Node.js 14.x or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/yourusername/taskflow.git

# Navigate to the project directory
cd taskflow

# Install dependencies
npm install
# or
yarn install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your Firebase configuration

# Start the development server
npm start
# or
yarn start
```

## Project Structure

```
taskflow/
├── public/
│   ├── index.html
│   └── assets/
├── src/
│   ├── components/
│   │   ├── Auth/
│   │   ├── Dashboard/
│   │   ├── Layout/
│   │   ├── Tasks/
│   │   └── UI/
│   ├── context/
│   ├── firebase/
│   ├── hooks/
│   ├── pages/
│   ├── redux/
│   ├── styles/
│   ├── utils/
│   ├── App.js
│   └── index.js
├── .env.example
├── .firebaserc
├── firebase.json
├── tailwind.config.js
├── package.json
└── README.md
```

## Key Features in Detail

### Task Management
- **Task Creation**: Quick add with title-only or detailed task information
- **Rich Text Notes**: Attach formatted notes, links, and checklists to tasks
- **Subtasks**: Break down complex tasks into manageable subtasks
- **Batch Actions**: Perform actions on multiple tasks at once
- **Sorting & Filtering**: Find tasks by various criteria

### Team Collaboration
- **Project Sharing**: Invite team members to collaborate on projects
- **Task Assignment**: Assign tasks to specific team members
- **Comments**: Discuss tasks with team members in threaded comments
- **Activity Log**: Track changes to tasks and projects

### Analytics & Reporting
- **Productivity Stats**: View completion rates and task statistics
- **Time Tracking**: Optional time tracking for tasks
- **Export**: Export task data to CSV or PDF

## Deployment

The app can be easily deployed to Firebase Hosting:

```bash
# Build the production version
npm run build

# Deploy to Firebase
firebase deploy
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- [Firebase](https://firebase.google.com/) for the backend infrastructure
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [React](https://reactjs.org/) for the frontend library 