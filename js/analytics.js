---
---

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

{% if site.universal_analytics -%}
gtag('config', '{{ site.universal_analytics }}', {
  cookie_domain: 'mellimoe.com',
  cookie_flags: 'SameSite=None;Secure',
});
{% endif -%}
{% if site.google_analytics -%}
gtag('config', '{{ site.google_analytics }}', {
  cookie_domain: 'mellimoe.com',
  cookie_flags: 'SameSite=None;Secure',
});
{% endif -%}