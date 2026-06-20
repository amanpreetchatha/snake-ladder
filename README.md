# 🐍 Snake and Ladder Game

An interactive, web-based version of the classic Snakes and Ladders board game. This project is built entirely using standard web technologies: **HTML5, CSS3, and JavaScript**.

## 🚀 Live Demo
You can play the live game directly in your browser here:  
👉 **[https://snake-ladder-flame.vercel.app/](https://snake-ladder-flame.vercel.app/)**

---

## 🎮 About the Game
Snakes and Ladders is a classic race game played on a numbered, 10x10 gridded board. Players roll a virtual die to move their pieces from square 1 to square 100. The game relies entirely on luck and is fun for players of all ages!

---

## 🎲 How to Play

### Game Setup
* **The Board**: Features 100 numbered squares starting at the bottom left (square 1) and zig-zagging up to the top row (square 100).
* **The Pieces**: Each player chooses a unique colored token.
* **Starting Grid**: Everyone starts just off the board or on square 1.

### Taking Turns
* **Move Forward**: Roll the die and move forward by that exact number of squares. Follow the numerical sequence up the grid.
* **Roll a Six**: If you roll a **6**, you move your piece and get an immediate bonus roll!

### Board Obstacles
* **🪜 Climbing Ladders**: Land exactly on the bottom of a ladder to slide up to the top square.
* **🐍 Sliding Down Snakes**: Land exactly on a snake's head to slide down to its tail.
* **Passing Through**: Middle sections of snakes or ladders do not trigger anything. You must land exactly on them.

### Winning the Game
* The first person to reach **square 100** wins!
* You must roll the **exact number** needed to land on 100. If you are on 99 and roll a 3, your piece stays put until your next turn.

---

## 🏛️ History and Origins
While the modern game is a fun race, it originated in ancient India thousands of years ago as **Moksha Patam** (or *Gyan Chauper*). 

* **Moral Lessons**: Spiritual teachers used it to teach children about **Karma** (cause and effect).
* **Virtues vs. Vices**: Ladders represented good deeds (like faith and humility) that lifted the soul. Snakes represented bad deeds (like anger and pride) that dragged you down.
* **The Goal**: Reaching square 100 represented attaining **Moksha** (spiritual liberation or enlightenment).

In the 1890s, the game was brought to the United Kingdom, where it was adapted into the secular children's game we know today.

---

## 🛠️ Built With
* **HTML5** - Structure of the game board and controls.
* **CSS3** - Board styling, animations, and responsive layout.
* **JavaScript (ES6)** - Game logic, dice rolling, and piece movement.

---

## 💻 How to Run Locally

> ⚠️ **Note:** Because this project uses JavaScript ES6 modules (`type="module"`), opening the `index.html` file directly by double-clicking it will cause a CORS error in your browser. You **must** run a local web server to play it locally.

### 1. Clone the repository
```bash
git clone https://github.com
cd snake-ladder
```

### 2. Start a Local Server (Choose Option A or B)

#### Option A: Using Python (Quickest if Python is installed)
Run the following command in your terminal inside the project folder:
```bash
python3 -m http.server 8000
```
Then open your browser and go to: **`http://localhost:8000`**

#### Option B: Using Node.js / NPM
Run the following command in your terminal inside the project folder:
```bash
npx http-server .
```
Then open your browser and go to the local URL provided in your terminal (usually **`http://localhost:8080`**).
