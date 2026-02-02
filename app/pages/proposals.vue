<script setup lang="ts">
// TODO: Replace with your actual data / state management
const activeFilter = ref('all');

const filters = [
    { label: 'All', value: 'all' },
    { label: 'Voting', value: 'voting' },
    { label: 'Accepted', value: 'accepted' },
    { label: 'Rejected', value: 'rejected' },
];

const expandedComments = ref<number[]>([]);

const proposals = ref([
    {
        id: 1,
        title: 'Robot Restaurant Show',
        description:
            'Wild robot cabaret show in Shinjuku. Looks absolutely insane.',
        imageUrl:
            'https://images.unsplash.com/photo-1503899036084-c55cdd92da26?w=600',
        proposerName: 'Kevin',
        proposerAvatar: 'https://i.pravatar.cc/100?img=2',
        status: 'accepted' as const,
        hypeCount: 4,
        trashCount: 0,
        commentCount: 3,
        userVote: 'hype' as const,
    },
    {
        id: 2,
        title: 'Tsukiji Outer Market',
        description: 'Fresh sushi for breakfast. Early morning vibes.',
        imageUrl:
            'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=600',
        proposerName: 'Ben',
        proposerAvatar: 'https://i.pravatar.cc/100?img=1',
        status: 'voting' as const,
        hypeCount: 2,
        trashCount: 1,
        commentCount: 5,
        userVote: null,
    },
    {
        id: 3,
        title: 'Maid Cafe Experience',
        description: 'For the culture... 👀',
        imageUrl:
            'https://images.unsplash.com/photo-1528360983277-13d401cdc186?w=600',
        proposerName: 'Alex',
        proposerAvatar: 'https://i.pravatar.cc/100?img=3',
        status: 'rejected' as const,
        hypeCount: 1,
        trashCount: 3,
        commentCount: 12,
        userVote: 'trash' as const,
    },
    {
        id: 4,
        title: 'Golden Gai Bar Hopping',
        description: 'Tiny bars in Shinjuku. Each one fits like 5 people.',
        imageUrl:
            'https://images.unsplash.com/photo-1554797589-7241bb691973?w=600',
        proposerName: 'Kevin',
        proposerAvatar: 'https://i.pravatar.cc/100?img=2',
        status: 'voting' as const,
        hypeCount: 3,
        trashCount: 0,
        commentCount: 2,
        userVote: 'hype' as const,
    },
]);

const filteredProposals = computed(() => {
    if (activeFilter.value === 'all') return proposals.value;
    return proposals.value.filter((p) => p.status === activeFilter.value);
});

// TODO: Implement your logic
const handleAddProposal = (url: string) => {
    console.log('Add proposal:', url);
};

const handleVote = (proposalId: number, type: 'hype' | 'trash') => {
    console.log('Vote:', proposalId, type);
};

const toggleComments = (proposalId: number) => {
    const index = expandedComments.value.indexOf(proposalId);
    if (index > -1) {
        expandedComments.value.splice(index, 1);
    } else {
        expandedComments.value.push(proposalId);
    }
};
</script>

<template>
    <div class="min-h-screen p-4 space-y-6">
        <!-- Page Header -->
        <div>
            <h1 class="text-2xl font-bold text-text-primary">Proposals</h1>
            <p class="text-text-muted">Vote on ideas from the crew</p>
        </div>

        <!-- URL Input -->
        <ProposalsUrlInput @submit="handleAddProposal" />

        <!-- Filter tabs -->
        <div class="flex gap-2">
            <button
                v-for="filter in filters"
                :key="filter.value"
                class="px-4 py-2 rounded-full text-sm font-medium transition-colors"
                :class="
                    activeFilter === filter.value
                        ? 'bg-hype text-dark'
                        : 'bg-dark-200 text-text-secondary hover:bg-dark-300'
                "
                @click="activeFilter = filter.value"
            >
                {{ filter.label }}
            </button>
        </div>

        <!-- Proposals List -->
        <div class="space-y-4">
            <ProposalsProposalCard
                v-for="proposal in filteredProposals"
                :key="proposal.id"
                v-bind="proposal"
                :show-comments="expandedComments.includes(proposal.id)"
                @vote="(type) => handleVote(proposal.id, type)"
                @toggle-comments="toggleComments(proposal.id)"
            />
        </div>
    </div>
</template>
