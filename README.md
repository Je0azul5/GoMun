# GoMun
Dam
# 🌙 GoMun — Every Plan Brings You Closer to the Moon

GoMun is a **smart web agenda** built with **React + TypeScript** on the frontend and **Node.js + Express + Prisma + Azure SQL Database (SQL Server)** on the backend.  
It offers a simple and elegant way to **organize your events alphabetically**, like flipping through a **personal dictionary of goals**.

---

## 🚀 Features
- 🅰️ **A–Z “book-style” agenda view** — browse your plans alphabetically  
- 📝 **Add, edit, and search entries** by title or note  
- 🔍 **Live search spellbook** — filter dreams instantly and jump into edits  
- 💾 **Persistent storage** with Azure SQL Database  
- ⚙️ **Full-stack monorepo setup** (frontend + backend)  
- 🔐 Ready for **authentication** (Entra ID / JWT integration)  
- ☁️ Deployable on **Azure Web App**

---

## 🧩 Tech Stack
| Layer | Technologies |
|--------|---------------|
| **Frontend** | React + TypeScript + Vite + Tailwind CSS |
| **Backend** | Node.js + Express + Prisma ORM |
| **Database** | Azure SQL Database (SQL Server) |
| **Hosting** | Azure Web App |
| **Package Manager** | npm Workspaces |
| **Version Control** | Git + GitHub |

---

## 📁 Project Structure
```
GoMun/
├── package.json
├── apps/
│   ├── web/          # React + TypeScript frontend
│   └── api/          # Node + Express + Prisma backend
└── .gitignore
```

---

## ⚙️ Getting Started

### 1️⃣ Clone the repository
```bash
git clone https://github.com/je0azul5/GoMun.git
cd GoMun
```

### 2️⃣ Install dependencies
```bash
npm install
```

### 3️⃣ Configure environment variables
Create a `.env` file in `apps/api/`:
```bash
DATABASE_URL="sqlserver://<user>:<password>@<Server>.database.windows.net:1433;database=<DBname>;encrypt=true;trustServerCertificate=false;hostNameInCertificate=*.database.windows.net;loginTimeout=30;"
PORT=8080
DEFAULT_USER_ID="couple"
```

Optionally mirror the same default user on the frontend by adding a `.env` file under `apps/web/` with:

```bash
VITE_DEFAULT_USER_ID="couple"
VITE_API_URL="http://localhost:8080"
```

### 4️⃣ Initialize the database
```bash
cd apps/api
npx prisma generate
npx prisma db push
```

### 5️⃣ Run development servers
From the root directory:
```bash
npm run dev
```
Frontend → http://localhost:5173  
Backend → http://localhost:8080/api

---

## ☁️ Deployment (Azure)

1. Provision an **Azure SQL Database** (Single Database or Elastic Pool)  
2. Create an **Azure Web App (Linux, Node 20)**  
3. Add environment variables under **Configuration → Application settings**  
4. Deploy using **GitHub Actions** or `az webapp deploy`

---

## 💬 Slogan
> **“Every dream brings you closer to the moon.”**
