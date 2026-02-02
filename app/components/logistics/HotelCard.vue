<script setup lang="ts">
interface Props {
    name?: string;
    address?: string;
    imageUrl?: string;
    checkIn?: string;
    checkOut?: string;
    confirmationCode?: string;
}

withDefaults(defineProps<Props>(), {
    name: 'Shinjuku Granbell Hotel',
    address: '2-14-5 Kabukicho, Shinjuku',
    imageUrl:
        'https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600',
    checkIn: 'Mar 15, 15:00',
    checkOut: 'Mar 22, 11:00',
    confirmationCode: 'HTL789456',
});
</script>

<template>
    <UiCard>
        <div class="flex items-center gap-3 mb-4">
            <div
                class="w-10 h-10 rounded-xl bg-purple-500/20 flex items-center justify-center"
            >
                <Icon
                    name="heroicons:building-office-2"
                    class="w-5 h-5 text-purple-400"
                />
            </div>
            <h3 class="font-semibold text-text-primary">Accommodation</h3>
        </div>

        <!-- Hotel Image -->
        <div
            class="h-32 rounded-xl bg-cover bg-center mb-4"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        />

        <div class="space-y-3">
            <div>
                <h4 class="font-semibold text-text-primary">{{ name }}</h4>
                <p class="text-sm text-text-muted flex items-center gap-1 mt-1">
                    <Icon name="heroicons:map-pin" class="w-4 h-4" />
                    {{ address }}
                </p>
            </div>

            <div class="flex gap-4 text-sm">
                <div>
                    <p class="text-text-muted">Check-in</p>
                    <p class="text-text-primary font-medium">{{ checkIn }}</p>
                </div>
                <div>
                    <p class="text-text-muted">Check-out</p>
                    <p class="text-text-primary font-medium">{{ checkOut }}</p>
                </div>
            </div>

            <div class="pt-3 border-t border-dark-300">
                <p class="text-xs text-text-muted">Confirmation</p>
                <p class="font-mono text-hype font-semibold">
                    {{ confirmationCode }}
                </p>
            </div>
        </div>
    </UiCard>
</template>
