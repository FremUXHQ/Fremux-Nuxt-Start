// Teste para verificar hydration mismatch com @nuxt/icon
// Executar no console do navegador

console.log('=== TESTE HYDRATION MISMATCH @nuxt/icon ===');

// 1. Verificar se há warnings de hydration no console
const originalWarn = console.warn;
const originalError = console.error;
let hydrationWarnings = [];

console.warn = function(...args) {
  const message = args.join(' ');
  if (message.includes('hydration') || message.includes('mismatch')) {
    hydrationWarnings.push(message);
  }
  originalWarn.apply(console, args);
};

console.error = function(...args) {
  const message = args.join(' ');
  if (message.includes('hydration') || message.includes('mismatch')) {
    hydrationWarnings.push(message);
  }
  originalError.apply(console, args);
};

// 2. Verificar se os ícones estão sendo renderizados
setTimeout(() => {
  const icons = document.querySelectorAll('svg');
  console.log(`Ícones encontrados: ${icons.length}`);
  
  icons.forEach((icon, index) => {
    console.log(`Ícone ${index + 1}:`, {
      tagName: icon.tagName,
      className: icon.className,
      innerHTML: icon.innerHTML.substring(0, 100) + '...'
    });
  });
  
  // 3. Verificar warnings capturados
  if (hydrationWarnings.length > 0) {
    console.log('⚠️ HYDRATION WARNINGS ENCONTRADOS:');
    hydrationWarnings.forEach(warning => console.log('  -', warning));
  } else {
    console.log('✅ Nenhum warning de hydration encontrado');
  }
  
  // Restaurar console original
  console.warn = originalWarn;
  console.error = originalError;
}, 2000);
