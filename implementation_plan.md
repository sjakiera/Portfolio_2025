# Implementation Plan - Visual Identity Overhaul

## Goal Description
Transform the current "Phantom" template-based portfolio into a **premium, editorial, design-driven** showcase. We will achieve this by refining typography, color capability, and spacing, and by removing "gimmicky" interactions (like the hidden content button) to prioritize storytelling.

## User Review Required
> [!IMPORTANT]
> **Typography Change**: I propose switching from *Source Sans Pro* to a pairing of **Playfair Display** (Headings) and **Inter** (Body/UI). This creates an immediate "editorial" look.
> **Color Palette**: Moving from the default Dark Grey/Orange to a **Deep Charcoal / Cream / Muted Accent** palette for a more sophisticated feel.

## Proposed Changes

### CSS / Design System
**File**: `assets/css/main.css` (or new `assets/css/custom.css` if preferred, but we will edit `main.css` for simplicity as no build step is guaranteed).

#### [MODIFY] assets/css/main.css
*   **Import Fonts**: Add Google Fonts import for *Playfair Display* (400, 700) and *Inter* (300, 400, 600).
*   **Typography Updates**:
    *   Set `h1, h2, h3` to *Playfair Display*.
    *   Set `body, p, a` to *Inter*.
    *   Increase line-height for body text (1.8) for better readability.
    *   Adjust letter-spacing (remove the excessive spacing on headers that screams "template").
*   **Color Variables**:
    *   Background: Change `#000000` to a rich dark charcoal `#1a1a1a` or keep black but soften the contrast with off-white text.
    *   Accent: Change `#F27C00` (Orange) to a refined color like **Beige/Gold** (`#D4AF37` or `#E5D9B6`) or a **Muted Blue**. *Proposal: Muted Gold.*
    *   Text: Change `#585858` to a lighter, more legible grey/white `#E0E0E0` for dark mode readability.
*   **Layout & Spacing**:
    *   Increase padding on `.inner` containers.
    *   Remove the "dotted border" usually found in HTML5 UP links (`border-bottom: dotted 1px`). It looks dated.
    *   Add subtle fade-in animations for section entry (if not already present/overwhelming).

### Content & Storytelling
**File**: `webdesign.html` (and others as pattern)

#### [MODIFY] webdesign.html
*   **Unhide Content**: Remove `<button id="showCaseDetailsBtn">` and the `style="display: none;"` from the details div.
*   **Refine Hierarchy**:
    *   Ensure the case study text flows logically.
    *   Fix the typo `I'am` -> `I'm`.

## Verification Plan

### Manual Verification
*   **Visual Check**: Open `index.html` and `webdesign.html` in the browser.
*   **Typography**: Verify headings use Playfair Display and are legible.
*   **Content**: Verify "Web Design" case study is fully visible without clicking.
*   **Responsiveness**: Ensure the new font sizes don't break mobile layout.
