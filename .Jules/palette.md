## 2024-07-23 - Proper ARIA Tab Pattern Implementation
**Learning:** When implementing tabbed interfaces, just adding `role="tab"` and `aria-selected` is not enough for screen readers and keyboard users. A fully accessible W3C ARIA tab pattern requires `aria-controls` linking to a `tabpanel`, explicit `tabIndex` management (only active tab is focusable with `0`, others `-1`), and keyboard event handlers (left/right arrows) to shift focus intuitively between tabs.
**Action:** Always implement explicit keyboard navigation (`ArrowLeft` / `ArrowRight`) and manage `tabIndex` alongside `aria-controls` and `aria-labelledby` when building custom tab components to ensure they are fully navigable and descriptive for assistive technologies.

## 2024-07-24 - Prevent Page Scroll on Custom Button Keyboard Activation
**Learning:** Custom UI elements utilizing `role="button"` and `onKeyDown` handlers can cause unintended browser default behaviors like page scrolling when activated with the Space key if `e.preventDefault()` is not called.
**Action:** Always ensure `e.preventDefault()` is called for Space and Enter key presses in custom button keyboard event handlers to maintain a smooth and expected user experience without unintended side effects.
