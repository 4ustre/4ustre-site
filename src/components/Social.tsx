const SOCIAL: [string, string, string][] = [
  [
    "Instagram",
    "https://www.instagram.com/4ustre/",
    "M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Zm0 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5ZM17.8 6a1.2 1.2 0 1 1 0 2.4 1.2 1.2 0 0 1 0-2.4Z",
  ],
  [
    "Facebook",
    "https://www.facebook.com/auste.vagoraite",
    "M13.5 22v-8h2.7l.4-3h-3.1V9.2c0-.9.3-1.5 1.6-1.5h1.6V5c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H7.5v3h2.8v8h3.2Z",
  ],
  [
    "LinkedIn",
    "https://www.linkedin.com/in/aust%C4%97-vagorait%C4%97-15a4a0255/",
    "M4.5 3a1.9 1.9 0 1 1 0 3.8 1.9 1.9 0 0 1 0-3.8ZM3 8.5h3v12H3v-12Zm5.5 0h2.9v1.6c.5-.9 1.6-1.8 3.3-1.8 2.5 0 4.3 1.6 4.3 4.9v7.3h-3v-6.7c0-1.7-.7-2.7-2.1-2.7-1.2 0-2 .8-2.3 1.6-.1.3-.1.7-.1 1v6.8h-3v-12Z",
  ],
];

export function Social({ tone }: { tone?: "paper" | "ink" }) {
  const c = tone === "paper" ? "var(--paper)" : "var(--ink)";
  return (
    <div style={{ display: "flex", gap: 16 }}>
      {SOCIAL.map(([name, href, d]) => (
        <a
          key={name}
          href={href}
          target="_blank"
          rel="noopener"
          aria-label={name}
          title={name}
          style={{ border: 0, display: "inline-flex", color: c }}
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d={d} />
          </svg>
        </a>
      ))}
    </div>
  );
}
