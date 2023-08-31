import React from "react";
import { Link } from 'gatsby';
import { Wrapper } from "./LatestBlogPost.styles";

const LatestBlogPost = ({posttitle, postbody, link}) => {
    return (
        <Wrapper>
            <h2>
                Latest Blog Post
            </h2>
            <h3>{posttitle}</h3>
            <div 
            dangerouslySetInnerHTML={{ __html: postbody}} 
            />
            <Link to={link}>
                <h5>Read More</h5>
            </Link>

        </Wrapper>
    )
}

export default LatestBlogPost