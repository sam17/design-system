import '../tokens/tokens.css';

// Load decided fonts
const fontLink = document.createElement('link');
fontLink.rel = 'stylesheet';
fontLink.href = 'https://fonts.googleapis.com/css2?family=Indie+Flower&family=Patrick+Hand&display=swap';
document.head.appendChild(fontLink);

export default {
  title: 'Tokens/Typography',
  tags: ['autodocs'],
};

const scale = [
  { token: '--text-2xl', size: '64px', label: 'text-2xl', use: 'Display / Hero' },
  { token: '--text-xl',  size: '60px', label: 'text-xl',  use: 'Large Heading' },
  { token: '--text-lg',  size: '40px', label: 'text-lg',  use: 'Section Heading' },
  { token: '--text-md',  size: '32px', label: 'text-md',  use: 'Sub-heading' },
  { token: '--text-base',size: '24px', label: 'text-base',use: 'Body Copy' },
  { token: '--text-sm',  size: '20px', label: 'text-sm',  use: 'Small Body' },
  { token: '--text-xs',  size: '14px', label: 'text-xs',  use: 'Labels / Fine Print' },
];

export const TypeScale = {
  render: () => `
    <div style="padding: 32px; max-width: 900px;">
      <p style="font-family: monospace; font-size: 12px; color: #888; margin-bottom: 32px;">
        Font: Indie Flower — Weight: 400 — Letter Spacing: 0 — Line Height: 100%
      </p>
      ${scale.map(s => `
        <div style="display: flex; align-items: baseline; gap: 24px; padding: 16px 0; border-bottom: 1px solid rgba(0,0,0,0.08);">
          <div style="width: 180px; flex-shrink: 0; font-family: monospace; font-size: 12px; color: #888; line-height: 1.4;">
            <div style="color: #000; font-weight: 600;">${s.label}</div>
            <div>${s.size}</div>
            <div style="color: #aaa;">${s.use}</div>
          </div>
          <div style="font-family: 'Indie Flower', cursive; font-size: ${s.size}; font-weight: 400; line-height: 1; color: #000;">
            The quick brown fox
          </div>
        </div>
      `).join('')}
    </div>
  `,
};

const sampleHeading = `Reducing the distance between idea and reality`;
const sampleBody = `I build things that matter. I write about what I think. I don't pretend to know what I don't. Currently working on making AI-generated micro-dramas actually good — which turns out to be much harder than it sounds.`;
const sampleSmall = `Last updated May 2026 · Bangalore · 5 min read`;

function pairingCard(label, note, headFont, bodyFont, bg = '#FFFFFF', textColor = '#000', mutedColor = 'rgba(0,0,0,0.45)') {
  return `
    <div style="
      background: ${bg};
      border: 1px solid ${textColor === '#000' ? '#000' : '#F0EBD8'};
      border-radius: 6px;
      padding: 32px;
      max-width: 560px;
      box-shadow: 3px 3px 0px rgba(0,0,0,0.15);
      margin-bottom: 40px;
    ">
      <div style="font-family: monospace; font-size: 11px; color: ${mutedColor}; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">${label}</div>
      <div style="font-family: monospace; font-size: 11px; color: ${mutedColor}; margin-bottom: 24px; opacity: 0.7;">${note}</div>
      <hr style="border: none; border-top: 1px solid ${mutedColor}; opacity: 0.3; margin-bottom: 24px;" />

      <div style="font-family: ${headFont}; font-size: 40px; color: ${textColor}; line-height: 1.1; margin-bottom: 16px;">${sampleHeading}</div>
      <div style="font-family: ${headFont}; font-size: 32px; color: ${textColor}; margin-bottom: 20px;">CTO · Builder · Writer</div>
      <div style="font-family: ${bodyFont}; font-size: 22px; color: ${textColor}; line-height: 1.55; margin-bottom: 20px;">${sampleBody}</div>
      <div style="font-family: ${bodyFont}; font-size: 16px; color: ${mutedColor};">${sampleSmall}</div>
    </div>
  `;
}

