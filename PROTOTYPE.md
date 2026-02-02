PROMPT FOR AI PROTOTYPE GENERATOR
Project Title: BroTrip - Collaborative Group Travel Planner

1. Core Concept & Vibe Design a high-fidelity prototype for a web application called "BroTrip." It is a collaborative trip planning tool designed specifically for small groups of close friends (3-5 people) organizing a vacation together.

The Vibe: The aesthetic should be fun, hype-inducing, modern, and slightly informal. It should not feel like a sterile corporate project management tool. It needs to feel like a shared digital space where friends can get excited, propose wild ideas, roast each other's bad suggestions, and build consensus.

Target Device: Mobile-first design, but responsive for desktop.

Design System: Clean, modern aesthetic similar to Tailwind CSS / Shadcn UI. Default to Dark Mode for a sleeker feel. Use punchy accent colors (e.g., Gold for hype/accepted, Red for rejected/over budget).

2. Navigation Structure The app should have a simple bottom navigation bar (on mobile) with four main tabs:

Dashboard (The main itinerary view)

Proposals (The idea pool and voting area)

Map (Geographic view of accepted spots)

Logistics (Flights, hotels, money, and checklists)

3. Detailed Page Requirements

Page 1: /dashboard (The Hype Hub & Itinerary) This is the landing page. It needs to build excitement and show the plan at a glance.

Hero Section: A large, visually engaging header featuring a high-quality photo of the destination (e.g., Tokyo skyline). Overlay a large, ticking Countdown Timer showing days/hours until the trip starts. Show basic trip dates and destination name.

Kanban Itinerary: Below the hero, a horizontal scrolling (on mobile) Kanban-style board.

Columns labeled "Day 1", "Day 2", "Day 3", etc.

Inside the columns contain "Location Cards." These cards must look draggable.

Each card shows a small thumbnail image, location title, and perhaps an estimated cost or time slot.

Page 2: /proposals (The Idea Pool & War Room) Where ideas are born and judged.

URL Input: A prominent input field at the top: "Paste a link (Google Maps, restaurant blog, etc.)..." with an "Add" button.

Proposal Cards List: A vertical feed of suggested locations.

Each card should be a "rich preview" (like an Open Graph link preview) showing an image and title automatically scraped from a URL.

Voting UI: Prominent reaction buttons on each card. Instead of boring upvotes, use emojis like "🔥 (Hype/Yes)" and "💩 (Trash/No)". Show live vote counts next to the emojis.

Status Indicators: Visually distinguish cards based on voting status: "Voting in progress" (neutral), "Accepted" (Gold border/glow), "Rejected" (dimmed out).

Comments Section: An expandable "Comments" area under each card for real-time roasting and discussion. Show small avatars next to comments.

Page 3: /map (The Strategic View)

Full-Screen Map: A full-screen interface (Google Maps style, dark theme).

Avatar Markers: Crucial detail: The map pins should not just be generic dots. The markers should display the tiny user avatar face of the friend who proposed that location. This emphasizes who suggested what.

Filter Toggle: A simple toggle switch to show "Only Accepted Locations" vs. "Show All Proposals".

Page 4: /logistics (The Boring but Necessary Stuff) A clean, structured page for crucial information.

Flights & Accommodation: Two distinct cards showing summary details for flights (airport codes, times, booking ref) and hotel info (address, check-in time).

The Pot (Shared Wallet): A widget showing a simplified debt summary. E.g., "Ben owes Kevin $50", "Alex is owed $100". A button to "Add Expense".

Packing Checklist: A shared checklist widget. Items like "Power bank", "Passport", "Sunscreen". Users can check items off, and see who checked it.

4. Key User Interactions to Visualize

Dragging a card from a "pool" into a "Day 1" column on the Dashboard.

Clicking a "🔥" vote button on the Proposals page and seeing the count increment instantly.

The visual difference between an "Accepted" card (glowing, hype) and a "Rejected" card.
