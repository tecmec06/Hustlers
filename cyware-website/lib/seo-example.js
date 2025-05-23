const { fetchTrendingRelatedKeywords } = require('./seo');

// Example usage
async function showTrendingKeywords() {
  try {
    const keywords = await fetchTrendingRelatedKeywords('cybersecurity');
    console.log('Related Keywords for "cybersecurity":');
    console.log(keywords);
  } catch (error) {
    console.error('Error:', error);
  }
}

// Run the example
showTrendingKeywords(); 