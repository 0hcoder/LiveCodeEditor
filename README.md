# Live Collaborative Code Editor

## 📝 Description
A real-time collaborative code editor built using Monaco Editor, Yjs, and Socket.IO.

Multiple users can join the same session and edit code simultaneously with live synchronization and user presence tracking.

---

## 🚀 Features
- Real-time collaborative editing
- Multiple users support
- Live user presence (who is online)
- Monaco Editor integration
- Conflict-free synchronization using Yjs

---

## 🛠 Tech Stack
- Frontend: React (Vite)
- Editor: Monaco Editor
- Real-time Sync: Yjs
- Transport Layer: Socket.IO
- Backend: Node.js

---

## ⚙️ How It Works
- Monaco Editor handles code editing UI
- Yjs manages shared document state
- Socket.IO transmits updates between users
- Yjs ensures conflict-free real-time collaboration

---

## 📦 Installation

# Clone repository
git clone https://github.com/0hcoder/LiveCodeEditor

# Install frontend dependencies
cd client
npm install

# Install backend dependencies
cd ../server
npm install

---

## ▶️ Run Locally

# Start backend
cd server
npm run dev

# Start frontend
cd client
npm run dev

---

## 🧑‍💻 Usage
- Open the app in browser
- Enter a username
- Share the URL with others
- Start collaborating in real-time

---

## 🔮 Future Improvements
- Add code execution feature
- Add chat system
- Deploy using Docker & AWS

---

## 👤 Author
Ankit Rawat  
MERN Stack Developer
