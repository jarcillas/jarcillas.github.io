const Contact = () => (
  <div className="flex flex-col items-start w-full h-full max-w-5xl mx-auto">
    <h2 className="text-xl text-primary font-mono w-full mb-4">contact</h2>
    <p className="text-base font-mono text-secondary mb-2 flex items-center gap-2">
      {/* Email Icon */}
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-primary"
        viewBox="0 0 20 20"
      >
        <path d="M2.94 4.94A2.5 2.5 0 0 1 5.5 4h9a2.5 2.5 0 0 1 2.56.94l-7.06 5.3-7.06-5.3zM2 6.32V15.5A2.5 2.5 0 0 0 4.5 18h11a2.5 2.5 0 0 0 2.5-2.5V6.32l-7.06 5.3a1 1 0 0 1-1.24 0L2 6.32z" />
      </svg>
      <a href="mailto:jesrealarcillas@gmail.com" className="hover:text-primary">
        jesrealarcillas@gmail.com
      </a>
    </p>
    <p className="text-base font-mono text-secondary mb-2 flex items-center gap-2">
      {/* LinkedIn Icon */}
      <svg
        width="20"
        height="20"
        fill="currentColor"
        className="text-primary"
        viewBox="0 0 24 24"
      >
        <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.27c-.97 0-1.75-.79-1.75-1.76s.78-1.76 1.75-1.76 1.75.79 1.75 1.76-.78 1.76-1.75 1.76zm13.5 11.27h-3v-5.6c0-1.34-.03-3.07-1.87-3.07-1.87 0-2.16 1.46-2.16 2.97v5.7h-3v-10h2.89v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
      </svg>
      <a
        href="https://linkedin.com/in/jesrealarcillas"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        linkedin.com/in/jesrealarcillas
      </a>
    </p>
    <p className="text-base font-mono text-secondary flex items-center gap-2">
      {/* X (Twitter) Icon */}
      <svg
        viewBox="0 0 24 24"
        aria-hidden="true"
        className="text-primary"
        width="20"
        height="20"
        fill="currentColor"
      >
        <g>
          <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"></path>
        </g>
      </svg>
      <a
        href="https://x.com/jigogwapo"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-primary"
      >
        @jigogwapo
      </a>
    </p>
  </div>
);

export { Contact };
