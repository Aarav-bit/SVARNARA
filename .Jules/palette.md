## 2024-07-23 - Proper ARIA Tab Pattern Implementation
**Learning:** When implementing tabbed interfaces, just adding `role="tab"` and `aria-selected` is not enough for screen readers and keyboard users. A fully accessible W3C ARIA tab pattern requires `aria-controls` linking to a `tabpanel`, explicit `tabIndex` management (only active tab is focusable with `0`, others `-1`), and keyboard event handlers (left/right arrows) to shift focus intuitively between tabs.
**Action:** Always implement explicit keyboard navigation (`ArrowLeft` / `ArrowRight`) and manage `tabIndex` alongside `aria-controls` and `aria-labelledby` when building custom tab components to ensure they are fully navigable and descriptive for assistive technologies.
## 2023-10-24 - Prevent page scroll on keyboard navigation
**Learning:** Custom components using `role="button"` that are accessible via keyboard space/enter keys can inadvertently scroll the page down if `e.preventDefault()` is not called on the event.
**Action:** Always call `e.preventDefault()` on space/enter for custom UI elements utilizing `role="button"` and `onKeyDown` handlers to prevent unintended browser default behaviors like page scrolling.
