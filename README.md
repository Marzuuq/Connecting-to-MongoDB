# Backend for Student Project Tracker

Imagine you're helping build a simple **student project tracker** for a school. Your task is to set up the backend using **Node.js** and **Express.js**, and connect it to a **MongoDB** database using **Mongoose**.

This assignment gives you mentor-supported, hands-on practice with writing the connection logic, using environment variables, and verifying whether your Express server is successfully connected to the MongoDB database.

## Instructions

### 1. Initialize the Project

- Start with the provided Express boilerplate project.
- Install the dependencies using:

  ```bash
  npm install
  ```

### 2. Set Up Environment Configuration

- Create a `.env` file in the root directory of the project.

- Add the MongoDB connection string in the `.env` file as shown below:

  ```
  MONGO_URI=mongodb://localhost:27017/studentProjectsDB
  ```

- Using environment variables helps keep sensitive information separate from your code.

### 3. Connect Express to MongoDB

- Open `index.js` in your project.
- Make sure the Express server is set up.
- Use Mongoose to:

  - Load the MongoDB connection string from the `.env` file.
  - Connect to the `studentProjectsDB` database.
  - Log a message based on whether the connection is successful or fails:

    - Success:
      `Connected to MongoDB`
    - Failure:
      `Error connecting to MongoDB: <error details>`

### 4. Test Your Backend

- Start the server using `node index.js` or `npm start`.
- Check the terminal output to confirm that the database connection message is displayed.

## How to Fork and Set Up Your Repository

### 1. Fork the StackBlitz Repository

- A StackBlitz starter link will be provided for this assignment.
- Open the link and click **Fork** to create your own working copy.

### 2. Push to Your GitHub Repository

You can either push manually or directly from StackBlitz.

#### Option A: Manual Push

1. Download your project files from StackBlitz.
2. Use your terminal to run the following commands:

   ```bash
   git init
   git remote add origin <your_github_repo_url>
   git add .
   git commit -m "Completed student project tracker DB connection"
   git push -u origin main
   ```

#### Option B: Direct Push via StackBlitz

- Use StackBlitz’s **Push to GitHub** feature to upload your work.

### 3. Submit Your Work

- Once your code is on GitHub:

  1. Copy the GitHub repository URL.
  2. Submit the link through the assignment submission form.

#### Format:

`https://github.com/<your_username>/<repository_name>`

### Example Submission

If your GitHub username is `anikaDev` and the repository is `student-tracker-backend`, submit:
`https://github.com/anikaDev/student-tracker-backend`
