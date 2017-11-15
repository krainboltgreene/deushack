import {head} from "snabbdom-helpers"
import {meta} from "snabbdom-helpers"
import {title} from "snabbdom-helpers"
import {style} from "snabbdom-helpers"
import {script} from "snabbdom-helpers"
import {link} from "snabbdom-helpers"
import links from "./links"

export default function metadata () {
  return head({
    inner: [
      meta({attributes: {charset: "utf-8"}}),
      meta({
        attributes: {
          "http-equiv": "utf-8",
          "content": "ie=edge",
        },
      }),
      meta({
        attributes: {
          name: "viewport",
          content: "width=device-width, initial-scale=1, shrink-to-fit=no",
        },
      }),
      title({inner: "deushack"}),
      ...links(
        [
          {
            rel: "apple-touch-icon",
            sizes: "57x57",
            href: "/apple-icon-57x57.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "60x60",
            href: "/apple-icon-60x60.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "72x72",
            href: "/apple-icon-72x72.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "76x76",
            href: "/apple-icon-76x76.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "114x114",
            href: "/apple-icon-114x114.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "120x120",
            href: "/apple-icon-120x120.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "144x144",
            href: "/apple-icon-144x144.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "152x152",
            href: "/apple-icon-152x152.png",
          },
          {
            rel: "apple-touch-icon",
            sizes: "180x180",
            href: "/apple-icon-180x180.png",
          },
          {
            rel: "apple-touch-icon-precomposed",
            href: "/apple-icon-precomposed.png",
          },
          {
            rel: "icon",
            kind: "image/png",
            sizes: "192x192",
            href: "/android-icon-192x192.png",
          },
          {
            rel: "icon",
            kind: "image/png",
            sizes: "32x32",
            href: "/favicon-32x32.png",
          },
          {
            rel: "icon",
            kind: "image/png",
            sizes: "96x96",
            href: "/favicon-96x96.png",
          },
          {
            rel: "icon",
            kind: "image/png",
            sizes: "16x16",
            href: "/favicon-16x16.png",
          },
          {
            rel: "icon",
            href: "/favicon.ico",
          },
          {
            rel: "manifest",
            href: "manifest.json",
          },
          {
            rel: "stylesheet",
            href: "/index.css",
          },
          {
            rel: "copyright",
            href: "/copyright.txt",
          },
          {
            rel: "author",
            href: "/humans.txt",
          },
        ]
      ),
      meta({
        attributes: {
          name: "robots",
          content: "index,follow",
        },
      }),
      link({
        attributes: {
          rel: "stylesheet",
          href: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/css/bootstrap.min.css",
          integrity: "sha384-PsH8R72JQ3SOdhVi3uxftmaW6Vc51MKb0q5P2rRUpPvrszuE4W1povHYgTpBfshb",
          crossorigin: "anonymous",
        },
      }),
      script({
        attributes: {
          type: "text/javascript",
          src: "https://code.jquery.com/jquery-3.2.1.slim.min.js",
          integrity: "sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN",
          crossorigin: "anonymous",
        },
      }),
      script({
        attributes: {
          type: "text/javascript",
          src: "https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.3/umd/popper.min.js",
          integrity: "sha384-vFJXuSJphROIrBnz7yo7oB41mKfc8JzQZiCq4NCceLEaO4IHwicKwpJf9c9IpFgh",
          crossorigin: "anonymous",
        },
      }),
      script({
        attributes: {
          type: "text/javascript",
          src: "https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.2/js/bootstrap.min.js",
          integrity: "sha384-alpBpkh1PFOepccYVYDB4do5UnbKysX5WZXm3XxPqe5iKTfUKjNkCk9SaVuEZflJ",
          crossorigin: "anonymous",
        },
      }),
      style({inner: "body {height: 100vh;}"}),
    ],
  })
}
