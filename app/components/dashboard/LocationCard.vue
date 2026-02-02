<script setup lang="ts">
interface Props {
    title: string;
    imageUrl?: string;
    time?: string;
    cost?: string;
}

withDefaults(defineProps<Props>(), {
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=400',
});
</script>

<template>
    <div class="card card-draggable card-hover p-3">
        <!-- Thumbnail -->
        <div
            v-if="imageUrl"
            class="h-20 rounded-lg bg-cover bg-center mb-3"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        />

        <!-- Content -->
        <div>
            <h4 class="font-medium text-text-primary text-sm mb-2 line-clamp-2">
                {{ title }}
            </h4>

            <div class="flex items-center justify-between text-xs">
                <span
                    v-if="time"
                    class="text-text-muted flex items-center gap-1"
                >
                    <Icon name="heroicons:clock" class="w-3.5 h-3.5" />
                    {{ time }}
                </span>
                <span v-if="cost" class="text-hype font-medium">
                    {{ cost }}
                </span>
            </div>
        </div>
    </div>
</template>