export const FinalSpec = {
  name: '✅ Final Spec',
  render: () => `
    <div style="padding: 40px; max-width: 720px; background: #FFFFFF;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; margin-bottom:8px; color:#000;">Typography — Final</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(0,0,0,0.5); margin-bottom:40px;">
        H1/H2/H3 → Indie Flower &nbsp;·&nbsp; H4 + body + labels + nav → Patrick Hand
      </p>

      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">H1 · Indie Flower · 64px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:64px; color:#000; line-height:1;">Soumyadeep Mukherjee</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">H2 · Indie Flower · 40px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; line-height:1.1;">Building Frameo at Dashverse</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">H3 · Indie Flower · 32px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:32px; color:#000;">CTO · Builder · Writer</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">H4 / Large body · Patrick Hand · 24px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:24px; color:#000; line-height:1.5;">I build things that matter. I write about what I think.</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">Body · Patrick Hand · 20px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:20px; color:#000; line-height:1.6;">Currently working on making AI-generated micro-dramas actually good — which turns out to be a much harder problem than it sounds. Also thinking about what Indian storytelling looks like at scale.</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(0,0,0,0.08); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">Small / Nav · Patrick Hand · 16px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:16px; color:rgba(0,0,0,0.5);">Last updated May 2026 · Bangalore · 5 min read</div>
      </div>
      <div style="padding:16px 0;">
        <div style="font-family:monospace; font-size:10px; color:#aaa; margin-bottom:8px;">Label / Tag · Patrick Hand · 14px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:14px; color:rgba(0,0,0,0.4);">Engineering · Rant · AI · India</div>
      </div>
    </div>
  `,
};

export const FinalSpecDark = {
  name: '✅ Final Spec — Dark',
  render: () => `
    <div style="padding: 40px; max-width: 720px; background: #1A2519;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:40px; margin-bottom:8px; color:#F0EBD8;">Typography — Final (Dark)</h2>
      <p style="font-family:'Patrick Hand',cursive; font-size:18px; color:rgba(240,235,216,0.45); margin-bottom:40px;">
        H1/H2/H3 → Indie Flower &nbsp;·&nbsp; Body → Patrick Hand
      </p>

      <div style="padding:16px 0; border-bottom:1px solid rgba(240,235,216,0.1); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:rgba(240,235,216,0.3); margin-bottom:8px;">H1 · Indie Flower · 64px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:64px; color:#F0EBD8; line-height:1;">Soumyadeep Mukherjee</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(240,235,216,0.1); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:rgba(240,235,216,0.3); margin-bottom:8px;">H2 · Indie Flower · 40px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#F0EBD8; line-height:1.1;">Building Frameo at Dashverse</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(240,235,216,0.1); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:rgba(240,235,216,0.3); margin-bottom:8px;">H3 · Indie Flower · 32px</div>
        <div style="font-family:'Indie Flower',cursive; font-size:32px; color:#F0EBD8;">CTO · Builder · Writer</div>
      </div>
      <div style="padding:16px 0; border-bottom:1px solid rgba(240,235,216,0.1); margin-bottom:8px;">
        <div style="font-family:monospace; font-size:10px; color:rgba(240,235,216,0.3); margin-bottom:8px;">Body · Patrick Hand · 20px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:20px; color:#F0EBD8; line-height:1.6;">Currently working on making AI-generated micro-dramas actually good — which turns out to be a much harder problem than it sounds.</div>
      </div>
      <div style="padding:16px 0;">
        <div style="font-family:monospace; font-size:10px; color:rgba(240,235,216,0.3); margin-bottom:8px;">Label · Patrick Hand · 14px</div>
        <div style="font-family:'Patrick Hand',cursive; font-size:14px; color:rgba(240,235,216,0.4);">Last updated May 2026 · Bangalore</div>
      </div>
    </div>
  `,
};

export const PairingOptions = {
  name: 'Pairing Options — Pick One',
  render: () => `
    <div style="padding: 40px; background: #F8F8F8; max-width: 680px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 40px; margin-bottom: 8px; color: #000;">Typography Pairings</h2>
      <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 40px;">
        Same content, 4 approaches. Headings stay Indie Flower in all options except Option D.
      </p>

      ${pairingCard(
        'Option A — Current (Indie Flower everywhere)',
        'Heading: Indie Flower · Body: Indie Flower 24px — the readability problem',
        "'Indie Flower', cursive",
        "'Indie Flower', cursive",
      )}

      ${pairingCard(
        'Option B — Indie Flower + Caveat',
        'Heading: Indie Flower · Body: Caveat — handwritten but much more legible',
        "'Indie Flower', cursive",
        "'Caveat', cursive",
      )}

      ${pairingCard(
        'Option C — Indie Flower + Patrick Hand',
        'Heading: Indie Flower · Body: Patrick Hand — clean handwritten, very readable',
        "'Indie Flower', cursive",
        "'Patrick Hand', cursive",
      )}

      ${pairingCard(
        'Option D — Indie Flower + DM Sans',
        'Heading: Indie Flower · Body: DM Sans — strongest contrast, most readable, loses handmade body feel',
        "'Indie Flower', cursive",
        "'DM Sans', sans-serif",
      )}
    </div>
  `,
};

