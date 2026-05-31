import '../tokens/tokens.css';

export default {
  title: 'Components/Link',
  tags: ['autodocs'],
};

const prose = `font-family: 'Patrick Hand', cursive; font-size: 24px; line-height: 1.6; max-width: 600px;`;

export const LightMode = {
  render: () => `
    <div style="padding: 40px; background: #FFFFFF;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #000;">Links — Light</h2>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Default</div>
        <p style="${prose} color: #000;">
          I write about <a href="#" style="color: #8300E8; text-decoration: underline; text-underline-offset: 3px;">building things</a> and
          <a href="#" style="color: #8300E8; text-decoration: underline; text-underline-offset: 3px;">the people behind them</a>.
        </p>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Hover (simulated)</div>
        <p style="${prose} color: #000;">
          <a href="#" style="color: #8300E8; text-decoration: underline; text-underline-offset: 3px; text-decoration-color: #8300E8; opacity: 0.75;">Hovered link</a>
        </p>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Active / Selected (accent-green)</div>
        <p style="${prose} color: #000;">
          <a href="#" style="color: #00C17D; text-decoration: underline; text-underline-offset: 3px;">Active link</a>
        </p>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 12px; text-transform: uppercase;">Nav Link (no underline)</div>
        <div style="display: flex; gap: 32px; font-family: 'Patrick Hand', cursive; font-size: 24px;">
          <a href="#" style="color: #000; text-decoration: none;">Writing</a>
          <a href="#" style="color: #000; text-decoration: none;">Projects</a>
          <a href="#" style="color: #000; text-decoration: none;">Now</a>
          <a href="#" style="color: #00C17D; text-decoration: none; font-weight: 400;">About ←active</a>
        </div>
      </div>
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding: 40px; background: #1A2519;">
      <h2 style="font-family: 'Indie Flower', cursive; font-size: 32px; margin-bottom: 32px; color: #F0EBD8;">Links — Dark</h2>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.5); margin-bottom: 12px; text-transform: uppercase;">Default</div>
        <p style="${prose} color: #F0EBD8;">
          I write about <a href="#" style="color: #D4A0FF; text-decoration: underline; text-underline-offset: 3px;">building things</a> and
          <a href="#" style="color: #D4A0FF; text-decoration: underline; text-underline-offset: 3px;">the people behind them</a>.
        </p>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.5); margin-bottom: 12px; text-transform: uppercase;">Active / Selected (mint chalk)</div>
        <p style="${prose} color: #F0EBD8;">
          <a href="#" style="color: #7FEBA1; text-decoration: underline; text-underline-offset: 3px;">Active link</a>
        </p>
      </div>

      <div style="margin-bottom: 32px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.5); margin-bottom: 12px; text-transform: uppercase;">Nav Link</div>
        <div style="display: flex; gap: 32px; font-family: 'Patrick Hand', cursive; font-size: 24px;">
          <a href="#" style="color: #F0EBD8; text-decoration: none;">Writing</a>
          <a href="#" style="color: #F0EBD8; text-decoration: none;">Projects</a>
          <a href="#" style="color: #F0EBD8; text-decoration: none;">Now</a>
          <a href="#" style="color: #7FEBA1; text-decoration: none;">About ←active</a>
        </div>
      </div>
    </div>
  `,
};
