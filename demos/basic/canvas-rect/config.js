export default async () => {
  const [html, js, css] = await Promise.all([
    import('!raw-loader!./index.html'),
    import('!raw-loader!./index.js'),
    import('!raw-loader!./style.css')
  ])
  return { html, javascript: js, css }
}