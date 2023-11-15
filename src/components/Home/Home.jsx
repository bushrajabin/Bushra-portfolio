import { details } from "../../common/common"
import "./Home.css"
const eyeImage = "./Images/eye.png"
const codeImage = "./Images/codeIcon.png"

// const code = "./Images/codeIcon.png"

const Home = () => {
    return (
        <div className="conatiner">
            <div className="top">
                <img src={codeImage} alt="" />
                <h2>Projects <span style={{ color: "yellow" }}>Made</span> </h2>
            </div>

            <div className="portfolio">
                {
                    details.map((details, index, arr) => {
                        const { title, image, GithubURL, LiveUrl, title2 } = details
                        return (
                            <div className="details">
                                <img src={image} alt="" />

                                <div className="links">
                                    <h2>{title}</h2>
                                    <div className="link-title">
                                        <p>{title2}</p>
                                    </div>
                                    <div className="link-url">
                                        <a href={LiveUrl} className="liveurl" target="_blank"><img src={eyeImage} alt="" href={LiveUrl} />View</a>
                                        <a href={GithubURL} className="githuburl" target="_blank"><img src={codeImage} alt="" href={GithubURL} />Code</a>
                                    </div>

                                </div>


                            </div>


                        )
                    })
                }
            </div>
        </div>
    )
}

export default Home;