import siteData from "./cleanSiteData";

export function fetchData() {
    return Promise.resolve(siteData);
}