# Travel Website - React Version

This is a React version of the travel website, converted from the original HTML/CSS/JS version.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Move Images to Public Folder**
   Before running the app, you need to move your images to the `public/img` folder:
   ```bash
   mkdir -p public/img
   cp *.jpg public/img/
   ```
   
   Or manually copy these image files to `public/img/`:
   - header-image.jpg
   - showcase-photo1.jpg
   - showcase-photo2.jpg
   - showcase-photo3.jpg
   - company-img.jpg
   - travel-image1.jpg
   - travel-image2.jpg
   - travel-image3.jpg

3. **Start the Development Server**
   ```bash
   npm start
   ```
   
   The app will open at `http://localhost:3000`

## Project Structure

```
├── public/
│   ├── img/          # All image files go here
│   └── index.html    # HTML template
├── src/
│   ├── components/   # Reusable components
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── pages/        # Page components
│   │   ├── Home.js
│   │   ├── About.js
│   │   └── Contact.js
│   ├── App.js        # Main app component with routing
│   ├── index.js      # Entry point
│   └── index.css     # All styles
└── package.json      # Dependencies
```

## Features

- **React Router** for navigation between pages
- **Component-based architecture** for reusability
- **Same styling** as the original website
- **Form handling** with React state in Contact page
- **Responsive design** maintained from original CSS

## Pages

- **Home** (`/`) - Landing page with header, showcase, and features
- **About** (`/about`) - About page with company information and stats
- **Contact** (`/contact`) - Contact form with company address

## Technologies Used

- React 18.2.0
- React Router DOM 6.20.0
- Font Awesome (via CDN)
- Custom CSS


