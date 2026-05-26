/* global tailwind */
tailwind.config = {
  theme: {
    extend: {
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        jakarta:  ['"Plus Jakarta Sans"', 'sans-serif'],
      },
      colors: {
        'green-deep':  '#1B6B52',
        'green-mid':   '#2D8C6B',
        'green-light': '#3DAA80',
        'green-pale':  '#E8F5F0',
        'green-bg':    '#F2FAF6',
        gold:          '#E8B830',
        'gold-light':  '#FFF3C0',
        coral:         '#F07A5A',
        ink:           '#1C2B27',
        'ink-soft':    '#3A4E47',
        muted:         '#6B8C80',
        'off-white':   '#FAFDF9',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%':   { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        slowFloat: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%':      { transform: 'translateY(-12px)' },
        },
      },
      animation: {
        'fade-up':    'fadeUp 1s ease both',
        'fade-up-2':  'fadeUp 1s 0.2s ease both',
        'fade-up-4':  'fadeUp 1s 0.4s ease both',
        'fade-up-6':  'fadeUp 1s 0.6s ease both',
        'fade-up-8':  'fadeUp 1s 0.8s ease both',
        marquee:      'marquee 30s linear infinite',
        'slow-float': 'slowFloat 8s ease-in-out infinite',
      },
    },
  },
}