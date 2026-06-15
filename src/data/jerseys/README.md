# Jersey content structure

Jersey records are organized by catalog meaning instead of one long list:

```txt
src/data/jerseys/
  league/
    team/
      player/
        jersey-style/
          index.ts
```

Each final `index.ts` file stores the jersey description, catalog metadata, and the ordered photo list for that exact jersey style.

Example:

```txt
src/data/jerseys/nhl/rangers/team-issued/home/index.ts
```

Use `team-issued` when there is no specific player yet. If a jersey belongs to a player later, replace that level with a lowercase slug like `wayne-gretzky` or `mario-lemieux`.

To add a new jersey:

1. Add or import the jersey photos.
2. Create a new folder path using `league / team / player / style`.
3. Add that jersey's `index.ts` file with its photos and description.
4. Export the jersey from `src/data/jerseys/index.ts` by importing it and adding it to the `jerseys` array.

The app still imports from `@/data/jerseys`, so the pages do not need to know how the folders are organized.
