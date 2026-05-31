import '../tokens/tokens.css';

export default {
  title: 'Components/Tag',
  tags: ['autodocs'],
};

const tagBase = `
  font-family: 'Patrick Hand', cursive;
  font-size: 14px;
  display: inline-block;
  padding: 3px 12px;
  border-radius: 9999px;
  border: 1px solid;
  text-decoration: none;
  white-space: nowrap;
`;

const tagDefault  = tagBase + `border-color: #000; color: #000; background: transparent;`;
const tagPurple   = tagBase + `border-color: #8300E8; color: #8300E8; background: transparent;`;
const tagGreen    = tagBase + `border-color: #00C17D; color: #00C17D; background: transparent;`;
const tagFilled   = tagBase + `border-color: #8300E8; color: #FFF; background: #8300E8;`;

const tagDarkDefault = tagBase + `border-color: #F0EBD8; color: #F0EBD8; background: transparent;`;
const tagDarkPurple  = tagBase + `border-color: #D4A0FF; color: #D4A0FF; background: transparent;`;
const tagDarkGreen   = tagBase + `border-color: #7FEBA1; color: #7FEBA1; background: transparent;`;
const tagDarkFilled  = tagBase + `border-color: #D4A0FF; color: #1A2519; background: #D4A0FF;`;

export const LightMode = {
  render: () => `
    <div style="padding: 40px; background: #FFFFFF;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #000;">Tags / Badges — Light</h2>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Default (outline)</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="${tagDefault}">Engineering</span>
          <span style="${tagDefault}">Product</span>
          <span style="${tagDefault}">India</span>
          <span style="${tagDefault}">AI</span>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Accent variants</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="${tagPurple}">Rant</span>
          <span style="${tagGreen}">Active</span>
          <span style="${tagFilled}">Featured</span>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">In context — blog post card</div>
        <div style="font-family: 'Indie Flower', cursive; color: #000; padding: 24px; border: 1px solid #000; border-radius: 6px; max-width: 400px; box-shadow: 3px 3px 0px rgba(0,0,0,0.20);">
          <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <span style="${tagDefault}">Engineering</span>
            <span style="${tagPurple}">Rant</span>
          </div>
          <div style="font-size: 32px; margin-bottom: 8px;">People Managers are Only to Lick Asses</div>
          <div style="font-size: 20px; color: rgba(0,0,0,0.5);">May 2026 · 5 min read</div>
        </div>
      </div>
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding: 40px; background: #1A2519;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #F0EBD8;">Tags / Badges — Dark</h2>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 12px; text-transform: uppercase;">Default (outline)</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="${tagDarkDefault}">Engineering</span>
          <span style="${tagDarkDefault}">Product</span>
          <span style="${tagDarkDefault}">India</span>
          <span style="${tagDarkDefault}">AI</span>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 12px; text-transform: uppercase;">Accent variants</div>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <span style="${tagDarkPurple}">Rant</span>
          <span style="${tagDarkGreen}">Active</span>
          <span style="${tagDarkFilled}">Featured</span>
        </div>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 12px; text-transform: uppercase;">In context</div>
        <div style="font-family: 'Indie Flower', cursive; color: #F0EBD8; padding: 24px; border: 1px solid #F0EBD8; border-radius: 6px; max-width: 400px; box-shadow: 3px 3px 0px rgba(0,0,0,0.40);">
          <div style="display: flex; gap: 8px; margin-bottom: 12px; flex-wrap: wrap;">
            <span style="${tagDarkDefault}">Engineering</span>
            <span style="${tagDarkPurple}">Rant</span>
          </div>
          <div style="font-size: 32px; margin-bottom: 8px;">People Managers are Only to Lick Asses</div>
          <div style="font-size: 20px; color: rgba(240,235,216,0.4);">May 2026 · 5 min read</div>
        </div>
      </div>
    </div>
  `,
};
