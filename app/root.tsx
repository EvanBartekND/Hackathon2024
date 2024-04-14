import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';



export const meta: MetaFunction = () => {
  return [
    { title: "SideQuestND" },
    { name: "description", content: "Welcome to SideQuestND!" },
  ];
};

import styles from "./styles/styles.css";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300..700&display=swap" rel="stylesheet"/>
        <Meta />
        <Links />
      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return (<Outlet />);
}
