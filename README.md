# clubl tech test

This project is also hosted at: https://clubl.kiml.dev/

## Tech used

- **React 18** with **Vite**

The `package.json` has been kept as minimal as possible, so there is no linting, Prettier, or TypeScript configured.

## Commit messages

Git [commit messages](https://github.com/kimlove/clubl/commits/main/) follow the [Semantic Commit Messages](https://gist.github.com/joshbuchea/6f47e86d2510bce28f8e7f42ae84c716) guidelines.

## Quick overview

On initial load, data is fetched from cryptocurrency and currency APIs in parallel. The fetched data is displayed in a table component.

## Local Quick Start

_Note: This assumes you have [Node.js](https://nodejs.org/en) installed._

1. **Clone this repository or [download the .zip file](https://github.com/kimlove/clubl/archive/refs/heads/main.zip)**

   `git clone https://github.com/kimlove/clubl.git`

2. **Install npm dependencies in the clubl folder:**

   `npm install`

3. **Start the Local Development Server:**

   `npm run dev`

   The development build of the tech test should now be available at [http://localhost:3000/](http://localhost:3000/).

## Known Issues

- Display on mobile could be improved
- Number of crypto currencies could defined / updated by the user (rather than hardcoded)
- The UI look and feel could be more interesting

## Future Improvements

- Save the preferred sort order in local storage to maintain selection on page reloads.
- For larger projects, something like React Query would be better for data fetching.
- Page could auto refresh every X minutes to get the latest data.
- TypeScript along with Jest unit tests would be nice to add.
