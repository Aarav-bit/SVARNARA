## 2023-10-25 - Custom UI Role Button Requires Event Prevention
**Learning:** When assigning `role="button"` to non-button elements (like `div`), the browser's default behavior for space and enter keys (e.g., page scrolling) is not automatically suppressed by the element as it is with native `<button>` tags.
**Action:** Always call `e.preventDefault()` within `onKeyDown` handlers attached to custom `role="button"` elements when triggered by Space or Enter keys to prevent unexpected layout shifting and enhance keyboard accessibility.
