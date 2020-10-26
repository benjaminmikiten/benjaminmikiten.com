import moment from "moment";

export const sortByFeaturedAndDate = (a, b) => {
  if (a.featured) return -1;
  return moment(b.postDate).valueOf() - moment(a.postDate).valueOf();
}
