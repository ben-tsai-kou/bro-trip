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
        class="fixed bottom-0 left-0 right-0 bg-dark-50 border-t border-dark-300 pb-safe z-50"
    >
        <div class="flex justify-around items-center h-16">
            <NuxtLink
                v-for="item in navItems"
                :key="item.path"
                :to="item.path"
                class="nav-item"
                :class="{ 'nav-item-active': isActive(item.path) }"
            >
                <Icon :name="item.icon" class="w-6 h-6" />
                <span class="text-xs font-medium">{{ item.label }}</span>
            </NuxtLink>

            <!-- Logout -->
            <button
                class="nav-item text-trash/70 hover:text-trash"
                @click="handleLogout"
            >
                <Icon
                    name="heroicons:arrow-right-on-rectangle-solid"
                    class="w-6 h-6"
                />
                <span class="text-xs font-medium">Logout</span>
            </button>
        </div>
    </nav>
</template>
