# Portfolio - Florian Marie

Portfolio personnel développé avec Next.js et Framer Motion.

## 🚀 Fonctionnalités

- Design responsive avec thème sombre
- Animations fluides avec Framer Motion
- Header qui se cache/affiche au scroll
- Menu mobile avec hamburger
- Navigation smooth entre sections

## 🛠️ Technologies

- **Next.js 14** - Framework React
- **TypeScript** - Typage statique
- **Framer Motion** - Animations
- **Tailwind CSS** - Styling
- **React Hooks** - État et effets

## 📦 Installation

```bash
# Cloner le repo
git clone https://github.com/votre-username/portfolio.git
cd portfolio

# Installer les dépendances
npm install

# Lancer en développement
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000)

## 📁 Structure

```
portfolio/
├── app/           # Pages Next.js
├── components/    # Composants React
│   └── header.tsx # Navigation
├── hooks/         # Custom hooks
│   └── use-mobile.tsx
└── public/        # Assets statiques
```

## 🎨 Personnalisation

1. **Modifier les infos** : Éditer `app/page.tsx`
2. **Changer la navigation** : Modifier `navItems` dans `header.tsx`
3. **Ajuster les couleurs** : Modifier les classes Tailwind

## 🚀 Déploiement

### Vercel (recommandé)
```bash
npm i -g vercel
vercel --prod
```

### Build manuel
```bash
npm run build
npm start
```

## 📧 Contact

**Florian Marie**
- Email : votre-email@domain.com
- GitHub : [@votre-username]

---

⭐ **Star le repo si ça vous plaît !**
