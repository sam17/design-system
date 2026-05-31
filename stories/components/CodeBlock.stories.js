import '../tokens/tokens.css';
import './components.css';

export default {
  title: 'Components/Code',
  tags: ['autodocs'],
};

// Code uses a dark surface in both modes — like a mini chalkboard inside the whiteboard
const codeBg      = '#1E1E1E';
const codeText    = '#F0EBD8';
const codeComment = 'rgba(240,235,216,0.4)';
const codeAccent  = '#D4A0FF';
const codeGreen   = '#7FEBA1';
const codeYellow  = '#F5D03A';

function inlineCode(text, pageBg, pageText) {
  return `<code style="
    font-family: monospace;
    font-size: 0.85em;
    background: ${pageBg === '#FFFFFF' ? '#F0F0F0' : 'rgba(240,235,216,0.12)'};
    color: ${pageBg === '#FFFFFF' ? '#8300E8' : '#D4A0FF'};
    border: 1px solid ${pageBg === '#FFFFFF' ? 'rgba(0,0,0,0.1)' : 'rgba(240,235,216,0.15)'};
    border-radius: 4px;
    padding: 1px 6px;
  ">${text}</code>`;
}

function codeBlock(code, language = '') {
  return `
    <div style="
      background: ${codeBg};
      border-radius: 6px;
      border: 1px solid rgba(240,235,216,0.1);
      box-shadow: 3px 3px 0px rgba(0,0,0,0.30);
      overflow: hidden;
    ">
      ${language ? `
        <div style="
          font-family: monospace;
          font-size: 12px;
          color: ${codeComment};
          padding: 8px 16px;
          border-bottom: 1px solid rgba(240,235,216,0.08);
          background: rgba(0,0,0,0.2);
        ">${language}</div>
      ` : ''}
      <pre style="
        margin: 0;
        padding: 20px;
        overflow-x: auto;
        font-family: monospace;
        font-size: 15px;
        line-height: 1.65;
        color: ${codeText};
      ">${code}</pre>
    </div>
  `;
}

const sampleJS = `<span style="color:${codeAccent}">const</span> <span style="color:${codeGreen}">site</span> = {
  author: <span style="color:${codeYellow}">'Soumyadeep'</span>,
  font:   <span style="color:${codeYellow}">'Indie Flower'</span>,
  vibe:   <span style="color:${codeYellow}">'whiteboard'</span>,
};

<span style="color:${codeComment}">// reduce the distance between idea and reality</span>
<span style="color:${codeAccent}">export default</span> site;`;

const sampleCSS = `<span style="color:${codeGreen}">:root</span> {
  <span style="color:${codeAccent}">--font-heading</span>: <span style="color:${codeYellow}">'Indie Flower'</span>, cursive;
  <span style="color:${codeAccent}">--font-body</span>:    <span style="color:${codeYellow}">'Patrick Hand'</span>, cursive;
  <span style="color:${codeAccent}">--color-bg</span>:     <span style="color:${codeYellow}">#FFFFFF</span>;
  <span style="color:${codeAccent}">--color-accent</span>: <span style="color:${codeYellow}">#8300E8</span>;
}`;

export const InlineCode = {
  render: () => `
    <div style="display:flex; gap:0; flex-wrap:wrap;">
      <div style="flex:1; min-width:280px; padding:40px; background:#FFFFFF;">
        <h2 style="font-family:'Indie Flower',cursive; font-size:32px; color:#000; margin-bottom:20px;">Inline Code — Light</h2>
        <p style="font-family:'Patrick Hand',cursive; font-size:20px; color:#000; line-height:1.65;">
          Set the ${inlineCode('font-family', '#FFFFFF')} to ${inlineCode('Indie Flower', '#FFFFFF')} for headings
          and use ${inlineCode('clamp()', '#FFFFFF')} for fluid sizing.
        </p>
      </div>
      <div style="flex:1; min-width:280px; padding:40px; background:#1A2519;">
        <h2 style="font-family:'Indie Flower',cursive; font-size:32px; color:#F0EBD8; margin-bottom:20px;">Inline Code — Dark</h2>
        <p style="font-family:'Patrick Hand',cursive; font-size:20px; color:#F0EBD8; line-height:1.65;">
          Set the ${inlineCode('font-family', '#1A2519')} to ${inlineCode('Indie Flower', '#1A2519')} for headings
          and use ${inlineCode('clamp()', '#1A2519')} for fluid sizing.
        </p>
      </div>
    </div>
  `,
};

export const BlockCode = {
  render: () => `
    <div style="padding:40px; background:#F5F5F5; display:flex; flex-direction:column; gap:32px; max-width:680px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:32px; color:#000; margin:0;">Code Block</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin:0;">
        Always dark surface — like a mini chalkboard. Consistent in both light and dark page modes.
      </p>

      ${codeBlock(sampleJS, 'javascript')}
      ${codeBlock(sampleCSS, 'css')}
    </div>
  `,
};

export const InContext = {
  name: 'In Context — Blog Post',
  render: () => `
    <div style="padding:40px; background:#FFFFFF; max-width:680px;">
      <h1 style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; margin-bottom:8px;">How I set up my design tokens</h1>
      <p style="font-family:'Patrick Hand',cursive; font-size:16px; color:rgba(0,0,0,0.4); margin-bottom:32px;">May 2026 · 4 min read</p>

      <p style="font-family:'Patrick Hand',cursive; font-size:20px; color:#000; line-height:1.65; margin-bottom:24px;">
        Every design system starts with tokens. The first thing I define is the ${inlineCode('--font-heading', '#FFFFFF')} variable,
        which controls everything above the fold.
      </p>

      ${codeBlock(sampleCSS, 'css')}

      <p style="font-family:'Patrick Hand',cursive; font-size:20px; color:#000; line-height:1.65; margin-top:24px;">
        From there, every component uses ${inlineCode('var(--font-heading)', '#FFFFFF')} instead of hardcoded values.
        When you want to change the whole system, you change one line.
      </p>
    </div>
  `,
};
