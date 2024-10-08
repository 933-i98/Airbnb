import hyRequest from "../index";

export function getHomeGoodPriceData() {
  return hyRequest.get({
    url: "/home/goodprice",
  });
}

export function getHomeHighScoreData() {
  return hyRequest.get({
    url: "/home/highscore",
  });
}

export function getHomeDiscountData() {
  return hyRequest.get({
    url: "/home/discount",
  });
}

export function getHomeHotRecommendDate() {
  return hyRequest.get({
    url: "/home/hotrecommenddest",
  });
}

export function getHomeLongforDate() {
  return hyRequest.get({
    url: "/home/longfor",
  });
}

export function getHomePlusDate() {
  return hyRequest.get({
    url: "/home/plus",
  });
}
