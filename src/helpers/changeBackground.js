import sunnyImage from "../img/sunny.jpg";
import cloudyImage from "../img/cloudy.jpg";
import clearImage from "../img/clear.jpg";
import fogImage from "../img/fog.jpg";
import snowImage from "../img/snow.jpg";
import thunderImage from "../img/thunder.jpg";
import rainImage from "../img/rain.jpg";

export function changeBackground(data) {
  function getBackground(condition) {
    switch (condition) {
      case "sunny":
        return { bg: `url(${sunnyImage})`, color: "white" };
      case "cloudy":
      case "partly cloudy":
      case "overcast":
      case "mist":
      case "patchy rain possible":
      case "patchy snow possible":
      case "patchy sleet possible":
      case "patchy freezing drizzle possible":
      case "thundery outbreaks possible":
        return { bg: `url(${cloudyImage})`, color: "black" };
      case "clear":
        return { bg: `url(${clearImage})`, color: "white" };
      case "rainy":
      case "patchy light drizzle":
      case "light drizzle":
      case "freezing drizzle":
      case "heavy freezing drizzle":
      case "patchy light rain":
      case "light rain":
      case "moderate rain at times":
      case "moderate rain":
      case "heavy rain at times":
      case "light freezing rain":
      case "moderate or heavy freezing rain":
      case "light rain shower":
      case "moderate or heavy rain shower":
      case "torrential rain shower":
      case "light sleet showers":
      case "moderate or heavy sleet showers":
      case "heavy rain":
        return { bg: `url(${rainImage})`, color: "white" };
      case "blowing snow":
      case "light sleet":
      case "moderate or heavy sleet":
      case "light snow":
      case "patchy moderate snow":
      case "moderate snow":
      case "patchy heavy snow":
      case "heavy snow":
      case "ice pellets":
      case "light snow showers":
      case "moderate or heavy snow showers":
      case "light showers of ice pellets":
      case "moderate or heavy showers of ice pellets":
        return { bg: `url(${snowImage})`, color: "black" };
      case "fog":
      case "freezing fog":
        return { bg: `url(${fogImage})`, color: "black" };
      case "moderate or heavy rain with thunder":
      case "patchy light rain with thunder":
      case "patchy light snow with thunder":
      case "moderate or heavy snow with thunder":
        return { bg: `url(${thunderImage})`, color: "white" };
    }
  }

  const { bg, color } = getBackground(
    data.current.condition.text.toLowerCase()
  );

  document.body.style.backgroundImage = bg;
  document.body.style.color = color;
}
