/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

importScripts(
<<<<<<< HEAD
  "/Barbell_Factor_React/precache-manifest.f69d2409c25b5388dee0ec9ad6ce1cff.js"
=======
  "/Barbell_Factor_React/precache-manifest.64a5f4577aa690e61ce3024ec33378d6.js"
>>>>>>> 194bbd2c4f729bb741391dfb5f30233d49bcd084
);

workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/Barbell_Factor_React/index.html", {
  
  blacklist: [/^\/_/,/\/[^/]+\.[^/]+$/],
});
