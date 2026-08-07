## 2024-07-23 - Proper ARIA Tab Pattern Implementation
**Learning:** When implementing tabbed interfaces, just adding `role="tab"` and `aria-selected` is not enough for screen readers and keyboard users. A fully accessible W3C ARIA tab pattern requires `aria-controls` linking to a `tabpanel`, explicit `tabIndex` management (only active tab is focusable with `0`, others `-1`), and keyboard event handlers (left/right arrows) to shift focus intuitively between tabs.
**Action:** Always implement explicit keyboard navigation (`ArrowLeft` / `ArrowRight`) and manage `tabIndex` alongside `aria-controls` and `aria-labelledby` when building custom tab components to ensure they are fully navigable and descriptive for assistive technologies.
## 2024-07-24 - Custom Button Default Behavior
**Learning:** Custom UI elements utilizing `role="button"` and `onKeyDown` handlers need explicit `e.preventDefault()` for Space and Enter keys to prevent unintended browser default behaviors, such as page scrolling when pressing Space.
**Action:** Always call `e.preventDefault()` in `onKeyDown` handlers for custom buttons when handling Space and Enter keys.
