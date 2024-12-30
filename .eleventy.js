const pluginRss = require("@11ty/eleventy-plugin-rss");
const { DateTime } = require("luxon");

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
  eleventyConfig.setFreezeReservedData(false);
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addFilter("postDate", date => {
    if (date && typeof date.getMonth === "function") {
      return DateTime.fromJSDate(date).toFormat('LLL dd, yyyy')
    }
    if (typeof date === "object") {
      return DateTime.fromObject(date).toFormat('LLL dd, yyyy')
    }
    return DateTime.fromISO(date).toFormat('LLL dd, yyyy')
  })
  return {
    dir: {
      // ⚠️ These values are both relative to your input directory.
      includes: "_includes",
      layouts: "_layouts"
    }
  }
};
