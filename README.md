# 🚀 Indrajeet Yadav — Portfolio Website

> MIS Executive | Data Analyst | Power BI Developer  
> Built with **MERN Stack** (MongoDB · Express · React · Node.js)

---

## 📁 Project Structure

```
portfolio/
├── server/                  ← Node.js + Express backend
│   ├── models/
│   │   └── Contact.js       ← MongoDB contact schema
│   ├── routes/
│   │   └── contact.js       ← Contact form API route
│   ├── server.js            ← Main server entry point
│   ├── .env.example         ← Environment variable template
│   └── package.json
├── client/                  ← React + Vite frontend
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── About.jsx
│   │   │   ├── Skills.jsx
│   │   │   ├── Experience.jsx
│   │   │   ├── Projects.jsx
│   │   │   ├── Education.jsx
│   │   │   ├── Contact.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
├── package.json             ← Root (build + start scripts)
├── render.yaml              ← Render auto-deploy config
└── .gitignore
```

---

## 🖥️ Run Locally (Development)

### Step 1 — Prerequisites
Make sure you have installed:
- **Node.js** v18+ → https://nodejs.org
- **Git** → https://git-scm.com
- **VS Code** (recommended editor)

### Step 2 — Clone / Download the project
```bash
# If using Git:
git clone https://github.com/YOUR_USERNAME/indrajeet-portfolio.git
cd indrajeet-portfolio

# OR just extract the ZIP folder and open terminal there
```

### Step 3 — Install server dependencies
```bash
cd server
npm install
```

### Step 4 — Setup environment variables
```bash
# Copy the example file
cp .env.example .env

# Open .env and fill in your MongoDB URI:
# MONGO_URI=mongodb+srv://username:password@cluster.mongodb.net/portfolio
```

### Step 5 — Install client dependencies
```bash
cd ../client
npm install
```

### Step 6 — Run both server + client together
```bash
# Go back to root folder
cd ..
npm install
npm run dev
```

Open browser → http://localhost:5173

---

## 🌐 Deploy to Render (Step-by-Step)

### ── PART 1: Setup MongoDB Atlas (Free Database) ──

1. Go to https://mongodb.com/atlas → Sign up free
2. Click **"Build a Database"** → Choose **FREE tier (M0)**
3. Select region: **AWS / Mumbai (ap-south-1)**
4. Click **"Create"**
5. Username: `indrajeet` → Password: create a strong password → Click **"Create User"**
6. In "Where would you like to connect from?" → Select **"My Local Environment"** → Add IP: **0.0.0.0/0** (allow all) → Click **"Add Entry"**
7. Click **"Finish and Close"** → **"Go to Database"**
8. Click **"Connect"** → **"Connect your application"**
9. Copy the connection string — it looks like:
   ```
   mongodb+srv://indrajeet:<password>@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
   ```
10. Replace `<password>` with your actual password and add database name:
    ```
    mongodb+srv://indrajeet:yourpassword@cluster0.xxxxx.mongodb.net/portfolio?retryWrites=true&w=majority
    ```
11. **Save this URI — you'll need it in Render!**

---

### ── PART 2: Push Code to GitHub ──

1. Go to https://github.com → Sign up / Login
2. Click **"New Repository"** (green button)
3. Repository name: `indrajeet-portfolio`
4. Keep it **Public** → Click **"Create Repository"**
5. Open terminal in your portfolio folder:

```bash
# Initialize git
git init

# Add all files
git add .

# First commit
git commit -m "Initial commit - Indrajeet Portfolio"

# Connect to GitHub (copy the URL from your GitHub repo page)
git remote add origin https://github.com/YOUR_USERNAME/indrajeet-portfolio.git

# Push to GitHub
git branch -M main
git push -u origin main
```

✅ Refresh your GitHub page — all files should be visible!

---

### ── PART 3: Deploy on Render ──

1. Go to https://render.com → Sign up with GitHub account
2. Click **"New +"** → Select **"Web Service"**
3. Click **"Connect GitHub"** → Select your `indrajeet-portfolio` repo
4. Fill in the settings:

| Field | Value |
|-------|-------|
| **Name** | indrajeet-portfolio |
| **Region** | Singapore (closest to India) |
| **Branch** | main |
| **Root Directory** | *(leave empty)* |
| **Runtime** | Node |
| **Build Command** | `npm run build` |
| **Start Command** | `npm start` |
| **Plan** | Free |

5. Scroll down to **"Environment Variables"** → Click **"Add Environment Variable"**:

| Key | Value |
|-----|-------|
| `MONGO_URI` | Your MongoDB Atlas connection string |
| `NODE_ENV` | `production` |

6. Click **"Create Web Service"**

7. Wait 3–5 minutes for build to complete ⏳

8. Your live URL will be:
   ```
   https://indrajeet-portfolio.onrender.com
   ```

✅ **Your portfolio is LIVE!**

---

## 🔧 How to Edit Content

| What to change | File to edit |
|----------------|-------------|
| Your name, email, bio | `client/src/components/About.jsx` |
| Hero title, typewriter roles | `client/src/components/Hero.jsx` |
| Skills list | `client/src/components/Skills.jsx` |
| Work experience | `client/src/components/Experience.jsx` |
| Projects | `client/src/components/Projects.jsx` |
| Education / Certs | `client/src/components/Education.jsx` |
| Contact info | `client/src/components/Contact.jsx` |
| Footer links | `client/src/components/Footer.jsx` |
| All colors / fonts | `client/src/index.css` (CSS variables at top) |

---

## 🔄 Update Live Site After Editing

After making changes locally:

```bash
git add .
git commit -m "Updated portfolio content"
git push origin main
```

Render will **automatically redeploy** within 2–3 minutes! 🚀

---

## 📦 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Custom CSS with CSS Variables |
| Backend | Node.js + Express.js |
| Database | MongoDB Atlas + Mongoose |
| Deployment | Render (Free Tier) |
| Icons | Font Awesome 6 |
| Fonts | Google Fonts (Inter + Fira Code) |

---

## 📞 Contact

**Indrajeet Yadav**  
📧 indrajeetyadav708150@gmail.com  
📱 +91 9369947337  
🔗 linkedin.com/in/indrajeet-yadav-a6b51b270  
📍 New Delhi, India
