import '../tokens/tokens.css';

export default {
  title: 'Tokens/Spacing',
  tags: ['autodocs'],
};

const scale = [
  { token: '--space-xs', value: '8px',   label: 'space-xs' },
  { token: '--space-sm', value: '16px',  label: 'space-sm' },
  { token: '--space-md', value: '32px',  label: 'space-md' },
  { token: '--space-lg', value: '64px',  label: 'space-lg' },
  { token: '--space-xl', value: '120px', label: 'space-xl' },
];

export const SpacingScale = {
  render: () => `
    <div style="padding: 32px; font-family: 'Indie Flower', cursive;">
      <p style="font-family: monospace; font-size: 12px; color: #888; margin-bottom: 32px;">
        ⚠️ Inferred from Figma — not formally defined yet. Needs confirmation.
      </p>
      ${scale.map(s => `
        <div style="display: flex; align-items: center; gap: 24px; margin-bottom: 20px;">
          <div style="width: 120px; font-family: monospace; font-size: 12px; color: #888;">
            <div style="color: #000; font-weight: 600;">${s.label}</div>
            <div>${s.value}</div>
            <div style="color:#aaa;">${s.token}</div>
          </div>
          <div style="height: 24px; width: ${s.value}; background: #8300E8; border-radius: 2px;"></div>
        </div>
      `).join('')}
    </div>
  `,
};

export const SpacingInContext = {
  render: () => `
    <div style="padding: 32px; font-family: 'Indie Flower', cursive;">
      <div style="display: inline-block; background: #F5F5F5; border: 1px solid #ddd; border-radius: 8px; overflow: hidden;">
        <div style="background: #8300E8; color: white; padding: 8px 16px; font-size: 14px;">space-xs (8px) · space-sm (16px)</div>
        <div style="padding: 32px; font-size: 24px; border-bottom: 1px solid #ddd;">Content area — space-md (32px) padding</div>
        <div style="padding: 64px; font-size: 20px; color: rgba(0,0,0,0.5);">Section — space-lg (64px) padding</div>
      </div>
    </div>
  `,
};
