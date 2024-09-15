Summary of the CampusFlock Project:

CampusFlock is a web-based event management platform designed to recommend events to users using AI. 

The platform is being developed with Vue.js for the frontend and MongoDB Atlas for the backend. It aims to provide a seamless user experience, offering features like event discovery, AI-generated event suggestions, and a user profile page. 

Key Features Home Page: Displays a list of upcoming events. Uses a card-based layout to showcase events. 
Suggested Page: Provides AI-driven event recommendations based on the user's preferences. 
Profile Page: Displays user information and their avatar. Allows the user to manage their profile details. 
Search Page: Allows users to search for specific events. 

Navigation System: 
On Desktop: A fixed sidebar provides navigation links (Home, Explore, Notifications, Profile) similar to Twitter’s sidebar. It is always visible and non-collapsible on larger screens. 
On Mobile: A toggleable sidebar is accessible via a hamburger menu. 
Tools and Technologies: 

Frontend: 
Vue.js: For building the user interface. 
Vuetify: For consistent and responsive UI components like the navigation bar, cards, buttons, etc. 
Vue Router: For navigating between different pages (Home, Suggested, Profile, Search). Vite: Used as the build tool to improve development speed. 

Backend: 
MongoDB Atlas: The database backend for storing user and event data. 

## Current Pages and Components: 
### App.vue: The root of the app, handles the layout and includes the sidebar navigation. 
### Sidebar: Contains links to Home, Explore, Notifications, and Profile. It is fixed on desktop and toggleable on mobile. 
### Home.vue: The homepage displaying a list of events in a card layout. 
### ProfilePage.vue: Shows the user profile with an avatar, name, and editable profile information. 
### Suggested.vue: Uses AI to suggest events based on user activity and preferences. 
### Routing: Vue Router is set up to handle navigation between the Home, Profile, and other pages. 

Project Progress: 
Initial Setup: Cloned a basic Vue project and integrated Vuetify for UI components. 
Navigation Design: Implemented a sidebar-based navigation system that is fixed on desktop and toggleable on mobile. Made sure the sidebar behaves like Twitter's fixed sidebar, always visible on desktop and toggled on mobile devices. 
Event List Design (Home Page): Developed a basic card-based layout for showing events on the home page. 
Profile Page: Set up a user profile page with avatar and user details. Final Navigation System: Utilized Vuetify’s v-navigation-drawer to create a non-collapsible sidebar on desktop and a toggleable sidebar on mobile. Ensured the sidebar adapts based on screen size, remaining open on larger screens and hidden on mobile by default. 
Next Steps: AI Integration: Implement AI recommendations for the "Suggested" page. 
Event Search: Enhance the search functionality to allow users to filter events. 
Refine Event Cards: Add more detailed event information (e.g., date, location) to the event cards on the home page. 
Styling: Finalize the overall design and UI consistency. 
Backend Setup: Integrate MongoDB Atlas with the frontend to manage events and user profiles.
