import lume from "lume/mod.ts";

const site = lume({
  prettyUrls: false, // Disable pretty urls
});

site.copy("css");
site.copy("js");
site.copy("images");
site.copy("assets");
site.copy("favicon.ico");
site.copy("index.html");

export default site;

