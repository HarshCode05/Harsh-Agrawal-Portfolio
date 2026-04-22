export const portfolioData = {
  name: "Harsh Agrawal",
  tagline: "Turning Raw Data into Real Insights",
  role: "Data Analyst · Data Scientist · Developer in Progress",
  bio: "I'm a Computer Science undergrad (B.Tech '27) passionate about turning data into decisions. I work with Python, SQL, and Machine Learning to build real-world solutions — from churn prediction models to interactive Streamlit dashboards. I leverage AI tools to supercharge my workflow and I'm familiar with Git, GitHub & Vercel. Beyond tech, I've led teams across MUNs, Youth Parliaments, and college events. Currently targeting Data Analyst & SDE roles.",
  email: "harshagrawal050903@gmail.com",
  phone: "+91 7317688115",
  social: {
    github: "https://github.com/HarshCode05",
    linkedin: "https://linkedin.com/in/harshagrawal050903/",
    email: "mailto:harshagrawal050903@gmail.com",
    instagram: "https://instagram.com/", // update with your handle
  },
  skills: [
    { category: "Languages", items: ["Python", "Java", "SQL"] },
    { category: "Data & ML", items: ["Pandas", "NumPy", "Scikit-learn", "Power BI", "Excel"] },
    { category: "Frameworks", items: ["Streamlit", "Flask"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Vercel", "MySQL"] },
    { category: "Core CS", items: ["DSA", "OOPs", "Classification Models"] },
    { category: "Soft Skills", items: ["Problem-Solving", "Communication", "Leadership"] },
  ],
  projects: [
    {
      title: "Telecom Churn Analysis & Prediction Dashboard",
      description:
        "Built a data-driven ML solution to predict customer churn with 85%+ accuracy. Features interactive dashboards with filters for age, gender, city, and state using Streamlit.",
      tech: ["Python", "Pandas", "Scikit-learn", "Streamlit"],
      github: "https://github.com/HarshCode05",   // update with exact repo link
      live: "#",                                    // update with Vercel/live link
      featured: true,
    },
    // ➕ ADD MORE PROJECTS HERE — copy the block above and fill in details
    {
      title: "Nifty 50 Smart Screener & Sentiment Dashboard",
      description: "Real time stock screener for Nifty 50 companies with sentiment analysis from news headlines,interactive charts and BUY/SELL/HOLD signals.",
      tech: ["Python,", "Pandas", "yfinance", "Streamlit", "TextBlob","Newsapi"],
      github: "https://github.com/HarshCode05/StockMarketAnalysis",
      live: "https://stockmarket-nifty50-analysis.streamlit.app/",
      featured: true,
    },
  ],
  certifications: [
    {
      title: "Software Engineering Virtual Experience",
      issuer: "J.P. Morgan (Forage)",
      date: "October 2025",
      link: "#", // update with certificate link
    },
    {
      title: "Bharat And Its Scientific Glory",
      issuer: "Non-Technical",
      date: "April 2025",
      link: "#",
    },
  ],
  education: [
    {
      degree: "B.Tech in Computer Science Engineering",
      institution: "JSS Academy of Technical Education, Noida",
      period: "2023 – 2027",
    },
    {
      degree: "Class 12th (CBSE)",
      institution: "Oxford Public School, Gorakhpur",
      period: "2022",
      score: "88.6%",
    },
    {
      degree: "Class 10th (ICSE)",
      institution: "H.P. Children's Academy, Gorakhpur",
      period: "2020",
      score: "92.8%",
    },
  ],
}
