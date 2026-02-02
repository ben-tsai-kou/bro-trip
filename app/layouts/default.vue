<template>
    <div class="min-h-screen bg-dark flex flex-col">
        <!-- Main content -->
        <main class="flex-1 pb-20 md:pb-0 md:pl-20">
            <slot />
        </main>

        <!-- Bottom Navigation (Mobile) -->
        <LayoutBottomNav class="md:hidden" />

        <!-- Side Navigation (Desktop) -->
        <LayoutSideNav class="hidden md:flex" />
    </div>
</template>
