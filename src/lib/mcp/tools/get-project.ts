import { ToolError, defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { projects } from "../content";

const SECTION_LABELS: Record<string, string> = {
  overview: "Overview",
  whyItMattered: "Why it mattered",
  whatIObserved: "What I observed",
  howIApproached: "How I approached it",
  whatIExplored: "What I explored",
  whatItShaped: "What it shaped",
};

export default defineTool({
  name: "get_project",
  title: "Get project",
  description:
    "Get the full narrative of one portfolio project by its id, including overview, why it mattered, observations, approach, explorations, and what it shaped. Call list_projects first to discover valid ids.",
  inputSchema: {
    id: z
      .string()
      .describe("The project id, e.g. 'canada-pension-plan-disability'."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ id }) => {
    const project = projects.find((candidate) => candidate.id === id);
    if (!project) {
      throw new ToolError(
        `No project with id "${id}". Valid ids: ${projects.map((p) => p.id).join(", ")}.`,
      );
    }

    const sections = Object.entries(project.narrative ?? {}).filter(
      ([, value]) => Boolean(value),
    );

    const text = [
      `# ${project.title}`,
      project.descriptor ?? "",
      `Context: ${project.context}`,
      `Explored: ${project.explored}`,
      ...sections.map(
        ([key, value]) => `\n## ${SECTION_LABELS[key] ?? key}\n${value}`,
      ),
    ]
      .filter(Boolean)
      .join("\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: {
        project: {
          id: project.id,
          title: project.title,
          descriptor: project.descriptor ?? null,
          context: project.context,
          explored: project.explored,
          metadata: project.metadata ?? null,
          narrative: project.narrative ?? null,
          url: `https://yashvipanchal.lovable.app/work/${project.id}`,
        },
      },
    };
  },
});
