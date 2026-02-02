<script setup lang="ts">
interface Props {
    variant?: 'default' | 'accepted' | 'rejected';
    hoverable?: boolean;
    draggable?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'default',
    hoverable: false,
    draggable: false,
});

const variantClass = computed(() => {
    switch (props.variant) {
        case 'accepted':
            return 'card-accepted';
        case 'rejected':
            return 'card-rejected';
        default:
            return '';
    }
});
</script>

<template>
    <div
        class="card"
        :class="[
            variantClass,
            { 'card-hover': hoverable, 'card-draggable': draggable },
        ]"
    >
        <slot />
    </div>
</template>
