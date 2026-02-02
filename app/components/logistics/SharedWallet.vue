<script setup lang="ts">
interface Balance {
    id: number;
    name: string;
    avatar: string;
    amount: number;
}

interface Props {
    totalAmount?: string;
    balances?: Balance[];
}

withDefaults(defineProps<Props>(), {
    totalAmount: '¥125,000',
    balances: () => [
        {
            id: 1,
            name: 'Ben',
            avatar: 'https://i.pravatar.cc/100?img=1',
            amount: -5000,
        },
        {
            id: 2,
            name: 'Kevin',
            avatar: 'https://i.pravatar.cc/100?img=2',
            amount: 8000,
        },
        {
            id: 3,
            name: 'Alex',
            avatar: 'https://i.pravatar.cc/100?img=3',
            amount: -3000,
        },
    ],
});

const formatCurrency = (amount: number) => {
    return `¥${Math.abs(amount).toLocaleString()}`;
};
</script>

<template>
    <UiCard>
        <div class="flex items-center justify-between mb-4">
            <div class="flex items-center gap-3">
                <div
                    class="w-10 h-10 rounded-xl bg-green-500/20 flex items-center justify-center"
                >
                    <Icon
                        name="heroicons:banknotes"
                        class="w-5 h-5 text-green-400"
                    />
                </div>
                <h3 class="font-semibold text-text-primary">The Pot</h3>
            </div>
            <UiButton variant="secondary" size="sm">
                <Icon name="heroicons:plus" class="w-4 h-4" />
                Add Expense
            </UiButton>
        </div>

        <!-- Total -->
        <div class="bg-dark-100 rounded-xl p-4 mb-4">
            <p class="text-text-muted text-sm">Total Expenses</p>
            <p class="text-3xl font-bold text-text-primary">
                {{ totalAmount }}
            </p>
        </div>

        <!-- Balances -->
        <div class="space-y-3">
            <p class="text-sm text-text-muted font-medium">Balances</p>
            <div
                v-for="balance in balances"
                :key="balance.id"
                class="flex items-center justify-between py-2"
            >
                <div class="flex items-center gap-3">
                    <UiAvatar :src="balance.avatar" size="sm" />
                    <span class="text-text-primary">{{ balance.name }}</span>
                </div>
                <span
                    :class="[
                        'font-medium',
                        balance.amount > 0
                            ? 'text-green-400'
                            : balance.amount < 0
                            ? 'text-trash'
                            : 'text-text-muted',
                    ]"
                >
                    {{ balance.amount > 0 ? '+' : ''
                    }}{{ formatCurrency(balance.amount) }}
                </span>
            </div>
        </div>
    </UiCard>
</template>
