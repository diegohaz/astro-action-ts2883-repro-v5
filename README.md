# Astro v5 TS2883 Reproduction (Working)

This is the working counterpart to the [Astro v6 reproduction](https://github.com/diegohaz/astro-action-ts2883-repro).

`defineAction()` in Astro v5 works correctly with composite TypeScript projects. The same monorepo-like setup that fails with Astro v6 passes with Astro v5, because `ErrorInferenceObject` is exported from a public module path (`astro/actions/runtime/utils.js`).

## Steps to reproduce

```sh
npm install
npm run sync
npm run check
```

**Expected**: No type errors
**Actual**: No type errors (passes)

## Environment

- Astro 5.18.1
- TypeScript 6.0.2

## Broken version (Astro v6)

See https://github.com/diegohaz/astro-action-ts2883-repro
