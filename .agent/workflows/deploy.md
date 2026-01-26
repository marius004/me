---
description: how to deploy the application to Cloudflare
---

To deploy the personal website to Cloudflare, follow these steps:

1.  **Generate the Build**
    Run the consolidated build command:
    ```bash
    npm run build
    ```
    This command performs the following automated steps:
    - Cleans the previous `build/` directory.
    - Compiles the React application.
    - Generates a `404.html` file from `index.html` to handle routing fallbacks.
    - Pre-renders static HTML for critical routes (`/`, `/about`, `/recruiters`, `/resume`) using `react-snap`.

2.  **Manual Deployment**
    - Access your Cloudflare hosting dashboard.
    - Copy the **contents** of the generated `build/` directory (not the directory itself) to the root of your domain.
    - Ensure all files, including the `static/` directory and `404.html`, are uploaded.

3.  **Verification**
    - Navigate to `https://mariusscarlat.com` to check the homepage.
    - Navigate directly to `https://mariusscarlat.com/recruiters` to verify that direct path access is working.
