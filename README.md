/_ prettier-ignore-start _/
This is where I'll have my pseudocode/planning

We need 3 pages: `Landing`, `Party Details`, `Add Party` (prototype names)
Each page needs a navbar. I'll need to create a Layout component for this. - Navbar needs to hold `Navlinks` to the `Landing` and `Add Party` pages

Navbar (Layout.jsx) - Will include the `Landing` and `Add Party` components - Dont forget to put <Outlet/> at the end - Create a router.jsx that routes to the Layout.jsx - Provide that router with <RouterProvider> in App.jsx

import store into App.jsx within <Provider store={store}/> tags
Also need store.js and api.js (boilerplate code, so it can be copy/pasted)
Also eventSlice.js? (copy/paste with minor tweaks?)

Landing Page (Landing.jsx) - Makes a GET request to the /events endpoint to get a list of all parties - What will actually be included, I'll figure that out later - Something on that event will link the user to the `Party Details` page - Use <Link> from react-router - Will have to pass in the event's id

Party Details (PartyDetails.jsx) - When an event's link is clicked on the `Landing` page, a `GET` call is made to events/:id to pull up event info - Event page will include that event's info, I'll figure out exactly what later. - This page will also have a button that when clicked (`onClick`), that event will be deleted from the API and user will be taken back to the `Landing` page, now updated without the deleted event

Add Party (AddParty.jsx) - This page will have a FORM where the user can enter details for a new event. - When they hit submit, a `POST` call will be made to the API. - Once the call completes, they will be taken back to the `Party Details` page with their new event added
/_ prettier-ignore-end _/
