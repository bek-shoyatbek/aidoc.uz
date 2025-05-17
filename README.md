# DocuzAI UI

A React application for creating official documents with AI in multiple languages.

## Features

- Create, edit, and download documents with AI
- Multiple language support (Uzbek, Russian, English)
- Google OAuth authentication
- Responsive design

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/yourusername/docuzai-ui.git
   cd docuzai-ui
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn
   ```

3. Set up Google OAuth credentials (see below)

4. Start the development server
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open your browser and navigate to `http://localhost:5173` (or the URL shown in your terminal)

## Google OAuth Authentication Setup

To enable Google login functionality, you need to obtain a Google OAuth 2.0 Client ID. Follow these steps:

### 1. Create a Google Cloud Project

1. Go to the [Google Cloud Console](https://console.cloud.google.com/)
2. Click on the project dropdown at the top of the page
3. Click on "New Project"
4. Enter a name for your project and click "Create"
5. Wait for the project to be created and then select it from the project dropdown

### 2. Enable the Google OAuth API

1. In your project, navigate to "APIs & Services" > "Library" from the left sidebar
2. Search for "Google OAuth2 API" or "Google Identity Services"
3. Click on the API and then click "Enable"

### 3. Configure OAuth Consent Screen

1. Go to "APIs & Services" > "OAuth consent screen" from the left sidebar
2. Select the appropriate user type for your application (External or Internal)
3. Fill in the required information:
   - App name
   - User support email
   - Developer contact information
4. Click "Save and Continue"
5. Add the necessary scopes (at minimum, you need `.../auth/userinfo.email`, `.../auth/userinfo.profile`, and `openid`)
6. Click "Save and Continue"
7. Add test users if you selected External user type
8. Click "Save and Continue" to complete the consent screen setup

### 4. Create OAuth 2.0 Client ID

1. Go to "APIs & Services" > "Credentials" from the left sidebar
2. Click "Create Credentials" and select "OAuth client ID"
3. Select "Web application" as the application type
4. Enter a name for your OAuth client
5. Add authorized JavaScript origins:
   - For development: `http://localhost:5173` (or your Vite development server URL)
   - For production: Your production domain (e.g., `https://yourdomain.com`)
6. Add authorized redirect URIs if needed (for this application, you don't need to add any)
7. Click "Create"
8. A modal will appear with your Client ID and Client Secret. Copy the Client ID.

### 5. Configure the Application

1. Open `src/App.tsx` in your code editor
2. Replace `YOUR_GOOGLE_CLIENT_ID` with the Client ID you copied:

```tsx
<GoogleOAuthProvider clientId="YOUR_ACTUAL_CLIENT_ID_HERE">
```

## Building for Production

To build the application for production, run:

```bash
npm run build
# or
yarn build
```

This will create a `dist` directory with the compiled and optimized production build.

To preview the production build locally:

```bash
npm run preview
# or
yarn preview
```

## Deployment

### Deploying to Vercel

1. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the following command in the project directory:
   ```bash
   vercel
   ```

3. Follow the prompts to deploy your application.

### Deploying to Netlify

1. Create a `netlify.toml` file in the root of your project:
   ```toml
   [build]
     command = "npm run build"
     publish = "dist"

   [[redirects]]
     from = "/*"
     to = "/index.html"
     status = 200
   ```

2. Deploy using the Netlify CLI or connect your repository to Netlify for continuous deployment.

### Environment Variables

For production deployments, set your Google Client ID as an environment variable instead of hardcoding it:

1. Copy the `.env.example` file to create a new `.env` file:
   ```bash
   cp .env.example .env
   ```

2. Edit the `.env` file and replace the placeholder with your actual Google Client ID:
   ```
   VITE_GOOGLE_CLIENT_ID=your_actual_client_id_here
   ```

3. Make sure to add `.env` to your `.gitignore` file to keep sensitive information out of version control.

4. Update `src/App.tsx` to use the environment variable:
   ```tsx
   <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || "YOUR_GOOGLE_CLIENT_ID"}>
   ```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
```
