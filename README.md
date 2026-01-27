# Number Frames
After finding out that my son was using paper-based number frames at school, I noticed how much physical space they took up and how easily the "counters" (dots) got lost. I built this web app to provide him with an infinite, digital workspace to practice subitizing and place-value logic at home.

## Features
- **Dynamic Frame Generation:** Add as many frames as needed to represent numbers beyond 10, 20, or even 100.
    
-   **Interactive Toggling:** A "click-to-fill" interface designed for young learners, replacing messy physical counters.
    
-   **Pedagogical Design:** Zero numbers are shown in the grid to encourage **subitizing** (recognizing quantities by pattern rather than counting).
    
-   **Independent State:** Each frame operates independently with its own "Clear" and "Delete" functions.

## Tech stack
-   **Framework:** Next.js 15 (App Router)
    
-   **Styling:** Tailwind CSS (with Dark Mode support)
    
-   **Deployment:** Firebase Multi-site Hosting
    
-   **State Management:** React Hooks (`useState`) with unique UUID identification for frame stability.