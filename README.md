🎨 NFT Gallery - React Digital Art Showcase

https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/React_Hooks-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/CSS_Grid-1572B6?style=for-the-badge&logo=css3&logoColor=white
https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white
https://img.shields.io/badge/Status-Completed-success?style=for-the-badge
https://img.shields.io/badge/License-MIT-yellow?style=for-the-badge

🚀 Appverse Technologies Internship Project | A modern, minimalist NFT gallery built with React to explore digital art.

📸 Live Demo & Preview
<table> <tr> <td><img src="https://via.placeholder.com/400x200/6c5ce7/ffffff?text=Gallery+View" alt="Gallery View"/></td> <td><img src="https://via.placeholder.com/400x200/00b894/ffffff?text=Details+Page" alt="Details Page"/></td> </tr> <tr> <td align="center"><b>🖼️ Gallery Grid View</b></td> <td align="center"><b>🔍 NFT Details Modal</b></td> </tr> </table>
✨ Features at a Glance
Feature	Description	Status
🖼️ NFT Gallery	Grid display of digital art cards	✅
🔍 Filtering System	Filter by Artist or Category	✅
📊 Sorting Options	Sort by Price (Low/High) or Name (A-Z/Z-A)	✅
📱 Details Page	Full-screen modal with complete metadata	✅
📱 Responsive Design	Works on mobile, tablet, and desktop	✅
🎨 Modern UI	Minimalist design with smooth animations	✅
💰 PKR Pricing	Pakistani Rupee pricing format	✅
❤️ Like Count	Track popularity of each NFT	✅
🛠️ Tech Stack
<div align="center">
Category	Technologies
Frontend	https://img.shields.io/badge/React-18.2-61DAFB?style=flat-square&logo=react
State Management	https://img.shields.io/badge/React_Hooks-useState-61DAFB?style=flat-square&logo=react
Styling	https://img.shields.io/badge/CSS3-Modern-1572B6?style=flat-square&logo=css3
Layout	https://img.shields.io/badge/CSS_Grid-&_Flexbox-1572B6?style=flat-square&logo=css3
Version Control	https://img.shields.io/badge/Git-F05032?style=flat-square&logo=git&logoColor=white https://img.shields.io/badge/GitHub-181717?style=flat-square&logo=github
Package Manager	https://img.shields.io/badge/npm-CB3837?style=flat-square&logo=npm
</div>
🏗️ Component Architecture
text
📁 src/
├── 📁 components/
│   ├── 🃏 NFTCard.js         # Individual NFT card component
│   ├── 🎛️ FilterBar.js        # Filtering controls (Artist/Category)
│   ├── 🔄 SortBar.js          # Sorting controls (Price/Name)
│   └── 📋 NFTDetails.js       # Detailed NFT modal view
├── 📁 data/
│   └── 📄 nftData.js          # NFT collection dataset
├── 🎯 App.js                   # Main container with state management
├── 🎨 App.css                  # Global styles & responsive design
└── 📦 index.js                 # Entry point
🧠 State Management (useState Hooks)
javascript
// App.js - Core State Variables
const [nfts] = useState(nftCollection);                 // Original data (immutable)
const [filteredNfts, setFilteredNfts] = useState(nftCollection); // Filtered & sorted data
const [selectedNft, setSelectedNft] = useState(null);   // Currently selected NFT for modal
const [filters, setFilters] = useState({                // Active filters
  artist: 'all',
  category: 'all'
});
const [sortBy, setSortBy] = useState('default');        // Current sort option
🚀 Getting Started
Prerequisites
Node.js (v14 or higher)

npm or yarn

Installation
bash
# Clone the repository
git clone https://github.com/beingtaha/NFT-Gallery_Appverse-Internship-Project.git

# Navigate to project directory
cd NFT-Gallery_Appverse-Internship-Project

# Install dependencies
npm install

# Start development server
npm start
Open in Browser
text
http://localhost:3000
📖 How to Use
🖼️ Browse NFTs
Scroll through the grid of NFT cards

Each card shows image, name, artist, and price (PKR)

Hover effects provide visual feedback

🔍 Filter NFTs
By Artist: Select artist from dropdown (CryptoArtist, PixelMaster, WildArt, etc.)

By Category: Filter by Art, Collectible, or Rare

