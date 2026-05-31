import '../tokens/tokens.css';
import './components.css';

export default {
  title: 'Components/Figure',
  tags: ['autodocs'],
};

function figure(src, caption, bg, text, mutedText, border) {
  const isPlaceholder = !src;
  return `
    <figure style="margin:0; max-width:560px;">
      <div style="
        width:100%;
        aspect-ratio: 16/9;
        background: ${isPlaceholder ? (bg === '#FFFFFF' ? '#D9D9D9' : 'rgba(240,235,216,0.1)') : 'transparent'};
        border: 1px solid ${border};
        border-radius: 6px;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 10px;
      ">
        ${src
          ? `<img src="${src}" alt="${caption || ''}" style="width:100%; height:100%; object-fit:cover; display:block;" />`
          : `<span style="font-family:'Patrick Hand',cursive; font-size:16px; color:${mutedText};">Image placeholder</span>`
        }
      </div>
      ${caption ? `
        <figcaption style="
          font-family:'Patrick Hand',cursive;
          font-size:16px;
          color:${mutedText};
          text-align:left;
          padding:0 2px;
          line-height:1.4;
        ">${caption}</figcaption>
      ` : ''}
    </figure>
  `;
}

export const LightMode = {
  render: () => `
    <div style="padding:40px; background:#FFFFFF; display:flex; flex-direction:column; gap:40px; max-width:620px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:32px; color:#000; margin:0;">Figure — Light</h2>

      <div>
        <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:12px; text-transform:uppercase;">With image + caption</div>
        ${figure('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=60', 'The mountains don\'t care about your opinions. They just are.', '#FFFFFF', '#000', 'rgba(0,0,0,0.45)', '#000')}
      </div>

      <div>
        <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:12px; text-transform:uppercase;">Placeholder state (no image yet)</div>
        ${figure(null, 'Caption goes here when image is added', '#FFFFFF', '#000', 'rgba(0,0,0,0.45)', 'rgba(0,0,0,0.2)')}
      </div>

      <div>
        <div style="font-family:monospace; font-size:11px; color:#888; margin-bottom:12px; text-transform:uppercase;">No caption</div>
        ${figure('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=60', null, '#FFFFFF', '#000', 'rgba(0,0,0,0.45)', '#000')}
      </div>
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding:40px; background:#1A2519; display:flex; flex-direction:column; gap:40px; max-width:620px;">
      <h2 style="font-family:'Indie Flower',cursive; font-size:32px; color:#F0EBD8; margin:0;">Figure — Dark</h2>

      <div>
        <div style="font-family:monospace; font-size:11px; color:rgba(240,235,216,0.4); margin-bottom:12px; text-transform:uppercase;">With image + caption</div>
        ${figure('https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=60', 'The mountains don\'t care about your opinions. They just are.', '#1A2519', '#F0EBD8', 'rgba(240,235,216,0.4)', '#F0EBD8')}
      </div>

      <div>
        <div style="font-family:monospace; font-size:11px; color:rgba(240,235,216,0.4); margin-bottom:12px; text-transform:uppercase;">Placeholder state</div>
        ${figure(null, 'Caption goes here when image is added', '#1A2519', '#F0EBD8', 'rgba(240,235,216,0.4)', 'rgba(240,235,216,0.2)')}
      </div>
    </div>
  `,
};
