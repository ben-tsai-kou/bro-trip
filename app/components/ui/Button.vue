<script setup lang="ts">
interface Props {
    variant?: 'primary' | 'secondary' | 'ghost';
    size?: 'sm' | 'md' | 'lg';
    icon?: boolean;
    iconName?: string;
    iconPosition?: 'left' | 'right';
    disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    variant: 'primary',
    size: 'md',
    icon: false,
    iconPosition: 'left',
    disabled: false,
});

const variantClass = computed(() => `btn-${props.variant}`);

const sizeClass = computed(() => {
    if (props.icon) return '';
    switch (props.size) {
        case 'sm':
            return 'text-sm px-3 py-2';
        case 'lg':
            return 'text-lg px-6 py-3';
        default:
            return '';
    }
});
</script>

<template>
    <button
        class="btn"
        :class="[variantClass, sizeClass, { 'btn-icon': icon }]"
        :disabled="disabled"
    >
        <Icon
            v-if="iconName && iconPosition === 'left'"
            :name="iconName"
            class="w-5 h-5"
        />
        <slot />
        <Icon
            v-if="iconName && iconPosition === 'right'"
            :name="iconName"
            class="w-5 h-5"
        />
    </button>
</template>
