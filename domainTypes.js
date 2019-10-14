function domainTypes(domains){
  const domainType = [];

  for (let i = 0; i < domains.length; i++) {
    const domain = domains[i].split('.');
    const lastDomain = domain[domain.length - 1];
    if (lastDomain === 'org') {
      domainType.push("organization");
    } else if (lastDomain === 'info') {
      domainType.push("informational");
    } else if (lastDomain === 'net') {
      domainType.push("network");
    } else if (lastDomain === 'com') {
      domainType.push("commercial");
    }
  }
  return domainType;
}

console.log(domainTypes(["hackernoon.com", "mailchimp.net", "codewars.org", "javascript.info"]));