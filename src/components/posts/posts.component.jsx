import './posts.component.scss';

function PostsComponent() {
    return (
        <div className="posts-container">
            <div className="posts-shadow"></div>

            <div className="posts-container-menu-item">
                <span>Latest Post Activity</span>
            </div>

            <div className="posts-square">
                <div className="posts-square-back">
                    <div className="posts-square-container-item">
                        <div className="posts-square-thumb">
                            <img className="post-square-icon" src="https://store.bananacomputer.com/cmsAdmin/uploads/o_1ebm1360a1548187aubidpa1gbaa.jpg" alt="Post" />
                        </div>

                        <div className="posts-square-text">
                            Jaime Amigo Santos
                        </div>
                        <div className="posts-square-text-icons">
                            <a href="#"><i className="fas fa-heart fa-sm posts-icon-like-active"></i><span className="">&nbsp;632</span></a>
                            &nbsp;
                            <a href="#"><i className="fab fa-facebook-messenger fa-sm posts-icon-msg"></i><span className="">&nbsp;215</span></a>
                            &nbsp;
                            <a href="#"><i className="fas fa-bookmark fa-sm posts-icon-msg"></i><span className="">&nbsp;54</span></a>
                        </div>
                    </div>
                    <div className="posts-square-see-all"><span><a href="#">See All Posts</a></span></div>
                </div>
            </div>
        </div>
    );
}

export default PostsComponent;