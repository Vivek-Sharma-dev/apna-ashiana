export const transformCurrency = (num: number) => {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
};

// image optimized url function
export const imageOptimizedUrl = (url: string) => {
  if (!url) return;

  // for cloudinary links
  if (url.includes("res.cloudinary.com")) {
    return url.replace("/upload/", "/upload/f-auto/q-auto/w_600/c_limit");
  }

  // for unsplash links (seed data)
  if (url.includes("image.unsplash.com")) {
    return `${url}?w=600&q=80&auto=format`;
  }

  return url;
};
