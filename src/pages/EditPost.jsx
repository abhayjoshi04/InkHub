import React, {useState, useEffect} from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config";
import { useNavigate, useParams } from "react-router-dom";

function EditPost() {
    const [post, setPost] = useState(null)
    const {documentId} = useParams()
    const navigate = useNavigate();

    useEffect(() => {
        if (documentId) {
            appwriteService.getPost(documentId).then((post) => {
                if (post) {
                    setPost(post)
                }
            }
        )
            
        }else{
            navigate('/all-posts')
        }
    }, [documentId, navigate])
  return post ? (
    <div className='py-8'>
        <Container>
            <PostForm post={post} />
        </Container>
    </div>
  ) : null
}

export default EditPost