import React, { useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getAtricle, deleteAtricle } from '../actions/article'
import {Link} from 'react-router-dom'
import ArticleItem from './ArticleListItem'
import { Button, Container, Jumbotron, Row, } from 'react-bootstrap'


const ArticleList = (props) => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getAtricle())
    },[])

    const handelDelete = (_id) => {
        console.log(_id)
       dispatch(deleteAtricle(_id))
    }
  

    let articles = useSelector(state => state.article.articles)
   

    const article = articles.map(article => (
       
        <ArticleItem
            article={article}
            key={article._id}
            deleteAtricle={() => { handelDelete(article._id) }} 
        />
       
    ))
    const style = {
        background: '#eee',
    
     }
    return ( 
        
            <Container className='mt-5 '>
          <Jumbotron style={style} className='mb-5'>
            <Container>
              <h1>Welcome To fortune article! </h1>
                    <p>View our list of articles from all over the world</p>
                    <Link to='newarticle' >
            <Button className='btn btn-secondary'>ADD New Article</Button>
               </Link>
            </Container>
            </Jumbotron>
            <Row style={articleStyle}>
               {article}
            </Row>
           
         </Container>
       
     );
}
const articleStyle = {
    display: 'flex',
    flexWrap: 'wrap',
    textAling: 'center',
    justifyContent: 'space-between'
 }
export default ArticleList ;


