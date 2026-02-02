<script setup lang="ts">
interface Props {
    departureCode?: string;
    departureTime?: string;
    arrivalCode?: string;
    arrivalTime?: string;
    duration?: string;
    airline?: string;
    flightNumber?: string;
    date?: string;
    bookingRef?: string;
}

withDefaults(defineProps<Props>(), {
    departureCode: 'TPE',
    departureTime: '08:30',
    arrivalCode: 'NRT',
    arrivalTime: '12:45',
    duration: '3h 15m',
    airline: 'Japan Airlines',
    flightNumber: 'JL802',
    date: 'Mar 15, 2025',
    bookingRef: 'ABC123XYZ',
});
</script>

<template>
    <UiCard>
        <div class="flex items-center gap-3 mb-4">
            <div
                class="w-10 h-10 rounded-xl bg-blue-500/20 flex items-center justify-center"
            >
                <Icon
                    name="heroicons:paper-airplane"
                    class="w-5 h-5 text-blue-400"
                />
            </div>
            <h3 class="font-semibold text-text-primary">Flights</h3>
        </div>

        <!-- Outbound -->
        <div class="space-y-4">
            <div class="flex items-center justify-between">
                <div class="text-center">
                    <p class="text-2xl font-bold text-text-primary">
                        {{ departureCode }}
                    </p>
                    <p class="text-xs text-text-muted">{{ departureTime }}</p>
                </div>

                <div class="flex-1 px-4">
                    <div class="relative">
                        <div class="border-t border-dashed border-dark-300" />
                        <Icon
                            name="heroicons:arrow-right"
                            class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 text-text-muted bg-dark-200"
                        />
                    </div>
                    <p class="text-center text-xs text-text-muted mt-1">
                        {{ duration }}
                    </p>
                </div>

                <div class="text-center">
                    <p class="text-2xl font-bold text-text-primary">
                        {{ arrivalCode }}
                    </p>
                    <p class="text-xs text-text-muted">{{ arrivalTime }}</p>
                </div>
            </div>

            <div class="flex items-center justify-between text-sm">
                <span class="text-text-secondary"
                    >{{ airline }} {{ flightNumber }}</span
                >
                <span class="text-text-muted">{{ date }}</span>
            </div>

            <div class="pt-3 border-t border-dark-300">
                <p class="text-xs text-text-muted">Booking Ref</p>
                <p class="font-mono text-hype font-semibold">
                    {{ bookingRef }}
                </p>
            </div>
        </div>
    </UiCard>
</template>
