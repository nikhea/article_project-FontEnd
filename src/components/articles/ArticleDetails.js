import React, { useState, useEffect} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getOneArticle } from '../actions/article'
import { Link } from 'react-router-dom'
import UpdateForm from './UpdateForm'
import {
    Container, 
    Button,
        Card,CardImg, CardBody,
        CardText, CardTitle,
      } from 'reactstrap'


const ArticleDetail = (props) => {
   
    const dispatch = useDispatch()
    useEffect(() => {
        const id =  props.match.params._id
        dispatch(getOneArticle(id))
    }, [])
 
   
     let articles = useSelector(state => state.article.articles)
    
    // let  title, image, description, author, comments
      const {title, image, description,author,comments, _id} = articles
    // commentss = comments
    // console.log(articles.comments)
    if (articles) {
    console.log(articles.comments)
    }
    return ( 
       
    
        <Container className='mt-5'>
            <Card>
            <Link to='/articlelist' className='mt-3 ml-3'>
            <Button>Go Back</Button>
                </Link>
                <Link to={{
              pathname: `/articlelist/update/${_id}`,
              state:{ articlelist: _id}
            }} >
             <Button>UpdateForm</Button>
            </Link>
                <CardBody>
                    <CardTitle>
                        {title} by {author}
                    </CardTitle>
                    <CardImg className='image-fluid' src={image} alt=' '/>
                    <CardText>{description}</CardText>
                </CardBody>
            </Card>
        
          
        </Container>
     
     );
}
 
export default ArticleDetail;









