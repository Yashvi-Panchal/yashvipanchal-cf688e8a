// Text-only mirror of the public portfolio content exposed over MCP.
// Kept free of asset imports so it can be bundled into the MCP function.

export interface Project {
  id: string;
  title: string;
  descriptor?: string;
  context: string;
  explored: string;
  fullDescription?: string;
  // Metadata for project header
  metadata?: {
    role?: string;
    focus?: string;
    context?: string;
    timeline?: string;
  };  // Rich narrative sections for detailed project pages
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
  context: 'Research and synthesis as part of a service design project with Employment and Social Development Canada.',
  explored: 'The cognitive load of bureaucratic systems and how complexity creates unintended barriers for people already in vulnerable situations.',
  metadata: {
    role: 'User Experience Researcher',
    focus: 'User Research & Journey Mapping',
    context: 'Government Partnership',
  },
  
  
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

// Exploring Clarity in Everyday Systems project with full narrative
const everydaySystemsProject: Project = {
  id: 'exploring-clarity-everyday-systems',
  title: 'Exploring Clarity in Everyday Systems',
  descriptor: 'Observing how small frictions in daily tools and interactions shape behavior, decisions, and trust',
  context: 'Self-initiated inquiry into micro-systems and their relationship to larger patterns of human behavior.',
  explored: 'How minor friction points in everyday tools and experiences reveal patterns about cognition, trust, and the systemic nature of clarity.',
  narrative: {
    overview: `Systems aren't always formal or institutional. Every day, we navigate rules, expectations, and tools that guide our decisions — often invisibly. This project explores everyday systems I encounter, from scheduling tools to service experiences, and how minor friction points reveal larger patterns about human behavior and cognition.

Rather than redesigning interfaces, the focus is on observing and understanding how clarity (or the lack of it) shapes decisions, emotions, and trust.`,

    whyItMattered: `Small, unnoticed frictions accumulate. They affect confidence, efficiency, and well-being — even in low-stakes contexts. Observing these everyday systems provided insight into how humans interact with complexity, how assumptions are embedded into rules, and how communication can either reduce or amplify stress.

This matters because understanding micro-systems informs how larger, more complex systems could be approached.`,

    whatIObserved: `Patterns emerged across multiple everyday interactions:

Instructions are often ambiguous or inconsistent, even when repeated frequently. People create personal "workarounds" to navigate unclear expectations. Feedback loops are slow or missing, creating uncertainty. Small gaps in clarity amplify anxiety or hesitation.

These patterns mirrored those seen in larger, institutional systems — just at a smaller, more immediate scale.`,

    howIApproached: `I synthesized observations by focusing on cause and effect in human behavior, not outputs or tools. Each friction point was treated as a signal, highlighting the gap between expectation and reality.

This approach reinforced that clarity is systemic: it emerges from communication, structure, and human interpretation, not just design or rules.`,

    whatIExplored: `Instead of proposing solutions, I explored directions and questions:

How could instructions anticipate common misunderstandings? Where could small signals reduce cognitive load? How do people internalize system complexity when guidance is lacking? What patterns repeat across micro- and macro-systems?

The aim was to extract insights that could be applied across contexts — personal, organizational, or societal.`,

    whatItShaped: `This project deepened my appreciation for observing before intervening. It reinforced that even small, informal systems carry the same structural dynamics as larger ones — ambiguity, assumption, and the quiet labor of interpretation.

Understanding micro-systems has become a lens I now apply to more complex contexts: if clarity breaks down in simple interactions, it will compound in institutional ones.`
  }
};

// Immigration, Interpretation, and Information Flow project with full narrative
const immigrationInterpretationProject: Project = {
  id: 'immigration-interpretation-information-flow',
  title: 'Immigration, Interpretation, and Information Flow',
  descriptor: 'Exploring how people make sense of communication from complex systems',
  context: 'Research and synthesis as part of a human-centred design class project in collaboration with a government partner.',
  explored: 'The experience of meaning-making in the face of ambiguity — how people interpret and respond to communications from immigration systems.',
  narrative: {
    overview: `Immigration is not just a process of forms and decisions — it is a system of information exchange. People engage with it through emails, letters, web pages, and instructions that are often unclear, inconsistent, or difficult to interpret.

This project is an exploration of how people interpret and respond to communications from immigration systems, particularly those from IRCC (Immigration, Refugees and Citizenship Canada). Rather than focusing on policy or legality, it considers the experience of meaning-making in the face of ambiguity.`,

    whyItMattered: `For many individuals, language is the lens through which they understand their status, their timeline, and their future. When that language is unclear or open to interpretation, it becomes a barrier — one that creates stress, hesitation, and emotional labor.

The way information is communicated can shape people's confidence in the system, their ability to plan, and their emotional well-being.

This project matters because clarity in communication isn't simply cosmetic — it affects how people experience agency within a system that already feels uncertain.`,

    whatIObserved: `Across conversations and reflection, several consistent patterns emerged:

Official messages often assume contextual knowledge that people don't have. Ambiguous wording creates multiple interpretations. People spend time guessing meaning rather than acting on it. Silence or lack of updates feels worse than clear "no" or "yes." Gaps between expectation and message interpretation increase anxiety.

In many cases, it wasn't the absence of information that caused pain — it was the effort required to interpret what was there.`,

    howIApproached: `I approached this as an exploration of interpretation rather than information deficiency.

Instead of assuming that more data solves confusion, I looked at: How assumptions are baked into wording. How structure and order influence expectation. Where the burden of interpretation shifts onto the person. How people create narratives from partial signals.

This helped me see communication as a living experience — not a static instruction set.`,

    whatIExplored: `Rather than proposing rigid solutions, this project explored directions grounded in human experience:

What it looks like when communication anticipates interpretation challenges. How transparency about uncertainty can reduce cognitive load. Why simple language — not simpler messages — matters. Where meta-guidance (explaining why something is structured a certain way) can build trust.

These explorations focus on respecting the person in front of the message, not just optimizing wording.`,

    whatItShaped: `This project reinforced a pattern I've seen repeatedly:

Ambiguity in systems doesn't just frustrate people — it becomes part of how they live inside a system.

Meaning-making is a cognitive effort. When systems communicate in ways that require interpretation, people spend mental energy guessing rather than acting. Clarity isn't about simplification — it's about responsiveness to human meaning-making.`
  }
};

export const projects: Project[] = [
  cppDisabilityProject,
  immigrationProject,
];

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id);
};
