//tab interactive
let doctitle = document.title;
window.addEventListener("blur", () => {
    document.title = "Comeback Senpai🥺";
});
window.addEventListener("focus", () => {
    document.title = doctitle;
});


//config Tailwind

tailwind.config = {
  theme: {
    backgroundColor: {
      'neonGreen': 'rgb(42, 250, 45)',
      'red': 'rgb(250,0,0)',
      'blue': 'rgb(0,0,250)',
    },
    boxShadow: {
      'navglow': '0 0 10px 2px rgb(42, 250, 45)'
    },
    dropShadow: {
      'navtextglow': '0 0 6px rgb(42, 250, 45)',
      'ceo': '0 0 6px rgb(255, 247, 0)'
    },
    backdropBlur: {
      8: '8px',
    },
    blur: {
      xs: '2px',
    },
    backgroundImage: {
        'main': "url('img/LoginPage.jpeg')",
        'logo': "url('img/JestifyLogo0.png')",
        'ceo': "url('img/CEO.png')"
    }
  }
}
