<script setup lang="ts">
// TODO: Replace with your actual data / state management
const tripImage =
    'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200';
const tripDestination = 'Tokyo, Japan';
const tripDateRange = 'Mar 15 - Mar 22, 2025';

// TODO: Implement actual countdown logic
const countdown = reactive({
    days: '42',
    hours: '08',
    minutes: '32',
    seconds: '15',
});

// TODO: Replace with actual itinerary data
const itineraryDays = [
    {
        id: 1,
        label: 'Day 1 - Arrival',
        cards: [
            {
                id: 1,
                title: 'Shibuya Crossing',
                time: '14:00',
                cost: 'Free',
                imageUrl:
                    'https://images.unsplash.com/photo-1542051841857-5f90071e7989?w=400',
            },
            {
                id: 2,
                title: 'Ichiran Ramen',
                time: '19:00',
                cost: '¥1,200',
                imageUrl:
                    'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=400',
            },
        ],
    },
    {
        id: 2,
        label: 'Day 2 - Explore',
        cards: [
            {
                id: 3,
                title: 'TeamLab Planets',
                time: '10:00',
                cost: '¥3,200',
                imageUrl:
                    'https://images.unsplash.com/photo-1549497538-303791108f95?w=400',
            },
            {
                id: 4,
                title: 'Senso-ji Temple',
                time: '15:00',
                cost: 'Free',
                imageUrl:
                    'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400',
            },
        ],
    },
    {
        id: 3,
        label: 'Day 3 - Adventure',
        cards: [
            {
                id: 5,
                title: 'Mt. Fuji Day Trip',
                time: '07:00',
                cost: '¥8,000',
                imageUrl:
                    'https://images.unsplash.com/photo-1490806843957-31f4c9a91c65?w=400',
            },
        ],
    },
    {
        id: 4,
        label: 'Day 4',
        cards: [],
    },
];
</script>

<template>
    <div class="min-h-screen">
        <!-- Hero Section with Countdown -->
        <DashboardHeroSection
            :image-url="tripImage"
            :destination="tripDestination"
            :date-range="tripDateRange"
            :days="countdown.days"
            :hours="countdown.hours"
            :minutes="countdown.minutes"
            :seconds="countdown.seconds"
        />

        <!-- Kanban Itinerary -->
        <DashboardKanbanBoard :days="itineraryDays" />
    </div>
</template>