export const OptionD = {
  name: 'Option D — 3 Variants',
  render: () => `
    <div style="padding: 40px; background: #F8F8F8; max-width: 680px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 40px; margin-bottom: 8px; color: #000;">Option D — How much Indie Flower?</h2>
      <p style="font-family: monospace; font-size: 12px; color: #666; margin-bottom: 40px;">
        All use DM Sans for body. The question is how far Indie Flower goes into the heading hierarchy.
      </p>

      <div style="
        background: #FFFFFF; border: 1px solid #000; border-radius: 6px;
        padding: 32px; max-width: 560px; box-shadow: 3px 3px 0px rgba(0,0,0,0.15); margin-bottom: 40px;
      ">
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.4); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">D1 — Indie Flower: H1 + H2 + H3 &nbsp;|&nbsp; DM Sans: body</div>
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.35); margin-bottom: 24px;">Most personality. All section titles hand-drawn.</div>
        <hr style="border:none; border-top:1px solid rgba(0,0,0,0.1); margin-bottom:24px;" />
        <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; line-height:1.1; margin-bottom:12px;">${sampleHeading}</div>
        <div style="font-family:'Indie Flower',cursive; font-size:28px; color:#000; margin-bottom:8px;">CTO · Builder · Writer</div>
        <div style="font-family:'Indie Flower',cursive; font-size:22px; color:rgba(0,0,0,0.6); margin-bottom:16px;">Writing about things that matter</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:18px; color:#000; line-height:1.6; margin-bottom:12px;">${sampleBody}</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(0,0,0,0.45);">${sampleSmall}</div>
      </div>

      <div style="
        background: #FFFFFF; border: 1px solid #000; border-radius: 6px;
        padding: 32px; max-width: 560px; box-shadow: 3px 3px 0px rgba(0,0,0,0.15); margin-bottom: 40px;
      ">
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.4); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">D2 — Indie Flower: H1 + H2 &nbsp;|&nbsp; DM Sans: H3 + body</div>
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.35); margin-bottom: 24px;">Balanced. Big moments stay handwritten, section labels go clean.</div>
        <hr style="border:none; border-top:1px solid rgba(0,0,0,0.1); margin-bottom:24px;" />
        <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; line-height:1.1; margin-bottom:12px;">${sampleHeading}</div>
        <div style="font-family:'Indie Flower',cursive; font-size:28px; color:#000; margin-bottom:8px;">CTO · Builder · Writer</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:20px; color:rgba(0,0,0,0.6); font-weight:500; margin-bottom:16px;">Writing about things that matter</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:18px; color:#000; line-height:1.6; margin-bottom:12px;">${sampleBody}</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(0,0,0,0.45);">${sampleSmall}</div>
      </div>

      <div style="
        background: #FFFFFF; border: 1px solid #000; border-radius: 6px;
        padding: 32px; max-width: 560px; box-shadow: 3px 3px 0px rgba(0,0,0,0.15); margin-bottom: 40px;
      ">
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.4); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 6px;">D3 — Indie Flower: H1 only &nbsp;|&nbsp; DM Sans: H2 + H3 + body</div>
        <div style="font-family: monospace; font-size: 11px; color: rgba(0,0,0,0.35); margin-bottom: 24px;">Most readable. Indie Flower is the signature, DM Sans carries the rest.</div>
        <hr style="border:none; border-top:1px solid rgba(0,0,0,0.1); margin-bottom:24px;" />
        <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#000; line-height:1.1; margin-bottom:12px;">${sampleHeading}</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:28px; color:#000; font-weight:500; margin-bottom:8px;">CTO · Builder · Writer</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:20px; color:rgba(0,0,0,0.6); font-weight:500; margin-bottom:16px;">Writing about things that matter</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:18px; color:#000; line-height:1.6; margin-bottom:12px;">${sampleBody}</div>
        <div style="font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(0,0,0,0.45);">${sampleSmall}</div>
      </div>
    </div>
  `,
};

