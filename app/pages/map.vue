<script setup lang="ts">
// TODO: Implement your map logic here
const showOnlyAccepted = ref(true);
</script>

<template>
    <div class="min-h-screen relative">
        <!-- Map Container (placeholder for actual map integration) -->
        <div class="absolute inset-0 bg-dark-100">
            <!-- Placeholder map background -->
            <div
                class="w-full h-full bg-cover bg-center opacity-60"
                style="
                    background-image: url('https://api.mapbox.com/styles/v1/mapbox/dark-v11/static/139.7525,35.6846,12,0/1200x800?access_token=placeholder');
                "
            />

            <!-- Map placeholder text -->
            <div class="absolute inset-0 flex items-center justify-center">
                <div class="text-center">
                    <Icon
                        name="heroicons:map"
                        class="w-16 h-16 text-text-muted mx-auto mb-4"
                    />
                    <p class="text-text-muted">Map integration goes here</p>
                    <p class="text-text-muted text-sm">
                        Use Google Maps, Mapbox, or Leaflet
                    </p>
                </div>
            </div>

            <!-- Example map markers -->
            <div class="absolute top-1/4 left-1/3 map-marker">
                <img
                    src="https://i.pravatar.cc/100?img=1"
                    alt="Ben"
                    class="map-marker-avatar"
                />
                <div class="map-marker-pin" />
            </div>

            <div class="absolute top-1/2 left-1/2 map-marker">
                <img
                    src="https://i.pravatar.cc/100?img=2"
                    alt="Kevin"
                    class="map-marker-avatar"
                />
                <div class="map-marker-pin" />
            </div>

            <div class="absolute top-1/3 right-1/4 map-marker">
                <img
                    src="https://i.pravatar.cc/100?img=3"
                    alt="Alex"
                    class="map-marker-avatar"
                />
                <div class="map-marker-pin" />
            </div>
        </div>

        <!-- Filter Toggle -->
        <div class="absolute top-4 left-4 right-4 z-10">
            <div
                class="bg-dark-50/90 backdrop-blur-sm rounded-2xl p-3 flex items-center justify-between"
            >
                <span class="text-sm font-medium text-text-primary"
                    >Show only accepted</span
                >
                <button
                    class="relative w-12 h-6 rounded-full transition-colors"
                    :class="showOnlyAccepted ? 'bg-hype' : 'bg-dark-300'"
                    @click="showOnlyAccepted = !showOnlyAccepted"
                >
                    <span
                        class="absolute top-1 w-4 h-4 rounded-full bg-white transition-transform"
                        :class="
                            showOnlyAccepted ? 'translate-x-7' : 'translate-x-1'
                        "
                    />
                </button>
            </div>
        </div>

        <!-- Location Details Panel (bottom sheet style) -->
        <div class="absolute bottom-20 md:bottom-4 left-4 right-4 z-10">
            <UiCard class="!p-3">
                <div class="flex items-center gap-3">
                    <div
                        class="w-16 h-16 rounded-xl bg-cover bg-center flex-shrink-0"
                        style="
                            background-image: url('https://images.unsplash.com/photo-1549497538-303791108f95?w=200');
                        "
                    />
                    <div class="flex-1 min-w-0">
                        <h3 class="font-semibold text-text-primary truncate">
                            TeamLab Planets
                        </h3>
                        <p class="text-sm text-text-muted">Proposed by Kevin</p>
                        <div class="flex items-center gap-2 mt-1">
                            <UiBadge variant="hype">Accepted</UiBadge>
                            <span class="text-xs text-text-muted"
                                >Day 2 • 10:00</span
                            >
                        </div>
                    </div>
                    <button class="btn btn-icon btn-secondary">
                        <Icon
                            name="heroicons:arrow-top-right-on-square"
                            class="w-5 h-5"
                        />
                    </button>
                </div>
            </UiCard>
        </div>
    </div>
</template>
