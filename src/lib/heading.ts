export const headingTags = { 1: "h1", 2: "h2", 3: "h3" } as const;

export type HeadingLevel = keyof typeof headingTags;
