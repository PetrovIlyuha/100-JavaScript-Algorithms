function ratingThreshold(threshold, ratings) {
  const review = [];
  for (let i = 0; i < ratings.length; i++) {
    let totalRating = 0;

    ratings[i].forEach(rating => {
      totalRating += rating;
    });
    if (totalRating / ratings[i].length < threshold) {
      review.push(i);
    }
  }
  return review;
}

console.log(ratingThreshold(3.5, [[3, 4], [3, 3, 3, 4], [4]]));
