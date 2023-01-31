import "../styles/globals.css";
import { storyblokInit, apiPlugin } from "@storyblok/react";
import Feature from "../components/Feature";
import Grid from "../components/Grid";
import Page from "../components/Page";
import Teaser from "../components/Teaser";
import Section from "../components/Section";

const components = {
  feature: Feature,
  grid: Grid,
  teaser: Teaser,
  page: Page,
  section: Section
};

storyblokInit({
  accessToken: "hbeVxFJoywJWTURTZddcQwtt",
  use: [apiPlugin],
  components,
});

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
