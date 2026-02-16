🎨 NFT Gallery
A React-based NFT gallery with filtering, sorting, and a details page. Built during Appverse Technologies Internship.

![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=white) 
![JavaScript](https://img.shields.io/badge/-JavaScript-F7DF1E?logo=javascript&logoColor=black) 
![HTML5](https://img.shields.io/badge/-HTML5-E34F26?logo=html5&logoColor=white) 
![CSS3](https://img.shields.io/badge/-CSS3-1572B6?logo=css3&logoColor=white)
![Git](https://img.shields.io/badge/-Git-F05032?logo=git&logoColor=white)
![GitHub](https://img.shields.io/badge/-GitHub-181717?logo=github&logoColor=white)
![Vercel](https://img.shields.io/badge/-Vercel-000000?logo=vercel&logoColor=white) 
![VS Code](https://img.shields.io/badge/-VS%20Code-007ACC?logo=visual-studio-code&logoColor=white)

--------------------------------------------------------------------------------------

✨ Features
✅ NFT Gallery Grid - Cards with image, name, artist, price (PKR)
✅ Filter by Artist - CryptoArtist, PixelMaster, WildArt, etc.
✅ Filter by Category - Art, Collectible, Rare
✅ Sort by Price - Low to High / High to Low
✅ Sort by Name - A to Z / Z to A
✅ Details Modal - Full info on click
✅ Responsive Design - Mobile, tablet, desktop
✅ Modern UI - Smooth hover effects and animations

🛠️ Tech Stack
React 18 with Hooks (useState)

CSS3 with Grid & Flexbox

JavaScript ES6+

Create React App

📁 Project Structure
text
src/
├── components/
│   ├── NFTCard.js         # Individual NFT card
│   ├── FilterBar.js        # Filter dropdowns
│   ├── SortBar.js          # Sort dropdown
│   └── NFTDetails.js       # Details modal
├── data/
│   └── nftData.js          # NFT collection
├── App.js                  # Main component
└── App.css                 # Styling
🚀 Quick Start
bash
# Clone repository
git clone https://github.com/beingtaha/NFT-Gallery_Appverse-Internship-Project.git

# Install dependencies
cd NFT-Gallery_Appverse-Internship-Project
npm install

# Start app
npm start
Then open http://localhost:3000

📱 How to Use
Step	Action	What Happens
1	Browse gallery	View NFT cards
2	Select filter	Show only selected artist/category
3	Choose sort	Reorder NFTs by price or name
4	Click card	Open details modal
📊 NFT Collection
Name	Artist	Price (PKR)	Category
Cosmic Dreamer	CryptoArtist	25,000	Art
Pixel Penguin	PixelMaster	15,000	Collectible
Cyber Cat	NeonArtist	40,000	Art
Majestic Gorilla	WildArt	60,000	Art
Abstract Mind	CryptoArtist	30,000	Art
Dragon Egg	FantasyArt	125,000	Rare
Neon City	CyberPunk	45,000	Art
Crypto Punk #42	PunkLabs	160,000	Collectible
🧠 State Management (useState)
javascript
// Main state variables
const [filteredNfts, setFilteredNfts] = useState(nftCollection);
const [selectedNft, setSelectedNft] = useState(null);
const [filters, setFilters] = useState({ artist: 'all', category: 'all' });
const [sortBy, setSortBy] = useState('default');
📱 Responsive Design
Device	Screen	Grid Columns
Mobile	< 480px	1 column
Tablet	480-768px	2 columns
Desktop	> 768px	3-4 columns
📸 Screenshots
text
[Gallery View]    [Filter Dropdown]    [Details Modal]
(Add your actual screenshots here)

👨‍💻 Developer
Taha Ahmed
Internship ID: JAN26-FE14-14
Appverse Technologies
LinkedIn | GitHub

📄 License
MIT License | Educational Project | Appverse Technologies Internship

⭐ If you like this project, please star it on GitHub!
