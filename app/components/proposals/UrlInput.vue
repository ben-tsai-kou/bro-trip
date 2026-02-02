<script setup lang="ts">
const url = ref('');

defineEmits<{
    submit: [url: string];
}>();
</script>

<template>
    <div class="flex gap-2">
        <UiInput
            v-model="url"
            placeholder="Paste a link (Google Maps, restaurant blog, etc.)..."
            icon-name="heroicons:link"
            class="flex-1"
        />
        <UiButton @click="$emit('submit', url)">
            <Icon name="heroicons:plus" class="w-5 h-5" />
            <span class="hidden sm:inline">Add</span>
        </UiButton>
    </div>
</template>
