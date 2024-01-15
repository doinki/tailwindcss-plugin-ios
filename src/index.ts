import plugin from 'tailwindcss/plugin';

export default plugin(({ addVariant }) => {
  addVariant('ios', '@supports (-webkit-touch-callout: none)');
  addVariant('not-ios', '@supports not (-webkit-touch-callout: none)');
});
