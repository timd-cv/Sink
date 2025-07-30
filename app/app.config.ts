export default defineAppConfig({
  title: 'CV Link Shortner',
  email: 'timd@central-valley.com',
  description: 'Central Valley Link Shortener',
  image: 'https://assets.central-valley.com/cv/CV_Circle.png',
  previewTTL: 300, // 5 minutes
  slugRegex: /^[a-z0-9]+(?:-[a-z0-9]+)*$/i,
  reserveSlug: [
    'dashboard',
  ],
})
