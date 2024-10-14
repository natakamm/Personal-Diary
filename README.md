Render Link : https://personal-diary-na9l.onrender.com 

# Personal Diary (React Application)
A simple diary app built with React that allows users to create, view, and store personal diary entries locally using the browser's LocalStorage. The app features modals for adding and viewing diary entries, as well as sorting and displaying entries by date.

## Features
### Homepage:

- Displays a list of diary entries sorted by date (newest first).
- Each diary entry is presented as a card with:
- A preview image (image URL provided by the user).
- Entry date.
- Entry title.
- Clicking on an entry card opens a modal to display the full entry, including:
- Title.
- Date.
- Full image.
- Content of the diary entry.

### Add Entry:

- "Add Entry" button opens a modal to create a new diary entry.

The form requires the user to fill out the following fields:
- Title: The title of the diary entry.
- Date: The date the entry was made.
- Image URL: A link to an image to represent the entry.
- Content: The text content of the entry.
- The app validates that all fields are filled before allowing the submission.
- If a diary entry already exists for a selected date, the user is prompted to return the next day.

### LocalStorage:

- Diary entries are stored in the browser's LocalStorage.
- On app load, previously saved entries are loaded from LocalStorage and displayed.

# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

### Install Vite

`npm create vite@latest new-react-app -- --template react`

### Navigate into your project directory:

`cd new-react-app`

### Install Dependencies

`npm install`

### Install and Configure Tailwind CSS

Next, we will install Tailwind CSS

### Install Tailwind CSS

`npm install -D tailwindcss postcss autoprefixer`

### Initialize Tailwind CSS

`npx tailwindcss init -p`

### Configure Tailwind

### In the tailwind.config.js file, replace the content with the following:

```/** @type {import('tailwindcss').Config} */
export default {
content: ['./index.html', './src/**/\*.{js,ts,jsx,tsx}'],
theme: {
extend: {}
},
plugins: []
};
```

### Add Tailwind Directives

Open the index.css file located in the src folder, and replace its content with the Tailwind CSS directives:

@tailwind base;
@tailwind components;
@tailwind utilities;

### Install Daisy UI

`npm i -D daisyui`

### Configure Daisy UI

In your tailwind.config.js file, add daisyui to the plugins array:

```/** @type {import('tailwindcss').Config} */
import daisyui from "daisyui"
export default {
content: ['./index.html', './src/**/\*.{js,ts,jsx,tsx}'],
theme: {
extend: {}
},
plugins: [daisyui]
};
```

Check out the various UI components from [Daisy](https://daisyui.com/components/) here.
