# Project Context Summary

This document summarizes the current state and recent modifications made to the BRAC University Computer Club (BUCC) day trip website.

## Overall Goal
The primary goal is to build a visually appealing, mobile-responsive Next.js website for the BRAC University Computer Club (BUCC) day trip, inspired by Palantir's visual style, to encourage member registration.

## Key Features & Changes Implemented:

### Global Styling (`globals.css`)
-   **Background/Foreground:** Changed `--background` and `--foreground` CSS variables to `#FFFFFF` (white).
-   **Section Title Gradient:** Added a new CSS class `.section-title-gradient` for a specific blue-to-purple gradient, applied to all section titles except the Hero section.

### Header (`Header.tsx`)
-   **Logo:** Changed to `bucclogo.png` (from `bucc.svg`), made larger (`h-16 w-auto`), and removed the white background.
-   **Title:** Changed from "BUCC Day Long Tour 2025" to "BUCC".
-   **Layout:** Logo on the left, navigation links centered using absolute positioning.
-   **Scroll Behavior:** Navbar now hides on scroll down and reappears on scroll up.
-   **Navigation Items:** Made bold (`font-bold`) and spacing adjusted to `space-x-6`.

### Hero Section (`Hero.tsx`)
-   **Title:** Changed from "BUCC Day Long Trip 2025" to "BUCC Day Long Tour 2025".
-   **Title Gradient:** Set to `from-blue-100 to-purple-300`.
-   **Glassmorphism Container:** Fixed width (`w-full max-w-2xl`) to prevent expansion with typewriter effect.
-   **Register Now Button:** Links to Google Form (`https://docs.google.com/forms/d/e/1FAIpQLScExVF0Ii7g9A_IgqEI0Gp54bVNduyTddoNE3y3ZYQmjGZ2JQ/viewform`).

### About Section (`About.tsx`)
-   **Layout:** Changed from left-right to stacked, with description first, then info boxes.
-   **Info Boxes:** "Date", "Location", and "Registration Fee" are in separate boxes with icons.
-   **Registration Fee:** Updated to "BDT 1599".
-   **Info Box Layout:** Icon on top, then title, then description, all centered within the box.

### Opportunity Section (`Opportunity.tsx`)
-   **Layout:** Cards are vertically stacked on the left.
-   **Facebook Reel:** Embedded on the right side with increased height (`height="600"`).
-   **OpportunityCard Styling:** Adjusted for left-aligned content in vertical layout.

### What's Included Section (`WhatsIncluded.tsx`)
-   **Content:** Updated with "Travel", "Facilities", "Activities", and "Food & Refreshments" cards, including detailed descriptions and icons.

### Venue Section (`Venue.tsx`)
-   **Images:** Updated to use `venue-1.jpg` through `venue-7.jpg` from `/public/venue`.
-   **Description:** Updated with "SAHEB BARI RESORT" name and location.
-   **Layout:** Recreated for better mobile responsiveness, using `flex-col md:flex-row` and `w-full md:w-1/2` for image and description. Padding moved to inner `div` to prevent overflow.

### FAQ Section (`FAQ.tsx`)
-   **Padding:** Added horizontal padding (`px-4`) for smaller screens.
-   **"Can I bring a friend?" FAQ:** Clarified to state "only BUCC members".
-   **Contact Info:** Added FAQ items for "General Communication" (Abrar Shaleheen, Nowrin Afrin) and "Payment Related Issues" (Sadik).

### Schedule Section (`Schedule.tsx`)
-   **Padding:** Added horizontal padding (`px-4`) for smaller screens.

### Terms and Conditions Section (`Terms.tsx`)
-   **Content:** Removed "4. Photography and Videography" option.
-   **Expandable:** Made the section expandable/collapsible with a toggle button and smooth animation.
-   **Padding:** Added horizontal padding (`px-4`) for smaller screens.

### Footer (`Footer.tsx`)
-   **Layout:** Changed to a 4-column grid.
-   **About BUCC Section:** Added a new section with BUCC logo and description.
-   **Contact Info:** Updated email (`bucc@g.bracu.ac.bd`) and website (`https://www.bracucc.org/`).
-   **Phone Numbers:** Added for "General Communication" (Abrar Shaleheen, Nowrin Afrin) and "Payment Related Issues" (Sadik).
-   **Google Map:** Updated with the correct resort link (`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3648.9400000000004!2d90.39945200000001!3d23.840330000000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755d99d3803b7cd%3A0xe68b9ebcb437c3db!2sSAHEB%20BARI%20RESORT!5e0!3m2!1sen!2sbd!4v1678912345678!5m2!1sen!2sbd"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-gray-500">
        <p>&copy; {new Date().getFullYear()} BUCC. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
