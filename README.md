# AgriTrade - Agriculture Website Template

## Overview
AgriTrade is a modern and responsive agriculture website template built with React and styled-components. It includes multiple pages such as Home, Product Page (with filters, search, and categories), Blog Page, and Contact Page. The template is structured for easy customization and scalability.

## Features
- Fully responsive design
- Homepage with animated sections
- Product page with filtering and search functionality
- Blog section with featured posts
- Contact page with a simple form
- Modular components for easy reusability
- Config-driven content management
- Framer Motion for smooth animations
- Lucide-react icons for modern UI

## Folder Structure
```
AgriTrade/
│── src/
│   ├── components/        # Reusable UI components
│   ├── config/            # Configuration files for content
│   │   ├── homeConfig.js  # Homepage content
│   │   ├── blogPost.js    # Blog post data
│   │   ├── productsData.js # Product details
│       |── productCategories.js # Product categories
        
│   ├── context/           # Context API for global state management
│   ├── styles/            # Styled-components for different sections
│   │   ├── homeStyle.js   # Styling for homepage
│   ├── pages/             # Application pages (Home, Products, Blog, Contact)
│   ├── App.js             # Main application file
│   ├── index.js           # Entry point
│── public/                # Static assets
│── README.md              # Documentation
│── package.json           # Dependencies and scripts
```

## Installation
### Prerequisites
Ensure you have Node.js and npm/yarn installed.

### Steps
1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/agriculture-template.git
   cd agriculture-template
   ```
2. Install dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Run the development server:
   ```sh
   npm start  # or yarn start
   ```
4. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Customization
### Editing Content
All dynamic content is stored in the `config/` folder. Modify files such as `homeConfig.js`, `productsData.js`, and `blogPost.js` to update sections like features, products, and blogs.

### Styling
Custom styles are stored in the `styles/` folder using styled-components. To adjust colors, typography, or layouts, update the respective `.js` files.

### Adding New Pages
To add a new page:
1. Create a new file inside the `pages/` directory.
2. Define the page structure and import necessary components.
3. Update the `App.js` file to include a route for the new page.

## Deployment
To build the project for production:
```sh
npm run build  # or yarn build
```
This will generate an optimized `build/` folder ready for deployment.

## License
This template is licensed under [Your Chosen License]. You can use and modify it freely for personal or commercial projects.

## Support
For any questions or issues, please open a GitHub issue or contact [your email].

## Acknowledgements
- [Lucide Icons](https://lucide.netlify.app/)
- [Framer Motion](https://www.framer.com/motion/)
- [styled-components](https://styled-components.com/)
