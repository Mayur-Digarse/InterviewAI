# 🚀 Complete Setup Guide

## Prerequisites

Before you begin, make sure you have:
- **Node.js** 16+ installed
- **npm** or **yarn** package manager
- **Git** installed and configured
- A **MongoDB Atlas** account
- A **Firebase** project
- An **OpenRouter** API key
- A **Razorpay** account (optional, for payments)

---

## Step 1: Clone the Repository

```bash
git clone https://github.com/Mayur-Digarse/InterviewAI.git
cd InterviewAI
```

---

## Step 2: Backend Setup

### 2.1 Navigate to Server Directory
```bash
cd server
npm install
```

### 2.2 Create Environment Variables
Create a `.env` file in the `server` directory:

```bash
# Copy from template
cp .env.example .env

# Edit .env with your values
# Use your favorite editor (nano, vim, VS Code, etc.)
```

### 2.3 Configure .env Variables

| Variable | Description | Example |
|----------|-------------|---------|
| `PORT` | Server port | `8000` |
| `MONGODB_URL` | MongoDB connection string | `mongodb+srv://user:pass@cluster.mongodb.net/aiinterview` |
| `JWT_SECRET` | Secret key for JWT tokens | Generate with: `openssl rand -base64 32` |
| `OPENROUTER_API_KEY` | OpenRouter LLM API key | `sk-or-v1-xxxxx` |
| `RAZORPAY_KEY_ID` | Razorpay public key | From Razorpay dashboard |
| `RAZORPAY_KEY_SECRET` | Razorpay secret key | From Razorpay dashboard |

### 2.4 Get Your API Keys

#### MongoDB Atlas
1. Go to https://www.mongodb.com/cloud/atlas
2. Create or login to your account
3. Create a new cluster
4. Under "Database Access", create a user
5. Under "Network Access", add your IP
6. Copy connection string: `mongodb+srv://user:password@cluster.mongodb.net/aiinterview`

#### OpenRouter
1. Go to https://openrouter.ai
2. Sign up / login
3. Go to https://openrouter.ai/settings/keys
4. Create new API key
5. Copy the key: `sk-or-v1-xxxxx`

