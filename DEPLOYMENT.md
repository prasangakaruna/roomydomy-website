# Shared Hosting Deployment Guide

This guide will help you deploy your Next.js static export to shared hosting.

## Prerequisites

- Node.js installed on your local machine (for building)
- FTP/SFTP access to your shared hosting
- Basic knowledge of file transfer

## Step 1: Build the Static Site

On your local machine, run:

```bash
npm install
npm run build
```

This will create a static export in the `out` directory.

## Step 2: Prepare Files for Upload

The `out` directory contains all the files you need to upload. The build process automatically copies the `.htaccess` file to the `out` directory. The structure should look like:
```
out/
├── .htaccess
├── index.html
├── _next/
│   ├── static/
│   └── ...
├── contact/
│   └── index.html
├── partner/
│   └── ...
└── ... (other static files)
```

**Note:** The `.htaccess` file is automatically copied to the `out` directory after build. If it's not there, you can manually copy it from the project root.

## Step 3: Upload to Shared Hosting

1. **Connect to your hosting via FTP/SFTP**
   - Use FileZilla, WinSCP, or your hosting provider's file manager
   - Navigate to your website's root directory (usually `public_html`, `www`, or `htdocs`)

2. **Upload all files from the `out` directory**
   - Upload ALL contents of the `out` folder to your website's root directory
   - Make sure to preserve the folder structure
   - The `.htaccess` file should already be in the `out` directory (automatically copied during build)

3. **Important Notes:**
   - Upload the `.htaccess` file to the root directory (same level as `index.html`)
   - Ensure file permissions are correct (644 for files, 755 for directories)
   - Some hosting providers may require you to enable `.htaccess` in their control panel

## Step 4: Verify Deployment

1. Visit your website URL
2. Check that all pages load correctly
3. Test navigation between pages
4. Verify images and assets load properly

## Troubleshooting

### Issue: 404 errors on page refresh
**Solution:** Make sure the `.htaccess` file is uploaded and mod_rewrite is enabled on your server.

### Issue: Images not loading
**Solution:** 
- Check that the `public` folder contents were included in the build
- Verify image paths are correct
- Check file permissions

### Issue: CSS/JS not loading
**Solution:**
- Clear browser cache
- Check that `_next/static` folder was uploaded correctly
- Verify file paths in browser console

### Issue: .htaccess not working
**Solution:**
- Contact your hosting provider to ensure mod_rewrite is enabled
- Some hosts require `.htaccess` to be enabled in cPanel or hosting control panel
- Check if your hosting uses Apache (this guide is for Apache servers)

## Alternative: Nginx Configuration

If your shared hosting uses Nginx instead of Apache, you'll need a different configuration. Contact your hosting provider or use this Nginx config:

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    root /path/to/your/out;
    index index.html;

    location / {
        try_files $uri $uri/ /index.html;
    }
}
```

## File Structure After Upload

Your hosting root should look like:
```
public_html/ (or www/)
├── .htaccess
├── index.html
├── _next/
│   └── static/
├── contact/
│   └── index.html
├── partner/
│   └── ...
└── ... (other files and folders)
```

## Quick Deploy Script (Optional)

You can create a simple script to automate the build and prepare files:

```bash
#!/bin/bash
npm run build
echo "Build complete! Upload the contents of the 'out' directory to your hosting."
```

## Support

If you encounter issues:
1. Check your hosting provider's documentation
2. Verify that static HTML hosting is supported
3. Contact your hosting provider's support team
