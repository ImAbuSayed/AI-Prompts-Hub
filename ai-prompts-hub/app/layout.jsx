import '@styles/globals.css';
import Nav from '@components/Nav';
import Provider from '@components/Provider';

export const metadata = {
    title: "Ai Prompt Hub",
    description: "AI Prompt Hub is an open-source project that provides a platform for users from around the world to share and discover AI prompts. Whether you're a developer, a creative writer, or simply curious about AI, this platform allows you to contribute and explore a wide range of prompts. Join the community and unleash your creativity!"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Provider>
        <div className="main">
          <div className="gradient" />
        </div>
          <main className="app">
            <Nav />
            {children}
          </main>
          </Provider>
      </body>
    </html>
  )
}

export default RootLayout