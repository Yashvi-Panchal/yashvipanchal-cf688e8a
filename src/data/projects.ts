export interface Project {
  id: string;
  title: string;
  descriptor?: string;
  context: string;
  explored: string;
  fullDescription?: string;
  // Rich narrative sections for detailed project pages
  narrative?: {
    overview?: string;
    whyItMattered?: string;
    whatIObserved?: string;
    howIApproached?: string;
    whatIExplored?: string;
    whatItShaped?: string;
  };
}

// Canada Pension Plan Disability project with full narrative
const cppDisabilityProject: Project = {
  id: 'canada-pension-plan-disability',
  title: 'Canada Pension Plan Disability',
  descriptor: 'Observing how complexity becomes a barrier to access',
  context: 'Understanding the human experience of navigating disability benefits systems.',
  explored: 'The cognitive load of bureaucratic systems and how complexity creates unintended barriers for people already in vulnerable situations.',
  narrative: {
    overview: `This project began with a simple question: what does it actually feel like to apply for disability benefits in Canada? The Canada Pension Plan Disability program is designed to support people who can no longer work due to a severe and prolonged disability. In theory, it's a safety net. In practice, navigating it can feel like a full-time job—one that many applicants are, by definition, unable to do.

I spent time understanding the application process not as a policy analyst or a service designer, but as someone trying to see it through the eyes of the people it's meant to serve. What I found was a system that, despite good intentions, often creates more barriers than it removes.`,

    whyItMattered: `Disability benefits are not a convenience—they're a lifeline. For someone unable to work due to illness or injury, the difference between receiving support and falling through the cracks can be profound. Yet the systems designed to provide this support are often built around institutional logic rather than human need.

This work mattered because it revealed how the structure of a process—not just its policies—can determine who gets help and who doesn't. It's not enough to have good programs; we need to understand how people actually experience them.`,

    whatIObserved: `The application process for CPP Disability is long, documentation-heavy, and requires sustained effort over weeks or months. For someone dealing with a serious health condition, this creates an impossible tension: the very abilities the system requires—focus, organization, persistence, clear communication—are often compromised by the conditions that qualify someone for the benefit.

I observed that applicants frequently struggled with understanding what was being asked of them. Forms used language that assumed familiarity with bureaucratic processes. Medical documentation requirements were unclear, leading to incomplete applications and delays. The burden of proof fell heavily on the applicant, who often lacked the resources or support to gather the necessary evidence.

Perhaps most striking was the emotional toll. Many applicants described feeling like they were on trial—required to prove, repeatedly, that their suffering was real and legitimate. This created a dynamic of distrust that undermined the supportive intent of the program.`,

    howIApproached: `I approached this not as a redesign exercise but as an act of careful observation. My goal was to understand the system as a whole—not just the touchpoints, but the underlying logic that shaped them.

I read through application materials, decision letters, and appeals documentation. I spoke with people who had been through the process, both successfully and unsuccessfully. I mapped the journey not as a linear flow but as a web of dependencies and decision points, each one a potential place where someone could get stuck.

I paid particular attention to moments of cognitive load: places where the process demanded more than it should reasonably expect from someone in a vulnerable state. I looked for patterns—recurring friction points that suggested systemic issues rather than individual failures.`,

    whatIExplored: `I explored the relationship between system complexity and access. Complexity, I found, is not neutral. It acts as a filter, favoring those with more resources, better health, and stronger support networks. This means that the people who need benefits most may be the least able to navigate the process to receive them.

I also explored the role of language. The words used in forms and letters shaped how applicants understood their situation. Clinical, legalistic language created distance and confusion. Passive constructions obscured responsibility. Simple changes in wording could, in theory, reduce anxiety and improve comprehension—but the institutional culture prioritized precision over clarity.

Finally, I explored the gap between policy intent and lived experience. The CPP Disability program was designed with specific goals in mind, but the experience of applying for it often felt at odds with those goals. Understanding this gap—and why it exists—became central to my thinking.`,

    whatItShaped: `This work deepened my conviction that systems thinking must include the human experience of systems, not just their structure. A process that looks logical on paper can be deeply irrational from the perspective of the person going through it.

It also shaped my understanding of cognitive load as a design consideration—not just in digital interfaces, but in any process that asks something of people. When we design systems without accounting for the mental and emotional state of users, we build in exclusion.

Most importantly, it reinforced my belief that the best way to understand a system is to follow the people moving through it. Their experience reveals what no flowchart or policy document ever can.`
  }
};

// Living Inside an Immigration System project with full narrative
const immigrationProject: Project = {
  id: 'living-inside-an-immigration-system',
  title: 'Living Inside an Immigration System',
  descriptor: 'Exploring immigration as a human experience, not just a process',
  context: 'Self-initiated exploration based on lived experience and observation.',
  explored: 'Immigration as a human system — one that shapes how people think, plan, and move through their lives while outcomes remain largely outside their control.',
  narrative: {
    overview: `Immigration systems are often described through policies, timelines, and eligibility criteria. But for the people inside them, immigration is experienced very differently — as waiting, uncertainty, and constant interpretation of incomplete information.

This self-initiated project explores immigration not as a legal or administrative process, but as a human system — one that shapes how people think, plan, and move through their lives while outcomes remain largely outside their control.`,

    whyItMattered: `For individuals navigating immigration, decisions are rarely low-stakes. They affect work, stability, identity, and belonging — often without clear timelines or guarantees.

What makes this system particularly complex is not just its rules, but the lack of clarity around progress, expectations, and future states. Understanding how this ambiguity is experienced felt important, especially because it is so normalized within the system itself.`,

    whatIObserved: `Through lived experience and ongoing observation, several recurring patterns became clear:

People spend long periods waiting without meaningful feedback. Information is technically available, but difficult to interpret or contextualize. Timelines feel abstract and unreliable. Planning life decisions becomes emotionally and cognitively demanding. Individuals carry the burden of uncertainty quietly and continuously.

Rather than moments of failure, the experience is defined by persistent ambiguity — and the effort required to live around it.`,

    howIApproached: `I approached the system as a network of signals rather than a linear journey: updates, silence, terminology, forms, and unofficial interpretations all shaping how people understand their position.

By focusing on patterns of behavior and emotional response, I began to see how uncertainty itself becomes a defining feature of the system — not an exception, but a condition people are expected to adapt to.`,

    whatIExplored: `Instead of solutions, this project explored questions and directions:

What does clarity look like when outcomes cannot be guaranteed? How might systems acknowledge uncertainty without amplifying anxiety? Where does silence create more harm than transparency? What support feels grounding rather than procedural?

These explorations focus on reducing cognitive and emotional load, even when structural complexity remains.`,

    whatItShaped: `This project reinforced a belief that now guides much of my work:

When systems withhold clarity, people compensate with emotional labor.

Immigration systems don't just process applications — they shape how people experience time, trust, and control. Designing clarity in such systems is not about simplifying rules, but about recognizing the human cost of prolonged uncertainty.`
  }
};

export const projects: Project[] = [
  cppDisabilityProject,
  immigrationProject,
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
