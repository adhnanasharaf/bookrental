# 📚 Book Rental App

A **MERN Stack** application that allows users to browse, rent, and manage books online. Built with **MongoDB Atlas, Express.js, React, and Node.js**, this app provides an intuitive user experience for book lovers and library managers.

## 🚀 Features

- 📖 **User Authentication** (Sign up, Login, JWT-based auth)
- 🔍 **Browse & Search Books** (by title, author, category)
- 📅 **Rent & Return Books** with due date tracking
- 🛒 **Manage Rentals** (view rented books, extend rentals, return books)
- 📝 **Admin Dashboard** (add, edit, delete books, manage users)
- 📊 **User Profiles & Rental History**

## 🛠️ Tech Stack

- **Frontend:** React, React Router, Redux (for state management)
- **Backend:** Node.js, Express.js
- **Database:** MongoDB Atlas
- **Authentication:** JWT & Bcrypt
- **Styling:** Tailwind CSS / Material UI

## ⚙️ Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/book-rental-app.git
   cd book-rental-app
   ```

2. **Install dependencies:**
   ```bash
   # Backend
   cd backend
   npm install
   
   # Frontend
   cd ../frontend
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the `backend` folder and add:
   ```env
   MONGO_URI=your_mongodb_atlas_connection_string
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

4. **Run the application:**
   ```bash
   # Start Backend
   cd backend
   npm start
   
   # Start Frontend
   cd ../frontend
   npm start
   ```

5. **Access the app:**
   Open `http://localhost:3000` in your browser.

## 📌 API Endpoints (Backend)

| Method | Endpoint         | Description          |
|--------|----------------|----------------------|
| POST   | /api/auth/register | User Registration |
| POST   | /api/auth/login    | User Login |
| GET    | /api/books         | Get All Books |
| POST   | /api/books         | Add New Book (Admin) |
| PUT    | /api/books/:id     | Edit Book (Admin) |
| DELETE | /api/books/:id     | Delete Book (Admin) |
| POST   | /api/rentals       | Rent a Book |
| GET    | /api/rentals       | Get User Rentals |

## 🔥 Future Enhancements

- 📌 **Book Reviews & Ratings**
- 🏷️ **Category-based Filters**
- 📧 **Email Notifications for Due Dates**
- 🌍 **Multi-language Support**

## 🤝 Contributing

Pull requests are welcome! Feel free to open an issue for feature requests or bugs.

## 📜 License

This project is licensed under the **MIT License**.

---

🚀 **Happy Coding & Happy Reading!** 📚
