export interface Post {
  id: string;
  title: string;
  date: string;
  category: string;
  excerpt: string;
  content: string;
  color: string;
  accent: string;
  label: string;
}

export const posts: Post[] = [
  {
    id: 'clarity-is-a-form-of-care',
    title: 'Clarity is a form of care',
    date: 'October 13, 2026',
    category: 'Essay',
    excerpt: 'We usually think of clarity as a style choice. I think of it as care.',
    color: '#E4DDD6',
    accent: '#8A7355',
    label: '01',
    content: `We usually think of clarity as a style choice. Short sentences, simple words, a tidy layout.

I think of it as care.

When someone is dealing with illness, a deadline, or a high-stakes decision, they have less energy to spare. Every unclear instruction costs them something. They reread it, ask someone, or give up.

A clear form tells people: we respected your time. A letter that says what happened and what to do next tells people: we know you are worried.

Clarity does not mean removing every rule or pretending a process is simple. It means using words people already know, saying what is needed and why, making the next step obvious, and being honest when the answer is "we don't know yet."

It is a small habit, but it changes how a service feels. Care that people can actually see is usually written in plain language.`
  }
];

export const getPostById = (id: string): Post | undefined => {
  return posts.find(post => post.id === id);
};