#### Firebase
1. Go to https://console.firebase.google.com
2. Create new project
3. Go to Project Settings
4. Copy your config object (you'll use this for frontend)

#### Razorpay (Optional)
1. Go to https://razorpay.com
2. Create business account
3. Go to Settings → API Keys
4. Copy Key ID and Secret

### 2.5 Start Backend Server
```bash
npm run dev
```

**Expected Output:**
```
[nodemon] 3.1.11
[nodemon] watching path(s): *.*
Server running on port 8000
DataBase Connected
```

---

## Step 3: Frontend Setup

### 3.1 Open New Terminal and Navigate to Client
```bash
cd ../client
npm install
```

### 3.2 Create Environment Variables
```bash
# Copy from template
cp .env.example .env
```

### 3.3 Configure .env Variables

```
VITE_FIREBASE_APIKEY=AIzaSyxxxxxxx
VITE_FIREBASE_AUTHDOMAIN=yourproject.firebaseapp.com
VITE_FIREBASE_PROJECTID=yourproject
VITE_FIREBASE_STORAGEBUCKET=yourproject.appspot.com
VITE_FIREBASE_MESSAGINGSENDERID=123456789
VITE_FIREBASE_APPID=1:123456789:web:xxxxxxx

VITE_RAZORPAY_KEY_ID=your_razorpay_key
VITE_SERVER_URL=http://localhost:8000
```

Get these values from:
- **Firebase**: Go to Project Settings → General → Your apps
- **Razorpay**: Dashboard → Settings → API Keys

### 3.4 Start Frontend Server
```bash
npm run dev
```

**Expected Output:**
```
VITE v7.3.1  ready in XXX ms

➜  Local:   http://localhost:5173/
➜  press h + enter to show help
```

---

## Step 4: Test the Application

### 4.1 Open in Browser
- Frontend: http://localhost:5173 (or http://localhost:5174 if 5173 is busy)
- Backend: http://localhost:8000

### 4.2 Test Authentication Flow
1. Click "Sign in with Google"
2. Select your Google account
3. Check browser console: `localStorage.getItem("token")` should show JWT
4. Should redirect to home page

### 4.3 Test Interview Flow
1. Go to `/interview` page
2. Upload resume or fill details manually
3. Click "Start Interview"
4. Speak your answer into the microphone
5. Wait for AI feedback (7-12 seconds)
6. Verify feedback is related to your answer

### 4.4 Check Backend Logs
In the server terminal, you should see:
```
[POST] /api/auth/google - 200
[GET] /api/user/current-user - 200
[POST] /api/interview/generate-questions - 200
[POST] /api/interview/submit-answer - 200
```

---

## Step 5: Production Deployment

### Deploy Backend (Render)

1. Go to https://dashboard.render.com
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `interviewai-backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`
5. Add Environment Variables:
   ```
   PORT=8000
   MONGODB_URL=your_production_mongodb_url
   JWT_SECRET=generate_new_secret
   OPENROUTER_API_KEY=your_api_key
   RAZORPAY_KEY_ID=your_key
   RAZORPAY_KEY_SECRET=your_secret
   ```
6. Click "Create Web Service"
7. Wait for deployment (2-5 minutes)
8. Copy the URL: `https://your-service.onrender.com`

### Deploy Frontend (Vercel)

1. Go to https://vercel.com
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
5. Add Environment Variables:
   ```
   VITE_FIREBASE_APIKEY=your_key
   VITE_RAZORPAY_KEY_ID=your_key
   VITE_SERVER_URL=https://your-render-backend.onrender.com
   ```
6. Click "Deploy"
7. Wait for deployment (1-2 minutes)
8. Visit your deployed URL

---

## 🐛 Troubleshooting

### Backend Issues

#### Error: "MongoDB connection failed"
- Check if MongoDB Atlas network access includes your IP
- Verify connection string has correct password (URL encode special chars)
- Check if cluster is active

#### Error: "JWT_SECRET not found"
- Ensure `.env` file exists in `server/` directory
- Restart server after adding `.env`

#### Port already in use
```bash
# Kill process on port 8000
lsof -ti:8000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :8000   # Windows
```

### Frontend Issues

#### Error: "Server URL not found"
- Check `.env` file exists in `client/` directory
- Ensure `VITE_SERVER_URL` points to backend
- For local: `http://localhost:8000`
- For production: `https://your-backend-url.onrender.com`

#### Microphone not working
- Check browser permissions
- Only works in Chrome/Edge (not Firefox/Safari)
- Ensure microphone is connected
- Check browser console for errors

#### Firebase authentication not working
- Verify Firebase project is created
- Check API keys in `.env`
- Ensure Firebase project has Web SDK enabled
- Check authorized JavaScript origins in Firebase Console

### Common Solutions

1. **Clear Cache & Reinstall**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Hard Refresh Browser**
   - Ctrl+Shift+R (Chrome/Firefox)
   - Cmd+Shift+R (macOS Safari)

3. **Check Environment Variables**
   ```bash
   # Backend
   cd server && cat .env
   
   # Frontend
   cd ../client && cat .env
   ```

4. **View Server Logs**
   ```bash
   npm run dev
   # Look for error messages
   ```

---

## 📝 Environment Variable Reference

### Backend (.env)
```
# Server Configuration
PORT=8000

# Database
MONGODB_URL=mongodb+srv://user:password@cluster.mongodb.net/aiinterview?appName=Cluster0

# Authentication
JWT_SECRET=your_secure_random_string_here

# AI/LLM
OPENROUTER_API_KEY=sk-or-v1-your-key-here

# Payments (Optional)
RAZORPAY_KEY_ID=your_key_id
RAZORPAY_KEY_SECRET=your_key_secret
```

### Frontend (.env)
```
# Firebase Configuration
VITE_FIREBASE_APIKEY=AIzaSyxxxxxxxxx
VITE_FIREBASE_AUTHDOMAIN=yourapp.firebaseapp.com
VITE_FIREBASE_PROJECTID=yourapp
VITE_FIREBASE_STORAGEBUCKET=yourapp.appspot.com
VITE_FIREBASE_MESSAGINGSENDERID=123456789
VITE_FIREBASE_APPID=1:123456789:web:xxxxxx

# Razorpay (Optional)
VITE_RAZORPAY_KEY_ID=your_key_id

# Server Connection
VITE_SERVER_URL=http://localhost:8000  # Local
# or
VITE_SERVER_URL=https://your-backend.onrender.com  # Production
```

---

## ✅ Post-Setup Checklist

- [ ] MongoDB connection successful
- [ ] Backend server running on port 8000
- [ ] Frontend server running on port 5173
- [ ] Can login with Google
- [ ] Token appears in localStorage
- [ ] Can upload resume
- [ ] Can start interview
- [ ] Microphone captures audio
- [ ] AI provides feedback
- [ ] Can view interview reports

---

## 🆘 Need Help?

- **GitHub Issues**: https://github.com/Mayur-Digarse/InterviewAI/issues
- **Documentation**: See README.md
- **Email**: mayurdigarse1@gmail.com

---

## 🔐 Security Notes

⚠️ **IMPORTANT**:
- Never commit `.env` files to git
- Never share API keys publicly
- Regenerate secrets in production
- Use strong JWT_SECRET (generate with `openssl rand -base64 32`)
- Enable HTTPS in production
- Add CORS origins carefully

---

Happy Interviewing! 🎉
