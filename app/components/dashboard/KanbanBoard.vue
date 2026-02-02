<script setup lang="ts">
interface DayColumn {
    id: number;
    label: string;
    cards: Array<{
        id: number;
        title: string;
        imageUrl?: string;
        time?: string;
        cost?: string;
    }>;
}

interface Props {
    days?: DayColumn[];
}

withDefaults(defineProps<Props>(), {
    days: () => [
        {
            id: 1,
            label: 'Day 1 - Arrival',
            cards: [
                {
                    id: 1,
                    title: 'Shibuya Crossing',
                    time: '14:00',
                    cost: 'Free',
                },
                {
                    id: 2,
                    title: 'Ichiran Ramen',
                    time: '19:00',
                    cost: '¥1,200',
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
                },
                {
                    id: 4,
                    title: 'Senso-ji Temple',
                    time: '15:00',
                    cost: 'Free',
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
                },
            ],
        },
        {
            id: 4,
            label: 'Day 4',
            cards: [],
        },
    ],
});
</script>

<template>
    <div class="px-4 py-6">
        <h2 class="text-lg font-semibold text-text-primary mb-4">Itinerary</h2>

        <!-- Horizontal scrolling container -->
        <div class="flex gap-4 overflow-x-auto pb-4 scrollbar-hide -mx-4 px-4">
            <div v-for="day in days" :key="day.id" class="kanban-column">
                <h3 class="kanban-header">{{ day.label }}</h3>
                <div class="kanban-cards">
                    <slot :name="`day-${day.id}`">
                        <!-- Placeholder for cards -->
                        <DashboardLocationCard
                            v-for="card in day.cards"
                            :key="card.id"
                            v-bind="card"
                        />
                    </slot>

                    <!-- Drop zone indicator -->
                    <div
                        class="border-2 border-dashed border-dark-300 rounded-xl h-24 flex items-center justify-center"
                    >
                        <span class="text-text-muted text-sm">Drop here</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
