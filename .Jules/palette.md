## 2024-07-27 - Custom Button Keyboard Navigation
**Learning:** Custom interactive elements (e.g. `div` with `role="button"`) require `e.preventDefault()` on `Space` and `Enter` key handlers to stop default browser behaviors like unintended page scrolling, ensuring they behave like native buttons for keyboard users.
**Action:** Always include `e.preventDefault()` in `onKeyDown` handlers for custom elements mapped to `Space` or `Enter` keys.
