import "./app.css"
import { TwitterFollowCard } from "./twitterFollowCard"

export function App() {
    return (
        <>
            <TwitterFollowCard isFollowing={false} userName="midudev" name="Miguel Angel Duran" />
            <TwitterFollowCard isFollowing userName="elonmusk" name="Elon Musk" />
            <TwitterFollowCard isFollowing userName="kikobeats" name="kikobeats" />
            <TwitterFollowCard isFollowing userName="nayibbukele" name="nayibbukele" />
        </>
    )
}