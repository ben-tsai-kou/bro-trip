<script setup lang="ts">
interface Props {
    variant?: 'hype' | 'trash' | 'neutral';
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'neutral',
});

const variantClass = computed(() => `badge-${props.variant}`);
</script>

<template>
    <span class="badge" :class="variantClass">
        <slot />
    </span>
</template>
