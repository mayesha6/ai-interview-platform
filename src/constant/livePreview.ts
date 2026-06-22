export const livePreviewData = {
  header: {
    role: "Backend Developer",
    level: "Junior",
    tag: "Node.js • MongoDB",
    timeRemaining: "12:34",
  },
  questionMeta: "Question 3 of 10 • Technical",
  question: "Explain the difference between authentication and authorization. How would you implement JWT-based authentication in an Express.js app?",
  userAnswer: "Authentication verifies who the user is — checking credentials and issuing a JWT. Authorization decides what that user can access — checking the token's role claims before granting route access. In Express, I'd use a middleware that reads the Authorization header, verifies the token with jsonwebtoken, and attaches the decoded payload to req.user before passing to the route handler...",
  feedback: {
    title: "AI Feedback",
    text: "Good distinction between auth and authz. Your JWT middleware approach is correct. Consider mentioning token expiry, refresh token rotation, and storing tokens in httpOnly cookies for security hardening.",
    scores: [
      {
        label: "Technical",
        value: "78/100",
        colorClass: "text-emerald-400 bg-emerald-500/10 border-emerald-500/20",
      },
      {
        label: "Communication",
        value: "85/100",
        colorClass: "text-indigo-400 bg-indigo-500/10 border-indigo-500/20",
      },
      {
        label: "Best practices",
        value: "65/100",
        colorClass: "text-amber-400 bg-amber-500/10 border-amber-500/20",
      },
    ],
  },
};