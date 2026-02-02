<script setup lang="ts">
interface Props {
    modelValue?: string;
    type?: string;
    placeholder?: string;
    iconName?: string;
}

withDefaults(defineProps<Props>(), {
    modelValue: '',
    type: 'text',
    placeholder: '',
});

defineEmits<{
    'update:modelValue': [value: string];
}>();
</script>

<template>
    <div class="relative">
        <Icon
            v-if="iconName"
            :name="iconName"
            class="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted"
        />
        <input
            :type="type"
            :value="modelValue"
            :placeholder="placeholder"
            class="input"
            :class="{ 'pl-12': iconName }"
            @input="
                $emit(
                    'update:modelValue',
                    ($event.target as HTMLInputElement).value
                )
            "
        />
    </div>
</template>
