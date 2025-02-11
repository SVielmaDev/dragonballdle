import { useState } from "react"

export function TwitterFollowCard({ userName, name }) {
    const [isFollowing, setIsFollow] = useState(false)

    const text = isFollowing ? 'Siguiendo' : 'Seguir'
    const buttonClassName = isFollowing
        ? 'tw-followCard-button is-following'
        : 'tw-followCard-button'

    const toggleFollow = () => {
        setIsFollow(!isFollowing)
    }

    return (
        <article className="tw-followCard">
            <header className="tw-followCard-header">
                <img
                    className="tw-followCard-img"
                    alt="avatar"
                    src={`https://unavatar.io/x/${userName}`} />
                <div className="tw-followCard-info">
                    <strong>{name}</strong>
                    <span className="tw-followCard-infoUserName">@{userName}</span>
                </div>
            </header>

            <aside>
                <button className={buttonClassName} onClick={toggleFollow}>
                    {text}
                </button>
            </aside>
        </article>
    )
}