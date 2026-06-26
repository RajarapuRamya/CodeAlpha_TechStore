# 🛍️ Simple E-Commerce Store

A modern full-stack E-Commerce web application that allows users to browse products, manage their shopping cart, register/login, and place orders. The project demonstrates frontend development, backend API integration, authentication, and database management using the MERN-stack ecosystem.

---

## 📌 Project Overview

This application provides a complete online shopping experience with product browsing, user authentication, cart management, and order processing.

The project is designed to showcase full-stack web development skills including:

- Frontend Development
- Backend API Development
- Database Integration
- User Authentication
- RESTful Architecture

---

## ✨ Key Features

### 👤 User Features

- User Registration
- User Login & Authentication
- Browse Products
- View Product Details
- Add Products to Cart
- Remove Products from Cart
- Place Orders
- Persistent Cart Storage

### 🔒 Security Features

- JWT Authentication
- Protected Routes
- Secure User Data Handling

### 🗄️ Database Features

- User Management
- Product Management
- Order Management
- MongoDB Integration

---

## 🛠️ Tech Stack

### Frontend

| Technology | Purpose |
|------------|----------|
| HTML5 | Structure |
| CSS3 | Styling |
| JavaScript (ES6) | Client-side Logic |

### Backend

| Technology | Purpose |
|------------|----------|
| Node.js | Runtime Environment |
| Express.js | Backend Framework |
| MongoDB | Database |
| Mongoose | ODM |
| JWT | Authentication |

---

## 📂 Project Structure

```text
simple-ecommerce-store/
│
├── backend/
│   ├── config/
│   │   └── db.js
│   │
│   ├── middleware/
│   │   └── auth.js
│   │
│   ├── models/
│   │   ├── User.js
│   │   ├── Product.js
│   │   └── Order.js
│   │
│   ├── routes/
│   │   ├── authRoutes.js
│   │   ├── productRoutes.js
│   │   └── orderRoutes.js
│   │
│   └── server.js
│
├── frontend/
│   ├── css/
│   │   └── style.css
│   │
│   ├── js/
│   │   ├── app.js
│   │   ├── auth.js
│   │   └── cart.js
│   │
│   ├── index.html
│   ├── product.html
│   ├── cart.html
│   ├── login.html
│   └── register.html
│
├── package.json
└── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/RajarapuRamya/CodeAlpha_TechStore.git
```

### 2️⃣ Navigate to Project Directory

```bash
cd CodeAlpha_TechStore
```

### 3️⃣ Install Dependencies

```bash
npm install
```

### 4️⃣ Configure Environment Variables

Create a `.env` file inside the backend folder.

```env
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
PORT=5000
```

### 5️⃣ Start the Server

```bash
npm start
```

Application will run on:

```text
http://localhost:5000
```

---

## 📸 Screenshots

### Home Page

![alt text](<home page.png>)

### Product Page

![alt text](<product page.png>)

![alt text](<product page1.png>)

### Shopping Cart

![alt text](<cart page.png>)

### Login

![alt text](<login page.png>)

### Registration 

![alt text](<register page.png>)

---


## 🎓 Learning Outcomes

Through this project I gained hands-on experience with:

- Full Stack Web Development
- REST API Development
- MongoDB Database Design
- User Authentication with JWT
- Frontend-Backend Integration
- Git & GitHub Version Control

---

## 👩‍💻 Author

**Rajarapu Ramya**

- GitHub: https://github.com/RajarapuRamya/CodeAlpha_TechStore.git
---

## ⭐ Support

If you found this project useful, consider giving it a ⭐ on GitHub.
