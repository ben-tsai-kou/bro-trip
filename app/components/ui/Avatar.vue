<script setup lang="ts">
interface Props {
    src: string;
    alt?: string;
    size?: 'sm' | 'md' | 'lg';
}

const props = withDefaults(defineProps<Props>(), {
    alt: 'Avatar',
    size: 'md',
});

const sizeClass = computed(() => `avatar-${props.size}`);
</script>

<template>
    <img :src="src" :alt="alt" class="avatar" :class="sizeClass" />
</template>
