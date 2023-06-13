## To-Do

- [x] Create Mentor UI
- [x] Create Registration and Login pages
- [x] Integrate Mentor endpoints
- [] Integrate matching system endpoint (Table should display the score)
- [] Implement tasks Logic
- [x] Change AppNavBar component name to AppLayout
- [] Schedule event should send email notificaation to both mentor and mentee
- [x] Break down dashboard ui into components
- [x] Improve ui for tables to accomodate mobile
- [x] Configure user state to persist student and mentor id for requests throughout the app
- [] Set the appropriate messages and ui for requesting and removing requests
- [] Install react query and optimize requests logic
- [] Create messages, file upload and video conferencing components for actions page
- [x] Create ui for file and image upload
- [x] Integrate file and image upload

## Notes

1. Client fetches images and videos from supabase db
2. Server only stores the user id from clerk and uses that id for fetching data

## Dev for Mentor

1. Change userType from <AppLayout />
2. Comment out session logic and hardcode user object in <MentorRequests />

## Dev for Student

1. Change userType from <AppLayout />
2. Comment out session logic and hardcode user object in <MentorshipRequests />, <Dashboard />, <SearchMentors />
