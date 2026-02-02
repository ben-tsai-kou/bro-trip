<script setup lang="ts">
interface Props {
    imageUrl?: string;
    destination?: string;
    dateRange?: string;
    days?: string;
    hours?: string;
    minutes?: string;
    seconds?: string;
}

withDefaults(defineProps<Props>(), {
    imageUrl:
        'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=1200',
    destination: 'Tokyo, Japan',
    dateRange: 'Mar 15 - Mar 22, 2025',
    days: '42',
    hours: '08',
    minutes: '32',
    seconds: '15',
});
</script>

<template>
    <div
        class="relative h-64 md:h-80 overflow-hidden rounded-b-3xl md:rounded-3xl md:mx-4 md:mt-4"
    >
        <!-- Background Image -->
        <div
            class="absolute inset-0 bg-cover bg-center"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        >
            <!-- Overlay gradient -->
            <div
                class="absolute inset-0 bg-gradient-to-t from-dark via-dark/60 to-transparent"
            />
        </div>

        <!-- Content -->
        <div class="relative h-full flex flex-col justify-end p-6">
            <!-- Destination -->
            <div class="mb-4">
                <h1
                    class="text-3xl md:text-4xl font-bold text-text-primary mb-1"
                >
                    {{ destination }}
                </h1>
                <p class="text-text-secondary">
                    {{ dateRange }}
                </p>
            </div>

            <!-- Countdown -->
            <div class="flex gap-6">
                <div class="countdown-unit">
                    <span class="countdown-value">{{ days }}</span>
                    <span class="countdown-label">Days</span>
                </div>
                <div class="countdown-unit">
                    <span class="countdown-value">{{ hours }}</span>
                    <span class="countdown-label">Hours</span>
                </div>
                <div class="countdown-unit">
                    <span class="countdown-value">{{ minutes }}</span>
                    <span class="countdown-label">Min</span>
                </div>
                <div class="countdown-unit">
                    <span class="countdown-value">{{ seconds }}</span>
                    <span class="countdown-label">Sec</span>
                </div>
            </div>
        </div>
    </div>
</template>
