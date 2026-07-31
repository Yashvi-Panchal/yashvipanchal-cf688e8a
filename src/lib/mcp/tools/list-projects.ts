import { defineTool } from "@lovable.dev/mcp-js";
import { projects } from "../content";

export default defineTool({
  name: "list_projects",
  title: "List projects",
  description:
    "List the published case studies / thinking artifacts in Yashvi Panchal's portfolio, with a short summary of each. Use get_project for the full narrative.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const items = projects.map((project) => ({
      id: project.id,
      title: project.title,
      descriptor: project.descriptor ?? null,
      context: project.context,
      explored: project.explored,
      url: `https://yashvipanchal.lovable.app/work/${project.id}`,
    }));

    const text = items
      .map(
        (item) =>
          `${item.title} (${item.id})\n${item.descriptor ?? ""}\nContext: ${item.context}\nExplored: ${item.explored}\n${item.url}`,
      )
      .join("\n\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: { projects: items },
    };
  },
});
