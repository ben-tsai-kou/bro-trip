# BroTrip - Collaborative Group Travel Planner

## Learning Context & Mentorship Approach

**Developer Background:**
- 3+ years professional experience with React, Next.js, and TypeScript
- Strong understanding of frontend architecture, state management, and modern web development
- Previously used Vue 3 for ~6 months but most knowledge has faded
- Starting new role that uses Vue/Nuxt stack
- Goal: Build muscle memory with Vue/Nuxt syntax and patterns through hands-on practice

**Technical Preferences:**
- **Vue Composition API only** (`<script setup>`) - strictly no Options API or Vue 2 patterns
- **Modern Nuxt 3/4 conventions** - leverage auto-imports, file-based routing, and Nuxt-specific features
- **Learning style**: React-first thinking → find Vue equivalent → write idiomatic Vue/Nuxt code
- **Comprehensive coverage needed**: Reactivity (ref/reactive/computed), lifecycle hooks, composables, Nuxt data fetching, file routing

**Mentorship Guidelines:**
- **DO**: Ask guiding questions, point to relevant concepts, suggest where to look in docs
- **DO**: Explicitly compare React patterns with Vue equivalents when it aids understanding
- **DO**: Highlight Vue/Nuxt idioms and best practices (e.g., prefer `computed` over manual updates)
- **DON'T**: Provide complete code solutions - let the developer write code themselves
- **DON'T**: Show Options API, Vue 2 syntax, or outdated patterns
- **DON'T**: Assume lack of general frontend knowledge - focus on Vue/Nuxt specifics
- **Approach**: Socratic method - help think through problems rather than solve them directly

## Project Overview

BroTrip is a web application for small groups of friends (3-5 people) to collaboratively plan vacations together. The aesthetic is fun, hype-inducing, and informal - not a sterile corporate tool, but a shared digital space for excitement, proposals, and consensus-building.

## Tech Stack

- **Framework**: Nuxt 4.3.0 (Vue 3.5)
- **Styling**: Tailwind CSS 4.x with custom dark theme
- **Icons**: @nuxt/icon (Heroicons)
- **Build**: Vite
- **Package Manager**: pnpm

## Directory Structure

```
app/
├── assets/css/main.css    # Global styles, Tailwind layers, custom utilities
├── components/
│   ├── dashboard/         # HeroSection, KanbanBoard, LocationCard
│   ├── layout/            # BottomNav, SideNav
│   ├── logistics/         # FlightCard, HotelCard, SharedWallet, PackingChecklist
│   ├── proposals/         # ProposalCard, UrlInput
│   └── ui/                # Button, Card, Input, Avatar, Badge, VoteButton
├── layouts/default.vue    # Main layout with responsive navigation
└── pages/                 # dashboard, proposals, map, logistics
```

## Key Pages

| Route | Purpose |
|-------|---------|
| `/dashboard` | Trip hero with countdown timer, kanban itinerary by day |
| `/proposals` | Idea pool with URL input, emoji voting (🔥/💩), comments |
| `/map` | Geographic view with user avatar pins, filter toggle |
| `/logistics` | Flights, hotel, shared wallet (expenses), packing checklist |

## Design System

- **Dark mode** default (`#0a0a0a` background)
- **Hype color**: Gold `#f59e0b` - for accepted/positive items (with glow effect)
- **Trash color**: Red `#ef4444` - for rejected items
- **Font**: Inter (400-700 weights)
- **Mobile-first**: Bottom nav on mobile, sidebar on desktop

## Component Conventions

- UI base components in `components/ui/` are reusable primitives
- Domain components organized by feature (dashboard, proposals, logistics)
- Props use TypeScript `defineProps<{}>()` syntax
- Tailwind classes directly in templates

## Current Status

This is a **high-fidelity UI prototype**. All pages and components are built with polished styling, but:

- All data is **hardcoded** (no backend/API)
- Event handlers are **stubs** (no real logic)
- Map is a **placeholder** (no Mapbox/Google Maps integration)
- No state management, authentication, or real-time features

## Development Commands

```bash
pnpm dev      # Start dev server
pnpm build    # Production build
pnpm preview  # Preview production build
```

## Key Implementation Notes

### Voting System
- Uses emoji reactions: 🔥 (Hype/Yes) and 💩 (Trash/No)
- Cards have three states: `voting` (neutral), `accepted` (gold glow), `rejected` (dimmed)

### Kanban Board
- Horizontal scrolling on mobile
- Columns represent trip days (Day 1, Day 2, etc.)
- LocationCards should be draggable (not yet implemented)

### Map Markers
- Custom markers show proposer's avatar (not generic pins)
- Filter toggle: "Accepted Only" vs "All Proposals"

### Shared Wallet
- Shows who owes whom money
- Positive amounts = owed to you (green)
- Negative amounts = you owe (red)

## TODO / Not Yet Implemented

- [ ] Real countdown timer (currently static)
- [ ] URL scraping for rich link previews
- [ ] Drag-and-drop for kanban
- [ ] Map integration (Mapbox or Leaflet)
- [ ] Backend API & database
- [ ] User authentication
- [ ] Real-time updates (WebSocket)
- [ ] Expense calculation logic
