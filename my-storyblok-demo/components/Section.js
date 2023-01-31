import { storyblokEditable, StoryblokComponent } from "@storyblok/react";

const Section = ({ blok }) => {
    console.log('blok', blok)
    return (
  <section {...storyblokEditable(blok)}>
  {blok.disable && blok.content.map((nestedBlok) => (
    <StoryblokComponent blok={nestedBlok} key={nestedBlok._uid} />
  ))}
</section>)};

export default Section;
