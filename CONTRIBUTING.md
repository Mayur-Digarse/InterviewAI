# Contributing to InterviewAI

Thank you for your interest in contributing to InterviewAI! We welcome contributions from the community.

## How to Contribute

### 1. Fork the Repository
Click the "Fork" button on the top right of the repository page.

### 2. Clone Your Fork
```bash
git clone https://github.com/YOUR-USERNAME/InterviewAI.git
cd InterviewAI
```

### 3. Create a Feature Branch
```bash
git checkout -b feature/your-feature-name
# or for bug fixes
git checkout -b fix/bug-name
```

### 4. Make Your Changes

#### For Frontend Changes
```bash
cd client
npm run dev
# Make your changes
npm run build  # Test build
```

#### For Backend Changes
```bash
cd server
npm run dev
# Make your changes
```

### 5. Commit Your Changes
```bash
git add .
git commit -m "feat: Add your feature description

Description of what you changed and why.

Fixes #issue_number (if applicable)"
```

**Commit Message Format**:
- `feat:` for new features
- `fix:` for bug fixes
- `docs:` for documentation
- `style:` for formatting
- `refactor:` for code improvements
- `test:` for adding tests

### 6. Push to Your Fork
```bash
git push origin feature/your-feature-name
```

### 7. Create a Pull Request
1. Go to the original repository
2. Click "Pull Requests" tab
3. Click "New Pull Request"
4. Select your fork and branch
5. Fill in the PR template
6. Submit!

---

## PR Guidelines

### Before Submitting
- [ ] Code follows project style
- [ ] Changes are tested locally
- [ ] No console errors/warnings
- [ ] `.env` files are not committed
- [ ] Commit messages are clear
- [ ] Separate unrelated changes

### In Your PR Description
- Describe what you changed and why
- Link related issues (Fixes #123)
- Include screenshots if UI changes
- List any breaking changes
- Add test steps

### Code Review
We'll review your PR and may ask for changes. This is normal! We want to ensure quality.

---

## Development Setup

### Required Tools
- Node.js 16+
- MongoDB local or Atlas
- Git
- Your favorite code editor

### Local Development
```bash
# Terminal 1: Backend
cd server
npm install
npm run dev

# Terminal 2: Frontend
cd client
npm install
npm run dev
```

### Testing
```bash
# Frontend
cd client
npm test

# Backend
cd server
npm test
```

---

## Areas We Need Help

### 🐛 Bug Fixes
- Speech recognition improvements
- UI/UX enhancements
- Performance optimizations

### ✨ Features
- Multi-language support
- More interview categories
- Mobile app
- Advanced analytics
- Interview scheduling

### 📚 Documentation
- Improve setup guides
- Add API documentation
- Create video tutorials
- Translate documentation

### 🧪 Testing
- Write unit tests
- Add integration tests
- E2E testing with Cypress

---

## Code Style

### JavaScript/React
```javascript
// Use const/let, not var
const myVariable = 'value';

// Use arrow functions
const myFunction = () => {
  // code here
};

// Use template literals
const message = `Hello ${name}!`;

// Add JSDoc comments for functions
/**
 * Description of function
 * @param {type} param - Description
 * @returns {type} Description
 */
const importantFunction = (param) => {
  // code here
};
```

### CSS/TailwindCSS
```javascript
// Use TailwindCSS classes
<div className="flex items-center justify-between p-4 bg-white rounded-lg shadow">
  {/* content */}
</div>

// Avoid inline styles
// WRONG: style={{ color: 'red' }}
// RIGHT: className="text-red-500"
```

---

## Testing Your Changes

### Backend API Testing
```bash
# Test auth endpoint
curl -X POST http://localhost:8000/api/auth/google \
  -H "Content-Type: application/json" \
  -d '{"name":"Test","email":"test@example.com"}'

# Test interview endpoint
curl -X POST http://localhost:8000/api/interview/generate-questions \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Content-Type: application/json" \
  -d '{"role":"Developer","experience":"2"}'
```

### Frontend Testing
1. Open http://localhost:5173
2. Test all pages and features
3. Check console for errors
4. Test on mobile (F12 → Toggle device toolbar)

---

## Reporting Issues

### Bug Report
Include:
- Description of the bug
- Steps to reproduce
- Expected behavior
- Actual behavior
- Browser/OS information
- Screenshots if applicable

### Feature Request
Include:
- Description of feature
- Why it's useful
- Example use case
- Any relevant designs/mockups

---

## Community Guidelines

- Be respectful and inclusive
- Provide constructive feedback
- Help others in discussions
- Give credit to contributors
- Follow the Code of Conduct

---

## Need Help?

- **Questions?** Open a Discussion
- **Found a bug?** Open an Issue
- **Have an idea?** Open a Feature Request
- **Want to chat?** Email: mayurdigarse1@gmail.com

---

## Recognition

Contributors will be recognized in:
- README.md contributors section
- Release notes
- GitHub contributors page

---

Thank you for making InterviewAI better! 🙌
