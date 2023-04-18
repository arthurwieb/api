const { Router } = require("express");

const usersRouter = require("./users.routes");
const notesRouter = require("./notes.routes");
const tagsRouter = require("./tags.routes");
const movieNotesRouter = require("./movienotes.routes");
const movieTagsRouter = require("./movietags.routes");

const routes = Router();
routes.use("/notes", notesRouter);
routes.use("/users", usersRouter);
routes.use("/tags", tagsRouter);
routes.use("/movienotes", movieNotesRouter);
routes.use("/movietags", movieTagsRouter);
module.exports = routes;
