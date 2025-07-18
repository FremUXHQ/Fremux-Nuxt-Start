// Generated by Nuxt'
import type { Plugin } from '#app'

type Decorate<T extends Record<string, any>> = { [K in keyof T as K extends string ? `$${K}` : never]: T[K] }

type InjectionType<A extends Plugin> = A extends {default: Plugin<infer T>} ? Decorate<T> : unknown

type NuxtAppInjections = 
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/revive-payload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/head/runtime/plugins/unhead.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/pages/runtime/plugins/router.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/browser-devtools-timing.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/navigation-repaint.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/check-outdated-build.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/revive-payload.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/chunk-reload.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/pages/runtime/plugins/prefetch.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/pages/runtime/plugins/check-if-page-unused.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@2.6.2_vite@7.0.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43.1_yaml@2.8.0__vue@3.5.17_typescript@5.8.3_/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+devtools@2.6.2_vite@7.0.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43.1_yaml@2.8.0__vue@3.5.17_typescript@5.8.3_/node_modules/@nuxt/devtools/dist/runtime/plugins/devtools.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxt+icon@1.15.0_magicast@0.3.5_vite@7.0.5_@types+node@24.0.14_jiti@2.4.2_terser@5.43._8d518821c698cbc6d5a489f67ebb6372/node_modules/@nuxt/icon/dist/runtime/plugin.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.server.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+color-mode@3.5.2_magicast@0.3.5/node_modules/@nuxtjs/color-mode/dist/runtime/plugin.client.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/switch-locale-path-ssr.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/route-locale-detect.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/preload.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/dev.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/i18n.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/dev-server-logs.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/nuxt@4.0.0_@netlify+blobs@9.1.2_@parcel+watcher@2.5.1_@types+node@24.0.14_@vue+compiler_bc242219ce9961da023c6eebbc658c6c/node_modules/nuxt/dist/app/plugins/check-if-layout-used.js")> &
  InjectionType<typeof import("../../node_modules/.pnpm/@nuxtjs+i18n@10.0.0_@netlify+blobs@9.1.2_@vue+compiler-dom@3.5.17_db0@0.3.2_eslint@9.31_c0b946a75426581f99401d510222640c/node_modules/@nuxtjs/i18n/dist/runtime/plugins/ssg-detect.js")>

declare module '#app' {
  interface NuxtApp extends NuxtAppInjections { }

  interface NuxtAppLiterals {
    pluginName: 'vue-devtools-client' | 'nuxt:revive-payload:client' | 'nuxt:head' | 'nuxt:router' | 'nuxt:browser-devtools-timing' | 'nuxt:revive-payload:server' | 'nuxt:chunk-reload' | 'nuxt:global-components' | 'nuxt:prefetch' | 'nuxt:checkIfPageUnused' | '@nuxt/icon' | 'i18n:plugin:switch-locale-path-ssr' | 'i18n:plugin:route-locale-detect' | 'i18n:plugin:preload' | 'i18n:dev' | 'i18n:plugin' | 'nuxt:checkIfLayoutUsed' | 'i18n:plugin:ssg-detect'
  }
}

declare module 'vue' {
  interface ComponentCustomProperties extends NuxtAppInjections { }
}

export { }
