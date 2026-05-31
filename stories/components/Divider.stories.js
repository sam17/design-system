import '../tokens/tokens.css';

export default {
  title: 'Components/Divider',
  tags: ['autodocs'],
};

export const LightMode = {
  render: () => `
    <div style="padding: 40px; background: #FFFFFF; max-width: 700px; font-family: 'Patrick Hand', cursive; color: #000;">
      <h2 style="font-size: 32px; margin-bottom: 32px;">Dividers — Light</h2>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 16px; text-transform: uppercase;">Default (1px · black)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Section one ends here. Something meaningful was said.</p>
        <hr style="border: none; border-top: 1px solid #000; margin: 0;" />
        <p style="font-size: 24px; margin-top: 16px;">Section two begins. A new thought arrives.</p>
      </div>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 16px; text-transform: uppercase;">Accent (3px · red — decorative)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Before the break.</p>
        <hr style="border: none; border-top: 3px solid #B70F0F; margin: 0; border-radius: 9999px;" />
        <p style="font-size: 24px; margin-top: 16px;">After the break.</p>
      </div>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: #888; margin-bottom: 16px; text-transform: uppercase;">Muted (1px · 20% black — subtle)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Softer separation between related ideas.</p>
        <hr style="border: none; border-top: 1px solid rgba(0,0,0,0.20); margin: 0;" />
        <p style="font-size: 24px; margin-top: 16px;">Still in the same flow.</p>
      </div>
    </div>
  `,
};

export const DarkMode = {
  render: () => `
    <div style="padding: 40px; background: #1A2519; max-width: 700px; font-family: 'Patrick Hand', cursive; color: #F0EBD8;">
      <h2 style="font-size: 32px; margin-bottom: 32px;">Dividers — Dark</h2>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 16px; text-transform: uppercase;">Default (1px · chalk white)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Section one ends here.</p>
        <hr style="border: none; border-top: 1px solid #F0EBD8; margin: 0;" />
        <p style="font-size: 24px; margin-top: 16px;">Section two begins.</p>
      </div>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 16px; text-transform: uppercase;">Accent (3px · pink chalk)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Before the break.</p>
        <hr style="border: none; border-top: 3px solid #F4A0A0; margin: 0; border-radius: 9999px;" />
        <p style="font-size: 24px; margin-top: 16px;">After the break.</p>
      </div>

      <div style="margin-bottom: 40px;">
        <div style="font-family: monospace; font-size: 11px; color: rgba(240,235,216,0.4); margin-bottom: 16px; text-transform: uppercase;">Muted (1px · 25% chalk)</div>
        <p style="font-size: 24px; margin-bottom: 16px;">Softer separation.</p>
        <hr style="border: none; border-top: 1px solid rgba(240,235,216,0.25); margin: 0;" />
        <p style="font-size: 24px; margin-top: 16px;">Still in the same flow.</p>
      </div>
    </div>
  `,
};
