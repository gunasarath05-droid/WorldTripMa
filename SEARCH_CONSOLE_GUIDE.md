# Google Search Console Setup Guide – World Trip

Follow these steps to verify your website on Google and start tracking your search performance.

## Step 1: Get Your Verification Code
1. Go to [Google Search Console](https://search.google.com/search-console/).
2. Click **"Add Property"**.
3. Select **"URL Prefix"** and enter: `https://worldtripmaa.com`
4. Click **"Continue"**.
5. Under **"Other verification methods"**, look for **"HTML Tag"**.
6. Copy the code inside the quotes after `content=`. It will look something like this: `ABC123xyz...`

## Step 2: Add the Code to Your Website
Open `app/layout.tsx` and add your code to the `metadata` object:

```typescript
// app/layout.tsx

export const metadata: Metadata = {
  // ... existing metadata ...
  verification: {
    google: "PASTE_YOUR_CODE_HERE", // Paste your code from step 1
  },
};
```

## Step 3: Verify in Google Search Console
1. Once you have saved and deployed the code change, go back to Google Search Console.
2. Click the **"Verify"** button.
3. Google will now confirm that your site is verified!

## Step 4: Submit Your Sitemap
To help Google find your pages faster:
1. In the Search Console sidebar, click **"Sitemaps"**.
2. Under **"Add a new sitemap"**, type: `sitemap.xml`
3. Click **"Submit"**.

---
**Note:** It usually takes 24-48 hours for data to start appearing in your Google Search Console dashboard.
