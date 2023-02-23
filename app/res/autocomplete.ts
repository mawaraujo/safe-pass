import topSites from 'top-sites';

/* eslint-disable no-unused-vars */
namespace Autocomplete {

  export const CustomSites: Array<string> = [
    'www.reddit.com',
  ];

  export const Sites: Array<string> = [...CustomSites, ...topSites.map((site) => site.rootDomain)];
}

export default Autocomplete;
