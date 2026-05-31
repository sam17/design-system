import '../tokens/tokens.css';

export default {
  title: 'Tokens/Border & Shadow',
  tags: ['autodocs'],
};

const radiusOptions = [
  { token: '--radius-none', value: '0px',    label: 'none',  note: 'Sharp / sketch — most hand-drawn feel' },
  { token: '--radius-sm',   value: '2px',    label: 'sm',    note: 'Almost square, slight softness' },
  { token: '--radius-md',   value: '6px',    label: 'md',    note: 'Moderate — clean but not sterile' },
  { token: '--radius-lg',   value: '12px',   label: 'lg',    note: 'Rounded — for cards / panels' },
  { token: '--radius-full', value: '9999px', label: 'full',  note: 'Pill — for tags / badges' },
];

const shadows = [
  { token: '--shadow-sm', light: '2px 2px 0px rgba(0,0,0,0.15)', dark: '2px 2px 0px rgba(0,0,0,0.40)', label: 'sm' },
  { token: '--shadow-md', light: '3px 3px 0px rgba(0,0,0,0.20)', dark: '3px 3px 0px rgba(0,0,0,0.50)', label: 'md' },
  { token: '--shadow-lg', light: '5px 5px 0px rgba(0,0,0,0.25)', dark: '5px 5px 0px rgba(0,0,0,0.60)', label: 'lg' },
];

export const Radius = {
  name: 'Border Radius — Pick One',
  render: () => `
    <div style="padding: 32px; font-family: 'Indie Flower', cursive;">
      <h2 style="font-size: 32px; margin-bottom: 8px;">Border Radius</h2>
      <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 32px;">
        Hand-drawn aesthetic favors lower radius. Sharp (0) is most sketch-like. Pick a default for UI elements.
      </p>
      <div style="display: flex; gap: 32px; flex-wrap: wrap; align-items: flex-start;">
        ${radiusOptions.map(r => `
          <div style="text-align: center; width: 120px;">
            <div style="
              width: 100px; height: 100px;
              background: #8300E8;
              border-radius: ${r.value};
              margin: 0 auto 12px;
              border: 1px solid rgba(0,0,0,0.1);
            "></div>
            <div style="font-size: 20px; font-weight: 600;">${r.label}</div>
            <div style="font-family: monospace; font-size: 11px; color: #888; margin-top: 2px;">${r.value}</div>
            <div style="font-size: 14px; color: #555; margin-top: 6px; line-height: 1.3;">${r.note}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};

export const Shadows = {
  name: 'Shadows — Light vs Dark',
  render: () => `
    <div style="font-family: 'Indie Flower', cursive;">
      <div style="padding: 48px; background: #F5F5F5;">
        <h3 style="font-size: 24px; margin-bottom: 8px;">☀️ Light Mode — Whiteboard</h3>
        <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 32px;">Hard offset, no blur — sketch feel</p>
        <div style="display: flex; gap: 48px; flex-wrap: wrap;">
          ${shadows.map(s => `
            <div style="text-align: center;">
              <div style="
                width: 120px; height: 80px;
                background: white;
                border: 1px solid #000;
                border-radius: 4px;
                box-shadow: ${s.light};
                margin-bottom: 16px;
              "></div>
              <div style="font-family: monospace; font-size: 12px; font-weight: 600;">shadow-${s.label}</div>
              <div style="font-family: monospace; font-size: 10px; color: #888; margin-top: 4px;">${s.light}</div>
            </div>
          `).join('')}
        </div>
      </div>
      <div style="padding: 48px; background: #1A2519;">
        <h3 style="font-size: 24px; margin-bottom: 8px; color: #F0EBD8;">🌙 Dark Mode — Blackboard</h3>
        <p style="font-family: monospace; font-size: 12px; color: rgba(240,235,216,0.5); margin-bottom: 32px;">Heavier opacity to read on dark bg</p>
        <div style="display: flex; gap: 48px; flex-wrap: wrap;">
          ${shadows.map(s => `
            <div style="text-align: center;">
              <div style="
                width: 120px; height: 80px;
                background: #2A3B29;
                border: 1px solid #F0EBD8;
                border-radius: 4px;
                box-shadow: ${s.dark};
                margin-bottom: 16px;
              "></div>
              <div style="font-family: monospace; font-size: 12px; font-weight: 600; color: #F0EBD8;">shadow-${s.label}</div>
              <div style="font-family: monospace; font-size: 10px; color: rgba(240,235,216,0.5); margin-top: 4px;">${s.dark}</div>
            </div>
          `).join('')}
        </div>
      </div>
    </div>
  `,
};
