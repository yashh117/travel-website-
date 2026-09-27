# Tour Images Configuration

## How to Update Tour Images

### Option 1: Using the tourImages.js file (Current Method)

Edit `src/data/tourImages.js` and update the image URLs:

```javascript
export const tourImages = {
  national: {
    himalayanAdventure: 'YOUR_IMAGE_URL_HERE',
    goldenTriangle: 'YOUR_IMAGE_URL_HERE',
    // ... etc
  },
  international: {
    europeanDelight: 'YOUR_IMAGE_URL_HERE',
    // ... etc
  },
}
```

### Option 2: Using Local Images (Recommended for Production)

1. Create the folder structure:
   ```
   public/
     images/
       tours/
         himalayan-adventure.jpg
         golden-triangle.jpg
         kerala-backwaters.jpg
         rajasthan-royal.jpg
         european-delight.jpg
         southeast-asia.jpg
         dubai-abu-dhabi.jpg
         swiss-alps.jpg
   ```

2. Update `src/data/tourImages.js`:
   ```javascript
   export const tourImages = {
     national: {
       himalayanAdventure: '/images/tours/himalayan-adventure.jpg',
       goldenTriangle: '/images/tours/golden-triangle.jpg',
       // ... etc
     },
   }
   ```

3. Or directly update the tour objects in `src/pages/Tours.jsx`:
   ```javascript
   {
     id: 1,
     title: 'Himalayan Adventure',
     image: '/images/tours/himalayan-adventure.jpg',
     // ... rest of the tour data
   }
   ```

## Image Specifications

- **Recommended size**: 800x600 pixels (or 4:3 aspect ratio)
- **Format**: JPG, PNG, or WebP
- **File size**: Keep under 500KB for better performance
- **Naming**: Use lowercase with hyphens (e.g., `himalayan-adventure.jpg`)

## Current Image Sources

All images are currently using placeholder URLs from Unsplash. Replace them with your actual tour images.
