# Marius Stefan

Welcome to the repository for my personal website. This project serves as my online portfolio and resume, built using React and hosted on Cloudflare.

**Live Website:** [https://mariusscarlat.com](https://mariusscarlat.com)

## Deployment

To deploy the website to Cloudflare:

1.  **Build the project**:
    ```bash
    npm run build
    ```
    This command clears the `build/` folder, runs the React build, generates a `404.html` fallback, and pre-renders all critical pages.

2.  **Upload to Cloudflare**:
    Copy the **contents** of the `build/` folder to your Cloudflare hosting root.