export const OptionDDark = {
  name: 'Option D — 3 Variants (Dark)',
  render: () => `
    <div style="padding: 40px; background: #1A2519; max-width: 680px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 40px; margin-bottom: 8px; color: #F0EBD8;">Option D — Dark Mode</h2>
      <p style="font-family: monospace; font-size: 12px; color: rgba(240,235,216,0.5); margin-bottom: 40px;">Same 3 variants on the blackboard.</p>

      ${['D1 — Indie Flower H1+H2+H3 / DM Sans body', 'D2 — Indie Flower H1+H2 / DM Sans H3+body', 'D3 — Indie Flower H1 only / DM Sans everything'].map((label, i) => `
        <div style="
          background: #1A2519; border: 1px solid #F0EBD8; border-radius: 6px;
          padding: 32px; max-width: 560px; box-shadow: 3px 3px 0px rgba(0,0,0,0.40); margin-bottom: 40px;
        ">
          <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.45); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px;">${label}</div>
          <hr style="border:none; border-top:1px solid rgba(240,235,216,0.15); margin-bottom:24px;" />
          <div style="font-family:'Indie Flower',cursive; font-size:40px; color:#F0EBD8; line-height:1.1; margin-bottom:12px;">${sampleHeading}</div>
          <div style="font-family:${i < 2 ? "'Indie Flower',cursive" : "'DM Sans',sans-serif"}; font-size:28px; color:#F0EBD8; ${i >= 2 ? 'font-weight:500;' : ''} margin-bottom:8px;">CTO · Builder · Writer</div>
          <div style="font-family:${i < 1 ? "'Indie Flower',cursive" : "'DM Sans',sans-serif"}; font-size:20px; color:rgba(240,235,216,0.6); ${i >= 1 ? 'font-weight:500;' : ''} margin-bottom:16px;">Writing about things that matter</div>
          <div style="font-family:'DM Sans',sans-serif; font-size:18px; color:#F0EBD8; line-height:1.6; margin-bottom:12px;">${sampleBody}</div>
          <div style="font-family:'DM Sans',sans-serif; font-size:14px; color:rgba(240,235,216,0.4);">${sampleSmall}</div>
        </div>
      `).join('')}
    </div>
  `,
};

export const PairingDark = {
  name: 'Pairing Options — Dark Mode',
  render: () => `
    <div style="padding: 40px; background: #1A2519; max-width: 680px;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 40px; margin-bottom: 8px; color: #F0EBD8;">Typography Pairings — Dark</h2>
      <p style="font-family: monospace; font-size: 12px; color: rgba(240,235,216,0.5); margin-bottom: 40px;">Same options on the blackboard.</p>

      ${pairingCard(
        'Option B — Indie Flower + Caveat',
        'Heading: Indie Flower · Body: Caveat',
        "'Indie Flower', cursive",
        "'Caveat', cursive",
        '#1A2519', '#F0EBD8', 'rgba(240,235,216,0.45)',
      )}

      ${pairingCard(
        'Option C — Indie Flower + Patrick Hand',
        'Heading: Indie Flower · Body: Patrick Hand',
        "'Indie Flower', cursive",
        "'Patrick Hand', cursive",
        '#1A2519', '#F0EBD8', 'rgba(240,235,216,0.45)',
      )}

      ${pairingCard(
        'Option D — Indie Flower + DM Sans',
        'Heading: Indie Flower · Body: DM Sans',
        "'Indie Flower', cursive",
        "'DM Sans', sans-serif",
        '#1A2519', '#F0EBD8', 'rgba(240,235,216,0.45)',
      )}
    </div>
  `,
};

export const InContext = {
  render: () => `
    <div style="padding: 32px; max-width: 700px; font-family: 'Indie Flower', cursive; color: #000;">
      <div style="font-size: 64px; line-height: 1; margin-bottom: 16px;">Soumyadeep Mukherjee</div>
      <div style="font-size: 40px; margin-bottom: 12px;">Building Frameo at Dashverse</div>
      <div style="font-size: 32px; margin-bottom: 12px;">CTO · Builder · Writer</div>
      <div style="font-size: 24px; margin-bottom: 24px; color: rgba(0,0,0,0.6);">
        I build things that matter. I write about what I think. I don't pretend to know what I don't.
      </div>
      <div style="font-size: 20px; margin-bottom: 16px;">
        Currently working on making AI-generated micro-dramas actually good — which turns out to be a much harder problem than it sounds. Also thinking about what Indian storytelling looks like at scale.
      </div>
      <div style="font-size: 14px; color: rgba(0,0,0,0.4);">Last updated May 2026 · Bangalore</div>
    </div>
  `,
};
