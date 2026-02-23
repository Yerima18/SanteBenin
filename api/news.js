export default async function handler(req, res) {
  const key = process.env.GNEWS_API_KEY;
  if (!key) {
    return res.status(500).json({ error: 'API key not configured' });
  }

  const { max = '9' } = req.query;
  const url = `https://gnews.io/api/v4/search?q=Bénin&lang=fr&max=${max}&sortby=publishedAt&token=${key}`;

  try {
    const response = await fetch(url);
    if (!response.ok) {
      return res.status(response.status).json({ error: 'GNews API error' });
    }
    const data = await response.json();
    // Cache 1 hour on CDN
    res.setHeader('Cache-Control', 's-maxage=3600, stale-while-revalidate=600');
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ error: 'Failed to fetch news' });
  }
}
