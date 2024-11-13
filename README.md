# InkHub

InkHub is a dynamic and user-friendly blogging platform designed to allow users to create, share, and discover captivating content. It empowers writers to share their stories, thoughts, and experiences with the world in a beautifully crafted space.

## Features

- 🖋 **Rich Text Editor**: Write blog posts with a powerful WYSIWYG editor (TinyMCE), offering full control over formatting and content.
- 🌐 **Responsive Design**: A clean, intuitive, and fully responsive design built with React, providing a seamless user experience across devices.
- 📚 **Post Management**: Users can create, edit, and manage posts effortlessly.

## Technologies Used

- **Frontend**: 
  - React
  - Redux Toolkit for state management
  - TailwindCSS for UI design
  - TinyMCE for the rich text editor
  - React Hook Form for form handling

- **Backend**: 
  - Appwrite for database, authentication, and storage
  - MongoDB
  
- **Deployment**: 
  - Vercel (Frontend)
  - Appwrite Cloud (Backend)

## Screenshots

### Home Page
![image](https://github.com/user-attachments/assets/4f15f99f-02bc-4308-9576-5758be760674)
![image](https://github.com/user-attachments/assets/9132f3ea-4c87-4944-acdd-15f28c18e32d)



### Post Editor
![image](https://github.com/user-attachments/assets/12299496-4306-4d45-af1e-370c812d2e1d)

### Post View
![Screenshot 2024-11-13 221350](https://github.com/user-attachments/assets/8c3ee5e4-bab4-4e83-85dd-9a1199c7990d)


## Installation and Setup

### Prerequisites

Ensure you have the following installed:
- Node.js (v14.x or later)
- Appwrite instance (for self-hosted or cloud version)
- MongoDB (for MERN stack integration)

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/inkhub.git
   cd inkhub
2. Install dependencies:
   ```bash
   npm install
3. Set up the environment variables:
   - Create a .env file in the root directory.
   - Add the necessary environment variables for Appwrite services and MongoDB.
   ```bash
   REACT_APP_APPWRITE_ENDPOINT=https://cloud.appwrite.io/v1
   REACT_APP_PROJECT_ID=<Your Project ID>
   REACT_APP_DATABASE_ID=<Your Database ID>
   REACT_APP_COLLECTION_ID=<Your Collection ID>
4. Run the application:
   ```bash
   npm run dev

### Deployment
InkHub is deployed via Vercel for the frontend and Appwrite Cloud for backend services.

### Contributing
We welcome contributions to improve InkHub! Here’s how you can help:
- Fork the repository.
- Create a new branch for your feature or bug fix.
- Submit a pull request for review.
