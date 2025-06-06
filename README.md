# Header Component - Portfolio

Un composant Header React moderne avec animations Framer Motion pour un portfolio professionnel.

## 🌟 Fonctionnalités

- **Header adaptatif** : Se cache/affiche automatiquement selon le scroll
- **Design responsive** : Menu desktop et mobile optimisés
- **Animations fluides** : Powered by Framer Motion
- **Effets visuels** : Gradients animés, glow effects, underlines
- **Navigation intelligente** : Fermeture automatique du menu mobile
- **Thème sombre** : Design moderne avec transparence et blur

## 🚀 Aperçu

### Desktop
- Logo animé avec effet de glow
- Navigation avec underlines animés
- Bouton de contact stylisé
- Header qui devient opaque au scroll

### Mobile
- Menu hamburger avec rotation
- Menu fullscreen avec animations d'entrée
- Fermeture par clic à l'extérieur
- Effets de particules en arrière-plan

## 📦 Installation

```bash
npm install framer-motion react
```

## 🛠️ Usage

```tsx
import Header from './components/Header'

function App() {
  return (
    <div>
      <Header />
      {/* Votre contenu */}
    </div>
  )
}
```

## 🎨 Styles requis

Le composant utilise Tailwind CSS et nécessite ces classes personnalisées :

```css
/* Dans votre fichier CSS global */
.gradient-text-animated {
  background: linear-gradient(45deg, #8b5cf6, #3b82f6, #8b5cf6);
  background-size: 200% 200%;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: gradient-shift 3s ease-in-out infinite;
}

.gradient-button {
  background: linear-gradient(45deg, #8b5cf6, #3b82f6);
  background-size: 200% 200%;
  animation: gradient-shift 3s ease-in-out infinite;
}

@keyframes gradient-shift {
  0%, 100% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
}
```

## ⚙️ Configuration

### Navigation Items
Modifiez le tableau `navItems` pour personnaliser la navigation :

```tsx
const navItems = [
  { name: "À propos", href: "#about" },
  { name: "Compétences", href: "#skills" },
  { name: "Projets", href: "#projects" }
]
```

### Breakpoints
- **Desktop** : `md:` (768px+)
- **Mobile** : `<768px`

### Scroll Behavior
- Header devient opaque après **20px** de scroll
- Se cache après **100px** de scroll vers le bas
- Réapparaît lors du scroll vers le haut

## 🎯 Props et Customisation

Le composant est actuellement statique mais peut être étendu avec :

```tsx
interface HeaderProps {
  logo?: string
  navItems?: { name: string; href: string }[]
  contactHref?: string
  theme?: 'dark' | 'light'
}
```

## 📱 Responsive Design

| Breakpoint | Comportement |
|------------|--------------|
| Desktop | Navigation horizontale, logo à gauche |
| Tablet | Menu hamburger, navigation simplifiée |
| Mobile | Menu fullscreen, animations optimisées |

## 🔧 Dépendances

```json
{
  "framer-motion": "^10.x.x",
  "react": "^18.x.x",
  "tailwindcss": "^3.x.x"
}
```

## 🎨 Palette de couleurs

```css
/* Couleurs principales */
--violet: #8b5cf6
--blue: #3b82f6
--purple: #a855f7
--background: rgba(0, 0, 0, 0.95)
```

## 📐 Structure du composant

```
Header/
├── Logo section (Florian Marie + dev signature)
├── Desktop Navigation
│   ├── Nav links avec underlines
│   └── Contact button
├── Mobile burger button
└── Mobile Menu (fullscreen)
    ├── Background patterns
    ├── Nav items
    └── Contact button
```

## ⚡ Performances

- **Scroll listener** optimisé avec `passive: true`
- **Animations** utilisant la GPU via Framer Motion
- **Re-renders** limités avec `useState` approprié

## 🐛 Bugs connus

Aucun bug connu actuellement.

## 🤝 Contribution

1. Fork le projet
2. Créez votre branche (`git checkout -b feature/AmazingFeature`)
3. Committez vos changements (`git commit -m 'Add AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrez une Pull Request

## 📄 License

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👤 Auteur

**Florian Marie**
- Portfolio: [Votre portfolio]
- GitHub: [@votre-username]
- LinkedIn: [Votre LinkedIn]

---

⭐ N'hésitez pas à laisser une étoile si ce composant vous a été utile !
