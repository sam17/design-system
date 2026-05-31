import '../tokens/tokens.css';

export default {
  title: 'Tokens/Breakpoints',
  tags: ['autodocs'],
};

const breakpoints = [
  { token: '--bp-sm',  value: '480px',  label: 'sm',  note: 'Mobile landscape / small phones' },
  { token: '--bp-md',  value: '768px',  label: 'md',  note: 'Tablet / mobile nav breakpoint' },
  { token: '--bp-lg',  value: '1024px', label: 'lg',  note: 'Desktop — main layout breakpoint' },
  { token: '--bp-xl',  value: '1280px', label: 'xl',  note: 'Wide desktop' },
];

const fluidScale = [
  { label: 'text-2xl', mobile: '32px', desktop: '64px', css: 'clamp(2rem, 4.5vw + 1rem, 4rem)',     use: 'H1 — Display' },
  { label: 'text-xl',  mobile: '32px', desktop: '60px', css: 'clamp(2rem, 4vw + 0.75rem, 3.75rem)', use: 'H2 — Large heading' },
  { label: 'text-lg',  mobile: '28px', desktop: '40px', css: 'clamp(1.75rem, 3vw + 0.5rem, 2.5rem)',use: 'H3 — Section heading' },
  { label: 'text-md',  mobile: '24px', desktop: '32px', css: 'clamp(1.5rem, 2.5vw + 0.5rem, 2rem)', use: 'H4 — Sub-heading' },
  { label: 'text-base',mobile: '18px', desktop: '24px', css: 'clamp(1.125rem, 1.5vw + 0.5rem, 1.5rem)', use: 'Body' },
  { label: 'text-sm',  mobile: '16px', desktop: '20px', css: 'clamp(1rem, 1.2vw + 0.3rem, 1.25rem)',use: 'Small body / nav' },
  { label: 'text-xs',  mobile: '14px', desktop: '14px', css: '14px — fixed floor',                  use: 'Labels / tags' },
];

export const BreakpointScale = {
  render: () => `
    <div style="padding:40px; max-width:800px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; margin-bottom:8px; color:#000;">Breakpoints</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin-bottom:32px;">Used in media queries. Not CSS variables (can't use vars in @media) — use the values directly.</p>
      <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:flex-end;">
        ${breakpoints.map(bp => `
          <div style="text-align:center;">
            <div style="
              width: ${parseInt(bp.value) / 8}px;
              max-width: 140px;
              min-width: 40px;
              height: 80px;
              background: #8300E8;
              opacity: ${0.4 + breakpoints.indexOf(bp) * 0.15};
              border-radius: 4px;
              margin: 0 auto 12px;
            "></div>
            <div style="font-family:'Indie Flower',cursive; font-size:20px; color:#000;">${bp.label}</div>
            <div style="font-family:monospace; font-size:11px; color:#888;">${bp.value}</div>
            <div style="font-family:'Patrick Hand',cursive; font-size:13px; color:#555; margin-top:4px; line-height:1.3; max-width:120px;">${bp.note}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};

export const FluidTypeScale = {
  name: 'Fluid Type Scale',
  render: () => `
    <div style="padding:40px; max-width:900px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; margin-bottom:8px; color:#000;">Fluid Type Scale</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin-bottom:32px;">
        All sizes use <code style="font-size:14px; background:#f0f0f0; padding:2px 6px; border-radius:3px;">clamp(mobile, fluid, desktop)</code> — they scale smoothly between breakpoints.
      </p>
      <div style="overflow-x:auto;">
        <table style="width:100%; border-collapse:collapse; font-family:'Patrick Hand',cursive;">
          <thead>
            <tr style="border-bottom:2px solid #000;">
              <th style="text-align:left; padding:10px 12px; font-size:14px; color:#888; font-weight:400;">Token</th>
              <th style="text-align:left; padding:10px 12px; font-size:14px; color:#888; font-weight:400;">Mobile</th>
              <th style="text-align:left; padding:10px 12px; font-size:14px; color:#888; font-weight:400;">Desktop</th>
              <th style="text-align:left; padding:10px 12px; font-size:14px; color:#888; font-weight:400;">Use</th>
            </tr>
          </thead>
          <tbody>
            ${fluidScale.map((s, i) => `
              <tr style="border-bottom:1px solid rgba(0,0,0,0.08); background:${i % 2 === 0 ? '#fff' : '#fafafa'};">
                <td style="padding:12px; font-family:monospace; font-size:13px; color:#8300E8;">${s.label}</td>
                <td style="padding:12px; font-size:16px;">${s.mobile}</td>
                <td style="padding:12px; font-size:16px;">${s.desktop}</td>
                <td style="padding:12px; font-size:16px; color:rgba(0,0,0,0.5);">${s.use}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      </div>

      <div style="margin-top:48px;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:32px; margin-bottom:24px;">Live preview — resize your browser</h3>
        ${fluidScale.map(s => `
          <div style="padding:12px 0; border-bottom:1px solid rgba(0,0,0,0.06);">
            <span style="font-family:${s.label.includes('2xl') || s.label.includes('xl') || s.label === 'text-lg' ? "'Indie Flower'" : "'Patrick Hand'"},cursive; font-size:${s.css.includes('clamp') ? s.css.split("'")[0].trim() : s.css}; color:#000;">${s.use} — The quick brown fox</span>
          </div>
        `).join('')}
      </div>
    </div>
  `,
};
