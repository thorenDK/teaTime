import React from "react";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";

export default function Layout({ initState }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
          crossOrigin="anonymous"
        />
        <script
          type="text/javascript"
          dangerouslySetInnerHTML={{
            __html: `window.initState=${JSON.stringify(initState)}`,
          }}
        />
        <script defer src="/app.js" />
        <script defer src="/vendor.js" />
        <script
          src="https://api-maps.yandex.ru/2.1/?apikey=3da7a90d-09cc-45a7-b16f-0503bd60338a&lang=ru_RU"
          type="text/javascript"
        />
        <title>Чаепитие</title>
        {/* <style>
          body:{" "}
          {{
            background: url(
              "https://s1.eda.ru/StaticContent/Photos/170214161608/200902162847/p_O.jpg"
            ),
          }}
        </style> */}
      </head>
      <body
        style={{
          backgroundImage:
            "https://s1.eda.ru/StaticContent/Photos/170214161608/200902162847/p_O.jpg",
        }}
      >
        <div id="root">
          <StaticRouter location={initState.path}>
            <App {...initState} />
          </StaticRouter>
        </div>
      </body>
    </html>
  );
}
