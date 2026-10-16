## 2024-07-23 - Proper ARIA Tab Pattern Implementation
**Learning:** When implementing tabbed interfaces, just adding `role="tab"` and `aria-selected` is not enough for screen readers and keyboard users. A fully accessible W3C ARIA tab pattern requires `aria-controls` linking to a `tabpanel`, explicit `tabIndex` management (only active tab is focusable with `0`, others `-1`), and keyboard event handlers (left/right arrows) to shift focus intuitively between tabs.
**Action:** Always implement explicit keyboard navigation (`ArrowLeft` / `ArrowRight`) and manage `tabIndex` alongside `aria-controls` and `aria-labelledby` when building custom tab components to ensure they are fully navigable and descriptive for assistive technologies.

## 2024-10-16 - Custom Button Keyboard Scrolling Fix
 **Learning:** When creating custom `role="button"` elements using generic tags like `div`, the browser default behavior for Space and Enter keys (like scrolling the page down) is not automatically suppressed, leading to unexpected page jumps when users interact via keyboard.
 **Action:** Always add `e.preventDefault()` inside `onKeyDown` handlers for Space and Enter keys on custom button implementations to ensure the page doesn't scroll when the user intends to trigger the action.
