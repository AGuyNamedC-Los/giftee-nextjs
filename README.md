# Giftee - NEXTjs

A social media-esque website that allows you to manage a gift list that can be compromised of multiple items from other online stores. Gift lists can also be viewed by other people who search up your username

# Motivation

I restarted this project as a means to practice using nextjs and typescript

# Technological Tools Used

- [NEXTjs](https://nextjs.org/)
- Javascript
- Typescript
- [Prisma](https://www.prisma.io/)
- HTML5
- CSS3

# Github Code Navigation

- 📂 components - components used throughout the app
- 📂 pages - where the html for every page is located (except for the api folder)
  - 📂 api  - api routes that process logic then redirect to the react pages
    - addGift.tsx
    - addUser.tsx
    - deleteGift.tsx
    - updateGift.tsx
  - 📂 search
    - [user].js - placeholder
    - index.tsx - search page
  - _app.tsx - 
  - index.tsx - home page component
  - login.tsx - login page
  - signUp.tsx - sign up page
- 📂 prisma
  - schema.prisma - describes the schema of the postgres database
- 📁 public - favicons and png(s)
- 📂 styles - css for the components and global website

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).