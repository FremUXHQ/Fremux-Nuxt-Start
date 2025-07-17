<template>
  <div class="language-selector">
    <select 
      v-model="selectedLocale" 
      @change="changeLanguage"
      class="language-select"
      :title="$t('common.language')"
    >
      <option 
        v-for="locale in availableLocales" 
        :key="locale.code" 
        :value="locale.code"
      >
        {{ locale.name }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
const { locale, locales, setLocale } = useI18n()

const availableLocales = computed(() => locales.value)
const selectedLocale = ref(locale.value)

const changeLanguage = async () => {
  await setLocale(selectedLocale.value)
}

// Watch for external locale changes
watch(locale, (newLocale) => {
  selectedLocale.value = newLocale
})
</script>

<style scoped>
.language-selector {
  position: relative;
}

.language-select {
  background-color: var(--bg-secondary);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  padding: 0.5rem 0.75rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: all var(--transition-normal);
  min-width: 100px;
}

.language-select:hover {
  border-color: var(--accent-color);
  background-color: var(--bg-hover);
}

.language-select:focus {
  outline: none;
  border-color: var(--accent-color);
  box-shadow: 0 0 0 2px var(--accent-color-alpha);
}

.language-select option {
  background-color: var(--bg-secondary);
  color: var(--text-primary);
  padding: 0.5rem;
}

/* Dark mode adjustments */
[data-theme="dark"] .language-select {
  background-color: var(--bg-tertiary);
}

[data-theme="dark"] .language-select option {
  background-color: var(--bg-tertiary);
}

/* Mobile responsive */
@media (max-width: 768px) {
  .language-select {
    font-size: 0.8rem;
    padding: 0.4rem 0.6rem;
    min-width: 80px;
  }
}
</style>
