import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { visionTool } from "@sanity/vision";
import { schema } from "./src/sanity/schema";
import { projectId, dataset, apiVersion } from "./src/sanity/env";

export default defineConfig({
  basePath: "/studio",
  projectId: projectId || "",
  dataset,
  title: "Satya Safety Net Studio",
  schema,
  plugins: [structureTool(), visionTool({ defaultApiVersion: apiVersion })],
});
