The projects shows how to use single components folder with annotations, and code.tsx to render 
markdown from multiple routes, including the root

Each route including the root router needs to have page.mdx file. 
There is no need for any js or tsx file inside the route

The layout.tsx at the route takes the mdx files and makes the page

The mdx-components.tsx outside the app, provides the components after extracting from page.mdx