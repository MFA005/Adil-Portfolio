# Project Structure Guide

## Image Handling

### 1. Skills Section
- Place PNG logos in:  
  `public/SkillsImg/`  
- Simply add the PNG logo files to this directory

### 2. Project Gallery
- For each project, create a new folder in:  
  `public/projectGallery/`
- Inside each project folder:
  - Add all related images

## Main Page Routing
- The main page is controlled by:  
  `src/app/page.tsx`  
- Modify the respective `page.tsx` file for changes to each route/page

## Best Practices
1. Keep all images in their designated folders
2. Use consistent naming conventions (lowercase-with-dashes)
3. Reference paths in code as:  
   `/SkillsImg/logo.png`  
   `/projectGallery/project-name/image.jpg`
