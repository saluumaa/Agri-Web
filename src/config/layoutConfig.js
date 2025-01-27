export const layoutConfig = {
    siteName: "AgriTrade",
    tagline: "Your trusted partner in global agricultural trade.",
    description:
        "We connect farmers and businesses worldwide through a seamless agricultural trade platform.",

    contact: {
        email: "contact@agritradehub.com",
        phone: "+1 (555) 123-4567",
        address: "123 Trade Center, Business District, New York, NY 10001",
    },

    navigation: [
        { to: "/", label: "Home" },
        { to: "/products", label: "Products" },
        { to: "/about", label: "About" },
        { to: "/contact", label: "Contact" },
    ],

    socialLinks: [
        { href: "#", icon: "Facebook" },
        { href: "#", icon: "Twitter" },
        { href: "#", icon: "Instagram" },
        { href: "#", icon: "Linkedin" },
    ],

    productCategories: [
        { to: "/products?category=grains", label: "Grains" },
        { to: "/products?category=fruits", label: "Fruits" },
        { to: "/products?category=vegetables", label: "Vegetables" },
        { to: "/products?category=nuts", label: "Nuts" },
        { to: "/products?category=spices", label: "Spices" },
    ],
};