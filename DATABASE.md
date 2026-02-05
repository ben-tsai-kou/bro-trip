# BroTrip - Database Schema

## Auth

Uses **Supabase Auth** with Google OAuth. `auth.users` is managed by Supabase internally.

---

## Tables

### profiles

Extends `auth.users` with app-specific user info.

| Column     | Type      | Notes                           |
| ---------- | --------- | ------------------------------- |
| id         | uuid      | References `auth.users.id` (PK) |
| name       | varchar   |                                 |
| avatar     | varchar   | URL from Google OAuth           |
| created_at | timestamp |                                 |
| updated_at | timestamp |                                 |

---

### project

A group of bros planning a trip together.

| Column       | Type    | Notes                              |
| ------------ | ------- | ---------------------------------- |
| id           | uuid    | PK                                 |
| created_by   | uuid    | References `profiles.id`           |
| invited_code | varchar | Auto-generated, unique invite code |

---

### proposals

The trip plan itself. Belongs to a project.

| Column                | Type      | Notes                                                                          |
| --------------------- | --------- | ------------------------------------------------------------------------------ |
| id                    | uuid      | PK                                                                             |
| project_id            | uuid      | References `project.id`                                                        |
| title                 | varchar   |                                                                                |
| description           | text      |                                                                                |
| approved_votes_number | integer   | How many yes votes needed to accept a plan. Must be > 0 and <= total attendees |
| start_date            | date      |                                                                                |
| end_date              | date      |                                                                                |
| created_at            | timestamp |                                                                                |
| created_by            | uuid      | References `profiles.id`                                                       |

---

### proposals_attendees

Junction table: which bros are attending which proposal (trip).

| Column      | Type      | Notes                     |
| ----------- | --------- | ------------------------- |
| id          | uuid      | PK                        |
| proposal_id | uuid      | References `proposals.id` |
| profile_id  | uuid      | References `profiles.id`  |
| created_at  | timestamp |                           |
| updated_at  | timestamp |                           |

---

### trips_info

Per-user flight and hotel info for a proposal.

| Column      | Type      | Notes                     |
| ----------- | --------- | ------------------------- |
| id          | uuid      | PK                        |
| profile_id  | uuid      | References `profiles.id`  |
| proposal_id | uuid      | References `proposals.id` |
| flight_info | jsonb     |                           |
| hotel_info  | jsonb     |                           |
| created_at  | timestamp |                           |
| updated_at  | timestamp |                           |
| created_by  | uuid      | References `profiles.id`  |

---

### checklist_items

Shared packing / to-do items for a trip.

| Column      | Type      | Notes                     |
| ----------- | --------- | ------------------------- |
| id          | uuid      | PK                        |
| proposal_id | uuid      | References `proposals.id` |
| title       | varchar   |                           |
| description | text      |                           |
| created_at  | timestamp |                           |
| updated_at  | timestamp |                           |
| created_by  | uuid      | References `profiles.id`  |

---

### checklist_item_status

Per-user check status for each checklist item.

| Column            | Type      | Notes                           |
| ----------------- | --------- | ------------------------------- |
| id                | uuid      | PK                              |
| checklist_item_id | uuid      | References `checklist_items.id` |
| profile_id        | uuid      | References `profiles.id`        |
| is_checked        | boolean   |                                 |
| created_at        | timestamp |                                 |
| updated_at        | timestamp |                                 |

---

### plans

location proposal card. Belongs to a proposal.

`status` is **computed on read**, not stored. See [Status Calculation](#status-calculation) below.

| Column      | Type      | Notes                        |
| ----------- | --------- | ---------------------------- |
| id          | uuid      | PK                           |
| proposal_id | uuid      | References `proposals.id`    |
| title       | varchar   |                              |
| description | text      |                              |
| created_at  | timestamp |                              |
| updated_at  | timestamp |                              |
| created_by  | uuid      | References `profiles.id`     |
| images      | text[]    | Array of image URLs          |
| date        | date      | Single date for the activity |

---

### plan_votes

Each bro's vote on a plan. One vote per user per plan.

| Column     | Type      | Notes                            |
| ---------- | --------- | -------------------------------- |
| id         | uuid      | PK                               |
| plan_id    | uuid      | References `plans.id`            |
| profile_id | uuid      | References `profiles.id`         |
| is_yes     | boolean   | true = 🔥 Hype, false = 💩 Trash |
| created_at | timestamp |                                  |
| updated_at | timestamp |                                  |

**UNIQUE constraint on `(plan_id, profile_id)`** — prevents duplicate votes. Use `INSERT ... ON CONFLICT` for upsert.

---

### plan_comments

Discussion / under each plan card.

| Column     | Type      | Notes                    |
| ---------- | --------- | ------------------------ |
| id         | uuid      | PK                       |
| plan_id    | uuid      | References `plans.id`    |
| profile_id | uuid      | References `profiles.id` |
| comment    | text      |                          |
| created_at | timestamp |                          |
| updated_at | timestamp |                          |

---

## Status Calculation

`plans.status` is **not stored in the DB**. It is computed at query time based on:

-   `proposals.approved_votes_number` — the threshold set by the user
-   `plan_votes` — count of yes/no votes for that plan
-   Total number of attendees in the proposal (`proposals_attendees` count)

### Logic

```
yes_count  = COUNT of plan_votes WHERE plan_id = X AND is_yes = true
no_count   = COUNT of plan_votes WHERE plan_id = X AND is_yes = false
total      = COUNT of proposals_attendees for the parent proposal
remaining  = total - yes_count - no_count (people who haven't voted yet)

if yes_count >= approved_votes_number
  → status = "accepted"
else if (yes_count + remaining) < approved_votes_number
  → status = "rejected"  (even if all remaining people vote yes, still can't reach threshold)
else
  → status = "voting"
```
