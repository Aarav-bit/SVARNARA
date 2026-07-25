## 2025-02-24 - Prevent unintended scroll for role=button
**Learning:** Custom UI elements utilizing role="button" and onKeyDown handlers often fail to call e.preventDefault() for Space/Enter keys, causing the browser to unintentionally scroll or perform default behaviors.
**Action:** When adding keyboard support to non-native button elements (like divs with role="button"), always ensure e.preventDefault() is called on Space/Enter keydown events.
