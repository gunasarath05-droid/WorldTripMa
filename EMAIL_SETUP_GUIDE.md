# Email Setup Guide for WorldTripMaa

To make the contact form send real emails to Worldtripmaa@gmail.com, you need to set up two environment variables.

### Step 1: Create a file named .env.local
In the root directory of your project (same folder as package.json), create a new file called `.env.local`.

### Step 2: Add these lines to .env.local
```
EMAIL_USER=Worldtripmaa@gmail.com
EMAIL_PASS=your_app_password_here
```

### Step 3: How to get an "App Password"?
Since you are using Gmail, you cannot use your regular password for security reasons. Follow these steps:
1. Go to your [Google Account Security](https://myaccount.google.com/security).
2. Ensure **2-Step Verification** is ON.
3. Search for "App passwords" in the search bar at the top.
4. Select 'Mail' and 'Other (Custom name: WorldTripMaa)'.
5. Google will give you a **16-character password**. Copy it!
6. Replace `your_app_password_here` in your `.env.local` file with this code (no spaces).

### Step 4: Restart your server
After saving the file, stop your terminal and run `npm run dev` again.

Now, every message sent through the contact form will arrive directly in your inbox!
