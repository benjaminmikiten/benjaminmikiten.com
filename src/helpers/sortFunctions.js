import moment from "moment";

export const sortByPostDate = (a, b) => {
  return moment(b.postDate).valueOf() - moment(a.postDate).valueOf();
}

export const sortByFeatured = (a, b) => {
  if(a.featured) return -1
  return 1
}