Filters work together (e.g., show only "Art" by "CryptoArtist")

📊 Sort NFTs
Price: Low to High / High to Low

Name: A to Z / Z to A

Sorting applies to filtered results

📱 View Details
Click any NFT card to open full-screen details

View large image, full description, and metadata

Click '×' or outside to close

📊 NFT Collection Data
ID	Name	Artist	Price (PKR)	Category	Likes
1	Cosmic Dreamer	CryptoArtist	25,000	Art	234
2	Pixel Penguin	PixelMaster	15,000	Collectible	156
3	Cyber Cat	NeonArtist	40,000	Art	445
4	Majestic Gorilla	WildArt	60,000	Art	892
5	Abstract Mind	CryptoArtist	30,000	Art	367
6	Dragon Egg	FantasyArt	125,000	Rare	1,243
7	Neon City	CyberPunk	45,000	Art	678
8	Crypto Punk #42	PunkLabs	160,000	Collectible	2,156
🎯 Key Features Explained
1. Smart Filtering System
javascript
// Dynamic filter application
if (currentFilters.artist !== 'all') {
  result = result.filter(nft => nft.artist === currentFilters.artist);
}
if (currentFilters.category !== 'all') {
  result = result.filter(nft => nft.category === currentFilters.category);
}
2. Flexible Sorting Options
javascript
// Price-based sorting
case 'price-low':
  result.sort((a, b) => a.price - b.price);
  break;
case 'price-high':
  result.sort((a, b) => b.price - a.price);
  break;
3. Responsive CSS Grid
css
.nft-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));
  gap: 30px;
}
📱 Responsive Design Breakpoints
Device	Screen Size	Grid Columns	Card Size
📱 Mobile	< 480px	1 column	Full width
📱 Tablet	480px - 768px	2 columns	240px
💻 Desktop	> 768px	Auto-fill	280px
🧩 Component Props API
NFTCard Component
jsx
<NFTCard 
  nft={nftObject}      // NFT data object
  onClick={handleClick} // Click handler function
/>
FilterBar Component
jsx
<FilterBar 
  onFilterChange={handleFilterChange} // Filter change handler
  artists={artistsArray}              // Unique artists list
  categories={categoriesArray}         // Unique categories list
/>
NFTDetails Component
jsx
<NFTDetails 
  nft={selectedNft}    // Selected NFT object
  onBack={handleBack}   // Close handler function
/>
🚧 Future Enhancements
🔍 Search Functionality - Search NFTs by name or artist

🌓 Dark/Light Mode - Theme switcher

🛒 Shopping Cart - Add to cart feature

💳 Payment Integration - Mock checkout process

📈 Price Range Filter - Filter by custom price range

⭐ Favorites/Watchlist - Save favorite NFTs

📄 Pagination - Load more NFTs on scroll

📸 Screenshots
<table> <tr> <td><img src="https://via.placeholder.com/300x200/6c5ce7/ffffff?text=Gallery+View" alt="Gallery View"/></td> <td><img src="https://via.placeholder.com/300x200/00b894/ffffff?text=Filtering" alt="Filtering"/></td> <td><img src="https://via.placeholder.com/300x200/fdcb6e/000000?text=Details+Page" alt="Details"/></td> </tr> <tr> <td align="center"><b>NFT Gallery Grid</b></td> <td align="center"><b>Filter by Artist/Category</b></td> <td align="center"><b>NFT Details Modal</b></td> </tr> </table>
🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

Fork the project

Create your feature branch (git checkout -b feature/AmazingFeature)

Commit your changes (git commit -m 'Add some AmazingFeature')

Push to the branch (git push origin feature/AmazingFeature)

Open a Pull Request

📄 License
This project is created for educational purposes as part of the Appverse Technologies Internship Program.

👨‍💻 Developer
<div align="center">
Taha Ahmed
📌 Internship ID: JAN26-FE14-14
🏢 Appverse Technologies Intern
📧 tahaahmed434@gmail.com
🔗 LinkedIn Profile
🐙 GitHub

</div>
⭐ Show Your Support
If you like this project, please consider giving it a ⭐ on GitHub!
Your support motivates me to create more awesome projects.

<div align="center"> <b>Made with ❤️ for the Appverse Technologies Internship</b> <br/> <sub>© 2026 NFT Gallery. All rights reserved.</sub> </div>
