<script setup lang="ts">
// TODO: Replace with your actual data / state management
const walletBalances = [
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
];

const packingItems = ref([
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
    { id: 6, label: 'JR Pass', checked: false },
    { id: 7, label: 'Cash (Yen)', checked: false },
]);

// TODO: Implement your logic
const handleToggleItem = (id: number) => {
    const item = packingItems.value.find((i) => i.id === id);
    if (item) {
        item.checked = !item.checked;
    }
};
</script>

<template>
    <div class="min-h-screen p-4 space-y-6">
        <!-- Page Header -->
        <div>
            <h1 class="text-2xl font-bold text-text-primary">Logistics</h1>
            <p class="text-text-muted">All the boring but necessary stuff</p>
        </div>

        <!-- Flights & Hotel Grid -->
        <div class="grid gap-4 md:grid-cols-2">
            <LogisticsFlightCard
                departure-code="TPE"
                departure-time="08:30"
                arrival-code="NRT"
                arrival-time="12:45"
                duration="3h 15m"
                airline="Japan Airlines"
                flight-number="JL802"
                date="Mar 15, 2025"
                booking-ref="ABC123XYZ"
            />

            <LogisticsHotelCard
                name="Shinjuku Granbell Hotel"
                address="2-14-5 Kabukicho, Shinjuku"
                image-url="https://images.unsplash.com/photo-1566073771259-6a8506099945?w=600"
                check-in="Mar 15, 15:00"
                check-out="Mar 22, 11:00"
                confirmation-code="HTL789456"
            />
        </div>

        <!-- Shared Wallet -->
        <LogisticsSharedWallet
            total-amount="¥125,000"
            :balances="walletBalances"
        />

        <!-- Packing Checklist -->
        <LogisticsPackingChecklist
            :items="packingItems"
            @toggle="handleToggleItem"
        />
    </div>
</template>
