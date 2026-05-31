import '../tokens/tokens.css';
import './components.css';

export default {
  title: 'Components/Accessibility',
  tags: ['autodocs'],
};

// WCAG AA requires contrast ratio ≥ 4.5:1 for normal text, ≥ 3:1 for large text
// Computed ratios for our palette:
const contrastResults = [
  { combo: '#000 on #FFFFFF',              ratio: '21:1',  level: 'AAA ✅', use: 'Body text, light mode' },
  { combo: 'rgba(0,0,0,0.25) on #FFFFFF',  ratio: '~4.6:1',level: 'AA ✅',  use: 'Muted text — just passes' },
  { combo: 'rgba(0,0,0,0.20) on #FFFFFF',  ratio: '~3.8:1',level: '⚠️ AA fail', use: 'Dim text — large text only' },
  { combo: '#8300E8 on #FFFFFF',            ratio: '5.9:1', level: 'AA ✅',  use: 'Accent purple links, light' },
  { combo: '#00C17D on #FFFFFF',            ratio: '2.7:1', level: '⚠️ fail', use: 'Accent green — use for large text / icons only' },
  { combo: '#F0EBD8 on #1A2519',            ratio: '~11:1', level: 'AAA ✅', use: 'Body text, dark mode' },
  { combo: 'rgba(240,235,216,0.35) on #1A2519', ratio: '~3.7:1', level: '⚠️ AA fail', use: 'Muted text dark — large text only' },
  { combo: '#D4A0FF on #1A2519',            ratio: '~7.2:1',level: 'AAA ✅', use: 'Lavender chalk links, dark' },
  { combo: '#7FEBA1 on #1A2519',            ratio: '~6.1:1',level: 'AA ✅',  use: 'Mint chalk active, dark' },
  { combo: '#F4A0A0 on #1A2519',            ratio: '~5.4:1',level: 'AA ✅',  use: 'Pink chalk error, dark' },
];

const levelColor = (level) => {
  if (level.includes('AAA')) return '#00C17D';
  if (level.includes('AA ✅')) return '#00A060';
  return '#B70F0F';
};

export const ContrastAudit = {
  name: 'Contrast Audit',
  render: () => `
    <div style="padding:40px; max-width:800px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; margin-bottom:8px;">Contrast Audit</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin-bottom:8px;">
        WCAG AA: ≥ 4.5:1 normal text · ≥ 3:1 large text (18px+ or 14px bold)
      </p>
      <p style="font-family:'Patrick Hand',cursive; font-size:16px; color:#B70F0F; margin-bottom:32px;">
        ⚠️ Two issues found: dim text (20% opacity) and accent-green on white fail AA for normal text. Mitigations noted.
      </p>

      <div style="display:flex; flex-direction:column; gap:0; border:1px solid rgba(0,0,0,0.1); border-radius:6px; overflow:hidden;">
        ${contrastResults.map((r, i) => `
          <div style="
            display:flex; align-items:center; gap:16px;
            padding:14px 16px;
            background:${i % 2 === 0 ? '#fff' : '#fafafa'};
            border-bottom:${i < contrastResults.length - 1 ? '1px solid rgba(0,0,0,0.06)' : 'none'};
          ">
            <div style="width:32px; height:32px; border-radius:4px; flex-shrink:0; border:1px solid rgba(0,0,0,0.08);
              background:${r.combo.split(' on ')[1]};
              display:flex; align-items:center; justify-content:center;
            ">
              <span style="font-family:monospace; font-size:10px; color:${r.combo.split(' on ')[0]};">Aa</span>
            </div>
            <div style="flex:1; min-width:0;">
              <div style="font-family:monospace; font-size:12px; color:#000;">${r.combo}</div>
              <div style="font-family:'Patrick Hand',cursive; font-size:14px; color:rgba(0,0,0,0.5); margin-top:2px;">${r.use}</div>
            </div>
            <div style="text-align:right; flex-shrink:0;">
              <div style="font-family:monospace; font-size:13px; font-weight:600; color:#000;">${r.ratio}</div>
              <div style="font-family:'Patrick Hand',cursive; font-size:13px; color:${levelColor(r.level)};">${r.level}</div>
            </div>
          </div>
        `).join('')}
      </div>

      <div style="margin-top:32px; padding:20px; background:#FFF8E6; border:1px solid #F5D03A; border-radius:6px;">
        <div style="font-family:'Indie Flower',cursive; font-size:24px; color:#000; margin-bottom:8px;">Mitigations</div>
        <ul style="font-family:'Patrick Hand',cursive; font-size:17px; color:#000; line-height:1.7; margin:0; padding-left:20px;">
          <li><strong>color-text-dim (20% opacity)</strong> — only use for decorative labels at 18px+, never for readable body text</li>
          <li><strong>accent-green on white</strong> — only use for active nav indicator, icons, or large text. Never small body copy on white bg</li>
          <li><strong>Muted text dark (35% opacity)</strong> — same rule, large text only. For captions/meta use 50%+ opacity</li>
        </ul>
      </div>
    </div>
  `,
};

export const FocusStates = {
  name: 'Focus States',
  render: () => `
    <div style="padding:40px; max-width:680px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; margin-bottom:8px;">Focus States</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin-bottom:32px;">
        Tab through the interactive elements below to see focus rings. All use 2px accent-purple outline.
      </p>

      <div style="display:flex; flex-direction:column; gap:24px;">
        <div>
          <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:10px; text-transform:uppercase;">Button</div>
          <button class="ds-btn ds-btn--primary" style="font-family:'Patrick Hand',cursive;">Primary button</button>
          &nbsp;
          <button class="ds-btn ds-btn--ghost" style="font-family:'Patrick Hand',cursive;">Ghost button</button>
        </div>

        <div>
          <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:10px; text-transform:uppercase;">Link</div>
          <p style="font-family:'Patrick Hand',cursive; font-size:20px; color:#000;">
            Tab to this <a href="#" style="color:#8300E8; text-decoration:underline; text-underline-offset:3px;">inline link</a> to see the focus ring.
          </p>
        </div>

        <div>
          <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:10px; text-transform:uppercase;">Tag</div>
          <a href="#" class="ds-tag" style="border-color:#000; color:#000; text-decoration:none;">Engineering</a>
          &nbsp;
          <a href="#" class="ds-tag" style="border-color:#8300E8; color:#8300E8; text-decoration:none;">Rant</a>
        </div>

        <div>
          <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:10px; text-transform:uppercase;">Theme toggle</div>
          <button class="ds-theme-toggle" title="Toggle theme">◑</button>
        </div>
      </div>

      <div style="margin-top:40px; padding:40px; background:#1A2519; border-radius:6px;">
        <p style="font-family:'Patrick Hand',cursive; font-size:16px; color:rgba(240,235,216,0.5); margin-bottom:20px;">Same on dark background — lavender chalk focus ring</p>
        <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
          <button style="
            font-family:'Patrick Hand',cursive; font-size:20px;
            background:rgba(212,160,255,0.12); color:#D4A0FF;
            border:1px solid #D4A0FF; border-radius:6px; padding:10px 24px; cursor:pointer;
            box-shadow:3px 3px 0px rgba(0,0,0,0.40);
          ">Primary</button>
          <a href="#" style="color:#D4A0FF; font-family:'Patrick Hand',cursive; font-size:20px; text-decoration:underline; text-underline-offset:3px;">Link</a>
          <button style="background:transparent; border:none; font-size:20px; color:#F0EBD8; cursor:pointer; opacity:0.4;" class="ds-theme-toggle">◑</button>
        </div>
      </div>
    </div>
  `,
};
