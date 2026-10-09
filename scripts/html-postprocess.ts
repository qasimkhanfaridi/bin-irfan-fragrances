/** Reorder CSS before JS, preload stylesheets, and mark styles-ready when CSS loads. */
export const postProcessDistHtml = (html: string): string => {
  let out = html;

  const stylesheetLinks = [...out.matchAll(/<link rel="stylesheet"[^>]*>/g)].map(m => m[0]);
  if (stylesheetLinks.length === 0) {
    return out;
  }

  for (const link of stylesheetLinks) {
    out = out.replace(link, '');
  }

  const enhancedLinks = stylesheetLinks.map(link => {
    const hrefMatch = link.match(/href="([^"]+)"/);
    const href = hrefMatch?.[1];
    if (!href) {
      return link;
    }

    const preload = `<link rel="preload" href="${href}" as="style">`;
    const withOnload = link.includes('onload=')
      ? link
      : link.replace(
          />$/,
          ` onload="this.onload=null;document.documentElement.classList.add('styles-ready')">`
        );

    return `${preload}\n    ${withOnload}`;
  });

  const moduleScriptMatch = out.match(/<script type="module"[^>]*><\/script>|<script type="module"[^>]*src="[^"]+"[^>]*><\/script>/);
  if (moduleScriptMatch) {
    const insert = `${enhancedLinks.join('\n    ')}\n    ${moduleScriptMatch[0]}`;
    out = out.replace(moduleScriptMatch[0], insert);
  } else {
    out = out.replace('</head>', `    ${enhancedLinks.join('\n    ')}\n  </head>`);
  }

  return out;
};
