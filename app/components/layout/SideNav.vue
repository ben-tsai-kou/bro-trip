<script setup lang="ts">
const route = useRoute();

const navItems = [
    { path: '/dashboard', icon: 'heroicons:home-solid', label: 'Dashboard' },
    {
        path: '/proposals',
        icon: 'heroicons:light-bulb-solid',
        label: 'Proposals',
    },
    { path: '/map', icon: 'heroicons:map-solid', label: 'Map' },
    {
        path: '/logistics',
        icon: 'heroicons:clipboard-document-list-solid',
        label: 'Logistics',
    },
];

const isActive = (path: string) => route.path === path;

const handleLogout = () => {};
</script>

<template>
    <nav
        class="fixed left-0 top-0 bottom-0 w-20 bg-dark-50 border-r border-dark-300 flex flex-col items-center py-6 z-50"
    >
        <!-- Logo -->
        <div class="mb-8">
            <div
                class="w-10 h-10 rounded-xl bg-hype flex items-center justify-center"
            >
                <span class="text-dark font-bold text-lg">B</span>
            </div>
        </div>

        <!-- Nav Items -->
        <div class="flex flex-col gap-2 flex-1">
            <NuxtLink
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="nav-item w-14"
                :class="{ 'nav-item-active': isActive(item.path) }"
                :title="item.label"
            >
                <Icon :name="item.icon" class="w-6 h-6" />
                <span class="text-[10px] font-medium">{{ item.label }}</span>
            </NuxtLink>
        </div>

        <!-- Logout Button -->
        <button
            class="nav-item w-14 text-trash/70 hover:text-trash hover:bg-trash/10"
            title="Logout"
            @click="handleLogout"
        >
            <Icon
                name="heroicons:arrow-right-on-rectangle-solid"
                class="w-6 h-6"
            />
            <span class="text-[10px] font-medium">Logout</span>
        </button>
    </nav>
</template>
