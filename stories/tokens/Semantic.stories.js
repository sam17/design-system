import '../tokens/tokens.css';

export default {
  title: 'Tokens/Semantic Colors',
  tags: ['autodocs'],
};

const semanticLight = [
  { token: '--color-primary',    hex: '#8300E8', label: 'Primary',    note: '→ accent-purple. CTAs, links, highlights.' },
  { token: '--color-success',    hex: '#00C17D', label: 'Success',    note: '→ accent-green. Active states, confirmations.' },
  { token: '--color-error',      hex: '#B70F0F', label: 'Error',      note: '→ accent-red. Errors, dividers, alerts.' },
  { token: '--color-link',       hex: '#8300E8', label: 'Link',       note: '→ accent-purple. Inline text links.' },
  { token: '--color-surface',    hex: '#FFFFFF', label: 'Surface',    note: '→ bg. Card / panel backgrounds.' },
  { token: '--color-on-surface', hex: '#000000', label: 'On Surface', note: '→ text. Content on surface.' },
];

const semanticDark = [
  { token: '--color-primary',    hex: '#D4A0FF', label: 'Primary',    note: '→ lavender chalk' },
  { token: '--color-success',    hex: '#7FEBA1', label: 'Success',    note: '→ mint chalk' },
  { token: '--color-error',      hex: '#F4A0A0', label: 'Error',      note: '→ pink chalk' },
  { token: '--color-link',       hex: '#D4A0FF', label: 'Link',       note: '→ lavender chalk' },
  { token: '--color-surface',    hex: '#1A2519', label: 'Surface',    note: '→ bg (blackboard)' },
  { token: '--color-on-surface', hex: '#F0EBD8', label: 'On Surface', note: '→ chalk white' },
];

function semanticGrid(list, bg, textColor) {
  return `
    <div style="background:${bg}; padding: 32px; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 16px;">
      ${list.map(s => `
        <div style="width: 180px; font-family: monospace;">
          <div style="
            width: 180px; height: 64px;
            background: ${s.hex};
            border-radius: 4px;
            border: 1px solid rgba(128,128,128,0.2);
            margin-bottom: 8px;
          "></div>
          <div style="font-size: 13px; font-weight: 600; color: ${textColor}; font-family: 'Indie Flower', cursive; font-size: 18px;">${s.label}</div>
          <div style="font-size: 10px; color: ${textColor}; opacity: 0.6; margin-top: 2px;">${s.token}</div>
          <div style="font-size: 10px; color: ${textColor}; opacity: 0.6;">${s.hex}</div>
          <div style="font-size: 11px; color: ${textColor}; opacity: 0.5; margin-top: 4px; line-height: 1.4;">${s.note}</div>
        </div>
      `).join('')}
    </div>
  `;
}

export const LightMode = {
  name: 'Semantic — Light',
  render: () => `
    <div style="padding: 16px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 8px;">Semantic Colors — Light</h2>
      <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 16px;">Aliases that map intent → primitive token. Use these in components, not raw hex.</p>
      ${semanticGrid(semanticLight, '#F5F5F5', '#000')}
    </div>
  `,
};

export const DarkMode = {
  name: 'Semantic — Dark (Blackboard)',
  render: () => `
    <div style="padding: 16px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 8px;">Semantic Colors — Dark</h2>
      <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 16px;">Same intent, chalk palette.</p>
      ${semanticGrid(semanticDark, '#1A2519', '#F0EBD8')}
    </div>
  `,
};

export const SideBySide = {
  name: 'Semantic — Side by Side',
  render: () => `
    <div style="display: flex; gap: 32px; padding: 16px; flex-wrap: wrap;">
      <div style="flex:1; min-width: 300px;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size: 24px; margin-bottom: 12px;">☀️ Light</h3>
        ${semanticGrid(semanticLight, '#F5F5F5', '#000')}
      </div>
      <div style="flex:1; min-width: 300px;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size: 24px; margin-bottom: 12px;">🌙 Dark</h3>
        ${semanticGrid(semanticDark, '#1A2519', '#F0EBD8')}
      </div>
    </div>
  `,
};
