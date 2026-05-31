import '../tokens/tokens.css';
import './components.css';

export default {
  title: 'Components/Nav',
  tags: ['autodocs'],
};

function nav(bg, textColor, activeColor, borderColor, mutedBorder) {
  return `
    <nav style="
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 20px 32px;
      background: ${bg};
      border-bottom: 1px solid ${borderColor};
      position: relative;
    ">
      <a href="#" style="font-family:'Indie Flower',cursive; font-size:32px; color:${textColor}; text-decoration:none;">
        soumyadeep.in
      </a>

      <div style="display:flex; align-items:center; gap:32px;">
        <ul style="display:flex; gap:32px; list-style:none; margin:0; padding:0;">
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Writing</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Rants</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Projects</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${activeColor}; text-decoration:none;">Now ←</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">About</a></li>
        </ul>

        <button style="
          background:transparent; border:none; padding:4px;
          color:${textColor}; cursor:pointer; opacity:0.4;
          font-size:18px; line-height:1;
        " title="Toggle theme">◑</button>
      </div>
    </nav>
  `;
}

function mobileNav(bg, textColor, activeColor, borderColor) {
  return `
    <div style="max-width: 375px; border: 1px dashed rgba(128,128,128,0.3); border-radius:8px; overflow:hidden;">
      <p style="font-family:monospace; font-size:10px; color:#888; padding:8px 12px; background:#f5f5f5; margin:0;">📱 375px mobile</p>

      <!-- Collapsed state -->
      <nav style="
        display:flex; align-items:center; justify-content:space-between;
        padding:16px 20px; background:${bg};
        border-bottom:1px solid ${borderColor};
      ">
        <a href="#" style="font-family:'Indie Flower',cursive; font-size:24px; color:${textColor}; text-decoration:none;">soumyadeep.in</a>
        <div style="display:flex; align-items:center; gap:12px;">
          <button style="background:transparent; border:none; padding:4px; font-size:16px; color:${textColor}; cursor:pointer; opacity:0.4; line-height:1;" title="Toggle theme">◑</button>
          <button style="background:none; border:none; cursor:pointer; display:flex; flex-direction:column; gap:5px; padding:4px;">
            <span style="display:block; width:22px; height:2px; background:${textColor}; border-radius:2px;"></span>
            <span style="display:block; width:22px; height:2px; background:${textColor}; border-radius:2px;"></span>
            <span style="display:block; width:22px; height:2px; background:${textColor}; border-radius:2px;"></span>
          </button>
        </div>
      </nav>

      <!-- Open state -->
      <div style="background:${bg}; border-bottom:1px solid ${borderColor}; padding:20px;">
        <p style="font-family:monospace; font-size:10px; color:#888; margin:0 0 12px;">↑ menu open state</p>
        <ul style="list-style:none; margin:0; padding:0; display:flex; flex-direction:column; gap:16px;">
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Writing</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Rants</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">Projects</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${activeColor}; text-decoration:none;">Now ←</a></li>
          <li><a href="#" style="font-family:'Patrick Hand',cursive; font-size:20px; color:${textColor}; text-decoration:none;">About</a></li>
        </ul>
      </div>
    </div>
  `;
}

export const Desktop = {
  render: () => `
    <div>
      <p style="font-family:monospace; font-size:11px; color:#888; padding:16px 0 8px 32px;">☀️ Light</p>
      ${nav('#FFFFFF', '#000', '#00C17D', '#000', 'rgba(0,0,0,0.3)')}
      <p style="font-family:monospace; font-size:11px; color:#888; padding:24px 0 8px 32px;">🌙 Dark</p>
      ${nav('#1A2519', '#F0EBD8', '#7FEBA1', '#F0EBD8', 'rgba(240,235,216,0.4)')}
    </div>
  `,
};

export const Mobile = {
  render: () => `
    <div style="padding: 40px; background: #F5F5F5; display:flex; gap:32px; flex-wrap:wrap;">
      <div>
        <p style="font-family:monospace; font-size:11px; color:#888; margin-bottom:12px;">☀️ Light</p>
        ${mobileNav('#FFFFFF', '#000', '#00C17D', '#000')}
      </div>
      <div>
        <p style="font-family:monospace; font-size:11px; color:#888; margin-bottom:12px;">🌙 Dark</p>
        ${mobileNav('#1A2519', '#F0EBD8', '#7FEBA1', '#F0EBD8')}
      </div>
    </div>
  `,
};

export const ThemeToggle = {
  name: 'Theme Toggle',
  render: () => `
    <div style="padding:40px; display:flex; gap:40px; flex-wrap:wrap; align-items:flex-start;">
      <div style="background:#FFFFFF; padding:32px; border-radius:8px; border:1px solid #000;">
        <p style="font-family:'Patrick Hand',cursive; font-size:16px; color:#888; margin-bottom:8px;">Light mode toggle — subtle icon only</p>
        <p style="font-family:'Patrick Hand',cursive; font-size:13px; color:#aaa; margin-bottom:16px;">No border, low opacity — it’s there but doesn’t shout</p>
        <button style="
          background:transparent; border:none; padding:4px;
          font-size:20px; color:#000; cursor:pointer; opacity:0.4; line-height:1;
        " title="Toggle theme">◑</button>
      </div>
      <div style="background:#1A2519; padding:32px; border-radius:8px; border:1px solid #F0EBD8;">
        <p style="font-family:'Patrick Hand',cursive; font-size:16px; color:rgba(240,235,216,0.5); margin-bottom:8px;">Dark mode toggle</p>
        <p style="font-family:'Patrick Hand',cursive; font-size:13px; color:rgba(240,235,216,0.3); margin-bottom:16px;">Same treatment on blackboard</p>
        <button style="
          background:transparent; border:none; padding:4px;
          font-size:20px; color:#F0EBD8; cursor:pointer; opacity:0.4; line-height:1;
        " title="Toggle theme">◑</button>
      </div>
    </div>
  `,
};
