#  InterviewAI - AI-Powered Mock Interview Platform
**Ace your interviews with AI-powered mock interviews, real-time feedback, and intelligent performance analytics.**

## Features

### Real-Time Speech Recognition
- Continuous speech-to-text conversion
- Multi-language support (English focused)
- Natural sentence parsing and completion tracking

### AI-Powered Intelligent Feedback
- Advanced LLM-powered evaluation
- Scoring on confidence, communication, and correctness
- Contextual feedback tailored to your answers
- Response time: 7-12 seconds

### Performance Analytics & Reports
- Detailed interview reports with scores
- Question-wise performance breakdown
- Progress tracking across multiple interviews
- PDF report generation

### Flexible Credit System
- Pay-per-interview model with Razorpay
- Bonus credits on signup
- Transparent pricing

### Secure Authentication
- Google Sign-in integration
- JWT token-based security
- Secure session management
- Encrypted password storage

### Interview History
- Store and review past interviews
- Compare performance over time
- Download reports as PDF

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| **Frontend** | React 19 + Vite + TailwindCSS 4 |
| **Backend** | Express.js 5 + Node.js |
| **Database** | MongoDB + Mongoose 9 |
| **AI/LLM** | OpenRouter API (Multiple model support) |
| **Authentication** | Firebase + JWT |
| **Payment** | Razorpay Integration |
| **Speech** | Web Speech API (Chrome) |
| **Text-to-Speech** | Web Speech Synthesis API |
| **Hosting** | Render (Backend) + Vercel (Frontend) |
| **PDF Generation** | jsPDF + jsPDF-AutoTable |

---

## Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB Atlas account
- Firebase project setup
- OpenRouter API key
- Razorpay account (optional for payments)

### Local Development Setup

#### 1. Clone and Install
```bash
git clone https://github.com/Mayur-Digarse/InterviewAI.git
cd InterviewAI
```

#### 2. Backend Setup
```bash
cd server
npm install

# Create .env file
cat > .env << EOF
PORT=8000
MONGODB_URL=your_mongodb_url_here
JWT_SECRET=your_jwt_secret_here
OPENROUTER_API_KEY=your_api_key_here
RAZORPAY_KEY_ID=your_key_id_here
RAZORPAY_KEY_SECRET=your_key_secret_here
EOF

# Start backend
npm run dev
```

#### 3. Frontend Setup
```bash
cd ../client
npm install

# Create .env file
cat > .env << EOF
VITE_FIREBASE_APIKEY=your_firebase_key_here
VITE_RAZORPAY_KEY_ID=your_razorpay_key_here
VITE_SERVER_URL=http://localhost:8000
EOF

# Start frontend
npm run dev
```

#### 4. Open in Browser
- Frontend: `http://localhost:5173` or `http://localhost:5174`
- Backend: `http://localhost:8000`

---

## Project Structure

```
InterviewAI/
├── client/                          # Frontend (React + Vite)
│   ├── src/
│   │   ├── components/
│   │   │   ├── Step1SetUp.jsx      # Interview configuration
│   │   │   ├── Step2Interview.jsx  # Main interview component
│   │   │   ├── Step3Report.jsx     # Results display
│   │   │   ├── Timer.jsx           # Question timer
│   │   │   ├── Navbar.jsx          # Navigation
│   │   │   └── AuthModel.jsx       # Authentication modal
│   │   ├── pages/
│   │   │   ├── Home.jsx            # Landing page
│   │   │   ├── auth.jsx            # Login page
│   │   │   ├── InterviewPage.jsx   # Interview flow
│   │   │   ├── InterviewHistory.jsx # Past interviews
│   │   │   ├── InterviewReport.jsx # Report details
│   │   │   └── Pricing.jsx         # Pricing page
│   │   ├── redux/
│   │   │   ├── store.js            # Redux store config
│   │   │   └── userSlice.js        # User state management
│   │   ├── utils/
│   │   │   └── firebase.js         # Firebase config
│   │   ├── App.jsx                 # Main app component
│   │   └── main.jsx                # Entry point
│   ├── .env                        # Environment variables (git ignored)
│   ├── .env.example                # Template for .env
│   ├── package.json
│   └── vite.config.js
│
├── server/                          # Backend (Express.js)
│   ├── controllers/
│   │   ├── auth.controller.js      # Authentication logic
│   │   ├── interview.controller.js # Interview operations
│   │   ├── user.controller.js      # User management
│   │   └── payment.controller.js   # Payment handling
│   ├── routes/
│   │   ├── auth.route.js           # Auth endpoints
│   │   ├── interview.route.js      # Interview endpoints
│   │   ├── user.route.js           # User endpoints
│   │   └── payment.route.js        # Payment endpoints
│   ├── middlewares/
│   │   ├── isAuth.js               # JWT verification
│   │   └── multer.js               # File upload handling
│   ├── models/
│   │   ├── user.model.js           # User schema
│   │   ├── interview.model.js      # Interview schema
│   │   └── payment.model.js        # Payment schema
│   ├── services/
│   │   ├── openRouter.service.js   # LLM API integration
│   │   └── razorpay.service.js     # Payment service
│   ├── config/
│   │   ├── connectDb.js            # MongoDB connection
│   │   └── token.js                # JWT token generation
│   ├── .env                        # Environment variables (git ignored)
│   ├── .env.example                # Template for .env
│   ├── index.js                    # Server entry point
│   └── package.json
│
├── .gitignore                      # Git ignore rules
└── README.md                       # This file
```

---

## API Endpoints

### Authentication
```
POST   /api/auth/google             # Google Sign-In
POST   /api/auth/logout             # Logout
```

### User
```
GET    /api/user/current-user       # Get current user
```

### Interview
```
POST   /api/interview/resume        # Upload and analyze resume
POST   /api/interview/generate-questions  # Generate interview questions
POST   /api/interview/submit-answer # Submit answer and get feedback
POST   /api/interview/finish        # Complete interview
GET    /api/interview/get-interview # Get past interviews
GET    /api/interview/report/:id    # Get detailed report
```

### Payment
```
POST   /api/payment/create-order    # Create Razorpay order
POST   /api/payment/verify          # Verify payment
```y

**Production URLs**
- Backend: https://interviewai-xl73.onrender.com
- Frontend: https://interview-aiii.netlify.app/

---

###  Testing

### Run Tests
```bash
# Backend tests
cd server
npm test

# Frontend tests
cd ../client
npm test
```

### Local Testing Checklist
- [ ] Google login works
- [ ] Resume upload and parsing
- [ ] Questions generate correctly
- [ ] Microphone captures full answers
- [ ] AI feedback appears in 7-12 seconds
- [ ] Interview reports generate
- [ ] Payment flow (sandbox mode)
- [ ] Credits deduct correctly

## License

This project is licensed under the MIT License - see the LICENSE file for details.

---

##  Contact & Support

- **GitHub**: [@Mayur-Digarse](https://github.com/Mayur-Digarse)


<div align="center">

**Made with by Mayur Digarse

</div>
