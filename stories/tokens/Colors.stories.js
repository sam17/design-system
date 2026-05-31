import '../tokens/tokens.css';

export default {
  title: 'Tokens/Colors',
  tags: ['autodocs'],
};

const swatches = [
  { token: '--color-bg',            hex: '#FFFFFF',              label: 'Background',     status: '✅' },
  { token: '--color-canvas',        hex: '#1E1E1E',              label: 'Canvas',         status: '✅' },
  { token: '--color-text',          hex: '#000000',              label: 'Text',           status: '✅' },
  { token: '--color-text-muted',    hex: 'rgba(0,0,0,0.25)',     label: 'Text Muted',     status: '✅' },
  { token: '--color-text-dim',      hex: 'rgba(0,0,0,0.20)',     label: 'Text Dim',       status: '✅' },
  { token: '--color-accent-purple', hex: '#8300E8',              label: 'Accent Purple',  status: '✅' },
  { token: '--color-accent-green',  hex: '#00C17D',              label: 'Accent Green',   status: '✅' },
  { token: '--color-accent-red',    hex: '#B70F0F',              label: 'Accent Red',     status: '✅' },
  { token: '--color-placeholder',   hex: '#D9D9D9',              label: 'Placeholder',    status: '✅' },
];

const darkSwatches = [
  { token: '--color-bg',            hex: '#1A2519',                    label: 'Background',    status: '🟡 Blackboard' },
  { token: '--color-canvas',        hex: '#0F1A0E',                    label: 'Canvas',        status: '🟡 Blackboard' },
  { token: '--color-text',          hex: '#F0EBD8',                    label: 'Text',          status: '🟡 Chalk White' },
  { token: '--color-text-muted',    hex: 'rgba(240,235,216,0.35)',     label: 'Text Muted',    status: '🟡 Blackboard' },
  { token: '--color-text-dim',      hex: 'rgba(240,235,216,0.25)',     label: 'Text Dim',      status: '🟡 Blackboard' },
  { token: '--color-accent-purple', hex: '#D4A0FF',                    label: 'Accent Purple', status: '🟡 Lavender Chalk' },
  { token: '--color-accent-green',  hex: '#7FEBA1',                    label: 'Accent Green',  status: '🟡 Mint Chalk' },
  { token: '--color-accent-red',    hex: '#F4A0A0',                    label: 'Accent Red',    status: '🟡 Pink Chalk' },
  { token: '--color-placeholder',   hex: 'rgba(240,235,216,0.15)',     label: 'Placeholder',   status: '🟡 Blackboard' },
];

function swatchGrid(list, bgColor = '#F5F5F5') {
  return `
    <div style="background:${bgColor}; padding: 32px; border-radius: 8px; display: flex; flex-wrap: wrap; gap: 16px;">
      ${list.map(s => `
        <div style="width: 160px; font-family: monospace;">
          <div style="
            width: 160px; height: 80px;
            background: ${s.hex};
            border-radius: 6px;
            border: 1px solid rgba(0,0,0,0.1);
            margin-bottom: 8px;
          "></div>
          <div style="font-size:12px; font-weight:600; color: ${bgColor === '#1A1A1A' ? '#fff' : '#000'}">${s.label} ${s.status}</div>
          <div style="font-size:11px; color: ${bgColor === '#1A1A1A' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)'}; margin-top:2px;">${s.token}</div>
          <div style="font-size:11px; color: ${bgColor === '#1A1A1A' ? 'rgba(255,255,255,0.5)' : 'rgba(0,0,0,0.4)'};">${s.hex}</div>
        </div>
      `).join('')}
    </div>
  `;
}

export const LightMode = {
  render: () => `
    <div style="padding: 16px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 16px;">Light Mode Colors</h2>
      ${swatchGrid(swatches)}
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding: 16px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 4px;">🟢 Dark Mode — Blackboard</h2>
      <p style="font-family: monospace; font-size: 13px; color: #888; margin-bottom: 16px;">Blackboard green bg · chalk-white text · colored chalk accents</p>
      ${swatchGrid(darkSwatches, '#1A2519')}
    </div>
  `,
};

export const SideBySide = {
  render: () => `
    <div style="display: flex; gap: 32px; padding: 16px; flex-wrap: wrap;">
      <div style="flex:1; min-width:300px;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size:24px; margin-bottom:12px;">☀️ Light — Whiteboard</h3>
        ${swatchGrid(swatches)}
      </div>
      <div style="flex:1; min-width:300px;">
        <h3 style="font-family: 'Indie Flower', cursive; font-size:24px; margin-bottom:12px;">🌙 Dark — Blackboard</h3>
        ${swatchGrid(darkSwatches, '#1A2519')}
      </div>
    </div>
  `,
};
