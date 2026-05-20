# Urban-Harvest

Urban Harvest is a modern, responsive React-based admin dashboard and inventory management system designed for organic farms and grocery stores.

## Prerequisites
- Node.js (v16 or higher recommended)
- npm or yarn

## Setup Instructions

1. **Clone the repository** (if you haven't already):
   ```bash
   git clone https://github.com/Tanneeru-Nikhil/Urban-Harvest.git
   cd Urban-Harvest
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **View the app**:
   Open `http://localhost:5173` (or the port provided in your terminal) in your browser.

## Build for Production

To create a production-ready build, run:
```bash
npm run build
```
This will generate a `dist` folder containing the optimized static files.

---

## Deploying to Vercel

The easiest way to deploy this application is using Vercel. Since this is a Vite project, Vercel will automatically detect the settings.

### Option 1: Deploy via GitHub (Recommended)
1. Push your code to your GitHub repository.
2. Log in to [Vercel](https://vercel.com/) and click **Add New Project**.
3. Import your `Urban-Harvest` repository from GitHub.
4. Vercel will auto-detect Vite. The default build command (`npm run build`) and output directory (`dist`) are correct.
5. Click **Deploy**. Your app will automatically update every time you push to the `main` branch!

### Option 2: Deploy via Vercel CLI
1. Install the Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```
2. Run the deployment command in your project directory:
   ```bash
   vercel
   ```
3. Follow the interactive prompts to log in and deploy. When deploying to production, use:
   ```bash
   vercel --prod
   ```
### Login 
email: admin@urbanharvest.com
password: password123