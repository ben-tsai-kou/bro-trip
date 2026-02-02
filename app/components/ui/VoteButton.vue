<script setup lang="ts">
interface Props {
    type: 'hype' | 'trash';
    count?: number;
    active?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    count: 0,
    active: false,
});

defineEmits<{
    vote: [];
}>();

const emoji = computed(() => (props.type === 'hype' ? '🔥' : '💩'));
const typeClass = computed(() => `vote-btn-${props.type}`);
</script>

<template>
    <button
        class="vote-btn"
        :class="[typeClass, { active: active }]"
        @click="$emit('vote')"
    >
        <span class="text-lg">{{ emoji }}</span>
        <span class="text-sm font-medium tabular-nums">{{ count }}</span>
    </button>
</template>
