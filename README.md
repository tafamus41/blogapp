# FullStack_Blog-App

- list all branches : `git branch`
- create a branch and chnage branch : `git checkout - b <branchName>`

# bu satir lee branchinda yazildi
- pull all changes for branch : `git fetch -p`
- merge branches : `  git merge <branchName>`

# Tech Stack

- Redux Toolkit
- Material UI
- Formik, Yup

# Pull requestten önce yapılması gerekenler

1. dev branch'ına geç ve git pull yap
2. kendi branch'ına geç
3. git merge dev komutunu çalıştır
4. conflict olmaması için dua edin, olursa gruba yazın (kiminle conflict yaşadıysan onunla iletişime geç)

Milestone Blog App (folder for redux)

|----readme.md         # Given to the students (Definition of the project)
SOLUTION
├── src
|    ├── index.css
|    ├── index.js
|    ├── App.css
|    ├── App.js
|    ├── app
|    │   └── store.jsx
|    ├── assets
|    │   ├── about.png
|    ├── components
|    │   ├── auth
|    │   │   ├── LoginFom.jsx
|    │   │   └── RegisterForm.jsx
|    │   ├── blog
|    │   │   ├── Card.jsx
|    │   │   ├── CommentCard.jsx
|    │   │   ├── CommentForm.jsx
|    │   │   ├── DeleteModal.jsx
|    │   │   └── UpdateModal.jsx
|    │   ├── FooTer.jsx
|    │   ├── NavBar.jsx
|    ├── features
|    │   ├── authSlice.jsx
|    │   └── blogSlice.jsx
|    ├── helper
|    │   └── ToastNotify.jsx
|    ├── hooks
|    │   ├── useAuthCalls.jsx
|    │   ├── useAxios.jsx
|    │   └── useBlogCalls.jsx
|    ├── pages
|    │   ├── About.jsx
|    │   ├── Dashboard.jsx
|    │   ├── Detail.jsx
|    │   ├── Login.jsx
|    │   ├── NewBlog.jsx
|    │   ├── NotFound.jsx
|    │   ├── Profile.jsx
|    │   └── Register.jsx
|    └── router
|        ├── AppRouter.jsx
|        └── PrivateRouter.jsx