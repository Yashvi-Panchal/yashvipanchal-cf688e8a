import { defineMcp } from "@lovable.dev/mcp-js";
import getProfileTool from "./tools/get-profile";
import getProjectTool from "./tools/get-project";
import listProjectsTool from "./tools/list-projects";

export default defineMcp({
  name: "yashvi-panchal-systems-thinking",
  title: "Yashvi Panchal: Systems Thinking",
  version: "0.1.0",
  instructions:
    "Read-only access to Yashvi Panchal's public design portfolio. Use `get_profile` for who she is, her background, and contact details. Use `list_projects` to see her published case studies, then `get_project` with an id for the full narrative of one project.",
  tools: [getProfileTool, listProjectsTool, getProjectTool],
});
