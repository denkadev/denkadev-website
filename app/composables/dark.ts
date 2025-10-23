import { useDark, useToggle } from '@vueuse/core'

export const isDark = useDark({
  disableTransition: false, // Tambahkan baris ini
});

export const toggleDark = useToggle(isDark)