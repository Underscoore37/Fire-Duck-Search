# 🔥 Fire Duck Search

**Molten-fast private search dashboard browser extension**

Fire Duck Search is a lightweight, privacy-focused browser extension that instantly transforms your default new tab into a sleek, efficient dashboard. Powered entirely by DuckDuckGo, it blends high-performance web search with an immersive, ember-themed dark aesthetic. Built with a standalone, tracking-free architecture, it features quick-routing search "bangs" alongside native shortcuts to standard privacy tools.

> **Core Philosophy:** Maximum speed, total privacy, and zero bloat. Your search terms are passed directly to downstream providers without any intermediary telemetry or logging.

---

![Fire Duck Search Dashboard](https://i.ibb.co/1tcGXnrn/Homescreen-Fire-Duck.png)

---

## ✨ Key Features

- **Molten-Fast Dashboard** — Replaces your browser's default new tab page with a lightweight dashboard that renders instantly.
- **Privacy-Focused Queries** — Built natively on DuckDuckGo's secure architecture to prevent tracking and commercial profiling.
- **Integrated Search Bangs** — Features direct interactive shortcuts to instantly route queries to specific platforms (e.g., Google, YouTube, Wikipedia, GitHub).
- **Secure Ecosystem Shortcuts** — Clean callouts to privacy utilities including Duck AI and Duck Mail.
- **Responsive Ember Background** — An interactive HTML5 canvas particle system that paints animated, glowing fiery sparks dynamically across the screen.

---

## 📁 Repository Structure
```
├── manifest.json      # Extension configuration, permissions, and tab overrides
├── index.html         # Main dashboard UI structure, modules, and shortcut nodes
├── style.css          # Ember-themed typography, responsive structure, and styles
├── script.js          # Query execution, interactive bangs, and particle canvas loop
├── duck.png           # Core branding logo asset representing the project badge
├── duck-ai.svg        # Clean vector icon for the Duck AI card component
└── duckmail.svg       # Clean vector icon for the Duck Mail card component
```
---

## 🚀 Installation & Development

### Prerequisites

Any modern Chromium-based web browser:
- Google Chrome
- Brave
- Microsoft Edge
- Opera
- Vivaldi

### Local Loading Instructions

1. Clone or download this repository to your local computer.
2. Open your browser and navigate to the extensions management console:
   - **Chrome / Brave:** `chrome://extensions`
   - **Edge:** `edge://extensions`
3. Enable **Developer Mode** using the toggle switch typically located in the top-right corner.
4. Click on the **Load unpacked** button in the top-left area.
5. Select the root directory containing the extension files (where `manifest.json` is located).
6. Open a new browser tab to see the active extension dashboard.

---

## 📖 Usage Guide

### Standard Web Search

Type your query directly into the central input field and hit **Enter** or click the **Search** button to instantly forward the request securely to DuckDuckGo.

### Utilizing Smart Bangs

Click on any popular bang chip at the bottom of the interface to prepopulate your search bar with the proper functional prefix, or type them manually:


| Bang | Target Destination | Bang | Target Destination |
|---|---|---|---|
| `!g` | Google Search | `!maps` | Google Maps |
| `!yt` | YouTube | `!amz` | Amazon |
| `!w` | Wikipedia | `!tw` | Twitter / X |
| `!r` | Reddit | `!img` | DuckDuckGo Images |
| `!gh` | GitHub | `!so` | Stack Overflow |

---

## 📬 Contact

For questions or feedback, reach out at [contact@pokharelbigyan.com.np](mailto:contact@pokharelbigyan.com.np)

---

## 📄 License

### Source Code
Copyright &copy; 2026 [pokharelbigyan.com.np](https://pokharelbigyan.com.np)

This project's source code is licensed under the **GNU General Public License v3.0 (GPL-3.0)**. Anyone is free to copy, modify, distribute, and run this code under the terms of the GPL-3.0 license. Official rights are reserved by the original authors. See the full license details at [gnu.org/licenses](https://www.gnu.org/licenses).

### Branding Assets
[![License: CC BY-ND 4.0](https://img.shields.io/badge/License-CC--BY--ND%204.0-lightgrey.svg)](https://creativecommons.org/licenses/by-nd/4.0/)

The brand logo asset `duck.png` for **[Fire Duck Search](https://github.com/Underscoore37/Fire-Duck-Search/)** is licensed separately under a [Creative Commons Attribution-NoDerivatives 4.0 International License](https://creativecommons.org/licenses/by-nd/4.0/).

<p align="left">
  <a href="https://raw.githubusercontent.com/Underscoore37/Fire-Duck-Search/refs/heads/main/duck.png">Fire Duck Search Logo</a> &copy; 2026 by 
  <a href="https://pokharelbigyan.com.np">Bigyan Pokharel</a> 
  is licensed under 
  <a href="https://creativecommons.org/licenses/by-nd/4.0/">CC BY-ND 4.0</a>
  <img src="https://mirrors.creativecommons.org/presskit/icons/cc.svg" alt="CC" width="18" height="18" style="vertical-align: middle; margin-left: 4px;">
  <img src="https://mirrors.creativecommons.org/presskit/icons/by.svg" alt="BY" width="18" height="18" style="vertical-align: middle; margin-left: 2px;">
  <img src="https://mirrors.creativecommons.org/presskit/icons/nd.svg" alt="ND" width="18" height="18" style="vertical-align: middle; margin-left: 2px;">
</p>

---

*Fire Duck Search Extension • Built for Speed & Absolute Privacy* 🔥
