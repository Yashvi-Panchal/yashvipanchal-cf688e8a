import { defineTool } from "@lovable.dev/mcp-js";
import { profile } from "../profile";

export default defineTool({
  name: "get_profile",
  title: "Get profile",
  description:
    "Get Yashvi Panchal's public professional profile: who she is, her background, what she does, what she's currently open to, and how to reach her.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => {
    const text = [
      `${profile.name} — ${profile.title}, ${profile.location}`,
      "",
      profile.intro,
      "",
      `Background: ${profile.background}`,
      "",
      `What I do: ${profile.whatIDo}`,
      "",
      `Currently: ${profile.currently}`,
      "",
      `Focus areas: ${profile.focusAreas.join(", ")}`,
      "",
      `Email: ${profile.contact.email}`,
      `LinkedIn: ${profile.contact.linkedin}`,
      `Website: ${profile.contact.website}`,
    ].join("\n");

    return {
      content: [{ type: "text", text }],
      structuredContent: { profile },
    };
  },
});
