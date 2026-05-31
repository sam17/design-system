import '../tokens/tokens.css';

export default {
  title: 'Components/Card',
  tags: ['autodocs'],
};

function blogCard(bg, border, text, textMuted, tagBorder, tagColor, shadow) {
  return `
    <div style="
      background: ${bg};
      border: 1px solid ${border};
      border-radius: 6px;
      padding: 24px;
      max-width: 420px;
      box-shadow: ${shadow};
      cursor: pointer;
    ">
      <div style="display: flex; gap: 8px; margin-bottom: 14px; flex-wrap: wrap;">
        <span style="font-family:'Patrick Hand',cursive; font-size:14px; padding: 3px 12px; border-radius: 9999px; border: 1px solid ${tagBorder}; color: ${tagColor};">Engineering</span>
        <span style="font-family:'Patrick Hand',cursive; font-size:14px; padding: 3px 12px; border-radius: 9999px; border: 1px solid ${tagBorder}; color: ${tagColor};">Rant</span>
      </div>
      <div style="font-family:'Indie Flower',cursive; font-size: 32px; color: ${text}; margin-bottom: 10px; line-height: 1.1;">
        People Managers are Only to Lick Asses
      </div>
      <div style="font-family:'Patrick Hand',cursive; font-size: 20px; color: ${textMuted}; margin-bottom: 16px;">
        The role, as commonly practiced, is not a leadership role. It is a translation layer.
      </div>
      <div style="font-family:'Patrick Hand',cursive; font-size: 14px; color: ${textMuted};">May 2026 · 5 min read</div>
    </div>
  `;
}

function rantCard(bg, border, text, textMuted, accentColor, shadow) {
  return `
    <div style="
      background: ${bg};
      border: 1px solid ${border};
      border-left: 3px solid ${accentColor};
      border-radius: 6px;
      padding: 24px;
      max-width: 420px;
      box-shadow: ${shadow};
      cursor: pointer;
    ">
      <div style="font-family:'Patrick Hand',cursive; font-size: 14px; color: ${accentColor}; margin-bottom: 10px; text-transform: uppercase; letter-spacing: 0.05em;">Rant #13</div>
      <div style="font-family:'Indie Flower',cursive; font-size: 32px; color: ${text}; margin-bottom: 10px; line-height: 1.1;">
        People Managers are Only to Lick Asses
      </div>
      <div style="font-family:'Patrick Hand',cursive; font-size: 20px; color: ${textMuted};">May 2026</div>
    </div>
  `;
}

function projectCard(bg, border, text, textMuted, accentColor, shadow) {
  return `
    <div style="
      background: ${bg};
      border: 1px solid ${border};
      border-radius: 6px;
      padding: 24px;
      max-width: 420px;
      box-shadow: ${shadow};
      cursor: pointer;
    ">
      <div style="font-size: 40px; margin-bottom: 12px;">🎬</div>
      <div style="font-family:'Indie Flower',cursive; font-size: 32px; color: ${text}; margin-bottom: 8px;">Frameo</div>
      <div style="font-family:'Patrick Hand',cursive; font-size: 20px; color: ${textMuted}; margin-bottom: 16px; line-height: 1.4;">
        AI-native video creation for micro-dramas. Remix, originals, canvas.
      </div>
      <a href="#" style="font-family:'Patrick Hand',cursive; font-size: 20px; color: ${accentColor}; text-decoration: underline; text-underline-offset: 3px;">View project →</a>
    </div>
  `;
}

export const BlogCard = {
  render: () => `
    <div style="display:flex; gap:0; flex-wrap:wrap;">
      <div style="flex:1; min-width:300px; padding: 40px; background: #FFFFFF;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#000;">☀️ Light</h3>
        ${blogCard('#FFFFFF','#000','#000','rgba(0,0,0,0.4)','#000','#000','3px 3px 0px rgba(0,0,0,0.20)')}
      </div>
      <div style="flex:1; min-width:300px; padding: 40px; background: #1A2519;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#F0EBD8;">🌙 Dark</h3>
        ${blogCard('#1A2519','#F0EBD8','#F0EBD8','rgba(240,235,216,0.4)','#F0EBD8','#F0EBD8','3px 3px 0px rgba(0,0,0,0.40)')}
      </div>
    </div>
  `,
};

export const RantCard = {
  render: () => `
    <div style="display:flex; gap:0; flex-wrap:wrap;">
      <div style="flex:1; min-width:300px; padding: 40px; background: #FFFFFF;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#000;">☀️ Light</h3>
        ${rantCard('#FFFFFF','#000','#000','rgba(0,0,0,0.4)','#B70F0F','3px 3px 0px rgba(0,0,0,0.20)')}
      </div>
      <div style="flex:1; min-width:300px; padding: 40px; background: #1A2519;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#F0EBD8;">🌙 Dark</h3>
        ${rantCard('#1A2519','#F0EBD8','#F0EBD8','rgba(240,235,216,0.4)','#F4A0A0','3px 3px 0px rgba(0,0,0,0.40)')}
      </div>
    </div>
  `,
};

export const ProjectCard = {
  render: () => `
    <div style="display:flex; gap:0; flex-wrap:wrap;">
      <div style="flex:1; min-width:300px; padding: 40px; background: #FFFFFF;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#000;">☀️ Light</h3>
        ${projectCard('#FFFFFF','#000','#000','rgba(0,0,0,0.4)','#8300E8','3px 3px 0px rgba(0,0,0,0.20)')}
      </div>
      <div style="flex:1; min-width:300px; padding: 40px; background: #1A2519;">
        <h3 style="font-family:'Indie Flower',cursive; font-size:24px; margin-bottom:24px; color:#F0EBD8;">🌙 Dark</h3>
        ${projectCard('#1A2519','#F0EBD8','#F0EBD8','rgba(240,235,216,0.4)','#D4A0FF','3px 3px 0px rgba(0,0,0,0.40)')}
      </div>
    </div>
  `,
};
