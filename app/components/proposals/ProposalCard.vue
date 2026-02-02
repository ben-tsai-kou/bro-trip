<script setup lang="ts">
interface Props {
    title: string;
    description?: string;
    imageUrl?: string;
    proposerName?: string;
    proposerAvatar?: string;
    status?: 'voting' | 'accepted' | 'rejected';
    hypeCount?: number;
    trashCount?: number;
    commentCount?: number;
    userVote?: 'hype' | 'trash' | null;
    showComments?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
    description: '',
    imageUrl: 'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=600',
    proposerName: 'Anonymous',
    proposerAvatar: 'https://i.pravatar.cc/100?img=1',
    status: 'voting',
    hypeCount: 0,
    trashCount: 0,
    commentCount: 0,
    userVote: null,
    showComments: false,
});

defineEmits<{
    vote: [type: 'hype' | 'trash'];
    'toggle-comments': [];
}>();

const cardVariant = computed(() => {
    switch (props.status) {
        case 'accepted':
            return 'accepted';
        case 'rejected':
            return 'rejected';
        default:
            return 'default';
    }
});

const statusBadgeVariant = computed(() => {
    switch (props.status) {
        case 'accepted':
            return 'hype';
        case 'rejected':
            return 'trash';
        default:
            return 'neutral';
    }
});

const statusLabel = computed(() => {
    switch (props.status) {
        case 'accepted':
            return 'Accepted';
        case 'rejected':
            return 'Rejected';
        default:
            return 'Voting';
    }
});
</script>

<template>
    <UiCard :variant="cardVariant" class="overflow-hidden">
        <!-- Preview Image -->
        <div
            class="h-40 -mx-4 -mt-4 mb-4 bg-cover bg-center relative"
            :style="{ backgroundImage: `url(${imageUrl})` }"
        >
            <!-- Status Badge -->
            <div class="absolute top-3 right-3">
                <UiBadge :variant="statusBadgeVariant">
                    {{ statusLabel }}
                </UiBadge>
            </div>

            <!-- Proposer Avatar -->
            <div class="absolute bottom-3 left-3 flex items-center gap-2">
                <UiAvatar :src="proposerAvatar" size="sm" />
                <span
                    class="text-xs text-text-primary font-medium bg-dark/70 px-2 py-1 rounded-full"
                >
                    {{ proposerName }}
                </span>
            </div>
        </div>

        <!-- Content -->
        <div class="space-y-3">
            <div>
                <h3 class="font-semibold text-text-primary text-lg mb-1">
                    {{ title }}
                </h3>
                <p class="text-text-muted text-sm line-clamp-2">
                    {{ description }}
                </p>
            </div>

            <!-- Voting -->
            <div class="flex items-center gap-3 pt-2">
                <UiVoteButton
                    type="hype"
                    :count="hypeCount"
                    :active="userVote === 'hype'"
                    @vote="$emit('vote', 'hype')"
                />
                <UiVoteButton
                    type="trash"
                    :count="trashCount"
                    :active="userVote === 'trash'"
                    @vote="$emit('vote', 'trash')"
                />

                <!-- Comment toggle -->
                <button
                    class="ml-auto flex items-center gap-1.5 text-text-muted hover:text-text-secondary transition-colors"
                    @click="$emit('toggle-comments')"
                >
                    <Icon name="heroicons:chat-bubble-left" class="w-5 h-5" />
                    <span class="text-sm">{{ commentCount }}</span>
                </button>
            </div>

            <!-- Comments Section (expandable) -->
            <div
                v-if="showComments"
                class="pt-3 border-t border-dark-300 space-y-3"
            >
                <slot name="comments">
                    <!-- Example comments -->
                    <div class="flex gap-2">
                        <UiAvatar
                            src="https://i.pravatar.cc/100?img=3"
                            size="sm"
                        />
                        <div class="flex-1 bg-dark-100 rounded-xl px-3 py-2">
                            <span class="text-sm font-medium text-text-primary"
                                >Kevin</span
                            >
                            <p class="text-sm text-text-secondary">
                                This place looks fire 🔥
                            </p>
                        </div>
                    </div>
                </slot>

                <!-- Add comment input -->
                <div class="flex gap-2">
                    <UiAvatar src="https://i.pravatar.cc/100?img=1" size="sm" />
                    <input
                        type="text"
                        placeholder="Add a comment..."
                        class="input text-sm py-2"
                    />
                </div>
            </div>
        </div>
    </UiCard>
</template>
