export interface Project {
  id: string;
  title: string;
  context: string;
  explored: string;
  fullDescription?: string;
}

export const projects: Project[] = [
  {
    id: 'mapping-decision-architectures',
    title: 'Mapping Decision Architectures',
    context: 'Research project exploring how environments shape choices in organizational settings.',
    explored: 'The hidden structures that influence decision-making, from physical spaces to information flows. Developed frameworks for auditing and redesigning decision environments.',
    fullDescription: 'This research project delved into the intricate ways that physical and informational environments shape human decision-making within organizations. Through extensive fieldwork and analysis, I developed comprehensive frameworks for auditing existing decision architectures and redesigning them to support better outcomes. The work explored everything from office layouts and meeting room configurations to information dashboards and communication flows, revealing how subtle environmental cues can profoundly influence the choices people make.',
  },
  {
    id: 'the-clarity-project',
    title: 'The Clarity Project',
    context: 'Personal writing initiative on cognitive simplicity and mental models.',
    explored: 'How we can think more clearly in an age of information overload. Essays on attention, filtering, and the art of knowing what to ignore.',
    fullDescription: 'The Clarity Project is an ongoing personal writing initiative focused on the challenge of thinking clearly in an age of information overload. Through a series of essays and reflections, I explore the mental models and cognitive strategies that help us filter signal from noise. Topics range from the nature of attention and focus to the art of knowing what to ignore, drawing on insights from cognitive science, philosophy, and systems thinking.',
  },
  {
    id: 'systems-narratives-workshop',
    title: 'Systems Narratives Workshop',
    context: 'Facilitated sessions for strategy teams at mid-size organizations.',
    explored: 'Helping teams articulate complex interdependencies through storytelling. Moving from linear plans to adaptive narratives.',
    fullDescription: 'These facilitated workshops help strategy teams at mid-size organizations move beyond linear planning toward more adaptive, narrative-driven approaches. By teaching teams to articulate complex interdependencies through storytelling, the workshops enable participants to see their organizations as dynamic systems rather than static hierarchies. The outcome is a shared language for discussing uncertainty and a set of tools for navigating it.',
  },
  {
    id: 'behavioral-design-audit',
    title: 'Behavioral Design Audit',
    context: 'Consulting engagement with a digital product team.',
    explored: 'Identifying friction points and behavioral bottlenecks in user journeys. Recommendations grounded in cognitive science and systems thinking.',
    fullDescription: 'This consulting engagement involved a comprehensive audit of a digital product\'s user experience through the lens of behavioral science. Working closely with the product team, I identified friction points and behavioral bottlenecks throughout the user journey, providing actionable recommendations grounded in cognitive science and systems thinking. The audit covered everything from onboarding flows to retention mechanisms, resulting in a prioritized roadmap for improvements.',
  },
  {
    id: 'the-attention-diaries',
    title: 'The Attention Diaries',
    context: 'Ongoing personal research on focus and distraction.',
    explored: 'Documenting patterns of attention across different contexts. Experimenting with environmental and behavioral interventions.',
    fullDescription: 'The Attention Diaries is an ongoing personal research project documenting my own patterns of attention across different contexts and environments. Through careful observation and experimentation, I explore the factors that support or undermine focus, testing various environmental and behavioral interventions. The project serves as both a personal practice and a source of insights for my broader work on cognition and clarity.',
  },
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
