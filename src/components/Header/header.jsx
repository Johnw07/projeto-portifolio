import './header.css'

export function Header({ children }) {
    return (
        <header className="header">
            {children}
            <h1>jw</h1>
        </header>
    )
}