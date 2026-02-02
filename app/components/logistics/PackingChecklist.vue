<script setup lang="ts">
interface ChecklistItem {
    id: number;
    label: string;
    checked: boolean;
    checkedBy?: Array<{ id: number; avatar: string }>;
}

interface Props {
    items?: ChecklistItem[];
}

const props = withDefaults(defineProps<Props>(), {
    items: () => [
        {
            id: 1,
            label: 'Passport',
            checked: true,
            checkedBy: [{ id: 1, avatar: 'https://i.pravatar.cc/100?img=1' }],
        },
        {
            id: 2,
            label: 'Power bank',
            checked: true,
            checkedBy: [{ id: 2, avatar: 'https://i.pravatar.cc/100?img=2' }],
        },
        { id: 3, label: 'Sunscreen', checked: false },
        { id: 4, label: 'Travel adapter', checked: false },
        {
            id: 5,
            label: 'Pocket WiFi',
            checked: true,
            checkedBy: [{ id: 3, avatar: 'https://i.pravatar.cc/100?img=3' }],
        },
    ],
});

defineEmits<{
    toggle: [id: number];
}>();

const checkedCount = computed(
    () => props.items.filter((item) => item.checked).length
);
const progress = computed(
    () => (checkedCount.value / props.items.length) * 100
);
</script>

<template>
    <UiCard>
        <div class="flex items-center gap-3 mb-4">
            <div
                class="w-10 h-10 rounded-xl bg-orange-500/20 flex items-center justify-center"
            >
                <Icon
                    name="heroicons:clipboard-document-check"
                    class="w-5 h-5 text-orange-400"
                />
            </div>
            <div>
                <h3 class="font-semibold text-text-primary">Packing List</h3>
                <p class="text-xs text-text-muted">
                    {{ checkedCount }}/{{ items.length }} items packed
                </p>
            </div>
        </div>

        <!-- Progress bar -->
        <div class="h-2 bg-dark-100 rounded-full mb-4 overflow-hidden">
            <div
                class="h-full bg-hype rounded-full transition-all duration-300"
                :style="{ width: `${progress}%` }"
            />
        </div>

        <!-- Items -->
        <div class="space-y-2">
            <div v-for="item in items" :key="item.id" class="checklist-item">
                <input
                    type="checkbox"
                    :checked="item.checked"
                    class="checklist-checkbox"
                    @change="$emit('toggle', item.id)"
                />
                <span
                    class="flex-1"
                    :class="
                        item.checked
                            ? 'text-text-muted line-through'
                            : 'text-text-primary'
                    "
                >
                    {{ item.label }}
                </span>
                <div v-if="item.checkedBy" class="flex -space-x-1">
                    <UiAvatar
                        v-for="user in item.checkedBy"
                        :key="user.id"
                        :src="user.avatar"
                        size="sm"
                        class="ring-dark-100"
                    />
                </div>
            </div>
        </div>

        <!-- Add item -->
        <button
            class="mt-4 w-full py-2 border-2 border-dashed border-dark-300 rounded-xl text-text-muted hover:border-dark-400 hover:text-text-secondary transition-colors"
        >
            <Icon name="heroicons:plus" class="w-5 h-5 inline-block" />
            Add item
        </button>
    </UiCard>
</template>
