## 2024-07-23 - Proper ARIA Tab Pattern Implementation
**Learning:** When implementing tabbed interfaces, just adding `role="tab"` and `aria-selected` is not enough for screen readers and keyboard users. A fully accessible W3C ARIA tab pattern requires `aria-controls` linking to a `tabpanel`, explicit `tabIndex` management (only active tab is focusable with `0`, others `-1`), and keyboard event handlers (left/right arrows) to shift focus intuitively between tabs.
**Action:** Always implement explicit keyboard navigation (`ArrowLeft` / `ArrowRight`) and manage `tabIndex` alongside `aria-controls` and `aria-labelledby` when building custom tab components to ensure they are fully navigable and descriptive for assistive technologies.
## 2024-10-18 - Prevent Default Scrolling on Custom Buttons
**Learning:** When using custom UI elements with `role="button"` and `tabIndex={0}`, pressing the Space key triggers the browser's default scroll behavior (page down).
**Action:** Always call `e.preventDefault()` within the `onKeyDown` handler when handling Space or Enter keys on custom button elements to ensure expected behavior and prevent unintended scrolling.
