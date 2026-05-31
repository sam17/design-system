import '../tokens/tokens.css';

export default {
  title: 'Components/Button',
  tags: ['autodocs'],
};

const btnBase = `
  font-family: 'Patrick Hand', cursive;
  font-size: 20px;
  font-weight: 400;
  border: 1px solid #000;
  border-radius: 6px;
  padding: 10px 24px;
  cursor: pointer;
  display: inline-block;
  transition: box-shadow 150ms ease-in-out, transform 150ms ease-in-out;
  text-decoration: none;
`;

const btnPrimary = btnBase + `
  background: rgba(131, 0, 232, 0.08);
  color: #8300E8;
  border-color: #8300E8;
  box-shadow: 3px 3px 0px rgba(0,0,0,0.20);
`;

const btnPrimaryHover = btnBase + `
  background: rgba(131, 0, 232, 0.16);
  color: #8300E8;
  border-color: #8300E8;
  box-shadow: 1px 1px 0px rgba(0,0,0,0.20);
  transform: translate(2px, 2px);
`;

const btnGhost = btnBase + `
  background: transparent;
  color: #000;
  box-shadow: 3px 3px 0px rgba(0,0,0,0.20);
`;

const btnGhostHover = btnBase + `
  background: transparent;
  color: #000;
  box-shadow: 1px 1px 0px rgba(0,0,0,0.20);
  transform: translate(2px, 2px);
`;

// Dark mode — no solid fill, chalk outline style
const btnPrimaryDark = btnBase + `
  background: rgba(212, 160, 255, 0.12);
  color: #D4A0FF;
  border-color: #D4A0FF;
  box-shadow: 3px 3px 0px rgba(0,0,0,0.40);
`;

const btnPrimaryDarkHover = btnBase + `
  background: rgba(212, 160, 255, 0.22);
  color: #D4A0FF;
  border-color: #D4A0FF;
  box-shadow: 1px 1px 0px rgba(0,0,0,0.40);
  transform: translate(2px, 2px);
`;

const btnGhostDark = btnBase + `
  background: transparent;
  color: #F0EBD8;
  border-color: rgba(240,235,216,0.5);
  box-shadow: 3px 3px 0px rgba(0,0,0,0.40);
`;

function row(label, ...buttons) {
  return `
    <div style="margin-bottom: 32px;">
      <div style="font-family: monospace; font-size: 11px; color: inherit; opacity: 0.5; margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.08em;">${label}</div>
      <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">${buttons.join('')}</div>
    </div>
  `;
}

export const LightMode = {
  render: () => `
    <div style="padding: 40px; background: #FFFFFF;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #000;">Buttons — Light</h2>
      ${row('Primary (outline + subtle tint)',
        `<span style="${btnPrimary}">Explore</span>`,
        `<span style="${btnPrimary}">Read more</span>`,
        `<span style="${btnPrimary}">Get in touch</span>`,
      )}
      ${row('Primary — Hover (simulated)',
        `<span style="${btnPrimaryHover}">Explore</span>`,
      )}
      ${row('Ghost',
        `<span style="${btnGhost}">See all writing</span>`,
        `<span style="${btnGhost}">View project</span>`,
      )}
      ${row('Ghost — Hover (simulated)',
        `<span style="${btnGhostHover}">See all writing</span>`,
      )}
      ${row('Side by side',
        `<span style="${btnPrimary}">Primary</span>`,
        `<span style="${btnGhost}">Ghost</span>`,
      )}
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding: 40px; background: #1A2519;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #F0EBD8;">Buttons — Dark</h2>
      ${row('Primary (chalk outline + subtle tint)',
        `<span style="${btnPrimaryDark}">Explore</span>`,
        `<span style="${btnPrimaryDark}">Read more</span>`,
        `<span style="${btnPrimaryDark}">Get in touch</span>`,
      ).replace(/color: inherit/g, 'color: #F0EBD8')}
      ${row('Primary — Hover (simulated)',
        `<span style="${btnPrimaryDarkHover}">Explore</span>`,
      ).replace(/color: inherit/g, 'color: #F0EBD8')}
      ${row('Ghost (chalk white outline)',
        `<span style="${btnGhostDark}">See all writing</span>`,
        `<span style="${btnGhostDark}">View project</span>`,
      ).replace(/color: inherit/g, 'color: #F0EBD8')}
      ${row('Side by side',
        `<span style="${btnPrimaryDark}">Primary</span>`,
        `<span style="${btnGhostDark}">Ghost</span>`,
      ).replace(/color: inherit/g, 'color: #F0EBD8')}
    </div>
  `,
};

export const SideBySide = {
  render: () => `
    <div style="display: flex; gap: 0; flex-wrap: wrap;">
      <div style="flex:1; min-width:300px; padding: 40px; background: #FFFFFF;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size: 24px; margin-bottom: 24px; color:#000;">☀️ Light</h3>
        <div style="display:flex; gap:16px; flex-wrap:wrap;">
          <span style="${btnPrimary}">Primary</span>
          <span style="${btnGhost}">Ghost</span>
        </div>
      </div>
      <div style="flex:1; min-width:300px; padding: 40px; background: #1A2519;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size: 24px; margin-bottom: 24px; color:#F0EBD8;">🌙 Dark</h3>
        <p style="font-family:monospace; font-size:11px; color:rgba(240,235,216,0.4); margin-bottom:16px;">Chalk outline + tint — no solid fill</p>
        <div style="display:flex; gap:16px; flex-wrap:wrap;">
          <span style="${btnPrimaryDark}">Primary</span>
          <span style="${btnGhostDark}">Ghost</span>
        </div>
      </div>
    </div>
  `,
};
