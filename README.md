
```markdown
 Personal Finance Tracker

This is a Personal Finance Tracker application that allows users to track their financial activities.

 Features

- Track income and expenses
- Categorize transactions
- View transaction history

 Prerequisites

- Node.js
- MongoDB Atlas account

 Getting Started

Follow these instructions to set up and run the project on your local machine.

 1. Clone the Repository

```bash
git clone https://github.com/Likhitha310/Personal-finance-tracking_application.git
cd Personal-finance-tracking_application
```

 2. Set Up Environment Variables

Create a `.env` file in the `backend` directory with the following content:

```env
MONGODB_URI=mongodb+srv://Name:Password@Cluste.clwxlra.mongodb.net/DB_name?retryWrites=true&w=majority
JWT_SECRET=your_jwt_secret
PORT=5000
```

 3. Install Dependencies

Navigate to the `backend` directory and install the necessary dependencies:

```bash
cd backend
npm install
```

 4. Start the Application

Start the server:

```bash
npm start
```

For development, you can use `nodemon` to automatically restart the server on file changes:

```bash
npm run dev
```

 5. Verify Setup

Open your browser and go to `http://localhost:5000` to ensure the application is running.

 Repository Structure

- `backend/`: Contains the backend code for the application.
  - `.env`: Environment variables file.
  - `server.js`: Entry point for the backend server.

 MongoDB Atlas Setup

Make sure you have the correct MongoDB Atlas connection URI in your `.env` file. The connection URI should look something like this:

```env
MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.clwxlra.mongodb.net/<database-name>?retryWrites=true&w=majority
```

 Notes

- Replace `<username>`, `<password>`, and `<database-name>` with your actual MongoDB Atlas credentials and database name.
- Ensure your IP address is whitelisted in MongoDB Atlas for database access.

 Authentication

This project uses JWT for authentication. Make sure to set a secure `JWT_SECRET` in your `.env` file.

 License

This project is licensed under the MIT License.
```
https://github.com/Likhitha310/Personal-finance-tracking_application
