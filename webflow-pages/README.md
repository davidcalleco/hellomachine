# Hello Machine - Webflow Site Export

This directory contains the complete exported data from your Hello Machine Webflow site (hellomachine.co), structured for management through GitHub and Claude.

## Structure

```
/webflow-pages
├── README.md (this file)
├── index.json (all page metadata)
├── pages/ (individual page data)
│   ├── home.json
│   ├── why-hello-machine.json
│   ├── why-webflow.json
│   ├── pricing.json
│   ├── lets-talk.json
│   ├── web-design-development.json
│   ├── webflow-development.json
│   ├── ongoing-management.json
│   ├── wordpress-migrations.json
│   └── fast-track.json
└── assets/ (image and file references)
```

## How to Use

### Viewing Your Site
- All pages are stored as JSON in the `/pages/` directory
- Each page contains:
  - Page metadata (title, slug, SEO, last updated)
  - Complete component structure
  - Text content
  - Image references
  - Styling and attributes

### Editing Through Claude
Tell Claude what you want to change:

```
"Update the homepage heading to 'New Title'"
"Change the pricing page description"
"Add a new paragraph to the Why Hello Machine page"
"Update the contact form email"
```

Claude will:
1. Find the relevant page file
2. Locate the specific content
3. Make the change
4. Commit to GitHub

### Syncing Back to Webflow
Once you make changes:
1. Commit and push to GitHub
2. Use the Webflow API to sync changes back to your live site

## Pages

| Page | Slug | Path | Status |
|------|------|------|--------|
| Home | (root) | / | Published |
| Why Hello Machine | why-hello-machine | /why-hello-machine | Published |
| Why Webflow | why-webflow | /why-webflow | Published |
| Pricing | pricing | /pricing | Published |
| Let's talk | lets-talk | /lets-talk | Published |
| Web Design & Development | web-design-development | /services/web-design-development | Published |
| Webflow Development | webflow-development | /services/webflow-development | Published |
| Ongoing Management | ongoing-management | /services/ongoing-webflow-management-and-updates | Published |
| WordPress Migrations | wordpress-migrations | /services/wordpress-to-webflow-migrations | Published |
| Fast-track Development | fast-track | /solutions/fast-track-website-development | Published |

## Last Synced
2026-04-21 - All 10 published pages exported
