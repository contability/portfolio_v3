/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        // 'font-black': '#212121',
        // 'font-default': '#9D9DA6',
        // 'font-list': '#5E6278',
        // 'font-disabled': '#ADB4C0',
        // 'back-black': '#1C1C1C',
        // 'back-navy': '#1E1E2D',
        // 'back-l-navy': '#2A2A3C',
        // 'back-stroke': '#393945',
        // 'back-l-stroke': '#E1E3EA',
        // 'back-default': '#7E7E85',
        // 'back-table-line': '#F8FAFC',
        // 'back-bg': '#F4F7F9',
        // 'point-gold': '#CEA538',
        // 'point-gold2': '#BA8C06',
        // 'point-l-gold': '#F5DC76',
        // 'point-disabled': '#F7F8F9',
        // 'success-green': '#0ABB87',
        // 'success-l-green': 'rgba(10,187,135,0.10)',
        // 'success-blue': '#5D78FF',
        // 'success-l-blue': 'rgba(93,120,255,0.10)',
        // 'warning-orange': '#FDA700',
        // 'warning-l-orange': '#FFF8DD',
        // 'danger-red': '#F1416C',
        // 'danger-l-red': '#FDE7E9',
        // 'point-red': '#ef454a',
      },
      fontSize: {
        'display-large': [
          '57px',
          {
            lineHeight: '64px',
            letterSpacing: '-0.25px',
            fontWeight: '400',
          },
        ],
        'display-medium': [
          '45px',
          {
            lineHeight: '52px',
            letterSpacing: '-0.25px',
            fontWeight: '400',
          },
        ],
        'display-small': [
          '36px',
          {
            lineHeight: '44px',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
        'headline-large': [
          '32px',
          {
            lineHeight: '40px',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
        'headline-medium': [
          '28px',
          {
            lineHeight: '36px',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
        'headline-small': [
          '24px',
          {
            lineHeight: '32px',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
        'title-large': [
          '22px',
          {
            lineHeight: '28px',
            letterSpacing: '',
            fontWeight: '400',
          },
        ],
        'title-medium-large': [
          '20px',
          {
            lineHeight: '30px',
            letterSpacing: '0.1px',
            fontWeight: '500',
          },
        ],
        'title-medium': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0.1px',
            fontWeight: '500',
          },
        ],
        'title-small': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.1px',
            fontWeight: '500',
          },
        ],
        'label-large': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0.1px',
            fontWeight: '400',
          },
        ],
        'label-medium': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '400',
          },
        ],
        'label-small': [
          '11px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '400',
          },
        ],
        'body-large': [
          '16px',
          {
            lineHeight: '26px',
            letterSpacing: '0.5px',
            fontWeight: '400',
          },
        ],
        'body-medium': [
          '14px',
          {
            lineHeight: '22px',
            letterSpacing: '0.25px',
            fontWeight: '400',
          },
        ],
        'body-small': [
          '12px',
          {
            lineHeight: '18px',
            letterSpacing: '0.4px',
            fontWeight: '400',
          },
        ],
        caption: [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.4px',
            fontWeight: '400',
          },
        ],
        overline: [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0.5px',
            fontWeight: '500',
          },
        ],
      },
      borderRadius: {
        'extra-small': '4px',
        small: '8px',
        medium: '12px',
        large: '16px',
        'extra-large': '28px',
      },

      boxShadow: {
        'mm-1': '0px 1px 2px 0px rgba(0, 0, 0, 0.05), 0px 1px 3px 1px rgba(0, 0, 0, 0.10)',
        'mm-2': '0px 1px 2px 0px rgba(0, 0, 0, 0.15), 0px 2px 6px 2px rgba(0, 0, 0, 0.15)',
        'mm-3': '0px 4px 8px 3px rgba(0, 0, 0, 0.15), 0px 1px 3px 0px rgba(0, 0, 0, 0.3)',
        'mm-4': '0px 6px 10px 4px rgba(0, 0, 0, 0.15), 0px 2px 3px 0px rgba(0, 0, 0, 0.3)',
        'mm-5': '0px 8px 12px 6px rgba(0, 0, 0, 0.15), 0px 4px 4px 0px rgba(0, 0, 0, 0.3)',
      },

      animation: {
        blob: 'blob 25s cubic-bezier(0.2, 0.0, 0, 1.0) infinite',
        determinate: 'determinate 4s cubic-bezier(.9,0,.2,1) infinite',
        'fade-in': 'fade-in 0.2s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
        'gradient-x': 'gradient-x 15s ease infinite',
        'gradient-xy': 'gradient-xy 15s ease infinite',
        'gradient-y': 'gradient-y 15s ease infinite',
        indeterminate: 'indeterminate 2s cubic-bezier(.7,.1,.5,1) infinite',
        moving: 'moving 25s cubic-bezier(0.2, 0.0, 0, 1.0) infinite',
        'spin-lazy': 'spin-lazy 5s linear infinite',
        'transition-bottom': 'transition-bottom 0.4s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
        'transition-left': 'transition-left 0.4s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
        'transition-right': 'transition-right 0.4s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
        'transition-top': 'transition-top 0.2s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
        'transition-top-lazy': 'transition-top 4s cubic-bezier(0.2, 0.0, 0, 1.0) 1',
      },

      keyframes: {
        determinate: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        indeterminate: {
          from: {
            transform: 'translateX(-100%)',
          },
          to: {
            transform: 'translateX(100%)',
          },
        },
        'transition-left': {
          from: {
            transform: 'translateX(-80%)',
          },
          to: {
            transform: 'translateX(0)',
          },
        },
        'transition-right': {
          from: {
            transform: 'translateX(80%)',
          },
          to: {
            transform: 'translateX(0%)',
          },
        },
        'transition-bottom': {
          from: {
            transform: 'translateY(100%)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'transition-top': {
          from: {
            transform: 'translateY(-12px)',
          },
          to: {
            transform: 'translateY(0)',
          },
        },
        'fade-in': {
          from: {
            opacity: 0,
          },
          to: {
            opacity: 100,
          },
        },
        'gradient-y': {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'center top',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'center center',
          },
        },
        'gradient-x': {
          '0%, 100%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        'gradient-xy': {
          '0%, 100%': {
            backgroundSize: '400% 400%',
            backgroundPosition: 'left center',
          },
          '50%': {
            backgroundSize: '200% 200%',
            backgroundPosition: 'right center',
          },
        },
        'spin-lazy': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        blob: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '20%': {
            transform: 'translateX(-50%) translateY(-100%)',
          },
          '40%': {
            transform: 'translateX(-100%) translateY(-50%)',
          },
          '60%': {
            transform: 'translateX(-50%) translateY(-0%) ',
          },
          '80%': {
            transform: 'translateX(0%) translateY(-50%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
        moving: {
          '0%': {
            transform: 'translateX(0%) translateY(0%)',
          },
          '20%': {
            transform: 'translateX(50%) translateY(100%)',
          },
          '40%': {
            transform: 'translateX(100%) translateY(50%)',
          },
          '60%': {
            transform: 'translateX(50%) translateY(0%) ',
          },
          '80%': {
            transform: 'translateX(0%) translateY(50%)',
          },
          '100%': {
            transform: 'translateX(0%) translateY(0%)',
          },
        },
      },
      // backgroundImage: {
      //   'main-page-section01-bg': `url("${process.env.NEXT_PUBLIC_S3_ASSETS}/main_page/bg-section01.png")`,
      //   'main-page-section03-bg': `url("${process.env.NEXT_PUBLIC_S3_ASSETS}/main_page/bg-chart-symbol.png")`,
      //   'main-page-section04-bg': `url("${process.env.NEXT_PUBLIC_S3_ASSETS}/main_page/bg-section04.png")`,
      // },
    },
    screens: {
      xl: { max: '1440px' },
      lg: { max: '1024px' },
      md: { max: '750px' },
      sm: { max: '380px' },
    },
    boxShadow: {
      base: '0px 8px 16px 0px #EAF2F8;',
    },
  },
  plugins: [require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
};
