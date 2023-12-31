const pluginRss = require("@11ty/eleventy-plugin-rss");

module.exports = function(eleventyConfig) {
  eleventyConfig.addLiquidFilter("dateToRfc822", pluginRss.dateToRfc822);
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default" // opt-out of <img/>-style XHTML single tags
    }
  });
  eleventyConfig.addPassthroughCopy("bundle.css");
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    strictFilters: false, // renamed from `strict_filters` in Eleventy 1.0
  });
  eleventyConfig.setServerOptions({
    showAllHosts: true,
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};
