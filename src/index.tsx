import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./Route";
import { createGlobalStyle } from "styled-components";
import { QueryClient, QueryClientProvider } from "react-query";
import axios from "axios";
import { HelmetProvider } from "react-helmet-async";
import MetaTag from "./components/MetaTag";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
  font-family: 'Inter', sans-serif; /* Use Inter font */
  line-height: 1.2;
}

/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
* {
  box-sizing: border-box;
}

a {
  text-decoration: none;
  color: inherit;
}

button{
  border: none;
  outline: none;
  background-color: inherit ;
  cursor: pointer;
}

input{
  outline: none;
}
`;

axios.defaults.baseURL = "http://3.37.212.144:8080";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnReconnect: false,
      refetchOnWindowFocus: false,
      staleTime: 1 * 60 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <>
    <QueryClientProvider client={queryClient}>
      <HelmetProvider>
        <GlobalStyle />
        <MetaTag />
        <RouterProvider router={router} />
      </HelmetProvider>
    </QueryClientProvider>
  </>
);
