Frontend and backend built as part of John Smilga's MERN stack course on Udemy.

I have added:

- email verification on registration
- forgot/reset password functionality
- refresh and access tokens
- refactored displayAlert to take arguments
- created html and text email messages for verification and reset password emails
- implemented sendgrid for emails in production env
- ensured test user can't change password

To Do:

- implement password strength checker for registration and reset password
- app should fail gracefully on econnrefused
