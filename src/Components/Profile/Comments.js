//import { useState } from 'react';
import { Col, Row, Form, Button } from 'react-bootstrap';
import { React, useState, useEffect } from "react";

import profileComp from './profileComp';
import TimeStamp from '../Other/TimeStamp.js';
import Debug from '../Other/Debug';
import defaultUserPic from '../../Icons/icons8-user-default-50.png';
import dots from '../../Icons/icons8-dots-50.png';
import submit from '../../Icons/icons8-right-button-50.png';


function Comments(props) { 
    const limitNum = 2;
    const Post = props.props.post.post;
    const user = profileComp(Post.ProfileId);
    const comments = Post.comments

    //const API_URL = `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts/${Post.id}`;
    
    // const [comments, setComments] = useState([]);


    // useEffect(() => {
    //     const fetchComments = () => {
    //         setComments(Post.comments)
    //     };
    //     fetchComments();
    // }, []);
    //const [updateComments, setUpdateComments] = useState(false);
    //const [newComment, setNewComment] = useState({
    //    timestamp: "",
    //    content: "",
    //    ProfileId: ""
    //});
    //a single comment to be added
    
    // const currentDate = newDate();
    // const timestamp = currentDate.getTime()

    // const handleTimestamp = () => {
    //     setNewComment({...newComment, timestamp})
    // };

    // const handleContent = ({ target: { value }}) => {
    //     setNewComment({...newComment, content: value})
    // };

    // const handleProfileId = () => {
    //     setNewComment({...newComment, ProfileId: Post.ProfileId})
    // };
    
    // useEffect(() => {
    //     const getComments = () => {
    //         try {
    //             const { data = [] } = (Post.comments);
    //             setComments(data.reverse());
    //             setUpdateContent(false);
    //             setComments({});
    //         } catch (error) {
    //             Debug("getComments", {error}, 0)
    //         }
    //     };
    //     getComments()
    // }, [Post.Id, updateComments]);

    // Debug("Comments:profile", comments);

    // const handleSubmit = async() => { 
    //     Debug("handleSubmit:id", Post.id)
    //     if (!comment.content) {
    //         toast.error("Comment fields are required to be filled in order to Submit", {
    //             hideProgressBar: true,
    //         });
    //         return;
    //     }
    //     if (comment.content && comment.timestamp && comment.ProfileId && Post.id) {
    //         try {
    //             await axios.post(
    //                 `https://65a096c3600f49256fb0123d.mockapi.io/api/v1/Posts/${Post.id}`,
    //                 {
    //                     ...comment
    //                 }
    //             );
    //             setUpdateComments(true);
    //             } catch (error) {
    //                 toast.error("An error has occurred!", {
    //                     hideProgressBar: true,
    //                 });
    //                 console.log({error});
    //             }
    //     } else {
    //         toast.error("An error has occurred!", {
    //             hideProgressBar: true,
    //         });
    //     };
    //     setcomment({
    //         timestamp: "",
    //         content: "",
    //         ProfileId: ""
    //     })
    // };


    // function deleteComment(id){
    //     fetch(`${API_URL}/${id}`, {
    //     method: 'DELETE'
    //     })
    // };

    // function postNewComment(e){
    //     e.preventDefault();
    //     fetch(API_URL, {
    //     method: 'POST',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify({
    //     content: newContent,
    //     })})
    // };

    // function updateComment(e, CommentObject){
    //     e.preventDefault();
    //     let updatedCommentObject = {
    //     ...CommentObject, 
    //     name: ""
    //     }; 

    //     fetch(`${API_URL}/${CommentObject.id}`, {
    //     method:'PUT',
    //     headers: {"Content-Type": "application/json"},
    //     body: JSON.stringify(updatedCommentObject),
    //     });
    // };
    
    return (
        <div className="comments"> 
            <hr className="hr-comment"/>
            {comments.length > 0 && comments.map((comment, index) => {
                const {
                    id,
                    ProfileId,
                    content,
                    timestamp
                } = comment;
                const profile = profileComp(ProfileId)

                if (index <= limitNum) {
                return(
                <div key={`${Post.id}:${id}`}>
                    <Row className="comment-header">
                        <Col className='no-pad' md="2">
                            <Button href={`./${profile.id}`} className="trans-btn">
                                <img className="profilePicSm" src={profile.avatar || defaultUserPic} alt={`profile${profile.name}`}/>
                            </Button>
                        </Col>
                        <Col className='no-pad' md="5">
                            <p>{profile.username}</p>
                        </Col>
                        <Col className='no-pad' md="3">
                            <span className="timestamp">{TimeStamp(timestamp)}</span>
                        </Col>
                        <Col className='no-pad' md="1">
                            <button className="trans-btn"><img className="post-dots" src={dots} alt="menu dots"/></button>
                        </Col>
                    </Row>
                    <Row>
                        <p className='comment-content'>{content}</p>
                    </Row>
                    <Row>
                        <span>

                        </span>
                    </Row>
                    <br/>
                </div>
                )} else {
                    return (
                        <div></div>
                    )
                }
            })}
            <Row className="post-header new-post-header new-comment">
                <Col md="1">
                    <img className="profilePicSm" src={user.avatar} alt={`profile${user.name}`}/>
                </Col>
                <Col md="9">
                    <Form>
                        <Form.Group controlId="new-post">
                            <Form.Control 
                                className="new-post-input" 
                                type="text" 
                               /*onChange={(e) => setNewContent(e.target.value)}*/
                                placeholder="Comment">
                            </Form.Control>
                        </Form.Group>
                    </Form>
                </Col>
                <Col md="2">
                    <Button 
                        className="new-post-submit-btn trans-btn" 
                        type="submit"
                        /*onClick={(e) => handleSubmit(e)}*/>
                            <img className="new-post-submit-img" src={submit} alt="submit"/>
                    </Button>
                </Col>
            </Row>
        </div>
  );
}

export default Comments;
