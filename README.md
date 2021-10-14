## Getting Started

First, run the development server on your terminal:

```bash
npm install 
# then
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Production Build
https://proyek-skripsi.vercel.app or https://ia-statistics.vercel.app
## Dev Build
https://proyek-skripsi-git-dev-branch-syahrilhanla.vercel.app/

## Urgensi Pengembangan
Aplikasi ini dikembangkan sebagai syarat kelulusan program Strata-1 Pendidikan Komputer Universitas Lambung Mangkurat. Dikembangkan secara mandiri oleh Syahril Hanla Azis (1710131110017).

This app is developed as a prerequisite of computer education's bachelor degree. Developed single handedly by Syahril Hanla (1710131110017) with Next.js and Firebase.

## Feature List

### Full Asynchronus
App is working asyncrhonusly without taking any time to load or reload the page. Every single action is completed in the background progress so there wont be any disturbance on user expirience.

### Offline Usability 
the app can work even without internet connection (offline), as long as the user has already logged in into the system. Some features wont work directly if user is offline, such as submitting evaluation score or updating user progress. Progress update can always be updated if user is already back online

### Progress Tracking
User progress is being recorded asnyschronusly on local and cloud storage. Every user's act can be seen on Admin page. 

### Platform-like
It is a dynamic app, works like a platform. All the contents in it are data, temporarily injected in the codebase. But for further development and possibility it still can be added new features like content management, so admin/user can add content in it or even make some new topic. All the functionality would still work with different content.

### User and Admin Management
Users are classified with classes, which are created by admins. Every class is secured with a password. Admin can add new admins or delete users.
