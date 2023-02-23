import topSites from 'top-sites';

/* eslint-disable no-unused-vars */
namespace Autocomplete {

  export const CustomSites: Array<string> = [
    'www.reddit.com',
    'www.disneyplus.com',
    'www.paramountplus.com',
    'www.starplus.com',
    'www.hbomax.com',
    'www.mercadolibre.com',
    'www.primevideo.com',
    'www.crunchyroll.com',
    'www.hulu.com',
    'www.swissmedicalseguros.com/',
    'www.swissmedical.com.ar',
  ];

  export const Sites: Array<string> = [...topSites.map((site) => site.rootDomain), ...CustomSites];
}

export default Autocomplete;
