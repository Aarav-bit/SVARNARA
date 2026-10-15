## 2024-05-18 - [Form Contrast & Legibility]
 **Learning:** The espresso background with gold border forms looks incredible, but the initial placeholder text (`var(--text-muted)`) didn't meet WCAG AA contrast ratios against the dark background.
 **Action:** Update form placeholder contrast specifically for inputs resting on dark backgrounds to ensure legibility without compromising the luxury aesthetic.

## 2024-05-19 - [Scroll Animation A11y]
 **Learning:** The cinematic scroll reveal animations (used via `reveal` class) can cause dizziness or distraction for users with vestibular disorders.
 **Action:** Ensure `@media (prefers-reduced-motion: reduce)` is globally applied to disable transform/opacity transitions when requested.

## 2024-05-20 - [Gallery Image Keyboard Navigation]
**Learning:** Adding explicit onKeyDown event handlers combined with correct role="button" is essential when treating divs as interactive items, but space/enter keys typically have default browser behaviors like scrolling that must be prevented (`e.preventDefault()`). The codebase uses custom divs as buttons for `gallery-item`.
**Action:** When creating custom div-based buttons, ensure `e.preventDefault()` is used on interactive keypresses to avoid page jumping, alongside tabIndex and ARIA.
