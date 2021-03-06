import React,{useState} from 'react';
import {useDispatch} from 'react-redux'
import { Button, Form, Container} from 'react-bootstrap';
import{Input, InputGroup} from 'reactstrap'
import {Link} from 'react-router-dom'
import {addArticle} from '../actions/article'

const ArticleForm = (props) => {
  
    const dispatch = useDispatch()

    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [description, setDiscription] = useState('')
    const [image, setImage] = useState('')


  const handleSubmit = (e) => {
    props.history.push('/articlelist')
      e.preventDefault()
           const addArticles = {
            title,
            author,
            description,
            image
        }
    dispatch(addArticle(addArticles), () => {
      props.history.push('/articlelist')
      
      setTitle('')
      setAuthor('')
      setDiscription('')
      setImage('')
        })
       
    }
    // const handleChange = (e) => {
    //     setTitle(e.target.value)
    //     setAuthor(e.target.value)
    //     setDiscription(e.target.description)
    //     setImage(e.target.value)
    //     console.log(e.target.value)
    // }
  const Formstyle = {
    border: '0.5px solid #333',
    margin: '2em',
    padding: '2em'
  }
  return ( 
    <Container>
     
      <Form onSubmit={handleSubmit} style={Formstyle}>
        <Form.Group>
            <Form.Label>title</Form.Label>
          <Form.Control
            name={title}
            id={title}
            onChange={(e) => setTitle(e.target.value)}
            />
        </Form.Group>
       
        <Form.Group>
            <Form.Label>author</Form.Label>
          <Form.Control
            name={author}
            id={author}
            onChange={(e) => setAuthor(e.target.value)}
            />
        </Form.Group>
        <Form.Group>
            <Form.Label>image</Form.Label>
          <Form.Control
            name={image}
            id={image}
            onChange={(e) => setImage(e.target.value)}
            />
        </Form.Group> 
        <Form.Group>
            <Form.Label>description</Form.Label>
          <Input type='textarea'
            name={description}
            id={description}
            onChange={(e) => setDiscription(e.target.value)}
                />
           
        </Form.Group>
        <Button type="submit" className="btn btn-secondary mr-3">Add New Article </Button>
        <Link to='/articlelist'>
        <Button type="submit" className="btn btn-primary">Cancle </Button>
         </Link>
        </Form>
     </Container>
     );
}
 
export default ArticleForm;