

const links = [
    {
        title: "Founders",
        href: "#"
    },
    {
        title: "Guide",
        href: "#"
    },
    {
        title: "Pricing",
        href: "#"
    },
    {
        title: "learnig",
        href: "#"
    }
]


const Navbar = () => {
    return (
        <div className="navbar-root">
            <div className="logo">
                Finta
            </div>
            <div className="links">
                {links.map((link) => (
                    <a className="link-item" key={link.title} href={link.href}>
                        {link.title}
                    </a>
                ))}
                <button className="btn">
                     Get started
                </button>
            </div>
        </div>
    )
}

export default Navbar